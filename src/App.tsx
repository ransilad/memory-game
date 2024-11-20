import GameBoard from './components/GameBoard'
import StartScreen from './components/StartScreen'
import VictoryScreen from './components/VictoryScreen'
import { useGameStore } from './store'

function App() {
  const { gameStarted, cards } = useGameStore()
  return (
    <>
      {gameStarted ? <GameBoard /> : <StartScreen />}
      {cards.every((card) => card.isFound) && <VictoryScreen />}
    </>
  )
}

export default App
