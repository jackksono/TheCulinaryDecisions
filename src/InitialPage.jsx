import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'

const InitialPage = ({ onFadeOutComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const fadeOutAnimationDuration = 1000;
      const timer = setTimeout(() => {
        navigate('/'); 
      }, fadeOutAnimationDuration);

      return () => clearTimeout(timer);
    }
  }, [fadeOut, navigate]);
  
  return (
    <div className='h-screen bg-black'>

    
    <div
      className={`fixed w-screen h-screen bg-Logo mt-60 sm:mt-0 bg-no-repeat items-center sm:bg-center bg-contain flex justify-center transition-opacity ${
        fadeOut ? 'fade-out' : ''
      }`}
    >
      </div>
    </div>
  );
};

export default InitialPage;
