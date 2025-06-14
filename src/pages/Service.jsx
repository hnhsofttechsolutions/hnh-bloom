import React from 'react'
import LatestService from '../Components/Service/LatestService'
import AboutOurPricing from '../Components/About/AboutOurPricing'
import Banner from '../Components/Banner'
const Service = () => {
  return (
   <>
   <Banner heading={"Service"} text={"Service"}/>
   <LatestService/>
   <AboutOurPricing/>
   </>
  )
}

export default Service