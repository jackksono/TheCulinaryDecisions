import React, { useState } from 'react'
import Carousel from 'react-elastic-carousel';

import '../index.css'
import BrandMarketing from '../Images/Services/BrandMarketing.jpg'
import EventPlanner from '../Images/Services/EventPlanner.jpg'
import FoodandBeverage from '../Images/Services/FoodandBeverage.jpg'
import HospitalityConsulting from '../Images/Services/HospitalityConsulting.jpg'
import NightlifeConsulting from '../Images/Services/NightlifeConsulting.jpg'
import OpenVenueProtocol from '../Images/Services/OpenVenueProtocol.jpg'
import Sourcing from '../Images/Services/Sourcing.jpg'
import WebDevelopment from '../Images/Services/WebDevelopment.jpg'
import MerchandiseProduction from '../Images/Services/MerchandiseProduction.jpg'


const breakPoints = [
  {width: 1, itemsToShow: 1},
  {width: 550, itemsToShow: 3},
]

const AboutUs = () => {

  const [learnMoreActive, setLearnMoreActive ] = useState(false)
  return (
      <div className='flex flex-col h-screen pt-40 bg-white lg:mt-0 lg:pt-0'>
        <div className='relative flex justify-center w-3/4 py-5 mx-auto text-center bg-black lg:top-1/4 left-1/8'>
            <h1 className='flex items-center justify-center font-extrabold text-white xl:text-4xl font-Montserrat '>SERVICES</h1>
        </div>

      <div className='flex flex-col text-justify sm:px-32 pt-60'>
        <p className='flex items-center justify-center font-extrabold text-black sm:text-lg font-Montserrat '>
            At Culinary Decisions, we are dedicated to elevating the hospitality industry through our comprehensive and innovative 
            consulting services. With years of experience and a team of seasoned professionals, we offer a wide range of tailored solutions 
            designed to empower hotels, resorts, restaurants, and other hospitality businesses to thrive in today's competitive landscape.
          </p>

          <p className='flex items-center justify-center pt-10 font-extrabold text-black sm:text-lg font-Montserrat'>
            Our services encompass every aspect of the hospitality industry, including strategic planning, operational excellence, revenue 
            optimization, and customer experience enhancement. We work closely with our clients to understand their unique needs and challenges, 
            ensuring that our recommendations are not only practical but also aligned with their business goals.
          </p>

          <p className='flex items-center justify-center pt-10 font-extrabold text-black sm:text-lg font-Montserrat'>
            From market research and feasibility studies to staff training and sustainable practices, we provide end-to-end support to 
            transform your business into a beacon of hospitality excellence. Whether you're launching a new venture, seeking to revitalize an 
            existing establishment, or looking to improve your bottom line, Culinary Decisions is your trusted partner in achieving lasting 
            success in the ever-evolving world of hospitality.
          </p>
      </div>

        <div className='mt-20 sm:mt-20'>
            <Carousel breakPoints={breakPoints} className='px-2'>
              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={BrandMarketing} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>BRAND MARKETING</h1>
                  <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              <div>
                <div className='relative mr-[20px]'>
                  <img className='' alt='service1' src={MerchandiseProduction} loading='lazy'></img>
                  {learnMoreActive ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80'>
                      <button className='absolute z-20 pt-10 pr-12 text-2xl text-white top-2 right-2' onClick={() => setLearnMoreActive(false)}>X</button>
                      <p className='text-white'>Hello</p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>CUSTOM MERCHANDISE PRODUCTION</h1>
                    <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                  </div>
                </div>
              </div>
              

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={EventPlanner} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>EVENT PLANNING</h1>
                  <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={FoodandBeverage} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>FOOD & BEVERAGE CONSULTING</h1>
                  <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={HospitalityConsulting} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>HOSPITALITY CONSULTING</h1>
                  <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={NightlifeConsulting} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>NIGHTLIFE CONSULTING</h1>
                  <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={OpenVenueProtocol} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>OPEN VENUE PROTOCOL</h1>
                  
                  <button className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={Sourcing} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>SOURCING</h1>
                  <button href='https://youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>

              <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                <img className='' alt='service1' src={WebDevelopment} loading='lazy'></img>
                <div className='flex flex-col items-start w-full'>
                  <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-3xl'>WEB DEVELOPMENT</h1>
                  <button href='https://youtube.com' target="_blank" rel="noopener noreferrer" className='text-blue-300 lg:px-10 lg:pt-5 hover:text-blue-500' onClick={() => setLearnMoreActive(true)}>Learn more...</button>
                </div>
              </div>
              </Carousel>
          </div>
      </div>
    
  )
}

export default AboutUs