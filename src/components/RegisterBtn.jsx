import React from 'react'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function RegisterBtn() {
    return (
        <>
            <Dialog>
                <DialogTrigger>Register</DialogTrigger>
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


        </>
    )
}

export default RegisterBtn