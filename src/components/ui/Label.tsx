interface Props {
  children: React.ReactNode;
}

export function Label({ children }: Props) {
  return (
    <label className="text-md block mb-2 font-semibold">{children}</label>
  )
}
