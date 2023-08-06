import React, { useState, useEffect } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Headroom from 'react-headroom'

import Logo from '../src/Images/Logo/PNG-02.png'

import Fade from 'react-reveal/Fade'

const AboutUs = lazy(() => import('./Pages/AboutUs'))
const Media = lazy(() => import('./Pages/Media'))
const AboutMe = lazy(() => import('./Pages/AboutMe'))
const Home = lazy(() => import('./Home'))
const ContactUs = lazy(() => import('./Pages/ContactUs'))

const NavBar = () => {
  const [ contactPopUp, setContactPopUp ] = useState(false)

  useEffect(() => {
    const toggle = document.querySelector('.toggle');
    
    const timeoutId = setTimeout(() => {
      toggle.classList.remove('hidden');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
    <Headroom>
      <Fade duration={3000}>
        <nav className="hidden toggle w-screen p-2 top-0 lg:static fixed inset-x-0 bg-white h-[100px] drop-shadow-2xl justify-content-end">
            <div className="">
              <img 
              src={Logo}
              alt="logo"
              className="h-[100px] w-[100px] lg:h-[200px] lg:w-[400px] absolute top-1/2 left-1/2 transform scale-150 mt-2  -translate-x-1/2 -translate-y-1/2"></img>
            </div>
            <div className="pt-6 text-2xl text-black lg:hidden">
              <button >
                  
                </button>
            </div>
            
            <div class="nav-links  bg-blackPaper w-[360px] lg:bg-none lg:bg-transparent duration-500 lg:static lg:h-0  lg:flex-row flex-col  lg:pt-16 lg:px-5 lg:block lg:w-auto">
              <ul class="font-medium left-0 lg:flex lg:justify-between w-full lg:h-full lg:px-20 p-4 lg:p-0 mt-4 pb-4 gap-4 lg:flex-row lg:space-x-8 lg:mt-0">
                
                  <div className="flex items-center lg:bg-transparent lg:gap-10 ">
                    <Link to="/">
                      <button className="text-[10px] font-Montserrat lg:text-lg lg:font-semibold lg:duration-200 bg-primary-500 text-black lg:text-color-shrimp font-Kanit hover:scale-110 duration-500">
                        HOME
                      </button>
                    </Link>
                    <Link to="/team">
                      <button className="font-Montserrat text-[10px] lg:text-lg lg:font-semibold lg:duration-200 md:bg-primary-500 text-black hover:scale-110 duration-500">
                        EXECUTIVE LEADERSHIP
                      </button>
                    </Link>
                  </div>
                  
                
                  <div className="left-0 flex flex-col lg:flex-row lg:bg-transparent lg:items-center lg:flex-non lg:gap-10">
                    <Link to="/about-us">
                      <button className="font-Montserrat text-[10px] lg:text-lg lg:font-semibold lg:duration-200 md:bg-primary-500 text-black hover:scale-110 duration-500">
                        SERVICES
                      </button>
                    </Link>

                   
                    

                    <Link to="/media">
                      <button className="font-Montserrat text-[10px] lg:text-lg lg:font-semibold lg:duration-200 bg-primary-500 text-black hover:scale-110 duration-500">
                        MEDIA
                      </button>
                    </Link>

                    <span className="" >
                        <button className="font-Montserrat text-[10px] lg:text-lg lg:font-semibold lg:duration-200 bg-primary-500 text-black hover:scale-110 duration-500"
                            value="click"
                            onClick={() => setContactPopUp(true)}>
                            CONTACT US
                        </button>
                        <ContactUs trigger={contactPopUp} setTrigger={setContactPopUp}></ContactUs>
                    </span>
                  </div>
              </ul>
            </div>
          </nav>
        </Fade>
        </Headroom>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<AboutMe />} />
            <Route path="/media" element={<Media />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
      </Suspense>
    </>
  )
}

export default NavBar