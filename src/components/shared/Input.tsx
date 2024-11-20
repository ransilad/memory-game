interface InputProps {
  value: string
  setValue: (value: string) => void
  placeHolder: string
}

const Input = ({ value, setValue, placeHolder }: InputProps) => {
  return (
    <input
      className='w-full px-4 py-2 text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700 outline-none placeholder:font-light placeholder:text-zinc-500'
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeHolder}
    />
  )
}

export default Input
