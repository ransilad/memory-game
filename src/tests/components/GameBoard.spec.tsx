import { act, render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../../App'
import { useGameStore } from '@store'

describe('GameBoard Component', () => {
  it('Should display GameBoard', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByPlaceholderText('Ingrese su nombre')
    const button = screen.getByText('Jugar')

    // Simula escribir en el input
    await act(async () => {
      await user.type(input, 'Juan')
      await user.click(button)
    })

    // Verifica que el elemento con data-testid="victory-screen" no esté presente
    expect(screen.queryByTestId('game-board')).toBeInTheDocument()
  })

  it('Should cards be loaded correctly', async () => {
    render(<App />)

    // Llamar a la función loadCards
    const { result } = renderHook(() => useGameStore())

    // Esperar que los cards se carguen correctamente
    await waitFor(() => expect(result.current.cards.length).toBeGreaterThan(1))
  })
})
