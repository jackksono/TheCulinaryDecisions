import React, {useState} from 'react'
import { useEffect } from 'react'

import One from '../src/Images/Slideshow/One.jpg'
import Two from '../src/Images/Slideshow/OnePOne.jpg'
import Three from '../src/Images/Slideshow/Two.jpg'
import Four from '../src/Images/Slideshow/TwoPOne.jpg'
import Five from '../src/Images/Slideshow/Three.jpg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RxDotFilled} from 'react-icons/rx'


const slides = [
  {url: Two},
  {url: One},
  {url: Three},
  {url: Four},
  {url:Five}
]

const delay = 3000;
const transitionDuration = 500;

const Home = () => {
  const [ currentIndex, setCurrentIndex ] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex]);

const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIdex = isFirstSlide ? slides.length - 1 : currentIndex -1;
    setCurrentIndex(newIdex);
}
const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
}
const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
}

  
return (
  <div>
    <div className='relative overflow-hidden bg-white bg-center bg-cover shadow-lg lg:w-screen'>
      <div className='justify-center'>
        <div className='w-[375px] h-[300px] justify-center lg:w-screen lg:h-screen relative'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`w-[375px] h-[300px] lg:w-full lg:h-full bg-no-repeat bg-cover bg-center rounded-2xl absolute transition-transform duration-${transitionDuration}`}
              style={{
                backgroundImage: `url(${slide.url})`,
                transform: `translateX(${-100 * (currentIndex - slideIndex)}%)`,
                opacity: currentIndex === slideIndex ? 1 : 0,
                transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
              }}
            ></div>
          ))}
        </div>
        <div className='absolute items-center justify-center pb-10 transform -translate-x-1/2 bottom-24 left-1/2 place-content-center'>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`inline-block mx-2 text-4xl transition duration-150 ease-in-out cursor-pointer hover:text-white hover:scale-150 ${
                currentIndex === slideIndex ? 'text-white' : 'text-gray-300'
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      {/* Left Arrow */}
      <div
        className='group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black'
        onClick={prevSlide}
      >
        <ArrowBackIosIcon size={60} />
      </div>
      {/* Right Arrow */}
      <div
        className='group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black'
        onClick={nextSlide}
      >
        <ArrowForwardIosIcon size={60} />
      </div>
    </div>
  </div>
);
}

export default Home