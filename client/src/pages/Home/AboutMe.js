import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import Reveal from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

function AboutMe() {
  const { portfolioData} = useSelector((state) => state.root);
  const { aboutme } = portfolioData;
  const { lottieURL , description1, skills, description2 } = aboutme;
  

 
  return (
    
    <div id="aboutme">
      <Reveal triggerOnce>
       <Zoom>
      <SectionTitle title="About Me" />
      <div className='flex w-full items-center sm:flex-col'>
        <div className='h-[40vh w-1/2 sm:w-full'>
          <lottie-player
            src={lottieURL}
            background="transparent"
            speed="2"
            autoplay
          ></lottie-player>
        </div>
        <div className='flex text-white flex-col gap-5 w-1/2 sm:w-full'>
          <p>
            {description1}
          </p>
          <p>
            {description2}
          </p>
        </div>
      </div>
      <div className='py-5'>
          <h1 className='text-tertiary text-2xl'>
            Here are the technologies that I'm using and most comfortable with:
          </h1>
          <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
           <div className='border border-tertiary py-3 px-10'>
            <h1 className='text-tertiary'>{skill}</h1>
           </div>
          ))}
          </div>
        </div>
        </Zoom>
        </Reveal>
    </div>
    
  )
}

export default AboutMe