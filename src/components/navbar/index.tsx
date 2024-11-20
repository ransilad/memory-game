import ExitIcon from '@icons/ExitIcon'
import { useGameStore } from '@store'

import './navbar.css'

const Navbar = () => {
  const { matches, errors, playAgain } = useGameStore()
  return (
    <div className='navbar'>
      <div className='navbar__stats'>
        <div className='navbar__stat'>
          <div className='navbar__stat-icon navbar__stat-icon--success' />
          <span className='navbar__stat-value'>{matches}</span>
          <strong className='navbar__stat-label'>Aciertos</strong>
        </div>
        <div className='navbar__separator'>|</div>
        <div className='navbar__stat'>
          <div className='navbar__stat-icon navbar__stat-icon--error' />
          <span className='navbar__stat-value'>{errors}</span>
          <strong className='navbar__stat-label'>Fallos</strong>
        </div>
      </div>
      <button
        className='navbar__exit-button'
        onClick={() => playAgain(true)}
      >
        <ExitIcon />
        Salir
      </button>
    </div>
  )
}

export default Navbar
