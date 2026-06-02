import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function LoginBtn() {
    return (
        <>
            <Dialog>
                <DialogTrigger>Log In</DialogTrigger>
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


        </>
    )
}

export default LoginBtn