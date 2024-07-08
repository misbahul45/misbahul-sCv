import { Roboto } from 'next/font/google'
import React from 'react'
import ArrowBottom from './ArrowBottom'
import EssaiAboutMe from './EssaiAboutMe'
import Education from './Education'

const roboto=Roboto({
  weight:"500",
  subsets:["vietnamese"]
})
const AboutSection = () => {
  return (
    <section id="about" className={`relative lg:py-20 sm:py-112 py-4 lg:px-24 md:px-20 sm:px-12 px-8 ${roboto.className}`}>
      <EssaiAboutMe />
    </section>
  )
}

export default AboutSection
