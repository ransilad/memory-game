import { FC, useEffect } from 'react'

import { useGameStore } from '../store'
import Score from './Score'
import { Card } from './Card'
import { ICard } from '../interfaces/ICard'

const GameBoard: FC = () => {
  const { cards, loadCards, setIsFlipped } = useGameStore()

  useEffect(() => {
    loadCards()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='w-full max-w-5xl flex flex-col items-center mx-auto px-4'>
      <Score />

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
