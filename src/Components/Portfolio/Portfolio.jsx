import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight, FaFilePdf } from 'react-icons/fa'
import PortfolioSec1 from '../PortfolioSec1/PortfolioSec1'
import PortfolioSec2 from '../PortfolioSec2/PortfolioSec2'
import PortfolioSec3 from './../PortfolioSec3/PortfolioSec3';
import PortfolioFaqSection from '../PortfolioFAQSection/PortfolioFAQSection'

export default function Portfolio() {
  return (
    <>
    <PortfolioSec1/>
    <PortfolioSec2/>
    <PortfolioSec3/>
    <PortfolioFaqSection/>

    </>
  )
}
