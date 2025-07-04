import ProjectGetInTouch from "./ProjectGetInTouch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProjectDetailsTabs from "./ProjectDetailsTabs";
import { Link, useParams } from "react-router-dom";
import { GETBYID } from "../../queries/get-post";
import { useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";

const ProjectDetails = ({ data }) => {
  const { id } = useParams();
  const { data: project } = useQuery(GETBYID, {
    variables: { projectId: Number(id) },
  });

  const imageArray =
    project?.projectById?.images?.flatMap((imgStr) =>
      imgStr?.includes(",") ? imgStr.split(",") : [imgStr]
    ) || [];

  const videoArray = project?.projectById?.videos || [];
  const mergeImageAndVideo = [...imageArray, ...videoArray];

  const mainVideoRef = useRef();

  useEffect(() => {
    const video = mainVideoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch((err) => console.warn("Play blocked:", err));
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project?.projectById?.videos?.[0]]);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (prevRef.current && nextRef.current) {
        setNavReady(true);
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [project]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  return (
    <>
      <div className="project-details-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-thumnail-wrap">
                {project?.projectById?.videos?.[0] ? (
                  <video
                    ref={mainVideoRef}
                    src={`https://api.hnhtechsolutions.com${project.projectById.videos[0]}`}
                    autoPlay
                    loop
                    playsInline
                    className="!rounded-2xl w-full h-[500px] object-contain"
                  />
                ) : (
                  <img
                    src={`https://api.hnhtechsolutions.com${project?.projectById?.images?.[0]}`}
                    alt="Project"
                    className="!rounded-2xl w-full h-[500px] object-contain"
                  />
                )}
              </div>
            </div>
            <div className="col-lg-8">
              <ProjectDetailsTabs project={project} />
              <div className="project-details-content-wrap">
                <div className="project-details-swiper-wrapper">
                  <Swiper
                    modules={[Navigation]}
                    navigation={{
                      prevEl: prevRef.current,
                      nextEl: nextRef.current,
                    }}
                    onInit={(swiper) => {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }}
                    loop={true}
                    slidesPerView={2}
                    spaceBetween={30}
                    className="swiper project-details-swiper"
                  >
                    {mergeImageAndVideo.map((media, indx) => (
                      <SwiperSlide key={indx}>
                        <div
                          onClick={() => handleMediaClick(media)}
                          className="cursor-pointer"
                        >
                          {media.trim().endsWith(".mp4") ? (
                            <video
                              src={`https://api.hnhtechsolutions.com${media.trim()}`}
                              autoPlay
                              loop
                              muted
                              className="w-full h-96 object-cover"
                            />
                          ) : (
                            <img
                              src={`https://api.hnhtechsolutions.com${media.trim()}`}
                              alt={`project-media-${indx}`}
                              className="w-full h-96 object-cover"
                            />
                          )}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>

                  <div className="project-details-swiper-btn flex justify-between mt-4">
                    <div
                      ref={prevRef}
                      className="project-swiper-button-prev cursor-pointer"
                    >
                      <span>
                        <i className="fa-solid fa-arrow-left" />
                      </span>{" "}
                      Previous
                    </div>
                    <div
                      ref={nextRef}
                      className="project-swiper-button-next cursor-pointer"
                    >
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
                      iconClass = "fas fa-link";
                    }

                    return (
                      <div
                        key={indx}
                        className="project-details-info w-full border text-2xl text-white rounded-lg p-3 flex items-center gap-3 hover:bg-[#1e1e1e] transition"
                      >
                        <i className={`${iconClass} text-[#e50914] text-3xl`}></i>
                        <Link to={item?.link} target="_blank">
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

      {/* Modal */}
      {modalOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]">
            <div className="z-50 absolute top-0">
            <button
              onClick={handleCloseModal}
              className=" text-white text-6xl "
            >
              &times;
            </button>
            </div>
          <div className="relative max-w-5xl w-full max-h-[90vh] p-4">
            {selectedMedia.trim().endsWith(".mp4") ? (
              <video
                src={`https://api.hnhtechsolutions.com${selectedMedia.trim()}`}
                controls
                autoPlay
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            ) : (
              <img
                src={`https://api.hnhtechsolutions.com${selectedMedia.trim()}`}
                alt="Full View"
                className="w-full max-h-[80vh] object-contain rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
