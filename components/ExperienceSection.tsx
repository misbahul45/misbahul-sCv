'use client'

import { Ubuntu } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import imageUTBK from "@/public/images/hasil  utbk.png"
import osnImage from "@/public/images/osn.jpg"
import { motion } from 'framer-motion'


const ubuntu=Ubuntu({
  weight:"500",
  subsets:["cyrillic-ext"]
})
const ExperienceSection = () => {
  return (
    <section id="experience" className={`${ubuntu.className} lg:min-h-screen lg:pt-24 md:pt-20 sm:pt-16 pt-8 lg:px-24 md:px-20 sm:px-12 px-8`}>
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-semibold">Experience</h1>
      <br />
      <div className="relative flex items-center justify-center gap-4 max-w-3xl mx-auto px-8">
        <div className="absolute left-0 top-0 h-full">
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
          className="absolute w-0.5 bg-blue-500 dark:bg-slate-500 rounded-full"></motion.span>
          <span className="absolute top-0 -left-1.5 h-3 w-3 bg-blue-500 dark:bg-slate-500 rounded-full"></span>
          <span className="absolute top-1/2 -left-1.5 h-3 w-3 bg-blue-500 dark:bg-slate-500 rounded-full"></span>
          <span className="absolute bottom-0 -left-1.5 h-3 w-3 bg-blue-500 dark:bg-slate-500 rounded-full"></span>
        </div>
        <div className="flex flex-col md:gap-4 gap-2">
          <div>
            <motion.h1
            initial={{
              x:-100,
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:1,
              type:"spring"
            }}
            viewport={{
              once:true
            }}
            className="md:text-2xl sm:text-xl text-lg font-semibold mb-2">UTBK 2023</motion.h1>
            <motion.div
            initial={{
              scale:0,
              y:-100
            }}
            whileInView={{
              scale:1,
              y:0
            }}
            transition={{
              duration:1,
              type:"spring"
            }}
            viewport={{
              once:true
            }}
            className="relative"
            >
              <Image alt="image utbk" src={imageUTBK} />
            </motion.div>
          </div>
          <div>
            <motion.h1
            initial={{
              x:-100,
              opacity:0
            }}
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              duration:1,
              type:"spring"
            }}
            viewport={{
              once:true
            }}
            className="md:text-2xl sm:text-xl text-lg font-semibold mb-2">
              Pembina OSN Informatika 2023
            </motion.h1>
            <motion.div
            initial={{
              scale:0,
              y:-100
            }}
            whileInView={{
              scale:1,
              y:0
            }}
            transition={{
              duration:1,
              type:"spring"
            }}
            viewport={{
              once:true
            }}
            >
              <Image alt="image utbk" src={osnImage} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
