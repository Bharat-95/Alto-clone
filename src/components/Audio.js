
import React from "react";
import { BsFileEarmarkMusic } from "react-icons/bs";

import Audiofile from '../Audio/song.mp3'

const Audio = () => {
 

 


  return (
    <div className="flex border-2 border-solid border-gray-200 p-2 mt-10">
      <div className="flex">
        <div className="bg-[#49a8e4] w-20 h-20 text-white">
          <BsFileEarmarkMusic className="w-6 h-6 m-6" />
        </div>
      </div>
        <div className="font-bold pl-4">Modular ambient 02 </div>
  <audio controls className='mt-12 ml-[-170px] w-[70%] h-4 bg-white '
  >
    <source src={Audiofile}/>
  </audio>
      </div>
  
    
)
  }
export default Audio;
