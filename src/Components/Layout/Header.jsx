/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceData } from "../../utils/temp";
import React from "react";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  const [sidebar, setSideBar] = useState(false);
  const [mobileSideBar, setMobileSideBar] = useState(false);
  const [service, setService] = useState("close");

  return (
    <>
      {/* tpm-header-area start */}
      <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="header-content">
                <div className="logo">
                  <a href="/">
                    <img
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      className="logo-dark"
                      src="/assets/images/logo/logo-white.png"
                      alt="HNH SoftTech Solutions - Personal Portfolio HTML Template for developers and freelancers"
                    />
                  </a>
                </div>
                <nav className="tmp-mainmenu-nav d-none d-xl-block">
                  <ul className="tmp-mainmenu">
                    <li
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                    >
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link>
                        Services
                        <i className="fa-regular fa-chevron-down" />
                      </Link>
                      <ul className="submenu">
                        {serviceData?.map((e, i) => (
                          <li key={i} className="has-dropdown-custom">
                            <Link to={`/service?value=${e?.path}`}>
                              {e?.title}
                            </Link>
                            <ul className="submenu-custom">
                              {e?.child?.map((c, id) => (
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
                    </li>
                    <li className="has-dropdown">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to="/project">Project</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="tmp-header-right">
                  <div className="social-share-wrapper d-none d-md-block">
                    <div className="social-link">
                      <Link target="_blank" to="https://www.instagram.com/hnhsofttechsolutions/?hl=en">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                      <Link target="_blank" to="https://www.linkedin.com/company/hnh-soft-tech-solutions-pvt-ltd">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                      <Link target="_blank" to="https://www.facebook.com/hnhsofttechsolutions">
                        <i className="fa-brands fa-facebook-f" /> 
                      </Link>
                    </div>
                  </div>
                  <div className="actions-area">
                    <div
                      onClick={() => {
                        setSideBar(true);
                      }}
                      className="tmp-side-collups-area d-none d-xl-block"
                    >
                      <button className="tmp-menu-bars tmp_button_active">
                        <i className="fa-regular fa-bars-staggered" />
                      </button>
                    </div>
                    <div
                      onClick={() => {
                        setMobileSideBar(true);
                      }}
                      className="tmp-side-collups-area d-block d-xl-none"
                    >
                      <button className="tmp-menu-bars humberger_menu_active">
                        <i className="fa-regular fa-bars-staggered" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* tpm-header-area end */}
      <div className="d-none d-xl-block ">
        <div
          className={`tmp-sidebar-area tmp_side_bar ${
            sidebar ? "tmp_side_bar_open" : ""
          }`}
        >
          <div className="inner bg-[linear-gradient(245deg,_rgba(148,_181,_204,_1)_100%,_rgba(237,_245,_255,_1)_100%)]">
            <div className="top-area">
              <Link to="/" className="logo">
                <h1 className="font-bold text-3xl text-white">HNH SOFT TECH SOLUTIONS</h1>
              </Link>
              <div
                onClick={() => {
                  setSideBar(false);
                }}
                className="close-icon-area"
              >
                <button className="tmp-round-action-btn close_side_menu_active">
                  <i className="fa-sharp fa-light fa-xmark" />
                </button>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="image-area-feature">
                <Link to="/">
                  <img
                    src="/assets/images/banner/home-hero.jpeg"
                    alt="personal-logo"
                  />
                </Link>
              </div>
              <h5 className="title mt--30">
                Have a question or need assistance? Get in touch with our team,
                and we'll be happy to assist you with all your needs.
              </h5>
              <p className="disc text-white">
                Have a question or want to work together? Drop us a message, and
                we'll get back to you as soon as possible.
              </p>
              <div className="short-contact-area mt-4">
                {/* single contact information */}
                <div className="single-contact">
                  <i className="fa-solid fa-phone" />
                  <div className="information tmp-link-animation">
                    <span>Call Now</span>
                    <Link to="#" className="number">
                      +1 (972) 777-4163
                    </Link>
                  </div>
                </div>
                {/* single contact information end */}
                {/* single contact information */}
                <div className="single-contact">
                  <i className="fa-solid fa-envelope" />
                  <div className="information tmp-link-animation">
                    <span>Mail Us</span>
                    <Link
                      to="mailto:info@hnhsofttechsolutions.com"
                      className="number"
                    >
                      info@hnhsofttechsolutions.com
                    </Link>
                  </div>
                </div>
                {/* single contact information end */}
                {/* single contact information */}
                <div className="single-contact">
                  <i className="fa-solid fa-location-crosshairs" />
                  <div className="information tmp-link-animation">
                    <span>My Address</span>
                    <span className="number">
                      <a
                        href="https://www.google.com/maps?q=3900+West+Northwest+Highway+Apt+1172+Dallas+TX+75220"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=""
                      >
                        3900 West Northwest Highway Apt 1172, Dallas, TX 75220
                      </a>
                      {/* 3900 West northwest highway Apt 1172 Dallas TX 75220 */}
                    </span>
                  </div>
                </div>
                {/* single contact information end */}
              </div>
              {/* social area start */}
              <div className="social-wrapper mt--20">
                <span className="subtitle">find with me</span>
                <div className="social-link">
                  <Link target="_blank" to="https://www.instagram.com/hnhsofttechsolutions/?hl=en">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link target="_blank" to="https://www.linkedin.com/company/hnh-soft-tech-solutions-pvt-ltd">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link target="_blank" to="https://www.facebook.com/hnhsofttechsolutions">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </div>
              </div>
              {/* social area end */}
            </div>
          </div>
        </div>
        <Link
          className="overlay_close_side_menu close_side_menu_active"
          to="javascript:void(0);"
        />
      </div>

      {/* mobile responsive */}
      <div className="d-block d-xl-none">
        <div
          className={`tmp-popup-mobile-menu ${mobileSideBar ? "active" : ""}`}
        >
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <Link to="/" className="logo-area">
                  <img
                    className="logo-dark"
                    src="/assets/images/logo/logo-white.png"
                    alt="HNH SoftTech Solutions - Personal Portfolio HTML Template for developers and freelancers"
                  />
                  <img
                    className="logo-white"
                    src="/assets/images/logo/logo-white.png"
                    alt="HNH SoftTech Solutions - Personal Portfolio HTML Template for developers and freelancers"
                  />
                </Link>
              </div>
              <div
                onClick={() => {
                  setMobileSideBar(false);
                }}
                className="close-menu"
              >
                <button className="close-button tmp-round-action-btn">
                  <i className="fa-sharp fa-light fa-xmark" />
                </button>
              </div>
            </div>
            <ul className="tmp-mainmenu">
              <li>
                <Link
                  onClick={() => {
                    setMobileSideBar(false);
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setMobileSideBar(false);
                  }}
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li className="has-dropdown relative">
                <button
                  onClick={() =>
                    setService((prev) => (prev === "open" ? "close" : "open"))
                  }
                  className="text-left w-full bg-transparent border-none outline-none p-0 m-0"
                >
                  <Link className="!flex items-center gap-1">
                    Service <FaChevronDown />
                  </Link>
                </button>
                {service === "open" && (
                  <ul className="z-50 absolute bg-[#edf5ff] p-4 rounded-xl">
                    {serviceData?.map((e, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          setMobileSideBar(false);
                          setService("close");
                        }}
                        className=""
                      >
                        <Link to={`/service?value=${e?.path}`}>{e?.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li className="has-dropdown">
                <Link
                  onClick={() => {
                    setMobileSideBar(false);
                  }}
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="has-dropdown">
                <Link
                  onClick={() => {
                    setMobileSideBar(false);
                  }}
                  to="/project"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setMobileSideBar(false);
                  }}
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="social-wrapper mt--40">
              <span className="subtitle">find with me</span>
              <div className="social-link">
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
            </div>
            {/* social area end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
