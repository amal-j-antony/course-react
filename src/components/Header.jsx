import React, { useState } from 'react'
import { LuTarget } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { AiFillFund } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
  const [open, setOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const [loginOpen,setLoginOpen] = useState(false)


  const drawerState = () => {
    setOpen(false)
    console.log(open);

  }
  return (
    <div className='flex justify-center items-center bg-black'>
      <nav className='w-full container max-w-[90vw] flex justify-between items-center py-5 bg-black text-white'>
        <span className='text-3xl font-bold flex items-center gap-2'>
          <LuTarget className='' />Alpha Academy
        </span>

        {/* mobile hamburger menu */}
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
                <button className='text-2xl py-1 flex items-center gap-1' onClick={() => setLoginOpen(true)} >
                  <IoMdLogIn />
                  Log in
                </button>
              </DrawerClose>

              <DrawerClose asChild>
                <button className='text-2xl py-1 flex items-center gap-1' onClick={() => setRegisterOpen(true)}>
                  <RiLoginCircleFill />
                  Join for Free
                </button>
              </DrawerClose>
            </DrawerHeader>
          </DrawerContent>

        </Drawer>

        {/* desktop header right side */}
        <ul className='hidden lg:flex justify-center items-center gap text-lg font-semibold '>
          <Link to={"/"} className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Home</Link>
          <Link to={"/course"} className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>Course</Link>
          <Link to={"/about"} className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer'>About</Link>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer' onClick={() => setLoginOpen(true)}>
            Log In
          </li>
          <li className='hover:bg-white hover:text-black px-3 py-1 rounded-xl cursor-pointer' onClick={() => setRegisterOpen(true)}>
            Join for Free
          </li>
        </ul>
      </nav>

      {/* login dialog */}
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Login to Alpha Academy</DialogTitle>

          </DialogHeader>
          <form className='flex flex-col gap-2' action="">
            <input className='py-2 px-4 rounded-3xl border' type="text" placeholder='Enter Username' />
            <input className='py-2 px-4 rounded-3xl border' type="password" placeholder='Enter Password' />
            <div className='px-4 gap-2 flex items-center'>
              <input type="checkbox" /><span>Iam not a robot</span>
            </div>
            <button className='bg-black text-white py-2 px-4 rounded-xl'>Login</button>
          </form>
        </DialogContent>
      </Dialog>

      {/* register dialog */}
      <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Join Alpha Academy</DialogTitle>

          </DialogHeader>
          <form className='flex flex-col gap-2' action="">
            <input className='py-2 px-4 rounded-3xl border' type="text" placeholder='Enter Username' />
            <input className='py-2 px-4 rounded-3xl border' type="password" placeholder='Enter Password' />
            <input className='py-2 px-4 rounded-3xl border' type="password" placeholder='Confirm Password' />
            <div className='px-4 gap-2 flex items-center'>
              <input type="checkbox" /><span>Iam not a robot</span>
            </div>
            <button className='bg-black text-white py-2 px-4 rounded-xl'>Register</button>
          </form>
        </DialogContent>
      </Dialog>

    </div>


  )
}

export default Header