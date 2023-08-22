import React from 'react'

const header = () => {
  return (
    <div className='flex m-8 items-center'><ul className='text-2xl font-extrabold p-4'><li>Alto</li></ul><ul className='flex'>
      
      <li>Home</li>
      <li>About</li>
      <li>Style guide</li>
      <li>Author</li>
      <li>Collection</li></ul>
      <ul className='flex'>
      <li></li>
      <li>Sign in</li>
      <button className='bg-[#49a8e4] text-white rounded-3xl m-2 p-2'>Subscribe</button></ul></div>
  )
}

export default header