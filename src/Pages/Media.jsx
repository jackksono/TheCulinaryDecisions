import React from 'react'

import BarPhoto from '../Images/StockImages/BarPhoto.jpg'

import { useInView } from 'react-intersection-observer'

import Article1 from '../Images/Articles/Article1.png'
import Article2 from '../Images/Articles/Article2.png'
import Article3 from '../Images/Articles/Article3.png'
import Article4 from '../Images/Articles/Article4.png'

import Zoom from 'react-reveal/Zoom'

import { BsInstagram, BsTwitter } from 'react-icons/bs'


const Media = () => {
  
  const zoomOptions = {
    threshold: 0.3, // Adjust this threshold value to your desired visibility trigger point
    triggerOnce: false, // Set to true so that the animation only happens once
  };
  const { ref: zoom1Ref, inView: zoom1InView } = useInView(zoomOptions);


  return (
    <div>
      <div className='shadow-lg -z-0'>
        <img 
        src={BarPhoto}
        alt='barPhoto'
        className='relative object-cover w-screen object-top h-[700px] shadow-lg'
        ></img>
        <div className='absolute top-0 left-0 flex items-center justify-center w-full '>
          <h1 className='flex p-2 font-bold text-white border border-white font-Montserrat text-7xl lg:mt-96'>Media and Articles</h1>
        </div>
      </div>
      
      <div className='z-10 flex items-center justify-center pt-20 space-x-4 font-sans text-5xl italic text-black underline'>
        <a href='https://instagram.com/' target="_blank" rel="noopener noreferrer" className='inline-block'>
          <BsInstagram className='cursor-pointer hover:scale-110 '/> 
        </a> 
        <p>Check us out on Social Media </p>
        <a href='https://twitter.com/' target="_blank" rel="noopener noreferrer" className='inline-block'>
          <BsTwitter className='cursor-pointer hover:scale-110'/>
        </a>
      </div>

      <div className='pt-20 text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias dolorum deserunt natus ducimus, iure voluptatum, voluptates animi distinctio pariatur a doloribus atque praesentium quaerat? Assumenda id ipsum laboriosam aut labore nisi exercitationem, cupiditate harum magnam suscipit! Tempora recusandae tenetur similique ipsam sequi iure, porro cumque quas vero fugiat laudantium at velit inventore quaerat autem itaque quae natus dicta eius dignissimos adipisci repellendus! Ea cum saepe, mollitia nemo, aperiam laboriosam doloremque facere magnam hic quod voluptate harum, nam officia et iste unde numquam aliquid cupiditate adipisci labore! Perferendis modi minima quae repellat distinctio, consequuntur ab. Veritatis autem ab possimus enim quos nam maiores, inventore odit aperiam animi tempora esse incidunt quaerat quas expedita. Ullam, soluta quo! Perferendis exercitationem pariatur ad beatae dignissimos sequi obcaecati? Dignissimos id pariatur ea, praesentium maiores in facere necessitatibus, tempore fuga alias voluptatum. Eius distinctio reiciendis officia unde, et vero in error vel? Velit, rerum repellendus. Aspernatur esse sequi cumque, aliquam dolor at sint, commodi odit rerum ex laborum voluptate sapiente obcaecati dignissimos ea. Obcaecati error, odio harum beatae earum quam natus vel blanditiis, ducimus officiis facilis doloremque! Expedita, quidem quia? Quaerat, maxime soluta recusandae et enim harum similique magnam minus dicta? Tempora quo quis obcaecati saepe ea tempore hic officia eum voluptatem repudiandae facilis sequi eius odit explicabo minus eveniet asperiores autem repellat molestias sunt, laudantium quaerat laborum! Consequuntur, voluptate dolore cupiditate quidem ipsam nihil eveniet ullam cumque dignissimos aliquid optio temporibus aspernatur atque quos molestiae. Delectus tempora excepturi est alias ad ipsum voluptatem aut! Ipsam sequi delectus sed iste ipsa labore? Ipsum sint eveniet sunt perspiciatis repudiandae nulla, dolor rem ipsam veniam, tempore beatae dicta repellat ratione, maxime in ad fuga incidunt mollitia. Veniam, quasi autem dignissimos perferendis iure ullam maxime deleniti unde cupiditate repellat consequatur doloribus quos voluptatibus non et? Ab nam doloremque vitae, deleniti eius quia voluptatibus vero odit excepturi harum accusamus aperiam nesciunt ipsum a impedit illo voluptate maxime ratione corporis nulla quaerat animi totam amet quidem? Corrupti facere quo veritatis atque voluptatem incidunt, modi impedit alias architecto sapiente eaque reprehenderit quaerat corporis. Facilis nobis fugit, rerum impedit quaerat tempore ipsam atque architecto optio, consectetur commodi itaque minus? Cumque vitae expedita facilis quos quo minus neque maxime dolor inventore sit dolorem obcaecati, tempora a? Molestias aliquid illo facilis quibusdam, recusandae enim veritatis adipisci officiis quae maiores voluptatem id, autem sequi magni! Cupiditate excepturi corrupti laborum exercitationem libero ipsum adipisci officia alias distinctio, obcaecati labore numquam mollitia reiciendis unde, veritatis eaque est, nulla omnis nostrum ipsam facere dolorem? Totam, eius. Sapiente perferendis autem possimus adipisci pariatur porro animi ea tempora dolore soluta consequatur cum non accusantium, dolores rerum illum optio veritatis id illo? Est animi nobis qui saepe id rerum numquam dolores, distinctio voluptatibus. Modi consequatur inventore et vitae fugiat? Accusamus, doloribus quia. Accusamus asperiores, velit delectus accusantium dolorum harum vitae? Eaque impedit iste laboriosam modi debitis assumenda dolorem possimus? Corporis soluta labore esse, ad dicta modi, saepe id nemo nihil consectetur explicabo, culpa distinctio! Quidem ullam obcaecati esse voluptas quasi incidunt?</div>
      
      <div className='z-10 flex items-center justify-center pt-20 space-x-4 font-sans text-5xl italic text-black underline'>Check Out Media Related Posts</div>

      <div ref={zoom1Ref}>
        <Zoom bottom duration={2000} when={zoom1InView}>
          <div className='grid w-screen grid-cols-4 pt-20 pb-20'>
            <a href='https://www.lamag.com/digestblog/chef-andrew-carroll-catch-shares-10-favorite-dishes-l/' 
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black hover:scale-110 '>
              <p className='flex pb-48 text-xl italic text-black '>Andrew Caroll Shares his top 10 Dishes!</p>
              <img src={Article1} alt='Article1' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
            <a href='https://observer.com/2016/10/catch-takes-scene-dining-to-new-heights-in-la/'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black hover:scale-110'>
              <p className='flex pb-48 text-xl italic text-black '>Catch Takes Dining Scences to new Heights</p>
              <img src={Article2} alt='Article2' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
            <a href='https://www.reviewjournal.com/entertainment/food/las-vegas-chefs-prepare-vegan-feast-that-was-a-hit-in-new-york-1835770/'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black hover:scale-110'>
              <p className='flex pb-48 text-xl italic text-black '>Chef Prepares Vegan Feast in New York!</p>
              <img src={Article3} alt='Article3' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
            <a href='https://www.visitwesthollywood.com/stories/award-winning-chefs-restaurants-in-weho/'
              target='_blank'
              rel="noopener noreferrer"
              className='flex items-center justify-center w-auto h-auto font-bold text-black hover:scale-110'>
              <p className='flex pb-48 text-xl italic text-black '>Where to Find Award Winning Chefs in West Hollywood</p>
              <img src={Article4} alt='Article4' className='mt-20 absolute w-[400px] h-[200px] hover:scale-125 cursor-pointer'></img>
            </a>
          </div>
        </Zoom>
      </div>
      
    </div>
  )
}

export default Media