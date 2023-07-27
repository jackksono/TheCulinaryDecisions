import React, { useState } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Headroom from 'react-headroom'
import {useClickAway} from '@uidotdev/usehooks'

// import ContactUs from './Pages/ContactUs'
// import Home from './Home'
// import AboutMe from './Pages/AboutMe'
// import Media from './Pages/Media'
// import AboutUs from './Pages/AboutUs'

const AboutUs = lazy(() => import('./Pages/AboutUs'))
const Media = lazy(() => import('./Pages/Media'))
const AboutMe = lazy(() => import('./Pages/AboutMe'))
const Home = lazy(() => import('./Home'))
const ContactUs = lazy(() => import('./Pages/ContactUs'))

const NavBar = () => {
    const [ contactPopUp, setContactPopUp ] = useState(false)
  return (
    <>
    <Headroom>
        <nav className="w-screen p-2 top-0 lg:static fixed inset-x-0 bg-white h-[100px] drop-shadow-2xl justify-content-end">
            <div className="">
              <img 
            //   src={Logo1}
              alt="logo"
              className="h-[100px] w-[100px] lg:h-[200px] lg:w-[225px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-10"></img>
            </div>
            <div className="pt-6 text-2xl text-black lg:hidden">
              <button >
                  
                </button>
            </div>
            
            <div class="nav-links  bg-blackPaper w-[360px] lg:bg-none lg:bg-transparent duration-500 lg:static lg:h-0  lg:flex-row flex-col  lg:pt-16 lg:px-10 lg:block lg:w-auto">
              <ul class="font-medium left-0 lg:flex lg:justify-between w-full lg:h-full lg:px-20 p-4 lg:p-0 mt-4 pb-4 gap-4 lg:flex-row lg:space-x-8 lg:mt-0"
              >
                
                  <div className="flex items-center lg:bg-transparent lg:gap-10 ">
                    <Link to="/">
                      <button className="text-[10px] font-Montserrat lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-black lg:text-color-shrimp font-Kanit hover:scale-125 duration-500">
                        HOME
                      </button>
                    </Link>
                  </div>
                
                  <div className="left-0 flex flex-col lg:flex-row lg:bg-transparent lg:items-center lg:flex-non lg:gap-16">
                  
                    <Link to="/about-us">
                      <button className="font-Montserrat text-[10px] lg:text-xl lg:font-semibold lg:duration-200 md:bg-primary-500 text-black hover:scale-125 duration-500">
                        SERVICES
                      </button>
                    </Link>

                    <Link to="/team">
                      <button className="font-Montserrat text-[10px] lg:text-xl lg:font-semibold lg:duration-200 md:bg-primary-500 text-black hover:scale-125 duration-500">
                        EXECUTIVE LEADERSHIP
                      </button>
                    </Link>
                    

                    <Link to="/media">
                      <button className="font-Montserrat text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-black hover:scale-125 duration-500">
                        MEDIA
                      </button>
                    </Link>

                    <span className="" >
                        <button className="font-Montserrat text-[10px] lg:text-xl lg:font-semibold lg:duration-200 bg-primary-500 text-black hover:scale-125 duration-500"
                            value="click"
                            onClick={() => setContactPopUp(true)}>
                            CONTACT US
                        </button>
                        <ContactUs   trigger={contactPopUp} setTrigger={setContactPopUp}></ContactUs>
                    </span>
                  </div>
              </ul>
            </div>
            
        </nav>
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