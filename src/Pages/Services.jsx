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

  const [ brandMarketingScreen, setbrandMarketingScreen ] = useState(false)
  const [ customMerchandiseScreen, setcustomMerchandiseScreen ] = useState(false)
  const [ eventPlanningScreen, setEventPlanningScreen ] = useState(false)
  const [ foodandBeverageScreen, setFoodAndBeverageScreen ] = useState(false)
  const [ hospitalityConsultingScreen, setHospitalityConsultingScreen ] = useState(false);
  const [ nightLifeConsultingScreen, setNightLifeConsultingScreen ]  = useState(false);
  const [ openVenueProtocolScreen, setOpenVenueProtocolScreen ] = useState(false)
  const [ sourcingScreen, setSourcingScreen ] = useState(false);
  const [ webDevelopmentScreen, setWebDevelopmentScreen ] = useState(false)

  return (
      <div className='flex flex-col h-screen pt-10 bg-white -z-0 sm:pt-40 lg:mt-0 lg:pt-0'>
        <div className='relative flex justify-center w-3/4 py-5 mx-auto text-center bg-black lg:top-1/4 left-1/8'>
            <h1 className='flex items-center justify-center font-extrabold text-white xl:text-4xl font-Montserrat '>SERVICES</h1>
        </div>

      <div className='flex flex-col pt-10 mx-5 text-sm text-justify sm:pt-40 sm:px-32 sm:mt-20 xl:mt-40'>
        <p className='flex items-center justify-center font-extrabold text-black sm:text-lg font-Montserrat '>
            At Culinary Decisions, we are dedicated to elevating the hospitality industry through our comprehensive and innovative 
            consulting services. With years of experience and a team of seasoned professionals, we offer a wide range of tailored solutions 
            designed to empower hotels, resorts, restaurants, and other hospitality businesses to thrive in today's competitive landscape.
          </p>

          <p className='flex items-center justify-center pt-5 font-extrabold text-black sm:pt-10 sm:text-lg font-Montserrat'>
            Our services encompass every aspect of the hospitality industry, including strategic planning, operational excellence, revenue 
            optimization, and customer experience enhancement. We work closely with our clients to understand their unique needs and challenges, 
            ensuring that our recommendations are not only practical but also aligned with their business goals.
          </p>

          <p className='flex items-center justify-center pt-5 font-extrabold text-black sm:pt-10 sm:text-lg font-Montserrat'>
            From market research and feasibility studies to staff training and sustainable practices, we provide end-to-end support to 
            transform your business into a beacon of hospitality excellence. Whether you're launching a new venture, seeking to revitalize an 
            existing establishment, or looking to improve your bottom line, Culinary Decisions is your trusted partner in achieving lasting 
            success in the ever-evolving world of hospitality.
          </p>
      </div>

        <div className='justify-center mt-20 sm:mt-20'>
            <Carousel breakPoints={breakPoints} className='px-2'>


              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={BrandMarketing} loading='lazy' onClick={() => setbrandMarketingScreen(true)}></img>
                  {brandMarketingScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setbrandMarketingScreen(false)}>
                      <button className='absolute z-20 pt-20 pr-12 text-2xl text-white top-2 right-2 font-Montserrat' onClick={() => setbrandMarketingScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        In the competitive hospitality industry, our specialized consulting team crafts unique brand strategies 
                        to drive growth. We analyze markets, understand trends, and create compelling brand identities tailored to
                        your audience. Whether launching a new concept or revitalizing an existing property, we define your value proposition, 
                        refine positioning, and establish a memorable brand presence. Our expertise equips you to navigate the complex hospitality landscape and connect with guests, ensuring sustained success.</p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat sm:text-xl'>BRAND MARKETING</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start text-sm sm:text-lg'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setbrandMarketingScreen(true)}>See More Details...</button>
                </div>
              </div>

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={MerchandiseProduction} loading='lazy' onClick={() => setcustomMerchandiseScreen(true)}></img>
                  {customMerchandiseScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setcustomMerchandiseScreen(false)}>
                      <button className='absolute z-20 pt-20 pr-12 text-2xl text-white top-2 right-2 font-Montserrat' onClick={() => setcustomMerchandiseScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        We understand that one size does not fit all. Our custom product manufacturing service is tailored to your unique 
                        hospitality needs. Whether it's elevating your ambiance, adding luxury and comfort, or creating memorable amenities, 
                        our experts bring your vision to life. With our extensive network of skilled artisans, we ensure every detail aligns with 
                        your brand identity. Differentiate yourself and thrive in the marketplace with our custom solutions, leaving a legacy of 
                        excellence.
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>CUSTOM MERCHANDISE PRODUCTION</h1>
                    
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setcustomMerchandiseScreen(true)}>See More Details...</button>
                </div>
              </div>
              

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={EventPlanner} loading='lazy' onClick={() => setEventPlanningScreen(true)}></img>
                  {eventPlanningScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setEventPlanningScreen(false)}>
                      <button className='absolute z-20 pt-20 pr-12 text-2xl text-white top-2 right-2 font-Montserrat' onClick={() => setEventPlanningScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        We are dedicated to crafting unforgettable experiences that leave lasting impressions. Our comprehensive range of services 
                        is designed to transform your event dreams into reality, ensuring every detail is meticulously curated and flawlessly 
                        executed. From the initial concept to the final flourish, we offer a full spectrum of event planning services. Our 
                        experienced team of event professionals will work closely with you to understand your vision, goals, and preferences, 
                        tailoring our services to suit your unique needs.
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>EVENT PLANNING</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setEventPlanningScreen(true)}>See More Details...</button>
                </div>
              </div>

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={FoodandBeverage} loading='lazy' onClick={() => setFoodAndBeverageScreen(true)}></img>
                  {foodandBeverageScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setFoodAndBeverageScreen(false)}>
                      <button className='absolute z-20 pr-12 text-2xl text-white pt-7 top-2 right-2 font-Montserrat' onClick={() => setFoodAndBeverageScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        Our team of industry experts brings a wealth of knowledge in culinary trends, menu development, kitchen operations, 
                        sourcing the finest ingredients, and optimizing cost-efficiency. We work closely with you to understand your brand's 
                        identity and target audience, tailoring strategies that align with your vision while maximizing profitability. Whether 
                        you're seeking to revamp your existing menu, launch a new culinary concept, or streamline kitchen operations for efficiency,
                        our food and beverage consulting service will provide you with the tools and expertise needed to thrive in the competitive 
                        world of hospitality, ensuring your guests enjoy remarkable dining experiences that set your establishment apart.
                       </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>FOOD & BEVERAGE CONSULTING</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setFoodAndBeverageScreen(true)}>See More Details...</button>
                </div>
              </div>

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={HospitalityConsulting} loading='lazy' onClick={() => setHospitalityConsultingScreen(true)}></img>
                  {hospitalityConsultingScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setHospitalityConsultingScreen(false)}>
                      <button className='absolute z-20 pr-12 text-2xl text-white pt-7 top-2 right-2 font-Montserrat' onClick={() => setHospitalityConsultingScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        Our hospitality consulting services are designed to empower your business in the dynamic and competitive world of 
                        hospitality. With a team of seasoned experts and a deep understanding of industry trends, we provide comprehensive solutions 
                        tailored to your unique needs. Whether you're looking to optimize operations, enhance guest experiences, or improve 
                        profitability, our consulting services cover a wide spectrum, including brand strategy, custom product manufacturing, 
                        and food and beverage optimization. We work closely with you to identify opportunities, craft effective strategies, and 
                        implement solutions that drive success. 
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>HOSPITALITY CONSULTING</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setHospitalityConsultingScreen(true)}>See More Details...</button>
                </div>
              </div>

              

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={NightlifeConsulting} loading='lazy' onClick={() => setNightLifeConsultingScreen(true)}></img>
                  {nightLifeConsultingScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setNightLifeConsultingScreen(false)}>
                      <button className='absolute z-20 pr-12 text-2xl text-white pt-7 top-2 right-2 font-Montserrat' onClick={() => setNightLifeConsultingScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        Our nightlife consulting services are your ticket to creating vibrant and unforgettable entertainment experiences within 
                        the hospitality industry. With a team of nightlife experts deeply attuned to the pulse of trends and innovation, we offer
                        a comprehensive suite of solutions tailored to elevate your venue. Whether you're aiming to reinvigorate an existing 
                        nightlife spot, launch a new concept, or fine-tune your entertainment offerings, our services cover it all. We specialize 
                        in crafting unique and immersive experiences, optimizing operational efficiency, and ensuring regulatory compliance. 
                       </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>NIGHTLIFE CONSULTING</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setNightLifeConsultingScreen(true)}>See More Details...</button>
                </div>
              </div>

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={OpenVenueProtocol} loading='lazy' onClick={() => setOpenVenueProtocolScreen(true)}></img>
                  {openVenueProtocolScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setOpenVenueProtocolScreen(false)}>
                      <button className='absolute z-20 pr-12 text-2xl text-white pt-7 top-2 right-2 font-Montserrat' onClick={() => setOpenVenueProtocolScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        Our Open Venue Protocol services for hotels and restaurants set the diamond standard. We understand that creating a safe 
                        and welcoming environment for patrons is a top priority, especially in the face of evolving health and safety concerns. Our 
                        specialized services focus on implementing cutting-edge protocols and guidelines to ensure your venue is not only compliant 
                        with health regulations but also goes above and beyond in providing a secure and enjoyable experience for guests. From crowd 
                        management strategies to advanced sanitation measures, we tailor our services to your specific venue, helping you regain 
                        customer confidence and stay ahead.
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>OPEN VENUE PROTOCOL</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setOpenVenueProtocolScreen(true)}>See More Details...</button>
                </div>
              </div>

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={Sourcing} loading='lazy' onClick={() => setSourcingScreen(true)}></img>
                  {sourcingScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setSourcingScreen(false)}>
                      <button className='absolute z-20 pt-10 pr-12 text-2xl text-white sm:pt-20 top-2 right-2 font-Montserrat' onClick={() => setSourcingScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat'>
                        Our sourcing services in hospitality are all about delivering quality while managing costs. With expertise in market trends 
                        and a vast supplier network, we ensure you access top-notch ingredients, furnishings, and amenities aligned with your brand's
                        identity. Whether you're focused on sustainability, procurement efficiency, or guest experience enhancement, our experts 
                        optimize your sourcing for excellence and profitability. Partner with us to elevate your offerings and thrive in the 
                        competitive hospitality industry.
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>SOURCING</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setSourcingScreen(true)}>See More Details...</button>
                </div>
              </div>

              <div>
                <div className='relative sm:mr-[20px]'>
                  <img className='cursor-pointer' alt='service1' src={WebDevelopment} loading='lazy' onClick={() => setWebDevelopmentScreen(true)}></img>
                  {webDevelopmentScreen ? (
                    <div className='absolute top-0 right-0 flex flex-col items-center justify-center w-full h-full bg-black opacity-80' onClick={() => setWebDevelopmentScreen(false)}>
                      <button className='absolute z-20 pr-12 text-2xl text-white pt-7 top-2 right-2 font-Montserrat' onClick={() => setWebDevelopmentScreen(false)}>X</button>
                      <p className='px-10 text-[8px] font-bold text-white sm:text-lg font-Montserrat' >
                        Our custom web development services are tailored to enhance your presence and performance in the ever-evolving hospitality 
                        industry. Our team of experienced developers specializes in creating bespoke web solutions that not only showcase your 
                        brand's unique identity but also optimize user experience and functionality. Whether you need a cutting-edge booking platform,
                        a seamless mobile app, or a website that tells your story effectively, our experts are here to bring your vision to life. 
                        With our custom web development services, you'll gain a competitive edge, increase online visibility, and provide your guests 
                        with a seamless and engaging digital experience.
                      </p>
                    </div>
                  ) : null}
                </div>
                <div className='flex flex-col items-center justify-center place-content-center mr-[20px]'>
                  <div className='flex flex-col items-start w-full'>
                    <h1 className='flex pt-3 font-extrabold text-black lg:px-5 font-Montserrat lg:text-xl'>WEB DEVEVLOPMENT</h1>
                  </div>
                </div>
                <div className='flex flex-row justify-start'>
                  <button className='flex font-bold text-blue-300 duration-500 sm:px-5 hover:text-blue-500 font-Montserrat' onClick={() => setWebDevelopmentScreen(true)}>See More Details...</button>
                </div>
              </div>
              </Carousel>
          </div>
      </div>
    
  )
}

export default AboutUs