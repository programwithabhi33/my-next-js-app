import React from 'react'

const Dummy = () => {
  return (
    <>
    {/* The global flag in the jsx represent that where this component imported the style will apply that elements that uses this classes,by default without global flag only this component will user this classes for the style*/}
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