import React, {useState} from 'react'
import ContactUs from './ContactUs'
import Drew from '../Images/Headshots/DrewHead.jpg'
import Mich from '../Images/Headshots/MichelleHead.jpg'
import Lev from '../Images/Headshots/LevanHead.jpg'

import Fade from 'react-reveal/Fade'

const AboutMe = () => {

  const [ contactPopUp, setContactPopUp ] = useState(false)

  return (
    <div>
      <Fade right>
        <div className='grid justify-center w-screen h-full grid-cols-2 p-5 text-black shadow-sm place-items-center '>
          <img 
          className='shadow-xl rounded-full  h-[500px] w-auto'
          alt='Headshot'
          src={Lev}>
          </img>
          <div className='pr-20'>
            <h1 className='text-4xl font-extrabold'>Levan James</h1>
            <p className='relative pt-5 font-sans text-xl text-black '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, dicta temporibus id sapiente aut veniam natus ad neque expedita nulla ea commodi 
            animi nisi dignissimos. Quo, aspernatur? Sapiente, cumque velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur dolorem ab, commodi ducimus corrupti harum a quam quidem, dolores id nostrum voluptatibus cumque vel? Reprehenderit nisi distinctio consequatur atque!
            Perspiciatis mollitia numquam harum hic praesentium laborum aliquid labore in voluptates? Repellat non voluptatibus illo officia quaerat, laudantium recusandae modi ipsam enim a in quis, beatae reprehenderit? Sunt, enim odit?
            Veritatis aliquid assumenda ad aperiam velit error ea similique cumque laborum, unde provident dolor earum ullam at eligendi vel id enim excepturi consectetur exercitationem illo consequuntur nesciunt. Accusamus, quidem ipsam.
            Eum aliquam, architecto, aspernatur animi corrupti inventore ab numquam necessitatibus ad voluptas illum a maxime, reiciendis ipsa. Dolorum, nisi sit vitae animi libero, illo in ullam aperiam quo aliquid distinctio.
            Pariatur deleniti omnis nesciunt numquam eius obcaecati, ipsa quibusdam dicta exercitationem quis nulla vero aliquid officia. Perferendis eaque praesentium laudantium exercitationem vero sunt eum nostrum dolorem nemo. Temporibus, error totam?</p>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className='grid justify-center w-screen h-full grid-cols-2 p-5 text-black shadow-sm place-items-center '>
          <div className='pl-20'>
            <h1 className='text-4xl font-extrabold'>Michelle Tran</h1>
            <p className='relative pt-5 font-sans text-xl text-black '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, dicta temporibus id sapiente aut veniam natus ad neque expedita nulla ea commodi 
            animi nisi dignissimos. Quo, aspernatur? Sapiente, cumque velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur dolorem ab, commodi ducimus corrupti harum a quam quidem, dolores id nostrum voluptatibus cumque vel? Reprehenderit nisi distinctio consequatur atque!
            Perspiciatis mollitia numquam harum hic praesentium laborum aliquid labore in voluptates? Repellat non voluptatibus illo officia quaerat, laudantium recusandae modi ipsam enim a in quis, beatae reprehenderit? Sunt, enim odit?
            Veritatis aliquid assumenda ad aperiam velit error ea similique cumque laborum, unde provident dolor earum ullam at eligendi vel id enim excepturi consectetur exercitationem illo consequuntur nesciunt. Accusamus, quidem ipsam.
            Eum aliquam, architecto, aspernatur animi corrupti inventore ab numquam necessitatibus ad voluptas illum a maxime, reiciendis ipsa. Dolorum, nisi sit vitae animi libero, illo in ullam aperiam quo aliquid distinctio.
            Pariatur deleniti omnis nesciunt numquam eius obcaecati, ipsa quibusdam dicta exercitationem quis nulla vero aliquid officia. Perferendis eaque praesentium laudantium exercitationem vero sunt eum nostrum dolorem nemo. Temporibus, error totam?</p>
          </div>
          <img 
          className='shadow-xl rounded-full  h-[500px] w-auto'
          alt='Headshot'
          src={Mich}>
          </img>
        </div>
      </Fade>

      <Fade right>
        <div className='grid justify-center w-screen h-full grid-cols-2 p-5 text-black shadow-sm place-items-center '>
        <ContactUs className='' trigger={contactPopUp} setTrigger={setContactPopUp}></ContactUs>
          <img 
          className='shadow-xl rounded-full h-[500px] w-auto' 
          alt='Headshot'
          src={Drew}>
          </img>
          <div className='h-auto pr-20 '>
            <h1 className='text-4xl font-extrabold'>Chef Andrew Carroll</h1>
            <p className='relative pt-5 font-sans text-xl text-black '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, dicta temporibus id sapiente aut veniam natus ad neque expedita nulla ea commodi 
            animi nisi dignissimos. Quo, aspernatur? Sapiente, cumque velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur dolorem ab, commodi ducimus corrupti harum a quam quidem, dolores id nostrum voluptatibus cumque vel? Reprehenderit nisi distinctio consequatur atque!
            Perspiciatis mollitia numquam harum hic praesentium laborum aliquid labore in voluptates? Repellat non voluptatibus illo officia quaerat, laudantium recusandae modi ipsam enim a in quis, beatae reprehenderit? Sunt, enim odit?
            Veritatis aliquid assumenda ad aperiam velit error ea similique cumque laborum, unde provident dolor earum ullam at eligendi vel id enim excepturi consectetur exercitationem illo consequuntur nesciunt. Accusamus, quidem ipsam.
            Eum aliquam, architecto, aspernatur animi corrupti inventore ab numquam necessitatibus ad voluptas illum a maxime, reiciendis ipsa. Dolorum, nisi sit vitae animi libero, illo in ullam aperiam quo aliquid distinctio.
            Pariatur deleniti omnis nesciunt numquam eius obcaecati, ipsa quibusdam dicta exercitationem quis nulla vero aliquid officia. Perferendis eaque praesentium laudantium exercitationem vero sunt eum nostrum dolorem nemo. Temporibus, error totam?</p>
          </div>
        </div>
      </Fade>
      <button className='absolute items-center w-[100px] border border-black border-solid hover:bg-black hover:text-white mt-10 rounded-2xl'
            onClick={() => setContactPopUp(true)}>Contact Us
            
          </button>
    </div> //Maybe compile media and about me
  )
}

export default AboutMe