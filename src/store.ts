import { create } from 'zustand'

interface GameStore {
  playerName: string
  setPlayerName: (name: string) => void
}

export const useGameStore = create<GameStore>((set) => ({
  playerName: '',
  setPlayerName: (name: string) => set({ playerName: name }),
}))
