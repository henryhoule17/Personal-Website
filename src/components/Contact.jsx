import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { github, linkedin, resume } from "../assets";


const Contact = () => {
  const resumeURL = 'https://drive.google.com/file/d/1oHrEKS4-SpuHL8qv0VS4QeGp3ZgLIlvx/view?usp=sharing'
  const linkedinURL = 'https://www.linkedin.com/in/henry-houle-0869b0201/'
  const githubURL = 'https://github.com/henryhoule17'
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID)
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Henry Houle",
          from_email: form.email,
          to_email: "henryhoule17@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className='xl:mt-12 flex flex-col gap-3 overflow-hidden justify-center items-center'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl w-full max-w-lg'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-[#aaa6c3] text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {sent ? 
          <h2 className='text-white font-bold mb-4 md:pl-28 pl-20'>Message sent, Thank You!</h2>
          :
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md hover:shadow-md hover:shadow-primary transition-all duration-300'
          >
            {loading ? "Sending..." : "Send"}
          </button>}
        </form>
      </motion.div>
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
  );
};

export default SectionWrapper(Contact, "contact");