import React from "react"
import Header from "../components/header"
import Audio from "../components/Audio"
import png from "../images/png1.png"
import Fav from '../images/favicon.ico'
import Video from "../components/VideoPlayer"
import Normal from "../images/normal.jpeg"
import Wide from "../images/wide.jpeg"
import Full from "../images/full.jpeg"
import Gallery1 from '../images/gallery1.jpeg'
import Gallery2 from '../images/gallery2.jpeg'
import Gallery3 from '../images/gallery3.jpeg'
import Gallery4 from '../images/gallery4.jpeg'
import Products from '../images/products.png'
import {RiArrowDropDownLine} from 'react-icons/ri'
import {RiArrowDropUpLine} from 'react-icons/ri'
import { useState } from "react"

const Styleguide = () => {

  
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleContent = () => {
      setIsExpanded(!isExpanded);
    }

    const [isExpanded1, setIsExpanded1] = useState(false);
  
    const toggleContent1 = () => {
      setIsExpanded1(!isExpanded1);
    }
  
    
  return (
    <div className="">
      <Header />
    
      
      <div className="px-[25%]">
        <div className="text-4xl font-bold text-center py-10 ">Style Guide</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Ghost is powered by an editor built from the ground-up for
          professionals. Calm by design, with advanced workflows by default. No
          more suffering through clumsy toolbars or drag & oops. Immerse
          yourself in the story with an interface that's invisible until you
          need it, and powerful when you do. Below are examples of Ghost’s
          expansive editing toolset designed to accommodate the extensive needs
          of modern creators.
        </div>
        <div className="text-[27px] font-bold pb-4">Bookmarks</div>
        <div className="font-light text-[18px] pb-10 text-justify ">
          When using a URL with the right meta information, it can show the page
          title, excerpt, author, publisher and even a preview image. This is a
          great way to share links from sites that don't have automatic embeds.
        </div>
        <a
          href= "https://ghost.org/themes/?ref=alto.ghost.io"
          className=" "

         
        >
          
          <div  className="grid grid-flow-col border-[1px] border-gray-200 border-solid cursor-pointer mb-10">
            <div className="p-4 text-sm">
            <div className="font-bold"> Ghost-Themes - The Marketplace</div>
            <div className="py-2 font-light text-gray-500" >
              Discover beautiful professional themes for the Ghost publishing
              platform. Custom templates for magazines, blogs, news websites... 
              <div className=" py-3 flex items-center"> <img src={Fav} className="w-4 h-4 mr-2"/>Ghost - The Professional Publishing
              Platform</div>
            </div>
            </div>
            <img src={png} className="h-[155px] w-56" />
          </div>
        </a>
        <div className="text-[27px] font-bold pb-4">Headers</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Make a statement with bold section headers in your posts and pages.
          Insert a header card to add a full width divider that can include a
          title, subheading, accent color or image background, and a button.
        </div>
        </div>
        <div className="">
        <div className="text-8xl text-white bg-[#49a8e4] text-center font-bold h-[450px] pt-[12%] px-20 ">Build your audience</div>
        <div className="px-[25%] mt-20">
        <div className="text-[27px] font-bold pb-4 ">Quotes</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          You can make quotes stand out with two types of blockquote styles that
          can be applied directly in the editor.
        </div>
        <div className="flex items-center">
        <div className="text-[#49a8e4] font-bold text-3xl justify-center pr-3">| </div> <div className="text-md font-light">The way to get started is to quit talking and begin doing – Walt Disney</div>
        </div>
        <div className="text-3xl text-center p-12 text-gray-400 font-light py-10">The only impossible journey is the one you never begin — Tony Robbins</div>
        <div className="text-[27px] font-bold pb-4 ">Audio</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          It's possible to upload audio files directly to your posts! This means
          you can share audio content with your audience, with a beautiful media
          player that nests into your posts and emails seamlessly. Music by 
           <a href="https://pixabay.com/users/zen_man-4257870/?tab=audio&utm_source=link-attribution&utm_medium=referral&utm_campaign=audio&utm_content=790" className="text-[#49a8e4]"> Zen_Man</a> from <a href='https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=790' className="text-[#49a8e4]">Pixabay</a>.

       
<Audio/>
           
        </div>

       
        <div className="text-[27px] font-bold pb-4 ">Videos</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Embed videos from platforms like YouTube and Vimeo, or you can now
          upload videos to your content in Ghost. Once uploaded, your video
          content renders in a beautiful video player. Videos can be set to
          loop, have their own custom thumbnails, and display in three different
          widths using the editor toolbar.
          <Video/>
        </div>
        
        <div className="text-[27px] font-bold pb-4 ">Images</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Once you start mixing text and image cards creatively, the whole
          narrative of the story changes. Suddenly, you're working in a new
          format.
        </div>
        <div className="text-[27px] font-bold pb-4 ">Normal width</div>
        <img src= {Normal}/>
        </div>
        <div className="">
        <div className="text-[27px] font-bold pb-4 ml-[25%] mt-10">Wide width</div>
        <img src={Wide} className="w-[80%] ml-32"/>
        <div className="text-[27px] font-bold pb-4 ml-[25%] mt-10">Full width</div>
        <img src={Full} />
        <div className="px-[25%]"><div className="text-[27px] font-bold pb-4 mt-20 ">Lists</div>
        <div className="font-light text-[18px] pb-10 text-justify" >
          Our main focus in building the Ghost editor is to try and make as many
          things that you hope/expect might work: actually work. 
          <div className="space-y-3 ">
          <li className="mt-10 "> You can copy and paste raw content from web pages, and Ghost will do its best to correctly preserve the formatting.</li> 
          <li> Pasting an image from your clipboard will upload inline. </li>
          <li>Pasting a social media URL will automatically create an embed.</li>
          <li> Highlight a word in the editor and paste a URL from your clipboard on top: Ghost will turn it into a link.</li>
          <li> You can also paste (or write!) Markdown and Ghost will usually be able to auto-convert it into fully editable, formatted content.</li>
          </div>
        </div>

        <div className="text-[27px] font-bold pb-4 ">Gallery</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          As it turns out, sometimes pictures and a thousand words go together
          really well. Telling people a great story often has much more impact
          if they can feel, even for a moment, as though they were right there
          with you.
        </div>
        </div>
        <div>
        <div className=" flex px-32 space-x-2">
          <img src={Gallery1} className="h-[500px]" />
        <img src={Gallery2} className="w-[285px] h-[500px]"/>
        </div>
        <div className="flex px-32 mt-2 space-x-2">
        <img src={Gallery3} className="w-[500px] h-[500px]"/>
        <img src={Gallery4} className="h-[500px]"/>
        </div>
        <div className="px-[25%] mt-20">
        <div className="text-[27px] font-bold pb-4 ">Toggles</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Use the Toggle card to create collapsible sections of text in your
          posts and pages. Great for creating distinct sections in your content,
          or adding an FAQ section.
        </div>
        <div className="border-[1px] border-gray-300 border-solid  space-y-2 rounded-md my-4 p-2">
      <div
        className={`text-xl font-bold flex justify-between cursor-pointer ${isExpanded ? 'mb-4' : ''}`}
        onClick={toggleContent}
      >
        When should I use Toggles? {isExpanded ? <RiArrowDropDownLine/> : <RiArrowDropUpLine/>}
      </div>
      {isExpanded && (
        <div className="font-light text-[18px] pb-10 text-justify">
          Toggles allow you to create collapsible sections of content, which is a great way to make your content less overwhelming and easy to navigate. A common example is an FAQ section, like this one.
        </div>
      )}
    </div>
    <div className="border-[1px] border-gray-300 border-solid p-2 space-y-2 rounded-md">
      <div
        className={`text-xl font-bold flex justify-between cursor-pointer ${isExpanded1 ? 'mb-4' : ''}`}
        onClick={toggleContent1}
      >
        Where can I take Ghost for a spin? {isExpanded1 ? <RiArrowDropDownLine/> : <RiArrowDropUpLine/>}
      </div>
      {isExpanded1 && (
        <div className="font-light text-[18px] pb-10 text-justify">
Start a free 14-day trial here. You won't be billed at the end, and you'll have access to all features.</div>
      )}
    </div>
        <div className="text-[27px] font-bold pb-4 mt-20 ">Callouts</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Ever find yourself wanting to add extra styling to important
          information in your posts? Well, now you can with callout cards. Each
          callout card can include an emoji, any length of text with styles and
          links, and a custom background color.
        </div>
        <div className="font-light bg-gray-100 p-6 text-center rounded-lg ">
        💡   Check out our <a href="https://ghost.org/resources?ref=alto.ghost.io" className="text-[#49a8e4] underline">library of resources</a> to help you grow your audience, and build an independent subscription business.
</div>
        <div className="text-[27px] font-bold pb-4 mt-10 ">Products</div>
        <div className="font-light text-[18px] pb-10 text-justify">
          Display products beautifully with custom content including an image,
          description, button or rating, so you can add your favorite
          recommendations to any post...
        </div>
        <div className="border-[1px] border-gray-300 border-solid  w-[90%] h-[550px] p-4" ><img src={Products} className="justify-center"/>
        <div className="text-[27px] font-bold mt-3">Ghost Starter Plan</div>
        <div className="font-light text-[15px] text-gray-600 text-justify mt-3">Includes every essentials for you to launch your creative business. 1 staff user, 500 members, official Ghost Themes, built-in integrations and 5mb file uploads.</div> 
        <button className="justify-center bg-[#49a8e4] w-[100%] h-10 mt-4 rounded-lg"><a href='https://ghost.org/pricing/?ref=alto.ghost.io'>From $9/month</a></button></div>
        <div className="text-[27px] font-bold mt-10">Embeds</div>
        <div><video controls width='100%'><source src=""/></video></div>
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Styleguide
