import { useEffect } from 'react'
import confetti from 'canvas-confetti'

import Button from '@components/shared/Button'
import { useGameStore } from '@store'

import './victory-screen.css'

const VictoryScreen = () => {
  const { playerName, matches, errors, playAgain } = useGameStore()

  useEffect(() => {
    confetti()
  }, [])

  return (
    <div className="victory-screen">
      <h3 className='victory-screen__title'>¡Felicidades!</h3>
      <p className='victory-screen__message'>
        <strong className='victory-screen__player-name'>{playerName}</strong> haz ganado la partida con
      </p>
      <p className='victory-screen__score'>
        <span className='victory-screen__score-item victory-screen__score-item--matches'>{matches} aciertos</span>
        <span className='victory-screen__vs'>vs</span>
        <span className='victory-screen__score-item victory-screen__score-item--errors'>{errors} fallos</span>.
      </p>
      <div className='victory-screen__buttons'>
        <Button onClick={() => playAgain(false)}>Jugar de nuevo</Button>
        <Button onClick={() => playAgain(true)}>Salir</Button>
      </div>
    </div>
  )
}

export default VictoryScreen
