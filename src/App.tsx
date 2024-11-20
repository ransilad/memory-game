import VictoryScreen from '@components/victoryScreen'
import StartScreen from '@components/startScreen'
import GameBoard from '@components/gameBoard'
import { useGameStore } from '@store'

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
