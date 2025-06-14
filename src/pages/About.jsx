import React from 'react'
import Banner from '../Components/Banner'
import HomeService from '../Components/Home/HomeService'
import HomeSkills from '../Components/Home/HomeSkills'
import HomeCounter from '../Components/Home/HomeCounter'
import AboutEducation from '../Components/About/AboutEducation'
import AboutOurPricing from '../Components/About/AboutOurPricing'
import HomeGetInTouch from '../Components/Home/HomeGetInTouch'

const About = () => {
  return (
   <>
  <Banner heading={"About"} text={"About"}/>
  <HomeService/>
  <HomeSkills/>
  <div className='my-16'>  <HomeCounter/></div>
  <AboutEducation/>
  <AboutOurPricing/>
  <div className='my-20'><HomeGetInTouch/></div>
   </>
  )
}

export default About