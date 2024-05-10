import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import Reveal from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

function Contact() {
    const { portfolioData } = useSelector((state) => state.root);
    const { contact }  = portfolioData;
  return (
    <div>
      <Reveal triggerOnce>
        <Zoom>
        <SectionTitle title='Contact' />
        <div className='flex sm:flex-col items-center justify-between'>
           <div className="flex flex-col gap-1">
           <h1 className='text-tertiary'>{'{'}</h1>
            {Object.keys(contact).map((key) => (
              key !== "_id" && (
                <p className='ml-5' key={key}>
                    <span className='text-tertiary'>"{key}" : </span>  
                    <span className='text-tertiary'>"{contact[key]}"</span>
                </p>
            )
            ))}
            <h1 className='text-tertiary'>{'}'}</h1>
           </div>
           <div className='h-[400px]'>
           <lottie-player src="https://lottie.host/3a9bff09-9b6c-4037-a8b5-abf2343c7429/g2UU2c0JQu.json" background="transparent" speed="1" autoplay></lottie-player>
           </div>
        </div>
        </Zoom>
        </Reveal>
    </div>
  )
}

export default Contact