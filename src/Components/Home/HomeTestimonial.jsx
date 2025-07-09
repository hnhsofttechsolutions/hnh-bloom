import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const testimonials = [
  {
    text: `We've been working with HNH Soft Tech Solutions for over 3 years now, and their commitment to delivering high-quality software solutions is unmatched. Their team is professional, responsive, and always goes the extra mile.`,
    name: "Emma Johnson",
    role: "Operations Manager, RetailNet",
    image: "/assets/images/testimonial/emmajohnson.png",
  },
  {
    text: `HNH Soft Tech Solutions helped us transform our outdated system into a sleek, user-friendly platform. Their experience and deep technical knowledge made a huge difference in our project’s success.`,
    name: "Michael Roberts",
    role: "CEO, Medix Health Solutions",
    image: "/assets/images/testimonial/bg-image-2.png",
  },
  {
    text: `From the first meeting to the final delivery, HNH Soft Tech Solutions proved to be a reliable partner. They understood our needs perfectly and provided innovative solutions that exceeded our expectations.`,
    name: "Olivia Harris",
    role: "Marketing Head, LearnPro Online",
    image: "/assets/images/testimonial/olivia.png",
  },
  {
    text: `Their team is highly skilled and extremely easy to work with. We've trusted them with multiple projects over the years, and they’ve never disappointed us.`,
    name: "James Bennett",
    role: "IT Director, BlueWave Logistics",
    image: "/assets/images/testimonial/bg-image-1png.png",
  },
  {
    text: `Thanks to HNH Soft Tech Solutions, we were able to launch our mobile app on time and within budget. They’re true professionals with a solid understanding of the latest technologies.`,
    name: "Sophia Turner",
    role: "Product Manager, QuickCart",
    image: "/assets/images/testimonial/sophia.png",
  },

]

const HomeTestimonial = () => {
  return (
    <section className="py-20">
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
              <div className=" text-white flex flex-col md:flex-row items-center p-8 gap-6">
                {/* Left: Text Content */}
                <div className="flex-1">
                  <h2 className="text-black text-2xl md:text-2xl lg:text-3xl font-semibold leading-relaxed mb-6">
                    {item.text}
                  </h2>
                  <h3 className="text-2xl font-bold">{item.name}</h3>
                  <p className="text-[20px] text-gray-400">{item.role}</p>
                  <div className="testimonital-icon">
                    <img
                    className='!h-20'
                      src="assets/images/testimonial/testimonial-icon.svg"
                      alt="testimonial-icon"
                    />
                  </div>

                </div>
                {/* Right: Image */}
                <div className="flex-1">
                  <div className='overflow-hidden h-72'>
                  <img
                    src={item.image}
                    alt="testimonial"
                    className="rounded-md w-full object-contain"
                  />
                  </div>
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