import React from 'react'
import Kelly from '../images/kelly.jpg'
import Author6 from '../images/Author6.jpeg'
import Header from '../components/header'
import { Link } from 'gatsby'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import Footer from '../components/footer'

const Authorpage2 = () => {
  return (
    <div>
      <Header/>
        <div className='my-20 px-[16%] space-y-6'>
        <div><img src={Kelly} alt='no image found' className='rounded-[100px] h-16 mb-4'/></div>
        <a href="https://alto.ghost.io/author/kelly/"> <div className='text-3xl font-extrabold' > Kelly Brown</div></a>
        <div className='font-light pr-96'>Malesuada fames ac turpis egestas sed tempus urna et pharetra. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
</div>

<div><a href="https://alto.ghost.io/author/kelly/"><img src={Author6} alt='no image found' className='h-[500px] w-[1000px] mt-20'/></a></div>
    </div>

    <div className='my-20 px-[16%] space-y-6'>
    <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>STARTUP</a></div>
    <a href='https://alto.ghost.io/building-market-model/'><div className='text-3xl font-extrabold mr-20 mt-4 pr-64'>Is San Francisco Mandatory for Your Next Big Idea?</div></a>
    <div className='font-light pr-64'>Metus dictum at tempor commodo. Sed nisi lacus sed viverra tellus in. Scelerisque fermentum dui faucibus in ornare quam viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tortor at risus viverra adipiscing.
</div>

   </div>
   <div><div className='flex'> 
    <div className='rounded-[80px] border-[1px] text-center w-24 h-8 text-sm pt-1 ml-[47%]  mb-20 text-gray-400'>page 1 of 2</div>
    <div className='flex items-center font-bold ml-[-40%] mt-[-100px]'>
    <AiOutlineArrowLeft/>
       <Link className='cursor-pointer ml-2' to='/Authorpage1'> Previous</Link> 
        </div>
        </div>
        <Footer/>
   
    </div>
    </div>
  )
}

export default Authorpage2