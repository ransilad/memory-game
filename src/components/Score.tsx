import ExitIcon from '../icons/ExitIcon'
import { useGameStore } from '../store'

const Score = () => {
  const { matches, errors, playAgain } = useGameStore()
  return (
    <div className='w-full rounded-full border border-zinc-800 bg-black/60 backdrop-blur-sm flex flex-row mt-4 px-4 py-2'>
      <div className='flex flex-row gap-4 text-white text-sm items-center'>
        <div className='flex flex-row gap-1 items-center'>
          <div className='size-3 bg-green-500 rounded-full' />
          <span className='px-2'>{matches}</span>
          <strong>Aciertos</strong>
        </div>
        <div className='text-zinc-700 text-lg'>|</div>
        <div className='flex flex-row gap-1 items-center'>
          <div className='size-3 bg-red-500 rounded-full' />
          <span className='px-2'>{errors}</span>
          <strong>Fallos</strong>
        </div>
      </div>
      <button
        className='text-zinc-300 inline-flex items-center gap-2 ml-auto hover:text-white transition-all'
        onClick={() => playAgain(true)}
      >
        <ExitIcon />
        Salir
      </button>
    </div>
  )
}

export default Score
