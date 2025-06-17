import ProjectGetInTouch from "./ProjectGetInTouch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectDetailsTabs from "./ProjectDetailsTabs";
const ProjectDetails = () => {
  return (
    <>
      <div className="project-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumnail-wrap">
                <img
                  src="assets/images/portfolio/portfolio-one.jpg"
                  alt="thumbnail"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="project-details-content-wrap">
                <ProjectDetailsTabs />
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
                    {[
                      "assets/images/projects-details/project-detials-swiper-img-1.jpg",
                      "assets/images/projects-details/project-detials-swiper-img-2.png",
                      "assets/images/projects-details/project-detials-swiper-img-1.jpg",
                    ].map((imgSrc, index) => (
                      <SwiperSlide key={index}>
                        <div className="project-details-img">
                          <img src={imgSrc} alt="swiper-img" />
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
                  <div className="project-details-info">
                    Client: <span>ShopEase Ltd.</span>
                  </div>
                  <div className="project-details-info">
                    Role: <span>Full Stack Developer</span>
                  </div>
                  <div className="project-details-info">
                    Duration: <span>3 months</span>
                  </div>
                  {/* <div className="project-details-info">
              Tags: <span>Host Web Design</span>
            </div> */}
                </div>
              </div>
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Project Stats</h3>
                </div>
                <div className="body">
                  <div className="project-details-info">
                    Uptime: <span>99.9%</span>
                  </div>
                  <div className="project-details-info">
                    Products Listed: <span>5k+</span>
                  </div>
                  <div className="project-details-info">
                    Monthly Visitors: <span>10k+</span>
                  </div>
                  <div className="project-details-info">
                    User Rating: <span>4.8+</span>
                  </div>
                </div>
              </div>
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Links</h3>
                </div>
                <div className="body space-y-3">
                  <div className="project-details-info w-full border text-2xl text-white rounded-lg p-3 flex items-center gap-3 hover:bg-[#1e1e1e] transition">
                    <i className="fab fa-github text-[#e50914] text-3xl"></i>
                    <span>Github Repo</span>
                  </div>

                  <div className="project-details-info w-full border text-2xl text-white rounded-lg p-3 flex items-center gap-3 hover:bg-[#1e1e1e] transition">
                    <i className="fab fa-apple text-[#e50914] text-3xl"></i>
                    <span>App Store</span>
                  </div>
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
