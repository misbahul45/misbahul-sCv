"use client"
import React from 'react'
import { useTheme } from "next-themes";
import { IoMdSunny } from 'react-icons/io';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { motion } from "framer-motion" 

const ButtonTheme = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleTheme=()=>{
        if (currentTheme === systemTheme) {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        } else {
            setTheme(theme === 'dark' ? 'light' : 'dark');
        }
    }
    const toggle=theme === 'dark' ?<BsFillMoonStarsFill size={20}/>:<IoMdSunny size={20} /> 
    return (
        <motion.div
        initial={{
            y:"-100%"
        }}
        animate={{
            y:0
        }}
        transition={{
            duration:1,
            type:"spring",
            delay:2
        }}
        className="absolute top-0 right-20 flex flex-col justify-center items-center">
            <div className="h-8 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
            <div onClick={handleTheme} className="p-2 bg-slate-100 cursor-pointer shadow shadow-slate-800 dark:shadow-slate-600 dark:bg-slate-900 hover:scale-110 hover:bg-slate-800 hover:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-800 rounded-full transition-all duration-100">
               {toggle}
            </div>
        </motion.div>

    )
}

export default ButtonTheme