/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { serviceData } from "../../utils/temp";

const Footer = () => {
  // const [demoModal, setDemoModal] = useState(false);
  return (
    <>
      {/* Start Footer Area  */}
      <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images py-10">
        <div className="container">
          <div className="footer-main footer-style-one">
            <div className="row g-5">
              {/* Column 1: Logo & Description */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper border-right mr--20">
                  <Link to="/">
                    <img
                      src="/assets/images/logo/logo-white.png"
                      alt="HNH - Personal Portfolio HTML Template"
                      className="mb-4 h-[50px]"
                    />
                  </Link>
                  <p className="text-3xl">
                    We thrive on taking on bold challenges and crafting
                    innovative advertising solutions that make brands stand out
                    and succeed in a competitive digital world.
                  </p>
                  <div className="social-link footer">
                    <Link to="https://www.instagram.com/hnhsofttechsolutions/?hl=en">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                    <Link to="https://www.linkedin.com/company/hnh-soft-tech-solutions-pvt-ltd">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                    <Link to="https://www.facebook.com/hnhsofttechsolutions">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </div>
                  {/* <form action="#" className="newsletter-form-1 mt--10">
                    <input type="email" className="text-black" placeholder="Email Address" />
                    <span className="form-icon">
                      <i className="fa-regular fa-envelope" />
                    </span>
                  </form> */}
                </div>
              </div>

              {/* Column 2: Quick Link Set 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation  lg:flex flex-col justify-start ">
                    <li className="">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/project">Project</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Column 3: Quick Link Set 2 */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title">Services</h5>
                  <ul className="ft-link tmp-link-animation">
                    {serviceData?.map((e , i) => (
                      <li key={i} className="has-dropdown-custom">
                        <Link to={`/service?value=${e?.path}`}>{e?.title}</Link>
                        <ul className="submenu-custom">
                          {e?.child?.map((c , id) => (
                            <li key={id}>
                              <Link to={`/service?value=${c?.path}`}>
                                {c?.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Column 4: Contact Info */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper contact-wrap">
                  <h5 className="ft-title">Contact Information</h5>
                  <ul className="ft-link tmp-link-animation">
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <a href="mailto:info@hnhsofttechsolutions.com">
                        info@hnhsofttechsolutions.com
                      </a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-location-dot" />
                      </span>
                     <a
                        href="https://www.google.com/maps?q=3900+West+Northwest+Highway+Apt+1172+Dallas+TX+75220"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        3900 West Northwest Highway Apt 1172, Dallas, TX 75220
                      </a>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+19727774163">US: +1 972 777-4163</Link>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+442045155008">UK: +44 2045 155008</Link>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+19727074985">US: (972) 707-4985</Link>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <FaWhatsapp />
                      </span>
                      <Link target="_blank" to="https://wa.me/+447506100310">
                        UK: 44 7506 100310
                      </Link>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <FaWhatsapp />
                      </span>
                      <Link target="_blank" to="https://wa.me/+19403440682">
                        US: +1 940 3440 682
                      </Link>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <FaWhatsapp />
                      </span>
                      <Link target="_blank" to="https://wa.me/+4915216652405">DE: +49 152 1665 2405</Link>
                    </li>
                    <li>
                      <span className="ft-icon">
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+923402499031">PK: +92 340 249 9031</Link>
                    </li>
                  </ul>
                  {/* <div className="social-link footer">
              <Link to="#"><i className="fa-brands fa-instagram" /></Link>
              <Link to="#"><i className="fa-brands fa-linkedin-in" /></Link>
              <Link to="#"><i className="fa-brands fa-twitter" /></Link>
              <Link to="#"><i className="fa-brands fa-facebook-f" /></Link>
            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyright-area-one pb-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center">
                © 2025 HNH Soft Tech Solutions. All rights reserved.
              </p>
              {/* <div className="main-wrapper">
                  <p className="copy-right-para tmp-link-animation">
                    {" "}
                    ©
                    <Link
                      to='#'
                    >
                      InversWeb{" "}
                    </Link>
                    | All Rights Reserved
                  </p>
                  <ul className="tmp-link-animation">
                    <li>
                      <Link to="/terms-condition">Trams &amp; Condition</Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Footer Area  */}
      {/* ready chatting option via email */}
      {/* <div className="ready-chatting-option tmp-ready-chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">
          <i className="fab fa-facebook-messenger" />
          <i className="fas fa-times" />
        </label>
        <div className="wrapper">
          <div className="head-text">Let's chat with me? - Online</div>
          <div className="chat-box">
            <div className="desc-text">
              Please fill out the form below to start chatting with me directly.
            </div>
            <form className="tmp-dynamic-form" action="#">
              <div className="field">
                <input
                  className="input-field"
                  name="name"
                  placeholder="Your Name"
                  type="text"
                  required=""
                />
              </div>
              <div className="field">
                <input
                  className="input-field"
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  required=""
                />
              </div>
              <div className="field textarea">
                <textarea
                  className="input-field"
                  placeholder="Your Message"
                  name="message"
                  required=""
                  defaultValue={""}
                />
              </div>
              <div className="field">
                <button name="submit" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      {/* ready chatting option via email end */}

      {/* progress area start */}
      {/* <div className="scrollToTop" style={{ display: "block" }}>
        <div className="arrowUp">
          <i className="fa-light fa-arrow-up" />
        </div>
        <div className="water" style={{ transform: "translate(0px, 87%)" }}>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
            <use xlinkto="#wave" />
          </svg>
          <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
            <use xlinkto="#wave" />
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 560 20"
            style={{ display: "none" }}
          >
            <symbol id="wave">
              <path
                d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"
                fill="#"
              />
              <path
                d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"
                fill="#"
              />
              <path
                d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"
                fill="#"
              />
              <path
                d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"
                fill="#"
              />
            </symbol>
          </svg>
        </div>
      </div> */}
      {/* progress area end */}

      {/* <div class="tmp-right-demo">
            <button class="demo-button">
            <p class="mb--0">48</p>
            <span class="text">Demos</span>
            </button>
            </div> */}

    </>
  );
};

export default Footer;
