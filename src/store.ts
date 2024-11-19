import { create } from 'zustand'

interface GameStore {
  playerName: string
  setPlayerName: (name: string) => void
  gameStarted: boolean
  setGameStarted: (started: boolean) => void
  matches: number
  setMatches: (matches: number) => void
  errors: number
  setErrors: (errors: number) => void
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
  })
})
