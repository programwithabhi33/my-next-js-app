import React from 'react'

const Dummy = () => {
  return (
    <>
    <style jsx global>
    {`
    .dummy{
        background:green;
    }
    `}
    </style>
    <div className='dummy'>Im Dummy</div>
    </>
  )
}

export default Dummy