import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import Reveal from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0)
    const { portfolioData } = useSelector((state) => state.root);
    const { projects } = portfolioData;
    
  return (
    <div>
        <Reveal triggerOnce>
        <Zoom>
        <SectionTitle title="Projects" />
        <div className='flex py-10 gap-20 sm:flex-col'>
                <div className="flex flex-col gap-10 border-1-2 border-white w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {projects.map((project, index) => (
                        <div onClick={()=>{
                            setSelectedItemIndex(index);
                        }}
                        className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5
                            ${selectedItemIndex === index ? 
                            'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#00000026] py-3' 
                            : 'text-white'}`}>
                                {project.title}
                            </h1>
                        </div>
                    ))}
                </div>

            <div className='flex item-center justify-center gap-10 sm:flex-col'>
                <img src={projects[selectedItemIndex].image} alt="" className='h-72 w-80'/>
            <div className='flex flex-col gap-5'>
                    <h1 className=" text-secondary text-xl">{projects[selectedItemIndex].title}</h1>
                    <h1 className=" text-white">{projects[selectedItemIndex].link}</h1>
                    <p className=" text-white">{projects[selectedItemIndex].description}</p>
                    <h1 className='text-white'>Technologies used:</h1>
                    <div className="flex flex-wrap gap-2 mt-2">
                    {projects[selectedItemIndex].technologies.map((technology, index) => (
                    <div key={index} className='border border-tertiary py-2 px-4'>
                    <h1 className='text-tertiary'>{technology}</h1>
                    </div>
                    ))}
                    </div>
                    
                   
                </div>
            </div>
            </div>
            </Zoom>
            </Reveal>
    </div>
  )
}

export default Projects