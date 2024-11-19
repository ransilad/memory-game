import { FC } from 'react'
import Score from './Score'

const GameBoard: FC = () => {
  return (
    <div className='w-full max-w-3xl flex flex-col items-center mx-auto px-4'>
      <Score />
    </div>
  )
}

export default GameBoard
