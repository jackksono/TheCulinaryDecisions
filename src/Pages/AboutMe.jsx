import React, {useState} from 'react'
import Mich from '../Images/Headshots/MichelleHead.jpg'
import Lev from '../Images/Headshots/LevanHead.jpg'
import Dining from '../Images/StockImages/Dining.jpg'

import { useInView } from 'react-intersection-observer';

import Fade from 'react-reveal/Fade'


const AboutMe = () => {


  const zoomOptions = {
    threshold: 0.1, // Adjust this threshold value to your desired visibility trigger point
    triggerOnce: false, // Set to true so that the animation only happens once
  };
  const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);
  const { ref: zoom2Ref, inView: zoom2InView } = useInView(zoomOptions);



  
  return (
    <div>
      <div className='shadow-lg'>
        <img 
          src={Dining}
          alt='diningPhoto'
          className='relative object-cover w-screen object-center h-[700px] shadow-lg'
          loading='lazy'>
        </img>
      </div>

      <div className='grid justify-center grid-cols-2 gap-8 p-5 xl:pt-20'>
        <div className='flex flex-col items-center justify-center text-center group' ref={zoom1Ref}>
            <h1 className='text-4xl font-extrabold lg:mr-40 lg:text-6xl font-Montserrat'>Levan Donato</h1>
            <p className='text-black lg:pb-5 lg:mr-40 lg:text-2xl font-Montserrat'>Managing Partner</p>
            <div className='relative'>
              <Fade left when={zoom1InView}>
                <img 
                  className='shadow-xl rounded-full h-[500px] w-auto lg:mr-40'
                  alt='Headshot'
                  src={Lev}
                  loading='lazy'
                />
              </Fade>
              <div className='absolute justify-center duration-700 shadow-2xl opacity-0 bottom-20 bg-slate-200 rounded-2xl left-12 lg:ml-72 group-hover:opacity-80'>
                <p className='pt-5 m-5 lg:m-0 lg:p-5 text-black bg-transparent border lg:h-auto lg:text-sm font-semibold lg:leading-8 lg:w-[500px] text-md rounded-2xl opacity-0 group-hover:opacity-100 font-Montserrat'>
                A first-generation American, Levan offers a diverse and unique perspective. With over 20 years' experience in luxury resort 
                operations and leadership, she has collaborated with a variety of hospitality powerhouses across the Las Vegas strip. 
                Her passion for curating new and innovative concepts led her to spearhead the opening of Resorts World Las Vegas as the Director
                 of Beverage & Cocktails. She successfully developed strategic programs and creative concepts for over forty food and beverage 
                 venues. A hospitality professional, her expansive knowledge in new openings and business acumen has dedicated her to Culinary 
                 Decisions, where she takes immense pride in assisting others in developing effective business strategies.
                </p>
              </div>
          </div>
        </div>
        
        <div className='flex flex-col items-center justify-center text-center group' ref={zoom2Ref}>
            <h1 className='text-4xl font-extrabold lg:ml-40 lg:text-6xl font-Montserrat'>Michelle Tran</h1>
            <p className='text-black lg:ml-40 lg:pb-5 lg:text-2xl font-Montserrat'>Managing Partner</p>
            <div className='relative'>
              <Fade right when={zoom2InView}>
                <img 
                  className='shadow-xl rounded-full h-[500px] w-auto lg:ml-40'
                  alt='Headshot'
                  src={Mich}
                  loading='lazy'
                />
              </Fade>
              <div className='absolute justify-center duration-700 shadow-2xl opacity-0 bottom-5 bg-slate-200 rounded-2xl right-12 lg:mr-72 group-hover:opacity-80'>
                <p className='pt-5 m-5 lg:m-0 lg:p-5 text-black bg-transparent border lg:h-auto lg:text-sm font-semibold lg:leading-8 lg:w-[500px] text-md rounded-2xl opacity-0 group-hover:opacity-100 font-Montserrat'> 
                  Michelle, fueled by her unwavering dedication to the hospitality industry and an impeccable knack for crafting exquisite menus, 
                  boasts an impressive track record of overseeing operations at prestigious high-volume establishments nestled along the 
                  illustrious Las Vegas Strip. Her journey has been punctuated by stints at renowned venues such as Catch Las Vegas and Resorts 
                  World Allē on 66, where her contributions earned notable recognition. Presently, she is at the helm of an ambitious venture 
                  dedicated to elevating the hospitality landscape by providing invaluable support for entrepreneurs seeking to refine and elevate 
                  their business objectives. Here, she leverages her expertise to facilitate effective operational execution while developing comprehensive training programs
                   that emphasize consistency and financial acumen. 

                </p>
              </div>
          </div>
        </div>
    </div>
    </div> //Maybe compile media and about me
  )
}

export default AboutMe