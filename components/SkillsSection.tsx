'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "C++",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Tailwind",
    "Git",
    "Github",
    "Bootstrap",
    "MongoDB",
    "Redux",
    "Zustand",
    "React-Query",
    "React-Router",
    "Framer Motion",
  ];
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
const SkillsSection = () => {
  const [animate, setAnimate]=useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const { top, bottom } = skillsSection.getBoundingClientRect();
        if (top < window.innerHeight && bottom >= 0) {
          setAnimate(true);
        } else {
          setAnimate(false);
        }
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);  

    return (
      <section id="skills" className="lg:min-h-screen pt-12 pb-8 sm:pb-0 lg:px-24 md:px-20 sm:px-12 px-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-semibold">My Skills</h1>
        <br />
        <ul className="flex flex-wrap max-w-2xl justify-center gap-2.5 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-blue-600 text-slate-100 md:text-md sm:text-sm text-xs font-semibold border border-slate-600 shadow rounded-md text-center md:px-5 sm:px-3 px-1 md:py-3 py-2 shadow-slate-700 dark:shadow-slate-200 dark:bg-slate-800 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              animate={animate ? "animate" : ""}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
    )
}

export default SkillsSection
