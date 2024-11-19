import { FC, useEffect } from 'react'

import { useGameStore } from '../store'
import Score from './Score'
import { Card } from './Card'
import { ICard } from '../interfaces/ICard'

const GameBoard: FC = () => {
  const { cards, loadCards, setIsFlipped, playAgain, isLoading } = useGameStore()

  useEffect(() => {
    loadCards()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='w-full max-w-5xl flex flex-col items-center mx-auto px-4'>
      <Score />

      {(cards.length > 0) && (
        <>
          <div className="flex flex-wrap justify-center gap-2 mt-6 mb-6">
            {cards.map((card: ICard, index: number) => (
              <Card
                key={index}
                image={card.url}
                isFlipped={card.isFlipped || card.isFound}
                onClick={() => setIsFlipped(index)}
              />
            ))}
          </div>

          <button
            className='ml-auto w-fit px-4 py-2 mt-3 text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-900 outline-none disabled:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all'
            onClick={playAgain}
            disabled={isLoading}
          >Jugar de nuevo</button>
        </>
      )}
    </div>
  )
}

export default GameBoard
