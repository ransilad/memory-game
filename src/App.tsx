import GameBoard from './components/GameBoard'
import StartScreen from './components/StartScreen'
import VictoryScreen from './components/VictoryScreen'
import { useGameStore } from './store'

function App() {
  const { gameStarted, cards, matches } = useGameStore()
  return (
    <>
      {gameStarted ? <GameBoard /> : <StartScreen />}
      {matches!== 0 && matches === (cards.length / 2) && <VictoryScreen />}
    </>
  )
}

export default App
