import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../../App'

describe('VictoryScreen Component', () => {
  it('Should not display VictoryScreen', async () => {
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
    expect(screen.queryByTestId('victory-screen')).not.toBeInTheDocument()
  })
})
