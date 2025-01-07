import React from 'react'
const Button = ({name}) => {
  return (
    <div className='py-2 rounded-lg px-9 max-sm:px-4 bg-indigo-500 inline-flex hover:scale-110 cursor-pointer transition-all active:scale-95'>{name}</div>
  )
}

export default Button