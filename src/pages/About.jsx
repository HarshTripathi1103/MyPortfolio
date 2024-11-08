import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Harsh</span>
        
        </h1>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p> A 2nd year Engineering student at Vidyavardhini College of Engineering ,India specializing in Artificial Intelligence & Data Science through hands-on learning and building applications.</p>
        </div>
        <div className='py-10 flex flex-col'><h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'

                />
              </div>
            </div>
          ))}
           </div>

        </div>
        <div className='py-16'>
          <h3 className='subhead-text'> Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            I,ve worked with different companies and trying to levelup my skills here is my rundown:
                   
          </div>
          
          <Card className=" mt-10 max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          src="/data-analysis-1-74.svg"
          alt="ui/ux review check"
        />
      </CardHeader>
      <CardBody>
        <Typography  className = 'pl-4 pt-2 ' variant="h4" color="blue-gray">
          React js Intern
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal p-3">
          Currently working as an intern in a education company known as bio4u learning from their tech company to  help build a full stack website 
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        
        
      </CardFooter>
    </Card>
        </div>
        <div className='mt-12 flex'>

        </div>

        <hr className='border-slate-200'/>
        <CTA/>
    </section>
   
  )
}

export default About

