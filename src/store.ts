import { create } from 'zustand'
import { ICard } from './interfaces/ICard'

interface GameStore {
  playerName: string
  setPlayerName: (name: string) => void
  gameStarted: boolean
  setGameStarted: (started: boolean) => void
  matches: number
  setMatches: (matches: number) => void
  errors: number
  setErrors: (errors: number) => void
  cards: ICard[]
  setIsFlipped: (indexToChange: number) => void
  loadCards: () => void
  isLoading: boolean
  playAgain: () => void
}

export const useGameStore = create<GameStore>((set) => {
  const currentPlayerName = localStorage.getItem('playerName') || ''
  return ({
    playerName: currentPlayerName,
    setPlayerName: (name: string) => set({ playerName: name }),
    gameStarted: !!currentPlayerName,
    setGameStarted: (started: boolean) => set({ gameStarted: started }),
    matches: 0,
    setMatches: (matches: number) => set({ matches: matches }),
    errors: 0,
    setErrors: (errors: number) => set({ errors: errors }),
    cards: [],
    isLoading: false,
    setIsFlipped: (indexToChange: number) => set((state: GameStore) => {
      let { cards } = state

      if (cards[indexToChange].isFlipped || cards[indexToChange].isFound || state.isLoading) {
        return {}
      }

      cards[indexToChange].isFlipped = !cards[indexToChange].isFlipped
      const cardsFlipped = cards.filter((card) => card.isFlipped).map((card) => card.uuid)
 
      const payloadToSet: Partial<GameStore> = {}
      if (cardsFlipped.length === 2) {
        if (cardsFlipped[0] === cardsFlipped[1]) {
          cards = cards.map((card) => ({
            ...card,
            isFound: card.uuid === cardsFlipped[0] ? true : card.isFound,
            isFlipped: false
          }))
          payloadToSet['matches'] = state.matches + 1
        } else {
          setTimeout(() => {
            cards = cards.map((card) => ({
              ...card,
              isFlipped: false
            }))
            set({ cards, isLoading: false })
          }, 2000)
          payloadToSet['errors'] = state.errors + 1
          payloadToSet['isLoading'] = true
        }
      }
      payloadToSet['cards'] = cards

      return payloadToSet
    }),
    loadCards: async () => {
      const res = await fetch('https://challenge-uno.vercel.app/api/images')
      const images = await res.json()
      const duplicated = [...structuredClone(images), ...structuredClone(images)]
      const shuffled = duplicated.sort(() => Math.random() - 0.5)
      set({ cards: shuffled })
    },
    playAgain: () => set(() => {
      localStorage.removeItem('playerName')
      return {
        playerName: '',
        gameStarted: false,
        matches: 0,
        errors: 0,
        cards: [],
        isLoading: false
      }
    })
  })
})
