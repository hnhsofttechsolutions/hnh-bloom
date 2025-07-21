import React, { useEffect, useRef } from "react";

const ProjectDetailHeroSection = ({ project }) => {
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

  return (
    <>
      {/* <div className="flex flex-col lg:flex-row lg:space-x-5 py-5 justify-center">
        <div className="w-full p-5 lg:h-[600px] rounded-2xl bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_100%,_rgba(237,_245,_255,_1)_100%)] mb-5 lg:mb-0">
          {project?.projectById?.videos?.[0] ? (
            <video
              ref={mainVideoRef}
              src={`https://api.hnhtechsolutions.com${project.projectById.videos[0]}`}
              autoPlay
              loop
              playsInline
              className="w-full h-[300px] sm:h-[400px] lg:w-[1300px] lg:h-[500px] object-contain rounded-2xl"
            />
          ) : (
            <img
              src={`https://api.hnhtechsolutions.com${project?.projectById?.images?.[0]}`}
              alt="Project"
              className="w-full h-[300px] sm:h-[400px] lg:w-[1300px] lg:h-[500px] object-contain rounded-2xl"
            />
          )}
        </div>
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
      </div> */}
    </>
  );
};

export default ProjectDetailHeroSection;
