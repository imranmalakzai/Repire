import React from 'react'

function Icons({imgURL}) {
  return (
    <div className='bg-white rounded-full p-2'>
      <img src={imgURL} alt='collection' height={35} width={35} />
    </div>
  )
}

export default Icons