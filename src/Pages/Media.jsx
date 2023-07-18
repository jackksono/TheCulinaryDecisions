import React, {useState} from 'react'

import Headshot from '../Images/Headshot for media.jpg'
import Article1 from '../Images/Article1.png'
import Article2 from '../Images/Article2.png'
import Article3 from '../Images/Article3.png'
import Article4 from '../Images/Article4.png'

import ContactUs from './ContactUs'

const Media = () => {
  
  const [ contactPopUp, setContactPopUp ] = useState(false)

  return (
    <div>
      <div className='grid justify-center w-screen h-full grid-cols-2 p-5 text-black place-items-center '>
      <ContactUs className='' trigger={contactPopUp} setTrigger={setContactPopUp}></ContactUs>
        <img 
        className='shadow-xl rounded-2xl'
        alt='Headshot'
        src={Headshot}>
        </img>
        <div className=''>
          <h1 className='text-2xl font-extrabold'>Chef Andrew Carroll</h1>
          <p className='relative pt-5 font-sans text-lg text-black '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, dicta temporibus id sapiente aut veniam natus ad neque expedita nulla ea commodi 
          animi nisi dignissimos. Quo, aspernatur? Sapiente, cumque velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur dolorem ab, commodi ducimus corrupti harum a quam quidem, dolores id nostrum voluptatibus cumque vel? Reprehenderit nisi distinctio consequatur atque!
          Perspiciatis mollitia numquam harum hic praesentium laborum aliquid labore in voluptates? Repellat non voluptatibus illo officia quaerat, laudantium recusandae modi ipsam enim a in quis, beatae reprehenderit? Sunt, enim odit?
          Veritatis aliquid assumenda ad aperiam velit error ea similique cumque laborum, unde provident dolor earum ullam at eligendi vel id enim excepturi consectetur exercitationem illo consequuntur nesciunt. Accusamus, quidem ipsam.
          Eum aliquam, architecto, aspernatur animi corrupti inventore ab numquam necessitatibus ad voluptas illum a maxime, reiciendis ipsa. Dolorum, nisi sit vitae animi libero, illo in ullam aperiam quo aliquid distinctio.
          Pariatur deleniti omnis nesciunt numquam eius obcaecati, ipsa quibusdam dicta exercitationem quis nulla vero aliquid officia. Perferendis eaque praesentium laudantium exercitationem vero sunt eum nostrum dolorem nemo. Temporibus, error totam?</p>
          <button className='absolute items-center w-[100px] border border-black border-solid hover:bg-black hover:text-white mt-10 rounded-2xl'
            onClick={() => setContactPopUp(true)}>Contact Me
            
          </button>
         
        </div>
      </div>
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