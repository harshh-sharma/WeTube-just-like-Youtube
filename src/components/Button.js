import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='px-5 py-1 font-semibold font-lg bg-gray-100 shadow-xl rounded-md'>{name}</button>
    </div>
  )
}

export default Button