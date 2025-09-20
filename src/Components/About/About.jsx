import React from 'react'
import AboutHero from './../AboutHero/AboutHero';
import { motion } from "framer-motion";
import HomeSec2 from '../HomeSec2/HomeSec2';
import AboutSlider from '../AboutSlider/AboutSlider';
import Footer from '../Footer/Footer';

export default function About() {
  return <>
  <AboutHero/>
 <div className='my-[44px]'>
   <HomeSec2/>
 </div>
 <AboutSlider/>
 <Footer/>
  </>
}
