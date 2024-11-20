import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../../App'

describe('StartScreen Component', () => {
  it('Should render the start screen correctly', () => {
    render(<App />)

    const input = screen.getByPlaceholderText('Ingrese su nombre')
    const button = screen.getByText('Jugar')

    expect(input).toBeInTheDocument()
    expect(button).toBeDisabled()
  })

  it('Should change disabled state when input is filled', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByPlaceholderText('Ingrese su nombre')
    const button = screen.getByText('Jugar')

    // Simula escribir en el input
    await act(async () => {
      await user.type(input, 'Juan')
    })

    expect(input).toHaveValue('Juan')
    expect(button).toBeEnabled()
  })
})
