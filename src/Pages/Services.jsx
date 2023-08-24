import React from 'react'
import Carousel from 'react-elastic-carousel';

import '../index.css'
import service1 from '../Images/Slideshow/OnePOne.jpg'


const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
  {width: 1200, itemsToShow: 3}
]

const AboutUs = () => {
  return (
      <div className='flex flex-col h-screen bg-white'>
        <div className='relative flex justify-center w-3/4 py-5 mx-auto text-center bg-black lg:top-1/4 left-1/8'>
            <h1 className='flex items-center justify-center font-extrabold text-white xl:text-4xl font-Montserrat '>SERVICES + AVAILABILITY</h1>
        </div>


        <div className='lg:mt-80'>
            <Carousel breakPoints={breakPoints} className='px-2'>
              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Brand Marketing</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Event Planing</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Food and Beverage</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Hospitality Consulting</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Merchandise</h1>
                  <p className='flex font-bold text-left text-black lg:px-10 font-Montserrat lg:text-base'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur rem libero saepe nostrum perferendis cumque ut qui id ex eum, numquam adipisci, delectus architecto voluptate modi! Eum assumenda a facere nemo minima ex sint iure quae eius. Blanditiis, corrupti rem.</p>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Nightlife Consulting</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Open Venue Protocol</h1>
                  
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-10 font-Montserrat lg:text-2xl'>Sourcing</h1>
                  <a href='https://youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>
              </Carousel>
          </div>
      </div>
    
  )
}

export default AboutUs