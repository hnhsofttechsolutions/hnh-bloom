
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    text: `"We've been working with HNH Soft Tech Solutions for over 3 years now, and their commitment to delivering high-quality software solutions is unmatched. Their team is professional, responsive, and always goes the extra mile."`,
    name: "Emma Johnson",
    role: "Operations Manager",
    image: "assets/images/testimonial/testimonial-img-1.jpeg",
  },
  {
    text: `"HNH Soft Tech Solutions helped us transform our outdated system into a sleek, user-friendly platform. Their experience and deep technical knowledge made a huge difference in our project's success."`,
    name: "Michael Roberts",
    role: "CEO",
    image: "assets/images/testimonial/testimonial-img-2.jpeg",
  },
  {
    text: `
"From the first meeting to the final delivery, HNH Soft Tech Solutions proved to be a reliable partner. They understood our needs perfectly and provided innovative solutions that exceeded our expectations."`,
    name: "Olivia Harris",
    role: "Marketing Head",
    image: "assets/images/testimonial/testimonial-img-1.jpeg",
  },

]

const HomeTestimonial = () => {
  return (
    <section className="bg-black py-20">
      <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">eTestimonials</span>
        </div>
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          What People Say
        </h2>
        {/* <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
          {" "}IT Technology services built specifically for your business.{" "}
        </p> */}
      </div>
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black text-white flex flex-col md:flex-row items-center p-8 gap-6">
                {/* Left: Text Content */}
                <div className="flex-1">
                  <h2 className="text-white text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-6">
                    {item.text}
                  </h2>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-[20px] text-gray-400">{item.role}</p>
                  <div className="testimonital-icon">
                    <img
                      src="assets/images/testimonial/testimonial-icon.svg"
                      alt="testimonial-icon"
                    />
                  </div>

                </div>
                {/* Right: Image */}
                <div className="flex-1">
                  <img
                    src={item.image}
                    alt="testimonial"
                    className="rounded-md w-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default HomeTestimonial
