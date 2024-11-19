import { useGameStore } from './store';

function App() {
  const { playerName, setPlayerName } = useGameStore();
  return (
    <div>
      <p className='text-2xl'>{playerName}</p>
      <input type="text" value={playerName} onChange={(e) => setPlayerName(e.target.value)} />
    </div>
  )
}

export default App
