import React, { useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import testimonial from '../assets/testimonials'
import courses from '../assets/courses'



function Home() {
    const course1 = "/vecteezy_expert-marketing-broker-stock-trader-present-stock-market-in_5084897.jpg"
    const [isMobile,setIsMobile] = useState(false)
    
    return (
        <>

            <section className='flex justify-center items-center bg-black '>
                <div className="container rounded-3xl h-[90vh] bg-white flex justify-center items-center">
                    <span className=' text-5xl lg:text-7xl outfit'>Stop guessing. <br /> Start trading. </span>
                </div>
            </section>
            <section className='flex flex-col justify-center items-center bg-black pt-10'>
                <div className='flex max-lg:flex-col justify-center items-center bg-white text-black w-full h-100px rounded-xl container' >
                    <div className='p-10 lg:ps-30 max-lg:text-left text-3xl lg:text-5xl outfit'>
                        One Platform.
                        <br />
                        Three trading styles.
                        <div className='text-xl lg:text-2xl'>Learn to trade based on narratives , technical analysis and quant algorithms. Choose and master one path, then move on to the next.</div>
                    </div>
                    <img width={'600px'} height={"600px"} className='rounded-xl max-lg:w-[300px] max-lg:h-[300px]' src='/vecteezy_investors-hunting-for-coins-in-investment-trading_4689192-1.jpg' alt="" />
                </div>

                <div className="bg-black grid grid-cols-1 lg:grid-cols-3 container mt-10 gap-10">
                    {/* <div className="bg-white rounded-xl relative p-5 grid grid-cols-1">
                        <img src="/Screenshot 2026-06-01 234828.png" alt="narrative trading" />
                        <h1 className='text-center text-xl py-3'>Narrative and sentiment based trading</h1>
                        <button className='bg-black text-white p-5 rounded-xl'>View Course</button>
                    </div> */}
                    {
                        courses.map((item, index) => {
                            return (
                                <div className="bg-white rounded-xl relative p-5 flex flex-col justify-center items-center">
                                    <img src={item.image} className='h-[300px] rounded-xl w-full' alt="narrative trading" />
                                    <h1 className='text-center text-xl py-3 font-semibold'>{item.title}</h1>
                                    <button className='bg-black text-white p-5 rounded-xl hover:bg-white hover:text-black border-black border cursor-pointer w-full'>View Path</button>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="bg-white grid grid-cols-1 lg:grid-cols-3  container mt-10 rounded-2xl py-10 px-10">
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img className='h-80 w-full' src="/vecteezy_expert-marketing-broker-stock-trader-present-stock-market-in_5084897.jpg" alt="" />
                        {/* <div className='absolute w-full h-full flex justify-center items-center top-0 '>
                            <h1>Learn from the best</h1>
                        </div> */}
                        <h1 className='text-2xl font-semibold'>Learn from the best</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img className='rounded-3xl h-80' src="/Project_1-01.jpg" alt="" />
                        <h1 className='text-2xl font-semibold'>Master the orderbooks</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5">
                        <img className='rounded-3xl h-80' src="/vecteezy_flat-isometric-concept-illustration-business-investment_8143910.jpg" alt="" />
                        <h1 className='text-2xl font-semibold'>Become an onchain alpha hunter</h1>
                    </div>
                </div>
                <button className='bg-white px-5 py-3 w-full container rounded-lg my-10 border text-xl font-semibold flex justify-center items-center gap-4 hover:bg-black hover:border-white hover:text-white cursor-pointer'>
                    View Courses <FaArrowRight />
                </button>
            </section>
            <section className='flex flex-col justify-center items-center bg-black'>
                <div className="flex flex-col justify-center items-center bg-white w-full container rounded-xl px-10">
                    <h1 className='my-5 font-semibold text-3xl'>What our users say</h1>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pb-10'>
                        {
                            testimonial.map((item, index) => {
                                if (index > 3 && window.innerWidth < 1024) {
                                        return
                                    }
                                return (
                                    <div className='border-1 rounded-xl p-5 bg-black text-white'>
                                        <h1 className='font-semibold'>{item.username}</h1>
                                        <p>{item.comment}</p>
                                    </div>
                                    
                                )
                            })
                        }
                    </div>
                </div>

                <div className="container flex flex-col justify-center items-center gap-5 bg-white rounded-xl p-5 my-10">
                    <h1 className='text-3xl font-bold '>30 day money back guarantee</h1>
                    <p className='text-center text-xl'>We're confident in the value of this course. If you're not satisfied within 30 days of purchase, simply contact our support team and we'll provide a full refund—no hassle, no complicated process.</p>
                </div>
            </section>

        </>
    )
}

export default Home