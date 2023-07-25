import React from 'react'

import BarPhoto from '../Images/StockImages/BarPhoto.jpg'

import { useInView } from 'react-intersection-observer'

import Article1 from '../Images/Articles/Article1.png'
import Article2 from '../Images/Articles/Article2.png'
import Article3 from '../Images/Articles/Article3.png'
import Article4 from '../Images/Articles/Article4.png'

import Zoom from 'react-reveal/Zoom'


const Media = () => {
  
  const zoomOptions = {
    threshold: 0.1, // Adjust this threshold value to your desired visibility trigger point
    triggerOnce: false, // Set to true so that the animation only happens once
  };
  const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);


  return (
    <div>
      <div className='shadow-lg'>
        <img 
        src={BarPhoto}
        alt='barPhoto'
        className='relative object-cover w-screen object-top h-[700px] shadow-lg'
        ></img>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
          <h1 className='flex p-2 font-bold text-white border border-white font-Montserrat text-7xl'>Media and Articles</h1>
        </div>
      </div>
      
      <div className='pt-40 font-sans text-5xl italic text-black underline'>Check us out on Social Media!</div>
      
      <div ref={zoom1Ref}>
        <Zoom bottom duration={2000} when={zoom1InView}>
          <div className='grid w-screen grid-cols-4 pt-20 pb-20'>
            <a href='https://www.lamag.com/digestblog/chef-andrew-carroll-catch-shares-10-favorite-dishes-l/' 
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black '>
              <p className='flex pb-48 text-xl italic text-black'>Andrew Caroll Shares his top 10 Dishes!</p>
              <img src={Article1} alt='Article1' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
            <a href='https://observer.com/2016/10/catch-takes-scene-dining-to-new-heights-in-la/'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black'>
              <p className='flex pb-48 text-xl italic text-black'>Catch Takes Dining Scences to new Heights</p>
              <img src={Article2} alt='Article2' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
            <a href='https://www.reviewjournal.com/entertainment/food/las-vegas-chefs-prepare-vegan-feast-that-was-a-hit-in-new-york-1835770/'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black'>
              <p className='flex pb-48 text-xl italic text-black'>Chef Prepares Vegan Feast in New York!</p>
              <img src={Article3} alt='Article3' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
            <a href='https://www.visitwesthollywood.com/stories/award-winning-chefs-restaurants-in-weho/'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black'>
              <p className='flex pb-48 text-xl italic text-black'>Where to Find Award Winning Chefs in West Hollywood</p>
              <img src={Article4} alt='Article4' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
          </div>
        </Zoom>
      </div>
    </div>
  )
}

export default Media