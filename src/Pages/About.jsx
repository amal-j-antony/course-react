import React from 'react'
import { aboutContent } from '../assets/about'

function About() {

    return (
        <>
            <main className='w-full flex justify-center items-center text-black py-10'>
                <section className='container max-w-[90vw] bg-white rounded-3xl'>
                    <h1 className='text-center text-5xl py-10 font-bold'>About this course</h1>
                    {
                        aboutContent.map((item, index) => {
                            return (
                                <p className='py-2 text-xl'>{item}</p>
                            )
                        })
                    }

                    <h3 className='text-3xl font-semibold py-4 '>Godspeed,and I'll see you in the Orderbooks</h3>

                    {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <img src="https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[400px]' alt="" />
                        <img src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-[400px]' alt="" />
                    </div> */}
                    
                </section>
            </main>



        </>
    )
}

export default About