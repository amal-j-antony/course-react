import React, { useState } from 'react'
import { LuTarget } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Link } from 'react-router-dom';
import LoginBtn from './LoginBtn';
import RegisterBtn from './RegisterBtn';



function Header() {
  const [open, setOpen] = useState(false)
  const drawerState = () => {
    setOpen(false)
    console.log(open);

  }
  return (
    <div className='flex justify-center items-center bg-black'>
      <nav className='w-full container max-lg:max-w-[90vw] flex justify-between items-center py-5 bg-black text-white'>
        <span className='text-3xl font-bold flex items-center gap-2'>
          <LuTarget className='' />Alpha Academy
        </span>
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerTrigger>
            <MdOutlineMenu className='lg:hidden text-3xl' />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <span className='text-3xl font-bold flex items-center gap-2 border border-b-black pb-3 border-white'>
                <LuTarget className='' />Alpha Academy
              </span>
              <Link className='text-2xl py-1 mt-2 flex items-center gap-1' to={"/"} onClick={() => drawerState()}>
                <MdHome />
                Home
              </Link>

              <DrawerClose asChild>
                <Link className='text-2xl py-1 flex items-center gap-1' to={"/course"}>
                  <AiFillFund />
                  Courses
                </Link>
              </DrawerClose>

              <DrawerClose asChild>
                <Link className='text-2xl py-1 flex items-center gap-1' >
                  <IoMdLogIn />
                  <LoginBtn/>
                </Link>
              </DrawerClose>

              <DrawerClose asChild>
                <Link className='text-2xl py-1 flex items-center gap-1' >
                  <RiLoginCircleFill />
                  Join for free
                </Link>
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>

        </Drawer>

        <ul className='hidden lg:flex justify-center items-center gap text-lg font-semibold '>
          <Link to={"/"} className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Home</Link>
          <Link to={"/course"} className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Course</Link>
          <Link to={"/about"} className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>About</Link>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>
            <LoginBtn/>
          </li>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>
            <RegisterBtn/>  
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header