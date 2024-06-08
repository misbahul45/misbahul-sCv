'use client'
import React from 'react'
import { motion } from "framer-motion"
const LoadingEnter = () => {
  return (
    <motion.div
    initial={{
        y:0,
    }}
    animate={{
        y:"-100%",
    }}
    transition={{
        duration:1.5,
    }}
    className="h-screen w-full fixed left-0 top-0 z-50 bg-blue-700 dark:bg-slate-800 flex justify-center items-center">
      <h1 className="text-4xl text-slate-100">Loading.....</h1>
    </motion.div>
  )
}

export default LoadingEnter
