import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import App from '../../App'

describe('StartScreen Component', () => {
  it('Should render the start screen correctly', async () => {
    const user = userEvent.setup()
    render(<App />)

    const input = screen.getByPlaceholderText('Ingrese su nombre')
    const button = screen.getByText('Jugar')

    // Simula escribir en el input
    await act(async () => {
      await user.type(input, 'Juan')
      await user.click(button)
    })

    // Verificar que luego de hacer click en el botón jugar, se muestra el navbar en la pantalla
    expect(screen.getByRole('navbar')).toBeInTheDocument()
  })

  it('Should render the input screen when clicking on the exit button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const exitButton = screen.getByRole('button', { name: 'Salir' })

    // Simula hacer click en el botón de salir
    await act(async () => {
      await user.click(exitButton)
    })

    const input = screen.getByPlaceholderText('Ingrese su nombre')

    // Verificar que luego de hacer click en el botón de salir, se muestra el input de ingresar el nombre y esté vacío
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
  })
})
