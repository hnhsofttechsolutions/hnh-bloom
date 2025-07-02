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
  const { data: project } = useQuery(GETBYID, {
    variables: { projectId: Number(id) },
  });
  console.log("🚀 ~ ProjectDetails ~ project:", project);

  const imageArray =
    project?.projectById?.images?.flatMap((imgStr) =>
      imgStr?.includes(",") ? imgStr.split(",") : [imgStr]
    ) || [];

  const videoArray = project?.projectById?.videos || [];
  const mergeImageAndVideo = [...imageArray, ...videoArray];

  return (
    <>
      <div className="project-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumnail-wrap">
                {/* <img
                  src={`https://api.hnhtechsolutions.com${project?.projectById?.images[0]}`}
                  alt="thumbnail"
                /> */}
                {/* <video
                  src={`https://api.hnhtechsolutions.com${project?.projectById?.videos[0]}` || `https://api.hnhtechsolutions.com${project?.projectById?.images[0]}` }
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="rounded-lg"
                ></video> */}
                {project?.projectById?.videos?.[0] ? (
                  <video
                    src={`https://api.hnhtechsolutions.com${project.projectById.videos[0]}`}
                    autoPlay
                    loop
                    playsInline
                    className="rounded-lg w-full h-auto object-cover"
                  />
                ) : (
                  <img
                    src={`https://api.hnhtechsolutions.com${project?.projectById?.images?.[0]}`}
                    alt="Project"
                    className="rounded-lg w-full h-auto object-cover"
                  />
                )}
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
                    {mergeImageAndVideo?.map((media, indx) => (
                      <SwiperSlide key={indx}>
                        <div>
                          {media.trim().endsWith(".mp4") ? (
                            <video
                              src={`https://api.hnhtechsolutions.com${media.trim()}`}
                              autoPlay
                              className="w-full h-96"
                            />
                          ) : (
                            <img
                              src={`https://api.hnhtechsolutions.com${media.trim()}`}
                              alt={`project-media-${indx}`}
                              className="w-full h-96"
                            />
                          )}
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
                  {project?.projectById?.ProjectDetail?.map((item, indx) => (
                    <div key={indx} className="project-details-info">
                      {item.title}
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="signle-side-bar project-details-area tmponhover">
                <div className="header">
                  <h3 className="title">Project Stats</h3>
                </div>
                <div className="body">
                  {project?.projectById?.ProjectStat?.map((item, indx) => (
                    <div key={indx} className="project-details-info">
                      {item.title}: <span>{item.value}</span>
                    </div>
                  ))}
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
