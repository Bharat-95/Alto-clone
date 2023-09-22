import React, { useState } from 'react'
import {IoIosArrowForward}  from 'react-icons/io' 
import Header from '../components/header'
import Image from '../images/Image1.jpg'
import Gif from '../images/Image2.gif'
import Image1 from '../images/Image3.jpg'
import Footer from '../components/footer'

const About = () => {
  const[isOpen, SetisOpen] = useState(false);
  
  return (
    <div className=''>   
    <Header/>            
    <div className='px-[25%]'>                                                   
        <div className='text-4xl font-bold text-center py-10 '>About this theme</div>
        <div className='font-light text-[18px] pb-10 text-justify'>Alto is a clean, minimalist blog theme featuring light and dark mode. Launch your online publications with flair. In addition to being fully responsive and styled, it comes with a few optional bells and whistles that are explained below.</div>
        <div className='text-[27px] font-bold pb-4'>Post carousel</div>
        <div className='font-light text-[18px] pb-10 text-justify'>When you have featured posts, the posts will automatically be displayed in carousel on the homepage. To feature a post, navigate to the post setting, and check "Feature this post". Read more about featured posts <a className='cursor-pointer text-[#49a8e4] underline'>here</a>.</div>
        <img src={Image} className='pb-10'/>
        <div className='text-[27px] font-bold pb-4'>White logo</div>
        <div className='font-light text-[17px] pb-10 text-justify'>When the theme is in dark mode, a white version of the logo will be needed when an image is used as the logo depending on the image. The white logo can be selected in  <div className='flex px-2 text-blue-400 bg-[#f3f4f6] h-6  font-light w-[63%] '> Settings<IoIosArrowForward className='mt-1 '/> Design <IoIosArrowForward className='mt-1 '/> Site-wide <IoIosArrowForward className='mt-1 '/> White logo for dark mode </div> </div>
        <img src={Gif} className='pb-10'/>
        <div className='text-[27px] font-bold pb-4'>Related posts</div>
        <div className='font-light text-[17px] pb-10 text-justify'>If there's a post with the same tag as the current post, it will be displayed as a related post on bottom of the content. Read more about tags <a className='cursor-pointer text-[#49a8e4] underline'>here.</a></div>
        <img src={Image1} className='pb-10'/>
        </div>
        <Footer/>
    </div>
  )
}

export default About