
export default function ErrorMessage({children}: {children: React.ReactNode}) {
  return (
    <div className='w-full bg-red text-white text-center p-3'>
        {children}
    </div>
  )
}
