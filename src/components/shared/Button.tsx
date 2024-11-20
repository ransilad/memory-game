interface ButtonProps {
  isDisabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  customWidth?: string
}

const Button = ({ isDisabled, children, onClick, customWidth = 'w-fit' }: ButtonProps) => {
  return (
    <button
      className={customWidth + ' px-4 py-2 mt-3 text-zinc-200 bg-zinc-800 rounded-lg border border-zinc-700 hover:bg-zinc-900 outline-none disabled:bg-zinc-700 disabled:opacity-20 disabled:cursor-not-allowed transition-all'}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
