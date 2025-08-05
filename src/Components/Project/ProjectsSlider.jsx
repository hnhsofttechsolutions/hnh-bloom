import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const ProjectsSlider = ({ data }) => {
  const projects = data?.projects?.data || [];

  return (
    <div className="w-full min-w-7xl mx-auto py-10 px-6 md:px-10  rounded-lg mb-5">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        // navigation
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-xl"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="w-[350px] h-[300px]  rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out">
              <Link to={`/project-detail/${project?.id}`}>
                <img
                  src={`https://api.hnhtechsolutions.com${project?.images?.[0]}`}
                  alt={`Slide ${index}`}
                  className="w-[350px] h-[300px] object-contain"
                />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectsSlider;
