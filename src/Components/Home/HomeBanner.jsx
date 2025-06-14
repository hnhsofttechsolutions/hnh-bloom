import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
   <>
   <>
  {/* tmp banner area start */}
  <div className="tmp-banner-one-area">
    <div className="container">
      <div className="banner-one-main-wrapper">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 ">
            <div className="banner-right-content ">
              <img
                className="tmp-scroll-trigger tmp-zoom-in animation-order-1  "
                src="assets/images/banner/banner-user-image-one.png"
                alt="banner-img"
              />
              <h2 className="banner-big-text-1 up-down">WEB DESIGNER</h2>
              <h2 className="banner-big-text-2 up-down-2">WEB DESIGNER</h2>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1">
            <div className="inner">
              <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                Hello
              </span>
              <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                i’m Jane Cooper a <br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <span className="cd-words-wrapper">
                      <b className="is-visible theme-gradient">Web Designer.</b>
                      <b className="is-hidden theme-gradient">Web Developer.</b>
                      <b className="is-hidden theme-gradient">
                        UI/UX Designer.
                      </b>
                      <b className="is-hidden theme-gradient">Freelancer.</b>
                      <b className="is-hidden theme-gradient">
                        Content Writer.
                      </b>
                    </span>
                  </span>
                </span>
              </h1>
              <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                {" "}
                A personal portfolio is a collection of your work, achievements,
                and skills that highlights your abilities and professional
                growth. It serves as{" "}
              </p>
              <div className="button-area-banner-one tmp-scroll-trigger tmp-fade-in animation-order-4">
                <Link
                  className="tmp-btn hover-icon-reverse radius-round"
                  to="/project"
                >
                  <span className="icon-reverse-wrapper">
                    <span className="btn-text">View Portfolio</span>
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
  {/* tmp banner area end */}
</>

   </>
  )
}

export default HomeBanner