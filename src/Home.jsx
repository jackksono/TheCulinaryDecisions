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
        <div className='relative overflow-auto overflow-x-hidden bg-white sm:shadow-lg pt-28 fade-in'>
          <div className='justify-center overflow-y-hidden'>
            <div className='relative justify-center w-screen h-[350px] sm:h-screen '>
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className={`h-[350px] w-screen  sm:h-full bg-no-repeat bg-cover bg-center rounded-2xl absolute transition-transform duration-${transitionDuration}`}
                  loading='lazy'
                  style={{
                    backgroundImage: `url(${slide.url})`,
                    transform: `translateX(${100 * (currentIndex - slideIndex)}%)`,
                    opacity: currentIndex === slideIndex ? 1 : 0,
                    transition: `opacity ${transitionDuration}ms ease-in-out, transform ${transitionDuration}ms ease-in-out`,
                  }}
                ></div>
              ))}
            </div>
            <div className='absolute items-center justify-center transform -translate-x-1/2 sm:pb-10 sm:bottom-24 left-1/2 place-content-center'>
              {slides.map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className={`inline-block sm:mx-2 sm:text-4xl transition duration-150 ease-in-out cursor-pointer hover:text-white hover:scale-150 ${
                    currentIndex === slideIndex ? 'text-white' : 'text-gray-300'
                  }`}
                  loading='lazy'
                >
                  <RxDotFilled />
                </div>
              ))}
            </div>
          </div>
          {/* Left Arrow */}
          <div
            className='group-hover:block absolute sm:top-[50%] top-[60%] -translate-x-0 translate-y-[-50%] left-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black'
            onClick={prevSlide}
          >
            <ArrowBackIosIcon size={80} />
          </div>
          {/* Right Arrow */}
          <div
            className='group-hover:block absolute sm:top-[50%] top-[60%] -translate-x-0 translate-y-[-50%] right-5 rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-white hover:text-black'
            onClick={nextSlide}
          >
            <ArrowForwardIosIcon size={80} />
          </div>
        </div>
    </Fade>
    ) : (
     <InitialPage className='fade-out' onFadeOutComplete={() => setShowContent(true)}/>
    )}
    
    <div>
      {showContent ? (
        <>
        <div className='flex justify-center pt-5 text-center sm:pt-10'>
          <div className='flex w-3/4 text-xl font-extrabold text-black sm:text-3xl font-Montserrat'>
            Culinary Decisions, make the best informed decision for <br /> Luxury Lifestyle Hospitality Development, Management and Consulting.
          </div>
        </div>

        <div className='flex justify-center pt-10 pb-20 text-center '>
          <div className='flex w-3/4 text-sm font-semibold tracking-normal text-justify text-black sm:text-lg font-Montserrat'>
            Culinary Decisions empowers you to make well-informed choices for the world of upscale hospitality development, 
            management, and consulting. Our dedicated team is deeply engaged at every level, playing an integral role in curating,
            developing, and successfully managing luxury concepts for hotels and restaurants. We deliver synergistic results through our 
            seasoned experts in all facets of high-end hospitality, consistently upholding impeccable standards. Following a comprehensive 
            evaluation, our tailored consulting services ensure efficient and effective operations, aligning seamlessly with your company culture 
            and dynamics. Entrust Culinary Decisions to strike the perfect balance between opulence and efficiency, thus enhancing the connections 
            between clients, communities, and our team members in our unwavering pursuit of excellence.
          </div>
        </div>
        </>
      ) : null}
    </div>
  </div>
);
}

export default Home