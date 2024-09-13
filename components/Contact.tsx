'use client';

import { motion } from 'framer-motion';

import toast from 'react-hot-toast';
import useSectionInView from '@/hooks';
import SectionHeading from './SectionHeading';
import SubmitBtn from './SubmitBtn';

export default function Contact() {
  const { ref } = useSectionInView({ sectionName: 'Contact' });

  return (
    <motion.section
      id='contact'
      ref={ref}
      className='section-container mb-20 sm:mb-28 w-[min(100%,48rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>
        Have a project that requires technical expertise?
      </SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a
          className='underline'
          href='https://www.linkedin.com/in/howardphung30/'
          target='_blank'
        >
          My Linkedin
        </a>{' '}
        or through THIS form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        action={async (formData) => {
          const sendMail = (await import('@/actions/sendEmail')).sendEmail;

          const { error } = await sendMail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
