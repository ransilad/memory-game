import { FC, useEffect } from 'react'

import { useGameStore } from '../store'
import Score from './Score'
import { Card } from './Card'
import { ICard } from '../interfaces/ICard'
import LoaderIcon from '../icons/LoaderIcon'

const GameBoard: FC = () => {
  const { cards, loadCards, setIsFlipped, isLoading, hasError } = useGameStore()

  useEffect(() => {
    loadCards()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='w-full max-w-5xl flex flex-col items-center mx-auto px-4'>
      <Score />

      {isLoading && (
        <div className='flex flex-col gap-2 items-center justify-center'>
          <LoaderIcon className='text-white size-10 mt-10' />
          <p className='text-zinc-200 font-light'>Descargando imágenes para empezar la partida...</p>
        </div>
      )}

      {hasError && (
        <div className='bg-red-900/40 text-white font-light p-4 rounded-md mt-10'>
          <p>Ha ocurrido un error inesperado obteniendo las imágenes, por favor, inténtelo más tarde.</p>
        </div>
      )}

      {(cards.length > 0) && (
        <div className="grid grid-cols-5 sm:grid-cols-8 justify-center gap-2 mt-6 mb-6 w-full">
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
