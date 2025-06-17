import React from 'react';

const experienceData = [
  {
    date: 'February 01, 2024',
    title: 'Idea Generation',
    description:
      'The vision behind HNH Soft Tech Solutions began with a simple but powerful idea — to build smart, scalable, and customer-focused software solutions. Our mission was clear: solve real-world business problems through technology.',
  },
  {
    date: 'February 01, 2024',
    title: 'Testing & Feedback',
    description:
      'Every product went through thorough testing phases where client feedback was prioritized. Our iterative approach helped us improve performance, optimize user experience, and meet the highest industry standards.',
  },
  {
    date: 'February 01, 2024',
    title: 'Initial Release',
    description:
      'Our first launch marked a significant milestone. We delivered our initial product with precision, passion, and performance, establishing the core values of quality, innovation, and reliability that define HNH Soft Tech Solutions today.',
  },
  {
    date: 'February 01, 2024',
    title: 'Result & Final Report',
    description:
      'With each successful delivery, we grew in confidence and capability. Final reports reflected our commitment to transparency and excellence, while client satisfaction and business impact spoke volumes about the value we provided.',
  },
  {
    date: 'February 01, 2024',
    title: 'Design & Development',
    description:
      'With a talented in-house team, we moved into full-scale design and development. From creating seamless UI/UX experiences to architecting robust backend systems, our focus was on building digital products that deliver results.',
  },
];

const HomeExperience = () => {
  return (
    <section className="education-experience tmp-section-gapTop mt-10">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Road Map</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            The Journey of
            <br />
            HNH Soft  Tech Solutions
          </h2>
        </div>

        <div className="row g-5">
          {experienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
              >
                <h4 className="edu-sub-title">{item.date}</h4>
                <h2 className="edu-title">{item.title}</h2>
                <p className="edu-para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
{/* About Company */}
   <section className=" py-16 mt-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      {/* Left Side - Content */}
      <div className="lg:w-1/2 w-full">
        <h2 className="text-3xl md:text-6xl font-bold text-[#ff014f] mb-6">
          About Our Company
          <span className="inline-block ml-3">
            <img
              src="assets/images/custom-line/custom-line.png"
              alt="custom-line"
              className="mb-2"
            />
          </span>
        </h2>

        <h3 className="text-4xl font-semibold text-white mb-4">
          Choose The Best IT Service Company
        </h3>

        <p className="text-white text-3xl leading-relaxed">
          I have been working with <span className="font-semibold text-[#ff014f]">HNH Soft Tech Solutions</span> for several years now,
          and they have consistently exceeded my expectations. Their attention to detail and commitment to excellence are evident in everything they do.
          <br /><br />
          Whether it's software development, IT support, or any other service they offer, HNH Soft Tech Solutions is the best in the business.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="lg:w-1/2 w-full">
        <div className="rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 duration-300">
          <img
            src="assets/images/experiences/expert-img.jpg"
            alt="expert-img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>


      </div>
    </section>
  );
};

export default HomeExperience;
