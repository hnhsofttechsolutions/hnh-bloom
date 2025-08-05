import { useQuery } from "@apollo/client";
import HomeBanner from "../Components/Home/HomeBanner";
// eslint-disable-next-line no-unused-vars
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
// eslint-disable-next-line no-unused-vars
import GETBYID, { GETALLPROJECT } from "../queries/get-post";
// eslint-disable-next-line no-unused-vars
import Loading from "../Components/loading/Loading";
import GETDATA from "../queries/get-post";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const filterProject = [
    "PROVISTA AI PROJECT",
    "PREMIUM TALENT IDENTITY – WHERE AUTHENTICITY MEETS OPPORTUNITY",
    "SCOPIUM AI",
    "FIND YOUR NEXT OPPORTUNITY – SMARTER, FASTER, BETTER JOB SEARCH"
  ]
  // eslint-disable-next-line no-unused-vars
  const { data , loading } = useQuery(GETDATA, {
    variables: { skip: 0, limit: 4, categoryId:undefined },
  });
  const { data:pro  } = useQuery(GETALLPROJECT);
  // console.log("fgv", pro)

  // eslint-disable-next-line no-unused-vars
const filterData = pro?.allProjects?.filter((item) =>
  filterProject?.includes(item?.title)
);
  // if (loading) return <div><Loading/></div>;
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
      <HomePortfolio data={data} filterData={filterData}/>
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
