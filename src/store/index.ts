import { ICard } from '@interfaces/ICard'
import { create } from 'zustand'

interface GameStore {
  playerName: string
  setPlayerName: (name: string) => void
  gameStarted: boolean
  setGameStarted: (started: boolean) => void
  matches: number
  errors: number
  cards: ICard[]
  isMatching: boolean
  isLoading: boolean
  hasError: boolean
  setIsFlipped: (indexToChange: number) => void
  loadCards: () => void
  playAgain: (resetPlayerName?: boolean) => void
}

const initialState = {
  playerName: localStorage.getItem('playerName') || '',
  gameStarted: !!localStorage.getItem('playerName'),
  matches: 0,
  errors: 0,
  cards: [],
  isMatching: false,
  isLoading: false,
  hasError: false
}

const shuffledCards = (cards: ICard[]) => cards.sort(() => Math.random() - 0.5)

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,
  setPlayerName: (name: string) => set({ playerName: name }),
  setGameStarted: (started: boolean) => set({ gameStarted: started }),
  setIsFlipped: (indexToChange: number) => set((state: GameStore) => {
    const { cards, isMatching } = state

    if (cards[indexToChange].isFlipped || cards[indexToChange].isFound || isMatching) {
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
            isMatching: false,
          }))
        }, 1000)
        payload.isMatching = true
        payload.errors = state.errors + 1
      }
    }

    return payload
  }),
  loadCards: () => set((state: GameStore) => {
    const { cards } = state

    if (cards.length > 0) {
      return {
        cards: shuffledCards(cards),
      }
    }
    
    fetch(import.meta.env.VITE_IMAGES_URL)
      .then((res) => res.json())
      .then((images) => {
        const duplicated = [...images, ...images]
        const shuffled = shuffledCards(duplicated)
        set({ cards: shuffled, isLoading: false })
      })
      .catch(() => {
        set({ isLoading: false, hasError: true })
      })

    return { isLoading: true }
  }),
  playAgain: (resetPlayerName: boolean = false) => set((state: GameStore) => {
    const { cards } = state

    if (resetPlayerName) {
      localStorage.removeItem('playerName')
    }
    return {
      ...initialState,
      playerName: resetPlayerName ? '' : localStorage.getItem('playerName') || '',
      gameStarted: !resetPlayerName,
      cards: cards
        .map((card) => ({ ...card, isFlipped: false, isFound: false }))
        .sort(() => Math.random() - 0.5),
    }
  })
}))
