import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { testimonials } from '../../utils/data'



const HomeTestimonial = () => {
  return (
    <section className=" mt-10 py-20">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-[#ff014f] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-2xl text-white max-w-xl mx-auto">
            Trusted by startups and enterprises alike — here’s how we’ve made an impact.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active !bg-[#ff014f]',
          }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="pb-16"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#141414] py-20 rounded-2xl border-t-4 border-[#ff014f] shadow-md hover:shadow-xl transition duration-300 p-8 h-full flex flex-col justify-between">
                <div className="flex mb-4 text-[#ff014f]">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-white italic relative mb-6 ">
                  {item.text}
                </p>
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-[#ff014f]/30 shadow-sm mr-4"
                  />
                  <div>
                    <h4 className="text-2xl font-semibold text-white">{item.name}</h4>
                    <p className="text-[#ff014f] text-4xl">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex justify-center items-center mt-10">
          <button className="testimonial-prev w-20 h-20 flex items-center justify-center rounded-full border border-[#ff014f]/50 text-[#ff014f] hover:bg-[#ff014f] hover:text-white transition">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="testimonial-pagination flex space-x-2 mx-6  "></div>
          <button className="testimonial-next w-20 h-20 flex items-center justify-center rounded-full border border-[#ff014f]/50 text-[#ff014f] hover:bg-[#ff014f] hover:text-white transition">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonial
