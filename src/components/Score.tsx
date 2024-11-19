import { useGameStore } from '../store'

const Score = () => {
  const { matches, errors } = useGameStore()
  return (
    <div className='w-full rounded-full border border-zinc-800 flex flex-row mt-4'>
      <div className='bg-green-700 rounded-l-full py-4 px-6 md:px-8 flex-1 flex flex-row items-center justify-between'>
        <h2 className='md:text-lg'>Aciertos</h2>
        <span className='font-bold text-2xl'>{matches}</span>
      </div>
      <div className='bg-red-700 rounded-r-full py-4 px-6 md:px-8 flex-1 flex flex-row items-center justify-between'>
        <span className='font-bold text-2xl'>{errors}</span>
        <h2 className='md:text-lg'>Fallos</h2>
      </div>
    </div>
  )
}

export default Score
