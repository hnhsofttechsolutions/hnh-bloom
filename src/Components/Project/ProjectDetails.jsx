import ProjectGetInTouch from "./ProjectGetInTouch";
import ProjectDetailsTabs from "./ProjectDetailsTabs";
import { Link, useParams } from "react-router-dom";
import { GETBYID } from "../../queries/get-post";
import { useQuery } from "@apollo/client";
import { useEffect, useRef, useState } from "react";
import Loading from "../loading/Loading";
// eslint-disable-next-line no-unused-vars
import ProjectImagesSection from "./ProjectImagesSection";
// eslint-disable-next-line no-unused-vars
import ProjectsSlider from "./ProjectsSlider";
import ImageSlider from "./ImageSlider";
// import ProjectDetailHeroSection from "./ProjectDetailHeroSection";

const ProjectDetails = ({ data }) => {
  // console.log("🚀 ~ ProjectDetails ~ data:", data.images);
  const { id } = useParams();
  // eslint-disable-next-line no-unused-vars
  const currentIndex = data.projects.data.findIndex((p) => p.id === Number(id));
  const { data: project, loading } = useQuery(GETBYID, {
    variables: { projectId: Number(id) },
  });
  const videoList = project?.projectById?.videos || [];
  const imageList = project?.projectById?.images || [];

  // eslint-disable-next-line no-unused-vars
  const totalItems = videoList.length > 0 ? videoList.length : imageList.length;
  // console.log("🚀 ~ ProjectDetails ~ project:", project);
  // eslint-disable-next-line no-unused-vars
  // const prevId =
  //   currentIndex > 0 ? data.projects.data[currentIndex - 1].id : null;
  // eslint-disable-next-line no-unused-vars
  // const nextId =
  //   currentIndex < data.projects.data.length - 1
  //     ? data.projects.data[currentIndex + 1].id
  //     : null;

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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  // console.log("🚀 ~ ProjectDetails ~ count:", count);
  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMedia(null);
  };

  if (loading) return <Loading />;
  return (
    <>
      <div className="project-details-area-wrapper tmp-section-gap relative bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_0%,_rgba(237,_245,_255,_1)_0%)]">
        {/* Navigation Arrows */}
        {/* <div className="w-full h-10 mt-44 z-50 absolute flex justify-between items-center px-8 lg:px-28 lg:mt-96">
          <Link to={prevId ? `/project-detail/${prevId}` : "#"}>
            <div className="bg-color-primary hover:bg-color-primary duration-300 rounded-full p-2">
              <ChevronLeft className="text-white" />
            </div>
          </Link>
          <Link to={nextId ? `/project-detail/${nextId}` : "#"}>
            <div className="bg-color-primary hover:bg-color-primary duration-300 rounded-full p-2">
              <ChevronRight className="text-white" />
            </div>
          </Link>
        </div> */}

        {/* Main Content */}
        <div className="container px-6 py-20">
          <div className="flex-col gap-12">
            {/* <ProjectDetailHeroSection project={project}/> */}
            {/* Video/Image Section */}
            <div className="flex flex-col lg:flex-row lg:space-x-5 py-5 justify-center">
              <div className="w-full lg:w-2/3 space-y-8">
                <ImageSlider
                  mediaList={mergeImageAndVideo}
                  handleMediaClick={handleMediaClick}
                />
              </div>
              {/* <div className="w-full p-5 lg:h-[600px] rounded-2xl relative bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_100%,_rgba(237,_245,_255,_1)_100%)] mb-5 lg:mb-0">
                <div className="h-10 w-full flex justify-between z-50 absolute right-1 top-96">
                <Link >
                    <div onClick={() => count > 0 && setCount(count - 1)} className="bg-color-primary hover:bg-color-primary duration-300 rounded-full p-2">
                      <ChevronLeft className="text-white" />
                    </div>
                  </Link>
                  <Link >
                    <div  onClick={() => count < totalItems - 1 && setCount(count + 1)} className="bg-color-primary hover:bg-color-primary duration-300 rounded-full p-2">
                      <ChevronRight className="text-white" />
                    </div>
                  </Link>
                </div>
                <div>{project?.projectById?.videos?.[0] ? (
                  <video
                    ref={mainVideoRef}
                    src={`https://api.hnhtechsolutions.com${project.projectById.videos[count]}`}
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-[300px] sm:h-[400px] lg:w-[1300px] lg:h-[500px] object-contain rounded-2xl"
                  />
                ) : (
                  <img
                    src={`https://api.hnhtechsolutions.com${project?.projectById?.images?.[count]}`}
                    alt="Project"
                    className="w-full h-[300px] sm:h-[400px] lg:w-[1300px] lg:h-[500px] object-contain rounded-2xl"
                  />
                )}</div>
              </div> */}
              <div className="max-w-full lg:max-w-[400px] lg:min-h-96">
                <div className="signle-side-bar project-details-area tmponhover bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_100%,_rgba(237,_245,_255,_1)_100%)] p-4 rounded-2xl">
                  <div className="header mb-2">
                    <h3 className="title text-lg font-bold">Project Details</h3>
                  </div>
                  <div className="body space-y-2">
                    {project?.projectById?.ProjectDetail?.map((item, indx) => (
                      <div key={indx} className="project-details-info">
                        <p className="font-medium text-black">{item.title}</p>
                        <span className="text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-2/3 space-y-8">
                <ProjectDetailsTabs project={project} />
                {/* <ImageSlider
                  mediaList={mergeImageAndVideo}
                  handleMediaClick={handleMediaClick}
                /> */}
              </div>
              <div></div>
              {/* Right Side: Details Sidebar */}
              <div className="w-full lg:w-1/3 space-y-6 mt-4">
                <div>
                  {/* Project Stats */}
                  <div className="signle-side-bar project-details-area tmponhover bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_100%,_rgba(237,_245,_255,_1)_100%)] ">
                    <div className="header">
                      <h3 className="title">Project Stats</h3>
                    </div>
                    <div className="body">
                      {project?.projectById?.ProjectStat?.map((item, indx) => (
                        <div key={indx} className="project-details-info">
                          {item.title}:{" "}
                          <span className="text-white">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className=" signle-side-bar project-details-area tmponhover bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_100%,_rgba(237,_245,_255,_1)_100%)]">
                    <div className="header">
                      <h3 className="title">Links</h3>
                    </div>
                    <div className="body space-y-3">
                      {project?.projectById?.ProjectDemoLink?.map(
                        (item, indx) => {
                          let iconClass = "fas fa-link";
                          if (item?.link.includes("github.com"))
                            iconClass = "fab fa-github";
                          else if (item?.link.includes("linkedin.com"))
                            iconClass = "fab fa-linkedin";
                          else if (item?.link.includes("facebook.com"))
                            iconClass = "fab fa-facebook";
                          else if (item?.link.includes("twitter.com"))
                            iconClass = "fab fa-twitter";

                          return (
                            <div
                              key={indx}
                              className="project-details-info w-full border text-2xl text-white rounded-lg p-3 flex items-center gap-3 hover:bg-[#1e1e1e] transition"
                            >
                              <i
                                className={`${iconClass} text-[#09527E] text-3xl`}
                              ></i>
                              <Link to={item?.link} target="_blank">
                                <span className="text-white">
                                  {item?.title}
                                </span>
                              </Link>
                            </div>
                          );
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full space-y-8">
                <ProjectsSlider data={data} />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full space-y-8">
                {/* <ProjectsSlider data={data} /> */}
                <ProjectGetInTouch />
              </div>
              {/* Right Side: Details Sidebar */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      {modalOpen && selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[9999]" onClick={handleCloseModal}>
          <div className="z-50 absolute top-0 ">
            <button
              onClick={handleCloseModal}
              className=" text-white text-7xl lg:ml-[300px] lg:mt-16 !border-none"
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
