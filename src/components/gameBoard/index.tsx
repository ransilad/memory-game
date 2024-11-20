import { FC, useEffect } from 'react'

import { ICard } from '@interfaces/ICard'
import LoaderIcon from '@icons/LoaderIcon'
import Navbar from '@components/navbar'
import { useGameStore } from '@store'
import { Card } from './Card'

import './game-board.css'

const GameBoard: FC = () => {
  const { cards, loadCards, setIsFlipped, isLoading, hasError } = useGameStore()

  useEffect(() => {
    loadCards()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='game-board' data-testid='game-board'>
      <Navbar />

      {isLoading && (
        <div className='game-board__loading'>
          <LoaderIcon className='game-board__loading-icon' />
          <p className='game-board__loading-text'>Descargando imágenes para empezar la partida...</p>
        </div>
      )}

      {hasError && (
        <div className='game-board__error'>
          <p>Ha ocurrido un error inesperado obteniendo las imágenes, por favor, inténtelo más tarde.</p>
        </div>
      )}

      {(cards.length > 0) && (
        <div className='game-board__cards'>
          {cards.map((card: ICard, index: number) => (
            <Card
              key={index}
              image={card.url}
              isFlipped={card.isFlipped || card.isFound}
              onClick={() => setIsFlipped(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default GameBoard
