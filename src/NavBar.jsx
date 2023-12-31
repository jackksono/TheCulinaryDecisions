import React, { useState, useEffect, useRef } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'

import Logo from '../src/Images/Logo/PNG-02.png'

import Fade from 'react-reveal/Fade'

import { useClickAway } from "@uidotdev/usehooks";

import './index.css'

const Services = lazy(() => import('./Pages/Services'))
const Media = lazy(() => import('./Pages/Media'))
const AboutMe = lazy(() => import('./Pages/AboutMe'))
const Home = lazy(() => import('./Home'))
const ContactUs = lazy(() => import('./Pages/ContactUs'))

const NavBar = () => {
  const [ contactPopUp, setContactPopUp ] = useState(false);
  const [ isTransitionComplete, setIsTransitionComplete ] = useState(false);

  useEffect(() => {
    const toggle = document.querySelector('.nav');
    
    const timeoutId = setTimeout(() => {
      toggle.classList.remove('hidden');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  const homeLinkRef = useRef(null); 
  useEffect(() => {
    if (isTransitionComplete && homeLinkRef.current) {
      homeLinkRef.current.focus();
    }
  }, [isTransitionComplete]);

  setTimeout(() => {
    console.log(contactPopUp)
  }, 5000);
  
  const onToggleMenu = () => {
    const navLinks = document.querySelector('.nav-links');
    let tag = document.getElementById("menu");
    tag.name = tag.name === "close" ? "menu" : "close";
    setTimeout(() => {
      navLinks.classList.toggle('hidden');
    }, 300); // Adjust the delay time as needed
  };
  

  const toggleOff = () => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    tag.name = tag.name === "menu" ? "close" : "menu"
    navLinks.classList.toggle('hidden')
  }

  const clickAway = useClickAway(() => {
    const navLinks = document.querySelector('.nav-links')
    let tag = document.getElementById("menu")
    if (tag.name === "menu") { 
      return;
    }
    tag.name = tag.name === "close" ? "menu" : "close"
    navLinks.classList.toggle('hidden')
    // console.log(navLinks.classList)
  })
  
  return (
    <>
    
      <Fade duration={3000} onReveal={() => setIsTransitionComplete(true)}>
        <nav className="hidden nav w-screen sm:p-2 top-0 fixed inset-x-0 bg-white h-[100px] drop-shadow-sm z-10"
        ref={clickAway}>
            <div className="z-0">
              <img 
                src={Logo}
                alt="logo"
                className="z-0 h-[175px] w-[300px] lg:h-[200px] lg:w-[400px] absolute top-1/2 left-1/2 sm:transform sm:scale-150 mt-2 -translate-x-1/2 -translate-y-1/2"
                loading='lazy'
                style={{ zIndex: 0 }}>
              </img>
            </div>
            
            <div className="flex pt-10 pl-5 text-2xl text-color-text sm:hidden">
              <button>
                  <ion-icon name="menu" id="menu" onClick={onToggleMenu} ></ion-icon>
              </button>
            </div>
            <ContactUs trigger={contactPopUp} setTrigger={setContactPopUp}></ContactUs>
            <div class="nav-links hidden sm:visible bg-gray-200 w-[180px] mt-7 sm:mt-0 h-screen sm:bg-none sm:bg-transparent duration-500 sm:static sm:h-0 sm:flex-row flex-col sm:pt-16 sm:px-5 sm:block sm:w-auto z-20" >
              <ul class={`font-medium left-0 sm:flex sm:justify-between w-full sm:h-full sm:px-0 md:px-5 lg:px-20 px-4 sm:p-0 mt-4 sm:pb-4 sm:gap-4 sm:flex-row sm:space-x-8 sm:mt-0 `}>
                
                  <div className="z-10 flex flex-col items-start pt-8 sm:pt-0 sm:items-center sm:flex-row sm:bg-transparent sm:gap-5 md:gap-10">
                    <Link to="/">
                      <button 
                        ref={homeLinkRef}
                        className="text-[10px] py-3 font-Montserrat focus:outline-none sm:text-xs lg:text-lg font-semibold sm:duration-200 bg-primary-500 text-black font-Kanit hover:scale-110 duration-500 focus:underline focus:underline-black focus:underline-offset-4"
                        tabIndex={0}
                        onClick={() => {toggleOff()}}>
                        HOME
                      </button>
                    </Link>
                    <Link to="/team">
                      <button 
                        className="font-Montserrat text-[10px] py-3 sm:text-xs lg:text-lg font-semibold sm:duration-200 md:bg-primary-500 text-black hover:scale-110 duration-500 focus:underline focus:underline-black focus:underline-offset-4"
                        onClick={() => {toggleOff()}}
                        >
                        EXECUTIVE LEADERSHIP
                      </button>
                    </Link>
                  </div>
                  
                
                  <div className="left-0 flex flex-col items-start sm:flex-row sm:bg-transparent sm:items-center sm:flex-non sm:gap-5 md:gap-10">
                    <Link to="/services">
                      <button 
                        className="font-Montserrat text-[10px] py-3 sm:text-xs lg:text-lg font-semibold sm:duration-200 md:bg-primary-500 text-black hover:scale-110 duration-500 focus:underline focus:underline-black focus:underline-offset-4"
                        onClick={() => {toggleOff()}}
                      >
                        SERVICES
                      </button>
                    </Link>

                    <Link to="/media">
                      <button 
                        className="font-Montserrat text-[10px] py-3 sm:text-xs lg:text-lg font-semibold sm:duration-200 bg-primary-500 text-black hover:scale-110 duration-500 focus:underline focus:underline-black focus:underline-offset-4"
                        onClick={() => {toggleOff()}}>
                        MEDIA
                      </button>
                    </Link>

                    <span className="" >
                        <button className="font-Montserrat text-[10px] py-3 sm:text-xs lg:text-lg font-semibold sm:duration-200 bg-primary-500 text-black hover:scale-110 duration-500 focus:underline focus:underline-black focus:underline-offset-4"
                            value="click"
                            onClick={() => {
                              setContactPopUp(true)
                              toggleOff()}}>
                            CONTACT US
                        </button>
                    </span>
                  </div>
              </ul>
            </div>
          </nav>
        </Fade>
        
        <Suspense fallback={<div className='items-center justify-center'><div>Loading...</div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<AboutMe />} />
            <Route path="/media" element={<Media />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </Suspense>
    </>
  )
}

export default NavBar