import React from 'react'
import Carousel from 'react-elastic-carousel';

import '../index.css'
import service1 from '../Images/Slideshow/OnePOne.jpg'


const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 2},
]

const AboutUs = () => {
  return (
      <div className='flex flex-col h-screen bg-white'>
        <div className='relative flex justify-center w-3/4 py-5 mx-auto text-center bg-black lg:top-1/4 left-1/8'>
            <h1 className='flex items-center justify-center font-extrabold text-white xl:text-4xl font-Montserrat '>SERVICES</h1>
        </div>


        <div className='lg:mt-80'>
            <Carousel breakPoints={breakPoints} className='px-2'>
              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>BRAND MARKETING</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>CUSTOM MERCHANDISE PRODUCTION</h1>
                 
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>EVENT PLANNING</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>FOOD & BEVERAGE CONSULTING</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>HOSPITALITY CONSULTING</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>NIGHTLIFE CONSULTING</h1>
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>OPEN VENUE PROTOCOL</h1>
                  
                  <a href='youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>SOURCING</h1>
                  <a href='https://youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='h-[400px] w-[600px]' alt='service1' src={service1}></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>WEB DEVELOPMENT</h1>
                  <a href='https://youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500'>Learn more...</a>
                </div>
              </div>
              </Carousel>
          </div>
      </div>
    
  )
}

export default AboutUs