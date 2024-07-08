'use client'
import { Poppins } from 'next/font/google';
import React from 'react'
import { IoSchool } from "react-icons/io5";
import { motion } from 'framer-motion';

const variantsAnimation={
   initialLeft:{
    x:-100,
    opacity:0
   },
   animateLeft:{
    x:0,
    opacity:1,
   },
   initialRight:{
    x:100,
    opacity:0
   },
   animateRight:{
    x:0,
    opacity:1,
   }
}

const popins=Poppins({
    weight:"500",
    subsets:["latin"]
})
const Education = () => {
  return (
    <section id="educations" className="w-full overflow-hidden lg:px-24 md:px-20 sm:px-12 px-8">
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-semibold">Educations</h1>
        <br />
        <div className={`relative -z-10 ${popins.className}`}>
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 border border-slate-300 dark:border-slate-600 rounded-full">
                <motion.span
                initial={{
                    height:0
                }}
                whileInView={{
                    height:"100%"
                }}
                transition={{
                    duration:3
                }}
                className="absolute -z-10 left-0 top-0 w-full bg-blue-400 dark:bg-slate-600 rounded-full"></motion.span>
                <span className="w-24 absolute top-0 left-8">2011-2017</span>
                <div className="absolute left-1/2 -translate-x-1/2 p-2 rounded-full border-2 border-blue-600 dark:border-slate-600">
                    <IoSchool size={25}></IoSchool>
                </div>
                <span className="w-24 absolute top-[27%] right-4">2017-2020</span>
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 p-2 rounded-full border-2 border-blue-600 dark:border-slate-600">
                    <IoSchool size={25}></IoSchool>
                </div>
                <span className="w-24 absolute top-[52%] left-8">2020-2023</span>
                <div className="absolute top-[50%] left-1/2 -translate-x-1/2 p-2 rounded-full border-2 border-blue-600 dark:border-slate-600">
                    <IoSchool size={25}></IoSchool>
                </div>
                <span className="w-24 absolute top-[67%] -right-7">2023-2024</span>
                <div className="absolute top-[65%] left-1/2 -translate-x-1/2 p-2 rounded-full border-2 border-blue-600 dark:border-slate-600">
                    <IoSchool size={25}></IoSchool>
                </div>
                <span className="w-24 absolute top-[87%] left-7">2024-now</span>
                <div className="absolute top-[85%] left-1/2 -translate-x-1/2 p-2 rounded-full border-2 border-blue-600 dark:border-slate-600">
                    <IoSchool size={25}></IoSchool>
                </div>
            </div>
            <motion.div
            variants={variantsAnimation}
            initial="initialLeft"
            whileInView="animateLeft"
            transition={{
                duration:1,
                type:"spring"
            }}
            viewport={{
                once:true
            }}
            className="w-full max-w-[48%] lg:px-6 md:px-5 sm:px-3 px-2 lg:py-2.5 md:py-2 sm:py-1.5 py-1 h-36 rounded-lg shadow-md shadow-blue-700 dark:shadow-slate-500 bg-slate-300 dark:bg-slate-800">
                <h1 className="text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-sm mb-1">SDNU Kanjeng Sepuh Sidayu</h1>
                <p className="tracking-tighter lg:text-lg sm:text-[14px] text-[10px] text-center">
                    Selama 3 tahun di SDNU Kanjeng Sepuh, saya berhasil meraih peringkat pertama di kelas, dari kelas 4 hingga 6.
                </p>
            </motion.div>
            <motion.div
            variants={variantsAnimation}
            initial="initialRight"
            whileInView="animateRight"
            transition={{
                duration:1,
                type:"spring"
            }}
            viewport={{
                once:true
            }}
            className="block ml-auto w-full max-w-[48%] lg:px-6 md:px-5 sm:px-3 px-2 lg:py-2.5 md:py-2 sm:py-1.5 py-1 h-36 rounded-lg shadow-md shadow-blue-700 dark:shadow-slate-500 bg-slate-300 dark:bg-slate-800">
                <h1 className="text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-sm mb-1">MTs Kanjeng Sepuh Sidayu</h1>
                <p className="tracking-tighter lg:text-lg sm:text-[14px] text-[10px] text-center">
                    Selama 3 tahun di MTs Kanjeng Sepuh, saya berhasil meraih peringkat 3 besar di kelas, dari awal kelas 7 hingga 9.
                </p>
            </motion.div>
            <motion.div
            variants={variantsAnimation}
            initial="initialLeft"
            whileInView="animateLeft"
            transition={{
                duration:1,
                type:"spring"
            }}
            viewport={{
                once:true
            }}
            className="w-full max-w-[48%] px-6 py-2 h-36 rounded-lg shadow-md shadow-blue-700 dark:shadow-slate-500 bg-slate-300 dark:bg-slate-800">
                <h1 className="text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-sm mb-1">SMA Negeri 1 Sidayu</h1>
                <p className="tracking-tighter lg:text-lg sm:text-[14px] text-[10px] text-center">
                    Selama 3 tahun di SMA Negeri 1 Sidayu, saya berhasil meraih peringkat 3 besar di kelas, dari kelas 11 hingga 12.
                </p>
            </motion.div>
            <motion.div
            variants={variantsAnimation}
            initial="initialRight"
            whileInView="animateRight"
            viewport={{
                once:true
            }}
            transition={{
                duration:1,
                type:"spring"
            }}
            className="block ml-auto w-full max-w-[48%] px-6 py-2 h-36 rounded-lg shadow-md shadow-blue-700 dark:shadow-slate-500 bg-slate-300 dark:bg-slate-800">
                <h1 className="text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-sm mb-1">Student Gapyear</h1>
                <p className="tracking-tighter lg:text-lg sm:text-[14px] text-[10px] text-center">
                    Selama gapyear 1 Tahun saya mendidikasikan diri belajar Teknologi Informasi dibidang Web.   
                </p>
            </motion.div>
            <motion.div
            variants={variantsAnimation}
            initial="initialLeft"
            whileInView="animateLeft"
            viewport={{
                once:true
            }}
            transition={{
                duration:1,
                type:"spring"
            }}
            className="block mr-auto w-full max-w-[48%] px-6 py-2 h-36 rounded-lg shadow-md shadow-blue-700 dark:shadow-slate-500 bg-slate-300 dark:bg-slate-800">
                <h1 className="text-center tracking-tighter lg:text-2xl md:text-xl sm:text-lg text-sm mb-1">Airlangga student</h1>
                <p className="tracking-tighter lg:text-lg sm:text-[14px] text-[10px] text-center">
                    Saat ini saya sedang menempuh pendidikan di Universitas Airlangga.
                </p>
            </motion.div>
        </div>
    </section>
  )
}

export default Education
