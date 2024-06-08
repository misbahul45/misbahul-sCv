
import AboutSection from '@/components/AboutSection'
import ArrowBottom from '@/components/ArrowBottom'
import ButtonTheme from '@/components/ButtonTheme'
import ContactSection from '@/components/ContactSection'
import Education from '@/components/Education'
import ExperienceSection from '@/components/ExperienceSection'
import Footer from '@/components/Footer'
import HomeSection from '@/components/HomeSection'
import LoadingEnter from '@/components/LoadingEnter'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import SkillsSection from '@/components/SkillsSection'
import React from 'react'

const Home = () => {
  return (
    <>
      <LoadingEnter />
      <Sidebar />
      <Navbar />
      <HomeSection />
      <ArrowBottom />
      <AboutSection />
      <Education />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <ButtonTheme />
      <Footer />
    </>
  )
}

export default Home
