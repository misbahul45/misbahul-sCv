'use client'
import React, { useRef, FormEvent, RefObject, useState, Dispatch, SetStateAction } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
import { motion } from 'framer-motion';

const roboto = Roboto({
  weight: '500',
  subsets: ['cyrillic-ext']
});

type Props={
  setSuccessfully: Dispatch<SetStateAction<boolean>>,
  successfully:boolean
}

const FormContact = ({ setSuccessfully, successfully }:Props) => {
  const form: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  const [loading, setloading]=useState<boolean>(false)

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setloading(true)
    if (form.current) {
      emailjs.sendForm('service_iify7wq', 'template_vy3tddl', form.current, 'Yb3a6twhdXYbXLCVo')
        .then(
          (response) => {
            form.current?.reset()
            setloading(false)
            setSuccessfully(true)
            setTimeout(() => {
              setSuccessfully(false)
            }, 2000);
          },
          (error) => {
            setloading(false)
          }
        );
    } else {
      console.log('Please fill in all fields');
    }
  };


  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`w-full lg:max-w-3xl max-w-2xl mx-auto ${roboto.className}`}
    >
      <div className="max-w-full flex sm:flex-row flex-col sm:items-center lg:gap-4 gap-3">
        <label className="flex-1 flex flex-col gap-1">
          <span>Name</span>
          <input
            name="name"
            placeholder="Your Name"
            type="text"
            className="w-full pl-2 py-2 bg-slate-200 text-slate-800 dark:bg-slate-800 rounded dark:text-slate-100 outline-none focus:ring-2 focus:ring-slate-500"
          />
        </label>
        <label className="flex-1 flex flex-col gap-1">
          <span>Email</span>
          <input
            name="email"
            placeholder="Your Email"
            type="email"
            className="w-full pl-2 py-2 bg-slate-200 text-slate-800 dark:bg-slate-800 rounded dark:text-slate-100 outline-none focus:ring-2 focus:ring-slate-500"
          />
        </label>
      </div>
      <div className="w-full mt-6 flex flex-col gap-2">
        <span>Messages</span>
        <textarea
          name="messages"
          placeholder="Your Messages"
          className="w-full h-56 pl-2 py-2 bg-slate-200 text-slate-800 dark:bg-slate-800 rounded dark:text-slate-100 outline-none focus:ring-2 focus:ring-slate-500 resize-none"
        ></textarea>
      </div>
      <div className="flex justify-end mt-4"> 
        {!successfully?
        <button
          type="submit"
          className="flex justify-center items-center gap-2 px-10 py-1.5 font-semibold bg-slate-100 dark:bg-slate-800 rounded-full text-slate-800 dark:text-slate-400 border-2 border-blue-600 dark:border-slate-500 hover:bg-blue-600 hover:dark:bg-slate-950 hover:dark:border-slate-900 hover:text-slate-50 transition-all duration-75"
        >
          {loading?"Loading...":<>Submit <FaPaperPlane /></>}
        </button>
        :
        <motion.div
        initial={{
          y:-10,
          opacity:0
        }}
        animate={{
          y:0,
          opacity:1
        }}
        className="px-4 py-2 bg-green-600 text-slate-100 rounded-full animate-pulse">
          <h1>Successfully</h1>
        </motion.div>
        }
      </div>
    </form>
  );
};

export default FormContact;
