import React, {useState} from 'react'
import { useEffect } from 'react'

import Two from '../src/Images/Slideshow/OnePOne.jpg'
import Three from '../src/Images/Slideshow/SlideshowBarDiner2.jpg'
import Four from '../src/Images/Slideshow/TwoPOne.jpg'
import Five from '../src/Images/Slideshow/SlideshowCocktail.jpg'
import Six from '../src/Images/Slideshow/Slideshow6.jpg'
import Seven from '../src/Images/Slideshow/Slideshow7.jpg'
import Eight from '../src/Images/Slideshow/Slideshow8.jpg'
import Nine from '../src/Images/Slideshow/Slideshow9.jpg'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RxDotFilled} from 'react-icons/rx'
import InitialPage from './InitialPage'

import Fade from 'react-reveal/Fade'

const slides = [ 
  {url: Two}, //scallop crudo
  {url: Three},  //another bar diner
  {url: Eight}, //pool side 
  {url: Five}, //five is cocktail
  {url: Six}, //pool side 
  {url: Seven}, //resteraunt 
  {url: Four}, //anotehr food
  {url: Nine} //villa
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


const [ showContent, setShowContent ] = useState(false)
  
  const handleFadeOutComplete = () => {
    setShowContent(true);
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
return (
  <div>
    {showContent ? (
      <Fade duration={5000}>
        <div className='relative overflow-auto bg-white shadow-lg fade-in'>
          <div className='justify-center'>
            <div className='relative justify-center overflow-x-hidden sm:w-screen lg:h-screen'>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`w-[375px] h-[300px] sm:w-screen  sm:h-full bg-no-repeat bg-cover bg-center rounded-2xl absolute transition-transform duration-${transitionDuration}`}
                  style={{
                    backgroundImage: `url(${slide.url})`,
                    transform: `translateX(${100 * (currentIndex - slideIndex)}%)`,
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
            <ArrowBackIosIcon size={80} />
          </div>
          {/* Right Arrow */}
          <div
            className='group-hover:block absolute lg:top-[50%] top-[25%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black'
            onClick={nextSlide}
          >
            <ArrowForwardIosIcon size={80} />
          </div>
        </div>
    </Fade>
    ) : (
     <InitialPage className='fade-out' onFadeOutComplete={() => setShowContent(true)}/>
    )}
  </div>
);
}

export default Home