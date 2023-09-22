import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Career from'../images/Career.jpeg'
import Collection1 from '../images/Collection1.jpeg'
import Collection2 from '../images/Collection2.jpeg'
import Collection3 from '../images/Collection3.jpeg'
import Collection4 from '../images/Collection4.jpeg'
import Collection5 from '../images/Collection5.jpeg'

const Collection = () => {
  return (
    <div>
        <Header/>
        <div className='my-20 px-[16%] space-y-6'>

        <div><img src={Career} alt='no image found' className='rounded-[100px] h-16 w-16'/></div>
        <div className='text-3xl font-extrabold' > Career</div>
        <div className='font-light pr-96'>Latest high tech news, gadgets, innovations and the future</div>
        <div><a href="https://alto.ghost.io/habit-shift-read-more/"><img src={Collection1} alt='no image found'/></a></div>

        <div className='px-[15%] space-y-6'>
    <div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>CAREER</a></div>
    <a href='https://alto.ghost.io/habit-shift-read-more/'><div className='text-3xl font-extrabold  mr-20 mt-4'>Habit Shift: Read More</div></a>
    <div className='font-light px-'>Arcu bibendum at varius vel pharetra vel turpis. Tempor orci eu lobortis elementum nibh tellus. Risus commodo viverra maecenas accumsan lacus vel facilisis. Eget duis at tellus at urna condimentum mattis. Adipiscing tristique risus nec feugiat in fermentum.
</div>
</div>

<div className='pt-20 '><a href='https://alto.ghost.io/secrets-behind-successful-team/'><img src={Collection2} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>

<div className='px-[15%] space-y-6'>
<div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>CAREER</a></div>
    <a href='https://alto.ghost.io/getting-things-done/'><div className='text-3xl font-extrabold  mr-20 mt-4'>Getting Things Done When You Don't Feel Motivated</div></a>
    <div className='font-light px-'>Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Sit amet risus nullam eget. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Habitasse platea dictumst quisque sagittis purus sit. Nisi quis eleifend quam adipiscing.

</div>


</div>
<div className='pt-20 '><a href='https://alto.ghost.io/getting-things-done/'><img src={Collection3} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>

<div className='px-[15%] space-y-6'>
<div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>CAREER</a></div>
    <a href='https://alto.ghost.io/building-market-model/'><div className='text-3xl font-extrabold  mr-20 mt-4'>Why You Should Always Keep Learning</div></a>
    <div className='font-light px-'>Elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Enim lobortis scelerisque fermentum dui faucibus in ornare. Bibendum neque egestas congue quisque egestas diam in.

</div>
</div>
<div className='pt-20 '><a href='https://alto.ghost.io/secrets-behind-successful-team/'><img src={Collection4} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>

<div className='px-[15%] space-y-6'>
<div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>CAREER</a></div>
    <a href='https://alto.ghost.io/building-market-model/'><div className='text-3xl font-extrabold  mr-20 mt-4'>Working from Home</div></a>
    <div className='font-light px-'>Tempor commodo ullamcorper a lacus vestibulum sed. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida hendrerit. Amet dictum sit amet justo donec enim. Sapien eget mi proin sed libero enim. Montes nascetur ridiculus mus mauris vitae ultricies leo.

</div>
</div>

<div className='pt-20 '><a href='https://alto.ghost.io/secrets-behind-successful-team/'><img src={Collection5} className='h-[500px] w-[1000px]'  alt='no image found' /></a></div>

<div className='px-[15%] space-y-6'>
<div className='text-[13px] text-gray-400 font-bold'>FEB 27, 2019 / 1 MIN READ / <a href='https://alto.ghost.io/tag/startup/' className='text-[#49a8e4]'>CAREER</a></div>
    <a href='https://alto.ghost.io/building-market-model/'><div className='text-3xl font-extrabold  mr-20 mt-4'>I Failed as a Designer at a Startup</div></a>
    <div className='font-light px-'>Turpis nunc eget lorem dolor. Penatibus et magnis dis parturient montes nascetur. Magnis dis parturient montes nascetur ridiculus mus mauris vitae. Nisl pretium fusce id velit. Velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus.
</div>
</div>


        </div>
        <Footer/>
    </div>
  )
}

export default Collection