import React from 'react'

import Icon2 from '../Images/Icons/IconPic1.jpg'
import Icon4 from '../Images/Icons/icon4.jpg'
import Icon5 from '../Images/Icons/Icon5.jpg'
import Mirage from '../Images/Icons/mirage.jpg'
import Mgm from '../Images/Icons/mgmgrand.png'
import ResortWorld from '../Images/Icons/ze4carnpjqzdyuvcsi3m.webp'

const Media = () => {

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white'>
      <div className='relative z-10 flex items-center justify-center w-3/4 py-5 mx-auto text-center bg-black left-1/8 top-1/4'>
          <h1 className='flex items-center justify-center font-extrabold text-white xl:text-4xl font-Montserrat '>PRESS + AWARDS</h1>
      </div>

    <div className='flex mt-72'>
        <div className='grid items-center justify-center grid-cols-5 gap-4 overflow-y-hidden place-content-center '>
          <img className='w-[337px] h-[337px]' alt='icon1' src='https://static.wixstatic.com/media/355ff6_dc41f715debd4e9d89f0a2592adeaeaa~mv2.jpg/v1/fill/w_337,h_337,q_90/355ff6_dc41f715debd4e9d89f0a2592adeaeaa~mv2.webp'></img>
          <img className='w-[337px] h-[337px]' alt='icon2' src={Icon2}></img>
          <img className='w-[337px] h-[337px]' alt='icon3' src='https://static.wixstatic.com/media/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.jpg/v1/fill/w_337,h_337,q_90/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.webp%201x,%20https://static.wixstatic.com/media/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.jpg/v1/fill/w_674,h_674,q_90/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.webp%202x,%20https://static.wixstatic.com/media/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.jpg/v1/fill/w_1011,h_1011,q_90/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.webp%203x,%20https://static.wixstatic.com/media/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.jpg/v1/fill/w_1348,h_1348,q_90/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.webp%204x,%20https://static.wixstatic.com/media/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.jpg/v1/fill/w_1685,h_1685,q_90/355ff6_59ba58f4fefa4adba75d4d9b66d243ee~mv2.webp%205x'></img>
          <img className='w-[337px] h-[337px] grayscale' alt='icon4' src={Icon4}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>

          <img className='w-[337px] h-[337px] grayscale transform scale-75' alt='mgm' src={Mgm}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-75' alt='mirage' src={Mirage}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-75' alt='resortsworld' src={ResortWorld}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>

          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>
          <img className='w-[337px] h-[337px] grayscale transform scale-50' alt='icon5' src={Icon5}></img>
        </div>
      </div>
    </div>
  )
}

export default Media