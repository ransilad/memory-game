import { useGameStore } from '../store'

const VictoryScreen = () => {
  const { playerName, matches, errors, playAgain } = useGameStore()

  return (
    <div className="flex flex-col items-center justify-center px-4 absolute inset-0 bg-zinc-950/80 backdrop-blur-sm z-10">
      <h3 className='text-center text-4xl text-zinc-200 mb-10'>¡Felicidades!</h3>
      <p className='text-center text-zinc-400 mb-4 font-light md:px-6'>
        <strong className='font-bold text-white'>{playerName}</strong> ha ganado la partida con <br />
        {matches} aciertos y {errors} fallos.
      </p>
      <button
        className='w-fit px-4 py-2 mt-3 text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-900 outline-none disabled:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all'
        onClick={playAgain}
      >
        Jugar de nuevo
      </button>
    </div>
  )
}

export default VictoryScreen
