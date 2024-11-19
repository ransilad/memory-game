import { useGameStore } from './store';

function App() {
  const { playerName, setPlayerName } = useGameStore();

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center'>
      <section className='w-full max-w-lg p-6 bg-zinc-900 rounded-xl shadow-2xl border border-zinc-800'>
        <h1 className='text-center text-2xl text-zinc-200 mb-10'>Ingrese su nombre</h1>
        <p className='text-center text-zinc-400 mb-4 font-light text-sm px-6'>
          ¡Hola! ¿Desea jugar memoria? Para ello, debe ingrese su nombre y luego hacer clic en el botón de "Jugar".
        </p>
        <input
          className='w-full px-4 py-2 text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700 outline-none placeholder:font-light placeholder:text-zinc-500'
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          placeholder='Ingrese su nombre'
        />
        <button
          className='w-full px-4 py-2 mt-3 text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-900 outline-none disabled:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all'
          disabled={!playerName}
        >
          Jugar
        </button>
      </section>
    </div>
  )
}

export default App
