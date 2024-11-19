import GameBoard from './components/GameBoard'
import StartScreen from './components/StartScreen'
import { useGameStore } from './store'

function App() {
  const { gameStarted } = useGameStore()
  return (
    <>
      {!gameStarted && <StartScreen />}
      {gameStarted && <GameBoard />}
    </>
  )
}

export default App
