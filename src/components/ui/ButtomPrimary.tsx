import React from 'react'

export default function ButtomPrimary({children, funcClick}: {children: React.ReactNode, funcClick?: () => void}) {
  return (
    <button className="bg-primary text-white py-1 px-5 rounded-lg hover:bg-primary-active transition-all" onClick={funcClick}>
      { children }
    </button>
  )
}
