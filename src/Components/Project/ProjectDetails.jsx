import ProjectGetInTouch from "./ProjectGetInTouch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectDetailsTabs from "./ProjectDetailsTabs";
import { Link, useParams } from "react-router-dom";
import { GETBYID } from "../../queries/get-post";
import { useQuery } from "@apollo/client";
const ProjectDetails = ({ data }) => {
  
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const { data: project, loading } = useQuery(GETBYID, {
  variables: { projectId: Number(id) },
});
  console.log("🚀 ~ project:", project)
  // const project = data?.projects?.data?.find((item) => String(item.id) === id);
  
  return (
    <>
      <div className="project-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumnail-wrap">
                <img
                  src={`https://api.hnhtechsolutions.com${project?.projectById?.images[0]}`}
                  alt="thumbnail"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="project-details-content-wrap">
                <ProjectDetailsTabs project={project} />
                <div className="project-details-swiper-wrapper">
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      nextEl: ".project-swiper-button-next",
                      prevEl: ".project-swiper-button-prev",
                    }}
                    loop={true}
                    slidesPerView={2} // 👈 Show 2 slides at a time
                    spaceBetween={30} // Optional: gap between slides
                    className="swiper project-details-swiper"
                  >
                    {/* {[
                      "assets/images/projects-details/project-detials-swiper-img-1.jpg",
                      "assets/images/projects-details/project-detials-swiper-img-2.png",
                      "assets/images/projects-details/project-detials-swiper-img-1.jpg",
                    ].map((imgSrc, index) => ( */}
                    {project?.projectById?.images?.map((img, indx) => (
                      <SwiperSlide>
                        {/* project-details-img */}
                        <div key={indx} className="">
                          <img
                            src={`https://api.hnhtechsolutions.com${img}`}
                            alt="swiper-img"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="project-details-swiper-btn">
                    <div className="project-swiper-button-prev">
                      <span>
                        <i className="fa-solid fa-arrow-left" />
                      </span>
                      Previous
                    </div>
                    <div className="project-swiper-button-next">
                      Next{" "}
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ProjectGetInTouch />
            </div>
            <div className="col-lg-4">
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Project Details</h3>
                </div>
                <div className="body">
                  {project?.projectById?.ProjectDetail?.map((item , indx) => <div key={indx} className="project-details-info">
                    {item.title}
                    <span>
                      {item.value}
                    </span>
                  </div>)}
                </div>
              </div>
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Project Stats</h3>
                </div>
                <div className="body">
                  {project?.projectById?.ProjectStat?.map((item , indx) => <div key={indx} className="project-details-info">
                    {item.title}: <span>{item.value}</span>
                  </div>)}
                  {/* <div className="project-details-info">
                    Products Listed: <span>5k+</span>
                  </div>
                  <div className="project-details-info">
                    Monthly Visitors: <span>10k+</span>
                  </div>
                  <div className="project-details-info">
                    User Rating: <span>4.8+</span>
                  </div> */}
                </div>
              </div>
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Links</h3>
                </div>
                <div className="body space-y-3">
                  {project?.projectById?.ProjectDemoLink.map((item, indx) => {
                    // Determine icon class based on the link
                    let iconClass = "";

                    if (item?.link.includes("github.com")) {
                      iconClass = "fab fa-github";
                    } else if (item?.link.includes("linkedin.com")) {
                      iconClass = "fab fa-linkedin";
                    } else if (item?.link.includes("facebook.com")) {
                      iconClass = "fab fa-facebook";
                    } else if (item?.link.includes("twitter.com")) {
                      iconClass = "fab fa-twitter";
                    } else {
                      iconClass = "fas fa-link"; // default icon
                    }
                    return (
                      <div
                        key={indx}
                        className="project-details-info w-full border text-2xl text-white rounded-lg p-3 flex items-center gap-3 hover:bg-[#1e1e1e] transition"
                      >
                        <i
                          className={`${iconClass} text-[#e50914] text-3xl`}
                        ></i>
                        <Link to={item?.link}>
                          <span>{item?.title}</span>
                        </Link>
                      </div>
                    );
                  })}

                  {/* <div className="project-details-info w-full border text-2xl text-white rounded-lg p-3 flex items-center gap-3 hover:bg-[#1e1e1e] transition">
                    <i className="fab fa-apple text-[#e50914] text-3xl"></i>
                    <span>App Store</span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
