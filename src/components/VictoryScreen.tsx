import { useEffect } from 'react'
import { useGameStore } from '../store'
import confetti from 'canvas-confetti'

const VictoryScreen = () => {
  const { playerName, matches, errors, playAgain } = useGameStore()

  useEffect(() => {
    confetti()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center px-4 absolute inset-0 bg-zinc-950/80 backdrop-blur-md z-10">
      <h3 className='text-center text-4xl text-zinc-200 mb-10'>¡Felicidades!</h3>
      <p className='text-center text-zinc-300 mb-2 font-light md:px-6 text-xl text-pretty'>
        <strong className='font-bold text-white'>{playerName}</strong> haz ganado la partida con
      </p>
      <p className='text-center text-zinc-300 mb-4 font-light md:px-6 text-xl'>
        <span className='border-b-4 border-green-500'>{matches} aciertos</span>
        <span className='px-2'>vs</span>
        <span className='border-b-4 border-red-500'>{errors} fallos</span>.
      </p>
      <div className='inline-flex gap-2 mt-3'>
        <button
          className='w-fit px-4 py-2 mt-3 text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-900 outline-none disabled:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all'
          onClick={() => playAgain(false)}
        >
          Jugar de nuevo
        </button>
        <button
          className='w-fit px-4 py-2 mt-3 text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-900 outline-none disabled:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all'
          onClick={() => playAgain(true)}
        >
          Salir
        </button>
      </div>
    </div>
  )
}

export default VictoryScreen
