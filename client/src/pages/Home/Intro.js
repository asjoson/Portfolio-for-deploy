import React from 'react'
import { useSelector } from 'react-redux';
import { scrollToElement } from '../../components//scrollUtils';

function Intro() {
  const { portfolioData} = useSelector((state) => state.root);
  const {intro} = portfolioData;
  const {name , welcomeText, caption, description} = intro;
  
 
  const handleClick = () => {
    scrollToElement('aboutme');
  };


  return (
    
    <div id="intro" className='h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10'>
    
        <h1 className='text-white text-2xl'>{welcomeText || ''}</h1>
        <h1 className=' text-7xl sm:text-3xl text-secondary font-semibold'>{name || ''}</h1>
        <h1 className=' text-7xl sm:text-3xl text-white font-semibold'>
            {caption || ''}
        </h1>
        <p className="text-white w-2/3">
            {description || ''}
        </p>
        <button onClick={handleClick} className='border-2 border-tertiary text-tertiary px-10 py-3 rounded'>Get Started</button>
    </div>
   
  );
}

export default Intro