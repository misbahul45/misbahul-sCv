import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import homeImage from "@/public/images/taqin-fotor-bg-remover-2024042494440.png"
import { Ubuntu } from 'next/font/google'
import sectionImage from "@/public/images/section.svg"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa'
import CvButton from './CvButton'

const ubuntu=Ubuntu({
    weight:"500",
    subsets:["greek"]
})
const HomeSection = () => {
  return (
    <section id="home" className="lg:h-screen pt-12 sm:pb-8 pb-6 flex flex-col justify-center items-center">
        <>
         <Image src={sectionImage} alt="top bg" className="absolute top-0 left-0 -z-10" />
        </>
        <div className="relative p-1 bg-slate-500 dark:bg-slate-200 rounded-full -z-10 w-32 h-32">
            <Image alt="author image" src={homeImage} className="rounded-full" />
            <span className="text-3xl absolute -right-4 bottom-7">👋</span>
        </div>
        <br />
        <div className="flex flex-col lg:px-24 md:px-20 sm:px-12 px-8">
            <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-[15px] text-center text-blue-600 dark:text-slate-600 mb-2"><b>Assalamualaikum Warahmatullahi Wabarakatuh!</b></h1>
            <h2 className={`lg:text-3xl md:text-xl sm:text-lg text-[12px] tracking-wide text-center ${ubuntu.className}`}>
                Perkenalkan nama saya <span className="font-semibold text-blue-700 dark:text-slate-600">Misbahul Muttaqin</span>, saya berasal dari sebuah desa kecil di kota <span className="font-semibold text-blue-700 dark:text-slate-600">Gresik</span>, <span className="font-semibold text-blue-700 dark:text-slate-600">Jawa Timur</span>, yang bernama <span className="font-semibold text-blue-700 dark:text-slate-600">Asempapak</span>. Saat ini, saya berusia <span className="font-semibold text-blue-700 dark:text-slate-600">19 tahun</span>, saya lahir pada tanggal <span className="font-semibold text-blue-700 dark:text-slate-600">25 Oktober 2004</span>.
            </h2>
        </div>
        <br />
        <div className="flex lg:gap-8 md:gap-6 gap-4 items-center lg:mt-4 md:mt-3 sm:mt-2 mt-1">
            <CvButton />
            <div className="flex gap-3">
                <Link href={'https://github.com/misbahul45'} className="lg:text-2xl md:text-xl sm:text-md  p-2 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-black hover:text-slate-50 dark:hover:bg-black dark:hover:text-slate-50 transition-all duration-100"><FaGithub /></Link>
                <Link href={'https://www.linkedin.com/in/misbahul-muttaqin-b87b78255/'} className="lg:text-2xl md:text-xl sm:text-md  p-2 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-blue-600 hover:text-slate-50 dark:hover:bg-blue-600 dark:hover:text-slate-50 transition-all duration-100"><FaLinkedin /></Link>
                <Link href={'https://www.instagram.com/misbahulmu756/'} className="lg:text-2xl md:text-xl sm:text-md  p-2 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-red-600 hover:text-slate-50 dark:hover:bg-red-600 dark:hover:text-slate-50 transition-all duration-100"><FaInstagram /></Link>
                <Link href={'https://www.tiktok.com/@misbahul.muttaqin'} className="lg:text-2xl md:text-xl sm:text-md  p-2 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-black hover:text-slate-50 dark:hover:bg-black datk:hover:text-slate-50 transition-all duration-100"><FaTiktok /></Link>
                <Link href={'https://www.facebook.com/profile.php?id=61560494439543'} className="lg:text-2xl md:text-xl sm:text-md  p-2 rounded-full bg-slate-300 dark:bg-slate-600 hover:bg-blue-600 hover:text-slate-50 dark:hover:bg-blue-600 dark:hover:text-slate-50 transition-all duration-100"><FaFacebook /></Link>
            </div>
        </div>
    </section>
  )
}

export default HomeSection
