interface Props {
  children: React.ReactNode;
}

export function Card({ children }: Props) {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </div>
  );
}
