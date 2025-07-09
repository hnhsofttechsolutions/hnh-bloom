import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
   <>
   <>
  <div className="tmp-banner-one-area">
    <div className="container">
      <div className="banner-one-main-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 ">
            <div className="banner-right-content ">
              <img
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1  "
                src="/assets/images/banner/home-hero.jpeg"
                alt="banner-img"
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-1 py-10">
            <div className="inner">
              <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                Welcome
              </span>
              <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                Empower Your<br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <span className="">
                      <b className="is-visible theme-gradient">Digital Transformation </b>
                      <b className="is-visible theme-gradient">with Scalable IT Solutions</b>
                    </span>
                  </span>
                </span>
              </h1>
              <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                {" "}
                Build smarter, faster, and future-ready with custom software, web, and mobile app development tailored to your business needs.{" "}
              </p>
              <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  to="/contact"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">Contact US</span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                    <span className="btn-icon">
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

   </>
  )
}

export default HomeBanner