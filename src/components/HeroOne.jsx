import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import { headshot } from '../assets'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 pb-16 max-w-7xl mx-auto flex flex-col justify-center items-center gap-5`}>
          <h1 className={`${styles.heroHeadText} text-primary`}>
            Hi, I'm Henry
          </h1>
        </div>
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center pt-4 items-center'>
        <a href='#home'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-primary mb-1'
            />
          </div>
        </a>
      </div>
    </section >
  )
}

export default Hero