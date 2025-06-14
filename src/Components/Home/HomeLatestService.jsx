import React from 'react'
import { services } from '../../utils/data'
console.log("🚀 ~ services:", services)

const HomeLatestService = () => {
  return (
    <>
    <>
  {/* Tpm Latest Service Area Start */}
  <section className="latest-service-area tmp-section-gapTop">
    <div className="container">
      <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">Our Awesome Services</span>
        </div>
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          We Are Dedicated To <br />Serve You All Time.
        </h2>
        <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
          {" "}IT Technology services built specifically for your business.{" "}
        </p>
      </div>
      <div className="row">
        <div className="col-lg-12 services-grid">
          {services.map((data , index) => <div key={index} className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1 h-[90%]">
            <h2 className="service-card-num">
              <span>{data.indx}</span>{data.title}
            </h2>
            <p className="service-para">
            {data.description}
            </p>
          </div>)}
          {/* <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
            <h2 className="service-card-num">
              <span>02.</span>My Portfolio of Innovation
            </h2>
            <p className="service-para">
              My work is driven by the belief that thoughtful design and
              strategic planning can empower brands, transform businesses
            </p>
          </div> */}
          {/* <div className="service-card-v2 tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
            <h2 className="service-card-num">
              <span>03.</span>A Showcase of My Projects
            </h2>
            <p className="service-para">
              In this portfolio, you’ll find a curated selection of projects
              that highlight my skills in Main Areas, e.g., responsive web
              design
            </p>
          </div> */}
        </div>
        {/* <div className="col-lg-6">
          <div className="service-card-user-image">
            <img
              className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
              src="assets/images/services/latest-services-user-image.png"
              alt="latest-user-image"
            />
          </div>
        </div> */}
      </div>
    </div>
  </section>
  {/* Tpm Latest Service Area End */}
</>

    </>
  )
}

export default HomeLatestService