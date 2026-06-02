import React from 'react'
import { LuTarget } from "react-icons/lu";

function Footer() {
  return (
    <div className='flex justify-center items-center bg-black border border-black border-t-white py-10'>

      <footer className='container w-75 lg:w-full flex max-lg:flex-col gap-20 justify-center max-lg:max-w-[90vw]  bg-black text-white '>

        <div className="">
          <h1 className='text-3xl font-semibold flex items-center'>
            <LuTarget className='' />Alpha Academy
          </h1>
          <p>Level up your game</p>
        </div>
        
        <div className="">
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Courses</li>
            <li>Narrative and sentiment analysis</li>
            <li>Technical analysis</li>
            <li>Quantitative analysis</li>
          </ul>
        </div>

        <div>
          <ul>
            <li className='text-2xl pb-2 font-semibold'>Contact</li>
            <li>queries@alphaacademy.com</li>
            <li>Help center</li>
            <li>Chat with an agent</li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer