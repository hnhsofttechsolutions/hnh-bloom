import HomeBanner from "../Components/Home/HomeBanner"
import HomeBlog from "../Components/Home/HomeBlog"
import HomeCounter from "../Components/Home/HomeCounter"
import HomeExperience from "../Components/Home/HomeExperience"
import HomeGetInTouch from "../Components/Home/HomeGetInTouch"
import HomeLatestService from "../Components/Home/HomeLatestService"
import HomeMySkills from "../Components/Home/HomeMySkills"
import HomePortfolio from "../Components/Home/HomePortfolio"
import HomeService from "../Components/Home/HomeService"
import HomeSkills from "../Components/Home/HomeSkills"
import HomeSupportedCompany from "../Components/Home/HomeSupportedCompany"
import HomeTestimonial from "../Components/Home/HomeTestimonial"

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeService />
      <div className="my-10"><HomeCounter /></div>
      <div className="my-10"><HomeSkills /></div>
      <HomeLatestService />
      <HomeExperience />
      <div className="md:my-20"><HomeSupportedCompany /></div>
      <HomePortfolio />
      <HomeMySkills />
      <HomeTestimonial />
      <div className="mt-10"><HomeGetInTouch /></div>
      <HomeBlog />
    </>
  )
}

export default Home