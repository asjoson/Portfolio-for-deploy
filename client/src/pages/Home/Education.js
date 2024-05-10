import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux';
import Reveal from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';

function Education() {
    const [ selectedItemIndex, setSelectedItemIndex ] = React.useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const  educations  = portfolioData?.education || [];
    if (!educations) {
        return <div>No education data available.</div>;
      }
  return (
    <div>
        <Reveal triggerOnce>
        <Zoom>
        <SectionTitle title="Education" />
        <div className='flex py-10 gap-20 sm:flex-col'>
                <div className="flex flex-col gap-10 border-1-2 border-white w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
                    {educations.map((education, index) => (
                        <div onClick={()=>{
                            setSelectedItemIndex(index);
                        }}
                        className='cursor-pointer'
                        >
                            <h1 className={`text-xl px-5
                            ${selectedItemIndex === index ? 
                            'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#00000026] py-3' 
                            : 'text-white'}`}>
                                {education.title}
                            </h1>
                        </div>
                    ))}
                </div>

            <div className='flex item-center justify-center gap-10 sm:flex-col'>
            <div className='flex flex-col gap-5'>
                    <h1 className=" text-secondary text-xl">{educations[selectedItemIndex].title}</h1>
                    <p className=" text-white">{educations[selectedItemIndex].description}</p>
                </div>
                <img src={educations[selectedItemIndex].image} alt="" className='h-72 w-80'/>
            </div>
            </div>
            </Zoom>
            </Reveal>
    </div>
  )
}

export default Education