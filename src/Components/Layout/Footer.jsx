/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { serviceData } from "../../utils/temp";

const Footer = () => {
  const [demoModal, setDemoModal] = useState(false);
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
                      src="assets/images/logo/logo-white.png"
                      alt="Reeni - Personal Portfolio HTML Template"
                      className="mb-4 h-[50px]"
                    />
                  </Link>
                  <p className="text-3xl">
                    We thrive on taking on bold challenges and crafting
                    innovative advertising solutions that make brands stand out
                    and succeed in a competitive digital world.
                  </p>
                  <div className="social-link footer">
                    <Link to="https://www.facebook.com/hnhtechsolutions">
                      <i className="fa-brands fa-instagram" />
                    </Link>
                    <Link to="#">
                      <i className="fa-brands fa-linkedin-in" />
                    </Link>
                    <Link to="https://www.instagram.com/hnhsofttechsolutions/?hl=en">
                      <i className="fa-brands fa-facebook-f" />
                    </Link>
                  </div>
                  <form action="#" className="newsletter-form-1 mt--10">
                    <input type="email" placeholder="Email Address" />
                    <span className="form-icon">
                      <i className="fa-regular fa-envelope" />
                    </span>
                  </form>
                </div>
              </div>

              {/* Column 2: Quick Link Set 1 */}
              <div className="col-lg-3 col-md-6">
                <div className="single-footer-wrapper quick-link-wrap">
                  <h5 className="ft-title lg:text-center">Quick Link</h5>
                  <ul className="ft-link tmp-link-animation  lg:flex flex-col justify-center items-center">
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
                      <Link to="/project">Portfolio</Link>
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
                    {serviceData?.map((e) => (
                      <li className="has-dropdown-custom">
                        <Link to={`/service?value=${e?.path}`}>{e?.title}</Link>
                        <ul className="submenu-custom">
                          {e?.child?.map((c) => (
                            <li>
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
                      3900 West northwest highway Apt 1172 Dallas TX 75220
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
                        <i className="fa-solid fa-phone" />
                      </span>
                      <Link to="tel:+4915216652405">DE: +49 152 1665 2405</Link>
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
      <div className="ready-chatting-option tmp-ready-chat">
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
      </div>
      {/* ready chatting option via email end */}

      {/* progress area start */}
      <div className="scrollToTop" style={{ display: "block" }}>
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
      </div>
      {/* progress area end */}

      {/* <div class="tmp-right-demo">
            <button class="demo-button">
            <p class="mb--0">48</p>
            <span class="text">Demos</span>
            </button>
            </div> */}

      <div onClick={() => setDemoModal(false)} className="demo-button-wrapper">
        <div className="all-demo show-demo ">
          <div className="demos">
            <div className="theme-wrapper">
              <div>HnH Soft Tech Solution</div>
            </div>
          </div>
        </div>
      </div>
      <div className={`demo-modal-area ${demoModal ? "open" : ""}`}>
        <div className="wrapper">
          <div className="tmp-modal-inner">
            <div className="close-icon">
              <button
                onClick={() => setDemoModal(false)}
                className="demo-close-btn"
              >
                <span>
                  <i className="fa-sharp fa-light fa-xmark" />
                </span>
              </button>
            </div>
            <div className="demo-top text-center">
              <h4 className="title">Reeni</h4>
              <p className="subtitle">
                A personal portfolio website is your digital resume—a place to
                showcase your work, skills, and achievements.
              </p>
            </div>
            <ul
              className="popuptab-area nav nav-tabs"
              id="popuptab"
              role="tablist"
            >
              <li className="nav-item">
                <Link
                  className="nav-link active demo-dark"
                  id="demodark-tab"
                  data-bs-toggle="tab"
                  to="#demodark"
                  role="tab"
                  aria-controls="demodark"
                  aria-selected="true"
                >
                  Dark Demo
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link demo-light"
                  id="demolight-tab"
                  data-bs-toggle="tab"
                  to="#demolight"
                  role="tab"
                  aria-controls="demolight"
                  aria-selected="false"
                >
                  Light Demo
                </Link>
              </li>
            </ul>
            <div className="tab-content" id="popuptabContent">
              <div
                className="tab-pane show active"
                id="demodark"
                role="tabpanel"
                aria-labelledby="demodark-tab"
              >
                <div className="content">
                  <div className="row">
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-1.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index.html">Main Demo</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-02.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-2.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-02.html">Demo 02</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-03.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-3.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-03.html">Demo 03</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-04.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-4.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-04.html">Demo 04</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-05.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-5.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-05.html">Demo 05</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-06.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-6.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-06.html">Demo 06</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-07.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-7.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-07.html">Demo 07</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-08.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-8.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-08.html">Demo 08</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-09.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-9.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-09.html">Demo 09</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-10.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-10.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-10.html">Demo 10</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-11.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-11.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-11.html">Demo 11</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-12.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-12.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-12.html">Demo 12</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-13.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-13.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-13.html">Demo 13</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-14.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-14.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-14.html">Demo 14</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-15.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-15.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-15.html">Demo 15</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-16.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-16.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-16.html">Demo 16</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-17.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-17.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-17.html">Demo 17</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-18.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-18.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-18.html">Demo 18</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-19.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-19.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-19.html">Demo 19</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-20.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-20.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-20.html">Demo 20</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-21.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-21.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-21.html">Demo 21</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-22.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-22.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-22.html">Demo 22</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="#">
                              <img
                                className="w-100"
                                src="assets/images/demo/coming-soon.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="#">Demo 23</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="#">
                              <img
                                className="w-100"
                                src="assets/images/demo/coming-soon.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="#">Demo 24</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                  </div>
                </div>
              </div>
              <div
                className="tab-pane"
                id="demolight"
                role="tabpanel"
                aria-labelledby="demolight-tab"
              >
                <div className="content">
                  <div className="row">
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-1-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-white.html">Main Demo</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-02-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-2-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-02-white.html">Demo 02</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-03-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-3-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-03-white.html">Demo 03</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-04-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-4-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-04-white.html">Demo 04</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-05-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-5-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-05-white.html">Demo 05</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-06-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-6-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-06-white.html">Demo 06</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-07-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-7-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-07-white.html">Demo 07</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-08-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-8-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-08-white.html">Demo 08</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-09-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-9-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-09-white.html">Demo 09</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-10-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-10-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-10-white.html">Demo 10</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-11-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-11-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-11-white.html">Demo 11</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-12-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-12-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-12-white.html">Demo 12</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-13-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-13-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-13-white.html">Demo 13</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-14-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-14-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-14-white.html">Demo 14</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-15-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-15-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-15-white.html">Demo 15</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-16-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-16-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-16-white.html">Demo 16</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-17-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-17-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-17-white.html">Demo 17</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-18-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-18-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-18-white.html">Demo 18</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-19-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-19-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-19-white.html">Demo 19</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-20-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-20-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-20-white.html">Demo 20</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-21-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-21-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-21-white.html">Demo 21</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="index-22-white.html">
                              <img
                                className="w-100"
                                src="assets/images/demo/home-22-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="index-22-white.html">Demo 22</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="#">
                              <img
                                className="w-100"
                                src="assets/images/demo/coming-soon-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="#">Demo 23</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                    {/* Start Single Content  */}
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="single-demo">
                        <div className="inner">
                          <div className="thumbnail">
                            <Link to="#">
                              <img
                                className="w-100"
                                src="assets/images/demo/coming-soon-white.png"
                                alt="Personal Portfolio"
                              />
                              <span className="overlay-content">
                                <span className="overlay-text">
                                  View Demo{" "}
                                  <i className="feather-external-link" />
                                </span>
                              </span>
                            </Link>
                          </div>
                          <div className="inner">
                            <h3 className="title">
                              <Link to="#">Demo 24</Link>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single Content  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
