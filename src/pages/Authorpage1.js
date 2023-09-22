import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Author1 from '../images/Author1.jpeg'
import Author2 from '../images/Author2.jpeg'
import Author3 from '../images/Author3.jpeg'
import Author4 from '../images/Author4.jpeg'
import Author5 from '../images/Author5.jpeg'
import Kelly from '../images/kelly.jpg'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'gatsby'



const Authorpage1 = () => {
  return (
    <div >
        <Header/>
    <div className='my-20 px-[16%] space-y-6'>
        <div><img src={Kelly} alt='no image found' className='rounded-[100px] h-16'/></div>
        <a href="https://alto.ghost.io/author/kelly/"> <div className='text-3xl font-extrabold' > Kelly Brown</div></a>
        <div className='font-light pr-96'>Malesuada fames ac turpis egestas sed tempus urna et pharetra. Egestas maecenas pharetra convallis posuere morbi leo urna molestie at.
</div>
<div><a href="https://alto.ghost.io/author/kelly/"><img src={Author1} alt='no image found'/></a></div>


<div className='px-[10%] space-y-6'>
    <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>STARTUP</a></div>
    <a href='https://alto.ghost.io/building-market-model/'><div className='text-3xl font-extrabold mr-20 mt-4'>Building a Market Model for Your Startup’s Product</div></a>
    <div className='font-light'>Nunc scelerisque viverra mauris in aliquam sem fringilla. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Facilisi morbi tempus iaculis urna id volutpat.
</div>

    </div>
    <div className='py-20 '><a href='https://alto.ghost.io/office-interior-inspirations/'><img src= {Author2} className='h-[500px] w-[1000px]' alt='no image found'/></a></div>
    <div className='px-[10%] space-y-6'>
        <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 2 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>STARTUP</a></div>
        <a href='https://alto.ghost.io/secrets-behind-successful-team/'><div className='text-4xl font-extrabold'>Office Interior Inspirations</div></a>
        <div className='font-light'>Enim ut sem viverra aliquet eget. Est sit amet facilisis magna. Hendrerit dolor magna eget est lorem ipsum dolor. Aliquet lectus proin nibh nisl condimentum. Sem integer vitae justo eget magna. Purus non enim praesent elementum facilisis leo vel fringilla.</div>
    </div>
    <div className='pt-20 '><a href='https://alto.ghost.io/secrets-behind-successful-team/'><img src={Author3} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>
    <div className='px-[10%] space-y-6'>
    <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>STARTUP</a></div>
    <a href='https://alto.ghost.io/secrets-behind-successful-team/'><div className='text-4xl font-extrabold'>The Secrets Behind a Successful Team</div></a>
    <div className='font-light'>Pulvinar pellentesque habitant morbi tristique senectus. Purus faucibus ornare suspendisse sed nisi lacus. Lacus viverra vitae congue eu consequat. Morbi tristique senectus et netus et malesuada fames ac. Morbi leo urna molestie at elementum.
</div>

    </div>
    <div className='pt-20 '><a href='https://alto.ghost.io/secrets-behind-successful-team/'><img src={Author4} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>

    <div className='px-[10%] space-y-6'>
    <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>STARTUP</a></div>
   <a href='https://alto.ghost.io/company-starts-growing/'> <div className='text-4xl font-extrabold'>When Your Company Starts Growing...</div></a>
    <div className='font-light'>Ornare aenean euismod elementum nisi quis eleifend quam. Urna duis convallis convallis tellus id. Sit amet luctus venenatis lectus magna fringilla urna. Neque vitae tempus quam pellentesque nec nam aliquam. Volutpat diam ut venenatis tellus in.
</div>
    </div>
    <div className='pt-20 '><a href='https://alto.ghost.io/company-starts-growing/'><img src={Author5} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>

    <div className='px-[10%] space-y-6'>
    <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>STARTUP</a></div>
    <a href='https://alto.ghost.io/is-san-francisco-mandatory/'><div className='text-4xl font-extrabold'>Is San Francisco Mandatory for Your Next Big Idea?</div></a>
    <div  className='font-light'>Metus dictum at tempor commodo. Sed nisi lacus sed viverra tellus in. Scelerisque fermentum dui faucibus in ornare quam viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada. Tortor at risus viverra adipiscing.</div>
    </div>

    
    </div>
   <div className='flex'> 
    <div className='rounded-[80px] border-[1px] text-center w-24 h-8 text-sm pt-1 ml-[47%]  mb-20 text-gray-400'>page 1 of 2</div>
    <div className='flex items-center font-bold ml-[30%] mt-[-100px]'>
       <Link className='cursor-pointer' to='/Authorpage2'> Next</Link> <AiOutlineArrowRight/>
        </div>
        </div>
        <Footer/>
   
    </div>
  )
}

export default Authorpage1