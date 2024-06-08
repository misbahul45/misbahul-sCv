'use client'
import { Roboto } from "next/font/google"
import Link from "next/link"
import { useEffect, useState } from "react"

const roboto=Roboto({
  weight:"500",
  subsets:["vietnamese"]
})


const Navbar = () => {
  const [currentSection, setCurrentSection]=useState('')
  const [showNavbar, setShowNavbar]=useState(false)
  const [style,setStyle]=useState('')
  const [sectionAll, setSectionAll] = useState<NodeListOf<HTMLElement> | undefined>(undefined);
  useEffect(()=>{
    setSectionAll(document.querySelectorAll('section'))
  },[])
  
  useEffect(() => {
    if(!sectionAll) return;
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setShowNavbar(scrolled >= 50);
  
      let currentSectionId = '';
      let closestDistance = Infinity;
  
      sectionAll.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        const distanceToTop = Math.abs(sectionRect.top);
        
        if (distanceToTop < closestDistance) {
          closestDistance = distanceToTop;
          currentSectionId = section.id;
        }
      });
  
      setCurrentSection(currentSectionId);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionAll]);
  


  useEffect(()=>{
    switch (currentSection) {
      case 'home':
        setStyle("left-[1%] lg:w-24 md:w-20 w-12")
        break;
      case 'about':
        setStyle("left-[17.2%] sm:left-[18.2%] lg:w-24 md:w-20 w-12")
        break;
      case 'educations':
        setStyle("left-[33.5%] lg:left-[33.4%] sm:left-[32%] md:w-28 w-14")
        break;
      case 'skills':
        setStyle("left-[50.8%] md:left-[51.5%] sm:left-[52%] lg:w-24 md:w-20 w-12")
        break;
      case 'experience':
        setStyle("left-[67.5%] lg:left-[67%] sm:left-[65.8%] md:w-28 w-14")
        break;
      case 'contact':
        setStyle("left-[83.9%] md:left-[85.2%] sm:left-[85.5%] lg:w-24 md:w-20 w-12")
        break;
      default:
        break;
    }
  },[currentSection])

    return (
        <nav id="navbar" className={`${roboto.className} ${showNavbar?"translate-y-0":"-translate-y-96"} fixed left-1/2 -translate-x-1/2 top-8 transition-all duration-100 z-50 backdrop-blur-sm`}>
          <div className="relative gap-5 py-2.5 flex items-center justify-center rounded-full px-2 z-20 shadow-sm shadow-slate-400 bg-slate-200 text-slate-800 dark:shadow-slate-400 dark:bg-black/70 dark:text-slate-100">
              <Link href={'#home'} className={`${currentSection==="home"&& "text-slate-100"} lg:w-24 md:w-20 w-8 md:text-sm lg:text-md text-[8px] text-center hover:scale-110 transition-all duration-75`}>Home</Link>
              <Link href={'#about'} className={`${currentSection==="about"&& "text-slate-100"} lg:w-24 md:w-20 w-8 md:text-sm lg:text-md text-[8px] text-center hover:scale-110 transition-all duration-75`}>About</Link>
              <Link href={'#educations'} className={`${currentSection==="educations"&& "text-slate-100"} lg:w-24 md:w-20 w-8 md:text-sm lg:text-md text-[8px] text-center hover:scale-110 transition-all duration-75`}>Educations</Link>
              <Link href={'#skills'} className={`${currentSection==="skills"&& "text-slate-100"} lg:w-24 md:w-20 w-8 md:text-sm lg:text-md text-[8px] text-center hover:scale-110 transition-all duration-75`}>Skills</Link>
              <Link href={'#experience'} className={`${currentSection==="experience"&& "text-slate-100"} lg:w-24 md:w-20 w-8 md:text-sm lg:text-md text-[8px] text-center hover:scale-110 transition-all duration-75`}>Experience</Link>
              <Link href={'#contact'} className={`${currentSection==="contact"&& "text-slate-100"} lg:w-24 md:w-20 w-8 md:text-sm lg:text-md text-[8px] text-center hover:scale-110 transition-all duration-75`}>Contact</Link>
              <span className={`absolute ${style} top-1/2 -translate-y-1/2 bg-blue-500 h-[70%] rounded-full -z-10 dark:bg-white/20 transition-all duration-75 delay-50`}></span>
          </div>
        </nav>
  )
}

export default Navbar
