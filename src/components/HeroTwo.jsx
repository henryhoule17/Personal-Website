import { motion } from 'framer-motion'
import { styles } from '../styles'
import { headshot } from '../assets'
import { SectionWrapper } from "../hoc";
import { github, linkedin, resume } from "../assets";


const Hero = () => {
  const resumeURL = 'https://drive.google.com/file/d/1-xA6UsuRf2qMbEPjlDfWxojrxMLX3Zjs/view?usp=sharing'
  const linkedinURL = 'https://www.linkedin.com/in/henry-houle-0869b0201/'
  const githubURL = 'https://github.com/henryhoule17'

  return (
    <section className='relative h-96 my-20 w-full mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-center gap-10`}>
        <img src={headshot} alt='headshot' className='rounded-lg w-80 h-120' />
        <div className='flex flex-col justify-center items-center mb-20'>
          <div className='w-5 h-5 rounded-full bg-secondary' />
          <div className='w-1 sm:h-96 h-40 green-gradient' />
        </div>
        <div>
          <h1 className='font-black text-primary lg:text-[72px] sm:text-[54px] xs:text-[45px] text-[36px] lg:leading-[90px] mt-2'>
            I'm a <br/><span className='text-secondary'>Software Engineer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-primary`}>
            who's passionate about learning new technologies and building powerful applications, with a background in business analysis and investing.
          </p>
          <div className='flex flex-row gap-5 mt-5 items-center'>
            <a href={linkedinURL} target='_blank' rel='noopener noreferrer'>
              <img src={linkedin} alt='linkedin' className='w-16 h-16'/>
            </a>
            <a href={githubURL} target='_blank' rel='noopener noreferrer'>
              <img src={github} alt='github' className='w-16 h-16'/>
            </a>
            <a href={resumeURL} target='_blank' rel='noopener noreferrer'>
              <img src={resume} alt='resume' className='w-14 h-14'/>
            </a>
          </div>
        </div>
      </div>
    </section >
  )
}

export default SectionWrapper(Hero, "home");