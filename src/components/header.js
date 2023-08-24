import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai'

const header = () => {
  return (
    <div className='flex m-8 items-center'>
      <ul className='text-2xl font-extrabold p-4'>
        <li className='pr-6'>Alto</li>
      </ul>
      <ul className='flex space-x-6 font-semibold'>
        <li>Home</li>
        <li>About</li>
        <li>Style guide</li>
        <li>Author</li>
        <li>Collection</li>
      </ul>
      <ul className='flex ml-[45%] items-center space-x-6'>
        <li><AiOutlineSearch size={22}/></li>
        <li className='font-semibold'>Sign in</li>
        <button className='bg-[#49a8e4] text-white rounded-3xl m-2 px-4 py-2'>Subscribe</button>
      </ul>
    </div>
  );
}

export default header;
