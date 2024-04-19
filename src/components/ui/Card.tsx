interface Props {
  children: React.ReactNode
}

export function Card({children} : Props ) {

  return (
    <div className="bg-white shadow-md rounded-md px-8 pt-6 mb-4 pb-4">
      {children}
    </div>
  )
}