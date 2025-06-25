import { useQuery } from "@apollo/client";
import HomeBanner from "../Components/Home/HomeBanner";
import HomeBlog from "../Components/Home/HomeBlog";
import HomeCounter from "../Components/Home/HomeCounter";
import HomeExperience from "../Components/Home/HomeExperience";
import HomeGetInTouch from "../Components/Home/HomeGetInTouch";
import HomeLatestService from "../Components/Home/HomeLatestService";
import HomeMySkills from "../Components/Home/HomeMySkills";
import HomePortfolio from "../Components/Home/HomePortfolio";
import HomeService from "../Components/Home/HomeService";
import HomeSkills from "../Components/Home/HomeSkills";
import HomeSupportedCompany from "../Components/Home/HomeSupportedCompany";
import HomeTestimonial from "../Components/Home/HomeTestimonial";
import GETDATA from "../queries/get-post";
import Loading from "../Components/loading/Loading";

const Home = () => {
  const { data , loading } = useQuery(GETDATA, {
    variables: { skip: 0, limit: 4, categoryId:undefined },
  });

  if (loading) return <div><Loading/></div>;

  return (
    <>
      <HomeBanner />
      <HomeService />
      <div className="my-10">
        <HomeCounter />
      </div>
      <div className="my-10">
        <HomeSkills />
      </div>
      <HomeLatestService />
      <div className="mt-10">
        <HomeExperience />
      </div>
      <div className="md:my-20">
        <HomeSupportedCompany />
      </div>
      <HomePortfolio data={data} />
      <div className="mt-10">
        <HomeMySkills />
      </div>
      <HomeTestimonial />
      <div className="py-10">
        <HomeGetInTouch />
      </div>
      {/* <HomeBlog /> */}
    </>
  );
};


export default Home;
