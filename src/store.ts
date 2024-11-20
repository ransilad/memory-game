import { create } from 'zustand'
import { ICard } from './interfaces/ICard'

interface GameStore {
  playerName: string
  setPlayerName: (name: string) => void
  gameStarted: boolean
  setGameStarted: (started: boolean) => void
  matches: number
  errors: number
  cards: ICard[]
  setIsFlipped: (indexToChange: number) => void
  loadCards: () => void
  isLoading: boolean
  playAgain: () => void
}

const initialState = {
  playerName: localStorage.getItem('playerName') || '',
  gameStarted: !!localStorage.getItem('playerName'),
  matches: 0,
  errors: 0,
  cards: [],
  isLoading: false,
}

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,
  setPlayerName: (name: string) => set({ playerName: name }),
  setGameStarted: (started: boolean) => set({ gameStarted: started }),
  setIsFlipped: (indexToChange: number) => set((state: GameStore) => {
    const { cards, isLoading } = state

    if (cards[indexToChange].isFlipped || cards[indexToChange].isFound || isLoading) {
      return {}
    }

    const updatedCards = cards.map((card, index) =>
      index === indexToChange ? { ...card, isFlipped: !card.isFlipped } : card
    )
    const flippedCards = updatedCards.filter((card) => card.isFlipped)
    const payload: Partial<GameStore> = { cards: updatedCards }

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      if (first.uuid === second.uuid) {
        payload.cards = updatedCards.map((card) =>
          card.uuid === first.uuid ? { ...card, isFound: true, isFlipped: false } : card
        )
        payload.matches = state.matches + 1
      } else {
        setTimeout(() => {
          set((state) => ({
            cards: state.cards.map((card) => ({ ...card, isFlipped: false })),
            isLoading: false,
          }))
        }, 1000)
        payload.isLoading = true
        payload.errors = state.errors + 1
      }
    }

    return payload
  }),
  loadCards: async () => {
    const res = await fetch(import.meta.env.VITE_IMAGES_URL)
    const images = await res.json()
    const duplicated = [...structuredClone(images), ...structuredClone(images)]
    const shuffled = duplicated.sort(() => Math.random() - 0.5)
    set({ cards: shuffled })
  },
  playAgain: () => set(() => {
    localStorage.removeItem('playerName')
    return { ...initialState, playerName: '', gameStarted: false }
  })
}))
