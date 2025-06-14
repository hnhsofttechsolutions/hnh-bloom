import React from 'react'
import { Link } from 'react-router-dom'

const AboutOurPricing = () => {
  return (
   <>
  {/* Tpm Our-pricing Area Start */}
  <section className="our-price-plan-area tmp-section-gapBottom">
    <div className="container">
      <div className="section-head mb--60">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">My Price plan</span>
        </div>
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          Enhancing Collaboration
          <br /> between Remote
        </h2>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-6">
          <div className="price-plan-card tmponhover blur-style-two tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="price-sub-title">Starter</span>
            <h3 className="main-price">$ 5.00</h3>
            <p className="per-month">Per Month</p>
            <div className="check-box">
              <ul>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">5 Social Media Account</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">Free Platform Access</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">24/7 Customer Support</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tmp-button-here">
              <Link
                className="tmp-btn hover-icon-reverse btn-border btn-md radius-round"
                to="/conatct"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started</span>
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
        <div className="col-lg-4 col-md-6 tmp-scroll-trigger tmp-fade-in animation-order-2">
          <div className="price-plan-card tmponhover blur-style-two active">
            <span className="price-sub-title">Basic</span>
            <h3 className="main-price">$ 230.00</h3>
            <p className="per-month">Per Month</p>
            <div className="check-box">
              <ul>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">5 Social Media Account</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">Free Platform Access</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">Marketing Platform</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">24/7 Customer Support</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">Life time support</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tmp-button-here">
              <Link
                className="tmp-btn hover-icon-reverse btn-md radius-round"
                to="/contact"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started</span>
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
        <div className="col-lg-4 col-md-6">
          <div className="price-plan-card tmponhover blur-style-two tmp-scroll-trigger tmp-fade-in animation-order-3">
            <span className="price-sub-title">Premium</span>
            <h3 className="main-price">$ 45.00</h3>
            <p className="per-month">Per Month</p>
            <div className="check-box">
              <ul>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">5 Social Media Account</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">Free Platform Access</p>
                  </div>
                </li>
                <li>
                  <div className="check-box-item">
                    <div className="box-icon">
                      <i className="fa-solid fa-circle-check" />
                    </div>
                    <p className="box-para">24/7 Customer Support</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tmp-button-here">
              <Link
                className="tmp-btn hover-icon-reverse btn-border btn-md radius-round"
                to="/contact"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Get Started</span>
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
  </section>
  {/* Tpm Our-pricing Area End */}
</>

  )
}

export default AboutOurPricing