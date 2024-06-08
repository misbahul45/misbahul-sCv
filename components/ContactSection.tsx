'use client'
import { motion } from "framer-motion";
import { useState } from "react";
import FormContact from "./FormContact";

const ContactSection: React.FC = () => {
  const [successfully, setSuccessfully]=useState(false)
  return (
    <section id="contact" className="relative md:pt-20 sm:pt-16 pt-8 pb-5 overflow-hidden lg:px-24 md:px-20 sm:px-12 px-8">
      <h1 className="text-center lg:text-4xl md:text-3xl text-2xl font-semibold mb-4">Contact Me</h1>
      <FormContact setSuccessfully={setSuccessfully} successfully={successfully} />
    </section>
  );
};

export default ContactSection;
