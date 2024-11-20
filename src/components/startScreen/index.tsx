import { FC } from 'react'

import { useGameStore } from '../../store'
import './start-screen.css'
import Input from '../shared/Input'
import Button from '../shared/Button'

const StartScreen: FC = () => {
  const { playerName, setPlayerName, setGameStarted } = useGameStore()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('playerName', playerName)
    setGameStarted(true)
  }

  return (
    <div className='start-screen'>
      <section className='start-screen__form-container'>
        <form className='start-screen__form' onSubmit={handleSubmit}>
          <h1 className='start-screen__title'>Ingrese su nombre</h1>
          <p className='start-screen__description'>
            ¡Hola! ¿Desea jugar memoria? Para ello, debe ingresar su nombre y luego hacer clic en el botón de "Jugar".
          </p>
          <Input
            placeHolder='Ingrese su nombre'
            value={playerName}
            setValue={setPlayerName}
          />
          <Button isDisabled={!playerName} customWidth='w-full'>
            Jugar
          </Button>
        </form>
      </section>
    </div>
  )
}

export default StartScreen
