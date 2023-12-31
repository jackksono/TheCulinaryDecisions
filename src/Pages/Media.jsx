import React from 'react'

import LasVegasWoman from '../Images/Icons/LasVegasWoman.jpg'
import ResortsWorld from '../Images/Icons/resortsWorld.jpg'
import NevadaWBC from '../Images/Icons/NevadaWBC.jpg'
import Mirage from '../Images/Icons/mirage.jpg'
import Mgm from '../Images/Icons/mgmgrand.png'
import FiftyEggs from '../Images/Icons/50eggs.jpg'
import BrownForeman from '../Images/Icons/brownforeman.jpg'
import Catch from '../Images/Icons/catch.jpg'
import Titos from '../Images/Icons/Titos.jpg'
import ReviewJournal from '../Images/Icons/ReviewJournal.jpg'
import Forbes from '../Images/Icons/forbes.jpg'

const Media = () => {

  return (
    <div className='flex flex-col items-center justify-center pt-40 bg-white'>
      <div className='relative flex items-center justify-center w-3/4 py-5 mx-auto text-center bg-black left-1/8 top-1/4'>
          <h1 className='flex items-center justify-center font-extrabold text-white xl:text-4xl font-Montserrat '>PRESS + AWARDS</h1>
      </div>

    <div className='flex sm:mt-20'>
        <div className='grid items-center justify-center grid-cols-2 mx-5 overflow-y-hidden sm:mx-0 sm:grid-cols-3 auto-cols-max sm:gap-4 lg:grid-cols-4 place-content-center '>
        
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale' alt='ReviewJournal' src={ReviewJournal} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale' alt='LasVegasWoman' src={LasVegasWoman} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform sm:scale-50 scale-75' alt='NevadaWBC' src={NevadaWBC} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform sm:scale-75 scale-75' alt='Mgm' src={Mgm} loading='lazy'></img>
          
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform sm:scale-75' alt='Mirage' src={Mirage} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform sm:scale-75' alt='ResortWorld' src={ResortsWorld} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform sm:scale-50 scale-50' alt='FiftyEggs' src={FiftyEggs} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform' alt='BrownForeman' src={BrownForeman} loading='lazy'></img>

          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform scale-75' alt='Catch' src={Catch} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform scale-75 ' alt='Titos' src={Titos} loading='lazy'></img>
          <img className='sm:w-[337px] sm:h-[337px] w-[150px] h-[150px] grayscale transform scale-75 ' alt='Forbes' src={Forbes} loading='lazy'></img>
        </div>
      </div>
    </div>
  )
}

export default Media