import React, {useState} from 'react'

import Drew from '../Images/Headshots/DrewHead.jpg'
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
  const { ref: zoom3Ref, inView: zoom3InView } = useInView(zoomOptions);


  
  return (
    <div>
      <div className='shadow-lg'>
        <img 
        src={Dining}
        alt='diningPhoto'
        className='relative object-cover w-screen object-top h-[700px] shadow-lg'
        ></img>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full'>
          <h1 className='flex p-2 font-bold text-white border border-white font-Montserrat text-7xl'>Meet The Team</h1>
        </div>
      </div>

      <div ref={zoom1Ref}>
        <Fade right duration={2000} when={zoom1InView}>
          <div className='grid justify-center w-screen h-full grid-cols-2 p-5 text-black shadow-sm place-items-center '>
            <img 
            className='shadow-xl rounded-full  h-[500px] w-auto'
            alt='Headshot'
            src={Lev}>
            </img>
            <div className='pr-20'>
              <h1 className='text-4xl font-extrabold'>Levan Denatto</h1>
              <p className='relative pt-5 font-sans text-xl text-black '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, dicta temporibus id sapiente aut veniam natus ad neque expedita nulla ea commodi 
              animi nisi dignissimos. Quo, aspernatur? Sapiente, cumque velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur dolorem ab, commodi ducimus corrupti harum a quam quidem, dolores id nostrum voluptatibus cumque vel? Reprehenderit nisi distinctio consequatur atque!
              Perspiciatis mollitia numquam harum hic praesentium laborum aliquid labore in voluptates? Repellat non voluptatibus illo officia quaerat, laudantium recusandae modi ipsam enim a in quis, beatae reprehenderit? Sunt, enim odit?
              Veritatis aliquid assumenda ad aperiam velit error ea similique cumque laborum, unde provident dolor earum ullam at eligendi vel id enim excepturi consectetur exercitationem illo consequuntur nesciunt. Accusamus, quidem ipsam.
              Eum aliquam, architecto, aspernatur animi corrupti inventore ab numquam necessitatibus ad voluptas illum a maxime, reiciendis ipsa. Dolorum, nisi sit vitae animi libero, illo in ullam aperiam quo aliquid distinctio.
              Pariatur deleniti omnis nesciunt numquam eius obcaecati, ipsa quibusdam dicta exercitationem quis nulla vero aliquid officia. Perferendis eaque praesentium laudantium exercitationem vero sunt eum nostrum dolorem nemo. Temporibus, error totam?</p>
            </div>
          </div>
        </Fade>
      </div>

      <div ref={zoom2Ref}>
        <Fade left duration={2000} when={zoom2InView}>
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
      </div>

      <div ref={zoom3Ref}>
        <Fade right duration={2000} when={zoom3InView}>
          <div className='grid justify-center w-screen h-full grid-cols-2 p-5 text-black shadow-sm place-items-center '>
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
      </div>
      
      <div className='pt-80'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores harum nulla dicta ipsam explicabo commodi possimus. Tempore quaerat facilis similique incidunt dolores? Corrupti ea inventore quis, voluptatem corporis qui ipsum. Laboriosam sunt debitis quasi voluptas id totam maiores esse omnis dolorum, ad porro et, voluptatibus iusto laborum, perferendis est. Doloribus ab temporibus nobis impedit, illum iure praesentium magni deleniti quisquam sint voluptatem soluta pariatur fugiat quam voluptas. Laborum, nobis exercitationem aut molestias ipsa, tempore at molestiae sapiente quas vitae culpa eum architecto facere nulla ab non nesciunt, quaerat delectus obcaecati. Quod inventore cum harum deleniti amet numquam quae dicta doloribus ut sed pariatur culpa non, odio, nam accusantium rem illum ipsam aliquam impedit, quis cupiditate eum? Molestiae voluptatibus, labore maiores et nisi voluptatum cumque eligendi. Accusantium maxime esse libero ex labore? Placeat laudantium labore totam voluptate debitis. Doloremque architecto illum quas alias vitae aperiam iste provident molestiae ullam unde, quia nostrum laudantium a nihil sunt voluptatibus ut, officiis commodi iure quo. Optio placeat consequatur non praesentium dolorem ad corrupti, asperiores fugiat esse exercitationem voluptas recusandae voluptatibus dolor eaque rerum? Voluptate sed magni voluptatum quos ducimus tempora deleniti magnam alias eligendi, officiis iste consequatur odit tenetur eum dignissimos? Corporis eveniet commodi veritatis ipsa eos. Tenetur rerum fuga minus magni doloremque. Necessitatibus doloribus dolorem pariatur, laudantium dolore cum nihil exercitationem error facilis modi eius fugit veniam nemo? Doloribus recusandae inventore voluptatibus, cupiditate obcaecati eveniet quo aliquid unde velit exercitationem suscipit atque libero quis a magni cum voluptatum repudiandae vero ipsum quam quia perferendis, maiores rerum? Suscipit possimus omnis fugiat aliquam alias quis assumenda, libero enim aliquid perspiciatis. Rerum tempore dicta nemo! Itaque quasi minima cupiditate, provident excepturi hic sit dolorem. Exercitationem odit aspernatur laudantium, amet dolorem molestiae et expedita reprehenderit debitis dicta? Magnam, architecto exercitationem nobis illo molestiae ipsam quo, neque minus recusandae aut ipsum deserunt? Porro repellat eveniet temporibus dolorem rerum labore accusantium omnis, beatae, corporis recusandae voluptatum magni commodi facilis explicabo maxime fugiat id ut odio fugit sunt natus praesentium, mollitia minima ratione. Soluta quis quas consequatur modi neque expedita, corporis et doloremque sunt, vero vitae inventore perspiciatis sapiente quos? Error commodi non fugiat itaque aliquam nisi culpa temporibus vitae distinctio amet quo nemo rerum, earum tempore! Aspernatur libero doloremque, maiores modi nostrum et? Corrupti rem libero corporis eius placeat laboriosam sed eaque veritatis quae recusandae asperiores minima, a doloremque, voluptates incidunt! Quam minima facilis soluta maxime provident, consequatur eos. In ad omnis a perspiciatis repudiandae minus recusandae porro maiores earum, sint quod, saepe dignissimos similique quia nisi dolores, beatae optio eaque provident sed modi unde. Porro, cupiditate ex sunt sit magni ipsa voluptatum, inventore similique veniam debitis quo harum possimus fugiat impedit nostrum animi, a vitae soluta reiciendis tempore eveniet unde saepe natus atque. Obcaecati, ab facere! Necessitatibus veritatis itaque suscipit optio, soluta quo nesciunt, vero velit aliquid adipisci, veniam ab magnam. Impedit magnam laudantium consequatur voluptatem tempora maxime repudiandae rerum libero laboriosam fugit minus dolores nihil ut, quo et cumque. Fuga ducimus vel culpa et sit sint sed.</div>
    </div> //Maybe compile media and about me
  )
}

export default AboutMe