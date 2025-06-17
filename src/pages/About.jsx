import Banner from '../Components/Banner'
import AboutOurPricing from '../Components/About/AboutOurPricing'
import HomeGetInTouch from '../Components/Home/HomeGetInTouch'
import AboutService from '../Components/About/AboutService'

const About = () => {
  return (
   <>
  <Banner heading={"About Us"} text={"About Us"}/>
  <AboutService/>
  <AboutOurPricing/>
  <div className='my-20'><HomeGetInTouch/></div>
   </>
  )
}

export default About