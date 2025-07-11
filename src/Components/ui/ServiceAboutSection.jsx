import React from "react";

const ServiceAboutSection = ({ Data }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-12 px-6 py-16">
      {/* Left Image */}
      <div className="max-w-[600px] w-full flex justify-center">
        <img
          className="w-full max-w-[600px] h-auto object-contain rounded-2xl"
          src={Data?.about?.aboutimg}
          alt="about"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-[600px] w-full text-center lg:text-left">
        <h1 className="text-4xl lg:text-5xl font-bold leading-snug mb-6">
          {Data?.about?.abouthead}
        </h1>
        <h1>
        <p className="text-2xl leading-relaxed">
          {Data?.about?.aboutparagraph}
        </p>
        </h1>
      </div>
    </div>
  );
};

export default ServiceAboutSection;
