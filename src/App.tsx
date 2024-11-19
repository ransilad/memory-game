import GameBoard from './components/GameBoard'
import StartScreen from './components/StartScreen'
import VictoryScreen from './components/VictoryScreen'
import { useGameStore } from './store'

function App() {
  const { gameStarted, matches, cards } = useGameStore()
  return (
    <>
      {!gameStarted && <StartScreen />}
      {gameStarted && <GameBoard />}
      {matches!== 0 && matches === (cards.length / 2) && <VictoryScreen />}
    </>
  )
}

export default App
