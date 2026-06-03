import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { courseOneModules, courseTwoModules, courseThreeModules } from '../assets/courses'

function Course() {
  return (
    <>
      <main className='w-full flex flex-col justify-center items-center bg-black pb-10'>
        <section className='container max-w-[90vw] xl:max-w-[1400px] bg-white rounded-3xl mb-10'>
          <div className="flex max-lg:flex-col justify-center items-center">
            <div className='max-lg:flex max-lg:flex-col p-10'>
              <h1 className='text-4xl font-semibold'>Your journey to being a top trader starts here</h1>
              <button className='bg-black rounded-xl text-white py-4 lg:py-2  px-3 my-3'>Explore 7 day trial</button>
            </div>
            <img className='h-[300px]' src="/vecteezy_technical-analysis-concept-with-man-hold-magnifying-zoom_16061548.jpg" alt="" />
          </div>
        </section>
        <section className='container xl:max-w-[1400px] max-w-[90vw] bg-white rounded-3xl p-10 mb-10 text-center font-bold text-4xl'>
          Courses
        </section>

        <section className='container xl:max-w-[1400px] max-w-[90vw] bg-white rounded-3xl p-10 mb-10'>
          {/* <h1 className='text-center font-semibold text-4xl'>
            Courses
          </h1> */}
          <h2 className='text-center text-4xl font-semibold'>1: Narrative and Sentiment Analysis</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10'>
            <div className='flex flex-col gap-3'>
              <img src="/narrativeThumbnail.png" className='h-[400px] rounded-3xl' alt="" />
              <button className='bg-black text-white py-4 px-4 rounded-xl'>Join Course</button>
            </div>
           
            <Accordion>
              {
                courseOneModules.map((items, index) => {
                  return (
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Module {index + 1} : {items.title}</AccordionTrigger>
                      <AccordionContent>
                        {items.description}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>

        </section>

        <section className='container xl:max-w-[1400px] max-w-[90vw] bg-white rounded-3xl p-10 mb-10'>
          {/* <h1 className='text-center font-semibold text-4xl'>
            Courses
          </h1> */}
          <h2 className='text-center text-4xl font-semibold'>2: Technical Analysis</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10'>
            <div className='flex flex-col gap-3'>
              <img src="/technicalAnalysis.png" className='h-[400px] rounded-3xl' alt="" />
              <button className='bg-black text-white rounded-xl p-4'>Join Course</button>
            </div>
           
            <Accordion>
              {
                courseTwoModules.map((items, index) => {
                  return (
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Module {index + 1} : {items.title}</AccordionTrigger>
                      <AccordionContent>
                        {items.description}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </section>

        <section className='container xl:max-w-[1400px] max-w-[90vw] bg-white rounded-3xl p-10'>
          {/* <h1 className='text-center font-semibold text-4xl'>
            Courses
          </h1> */}
          <h2 className='text-center text-4xl font-semibold'>3: Quantitative Analysis</h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10'>
            <div className='flex flex-col gap-3'>
              <img src="/technicalAnalysis.png" className='h-[400px] rounded-3xl' alt="" />
              <button className='bg-black text-white rounded-xl p-4'>Join course</button>
            </div>
            <Accordion>
              {
                courseThreeModules.map((items, index) => {
                  return (
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Module {index + 1} : {items.title}</AccordionTrigger>
                      <AccordionContent>
                        {items.description}
                      </AccordionContent>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </section>
      </main>
    </>
  )
}

export default Course