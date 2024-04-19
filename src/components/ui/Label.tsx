interface Props {
  children: React.ReactNode;
}

export function Label({ children }: Props) {
  return <label className="block text-sm text-slate-700 mb-2 font-bold">{children}</label>;
}
