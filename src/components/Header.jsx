import React from 'react'
import { LuTarget } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";


function Header() {
  return (
    <div className='flex justify-center items-center bg-black'>
      <nav className='w-full max-lg:px-5 container flex justify-between items-center py-5 bg-black text-white'>
        <span className='text-xl font-bold flex items-center gap-2'>
          <LuTarget />Alpha Academy
        </span>
        <MdOutlineMenu className='lg:hidden '/>
        <ul className='hidden lg:flex justify-center items-center gap text-lg font-semibold '>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Home</li>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Course</li>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Log in</li>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Join for Free</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header