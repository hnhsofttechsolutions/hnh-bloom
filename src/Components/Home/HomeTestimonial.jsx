
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    text: `ThemesPark Is Incredibly Talented And Detail-Oriented. They Took The Time To Understand My Brand And Created Something Truly Unique`,
    name: "Cameron Williamson",
    role: "Ui/Ux Designer",
    image: "/assets/images/testimonial/bg-image-1png.png",
  },
  {
    text: `A Personal Portfolio Is A Curated Collection Of An Individual’s Professional Work, Showcasing Their Skills, Experience, And Achievements`,
    name: "Cameron Williamson",
    role: "Ui/Ux Designer",
    image: "/assets/images/testimonial/bg-image-2.png",
  },
  {
    text: `Working with themespark was an absolute pleasure! They understood my vision immediately and brought it to life even better than I’d imagined.`,
    name: "Cameron Williamson",
    role: "Ui/Ux Designer",
    image: "/assets/images/testimonial/bg-image-1png.png",
  },

]

const HomeTestimonial = () => {
  return (
    <section className="bg-black py-20">
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
