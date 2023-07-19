import React from 'react'


import Article1 from '../Images/Article1.png'
import Article2 from '../Images/Article2.png'
import Article3 from '../Images/Article3.png'
import Article4 from '../Images/Article4.png'



const Media = () => {
  
  

  return (
    <div>
      
      <div className='grid w-screen grid-cols-4 pt-40'>
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
    </div>
  )
}

export default Media