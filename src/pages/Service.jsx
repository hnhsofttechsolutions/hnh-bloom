import React from 'react'
import AboutOurPricing from '../Components/About/AboutOurPricing'
import Banner from '../Components/Banner'
import ServiceHero from '../Components/Service/ServiceHero'
import WhyChooseUs from '../Components/Service/WhyChooseUs'
import ServiceCards from '../Components/Service/ServiceCards'
import OurProcess from '../Components/Service/OurProcess'
const Service = () => {
  return (
   <>
   <Banner heading={"Service"} text={"Service"}/>
   <ServiceHero/>
   <WhyChooseUs />
   <ServiceCards/>
   <OurProcess/>
   <AboutOurPricing/>
   </>
  )
}

export default Service