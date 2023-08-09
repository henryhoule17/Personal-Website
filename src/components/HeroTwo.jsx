import { motion } from 'framer-motion'
import { styles } from '../styles'
import { headshot } from '../assets'
import { SectionWrapper } from "../hoc";


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[20px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <img src={headshot} alt='headshot' className='rounded-lg w-80 h-120' />
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-secondary' />
          <div className='w-1 sm:h-80 h-40 green-gradient' />
        </div>
        <div>
          <h1 className='font-black text-white-100 lg:text-[72px] sm:text-[54px] xs:text-[45px] text-[36px] lg:leading-[90px] mt-2'>
            I'm a <br/><span className='text-secondary'>Software Engineer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            with a passion for learning new technologies and building powerful applications, and a background in business analysis and investing.
          </p>
        </div>
      </div>
    </section >
  )
}

export default SectionWrapper(Hero, "home");