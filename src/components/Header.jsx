import React, { useState } from 'react'
import { LuTarget } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
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



function Header() {
  const [open,setOpen] = useState(false)
  const drawerState = () => {
    setOpen(false)
    console.log(open);
    
  }
  return (
    <div className='flex justify-center items-center bg-black'>
      <nav className='w-full max-lg:px-5 container flex justify-between items-center py-5 bg-black text-white'>
        <span className='text-3xl font-bold flex items-center gap-2'>
          <LuTarget className='' />Alpha Academy
        </span>
        <Drawer direction="left" open={open} onOpenChange={setOpen}>
          <DrawerTrigger>
            <MdOutlineMenu className='lg:hidden text-3xl' />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <span className='text-3xl font-bold flex items-center gap-2'>
                <LuTarget className='' />Alpha Academy
              </span>
              <Link className='text-2xl py-1 mt-2' to={"/"} onClick={() => drawerState()}>Home</Link>
              <DrawerClose asChild>
                <Link className='text-2xl py-1' to={"/course"}>Courses</Link>
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>

        </Drawer>

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