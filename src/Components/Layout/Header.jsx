/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react"
import { Link } from "react-router-dom"
const Header = () => {
  const [sidebar,setSideBar] = useState(false)
  const [mobileSideBar,setMobileSideBar] = useState(false)

  return (
   <>

  {/* tpm-header-area start */}
  <header className="tmp-header-area-start header-one header--sticky header--transparent">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="header-content">
            <div className="logo">
              <Link to="/">
                <img
                  className="logo-dark"
                  src="assets/images/logo/white-logo-reeni.png"
                  alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                />
                <img
                  className="logo-white"
                  src="assets/images/logo/logo-white.png"
                  alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
                />
              </Link>
            </div>
            <nav className="tmp-mainmenu-nav d-none d-xl-block">
              <ul className="tmp-mainmenu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="has-dropdown">
                  <Link to="#">
                    Services
                    <i className="fa-regular fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/service-detail">Service Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="#">
                    Blog
                    <i className="fa-regular fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/blog">Blog Classic</Link>
                    </li>
                    <li>
                      <Link to="/blog-detail">Blog Details</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-dropdown">
                  <Link to="#">
                    Project
                    <i className="fa-regular fa-chevron-down" />
                  </Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/project">Project</Link>
                    </li>
                    <li>
                      <Link to="/project-detail">Project Details</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="tmp-header-right">
              <div className="social-share-wrapper d-none d-md-block">
                <div className="social-link">
                  <Link to="#">
                    <i className="fa-brands fa-instagram" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-linkedin-in" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-twitter" />
                  </Link>
                  <Link to="#">
                    <i className="fa-brands fa-facebook-f" />
                  </Link>
                </div>
              </div>
              <div className="actions-area">
                <div onClick={()=>{setSideBar(true)}} className="tmp-side-collups-area d-none d-xl-block">
                  <button className="tmp-menu-bars tmp_button_active">
                    <i className="fa-regular fa-bars-staggered" />
                  </button>
                </div>
                <div onClick={()=>{setMobileSideBar(true)}} className="tmp-side-collups-area d-block d-xl-none">
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
    <div className={`tmp-sidebar-area tmp_side_bar ${sidebar ? "tmp_side_bar_open" : ""}`}>
      <div className="inner">
        <div className="top-area">
          <Link to="/" className="logo">
            <img
              className="logo-dark"
              src="assets/images/logo/white-logo-reeni.png"
              alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
            />
            <img
              className="logo-white"
              src="assets/images/logo/logo-white.png"
              alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
            />
          </Link>
          <div onClick={()=>{setSideBar(false)}} className="close-icon-area">
            <button className="tmp-round-action-btn close_side_menu_active">
              <i className="fa-sharp fa-light fa-xmark" />
            </button>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="image-area-feature">
            <Link to="index.html">
              <img src="assets/images/logo/man.png" alt="personal-logo" />
            </Link>
          </div>
          <h5 className="title mt--30">
            Freelancer delivering exceptional Webflow, and Next.js solutions.
          </h5>
          <p className="disc">
            I am a skilled freelancer specializing in Webflow development, Figma
            design, and Next.js projects. I deliver creative, dynamic, and
            user-centric web solutions.
          </p>
          <div className="short-contact-area">
            {/* single contact information */}
            <div className="single-contact">
              <i className="fa-solid fa-phone" />
              <div className="information tmp-link-animation">
                <span>Call Now</span>
                <Link to="#" className="number">
                  +92 (8800) - 98670
                </Link>
              </div>
            </div>
            {/* single contact information end */}
            {/* single contact information */}
            <div className="single-contact">
              <i className="fa-solid fa-envelope" />
              <div className="information tmp-link-animation">
                <span>Mail Us</span>
                <Link to="#" className="number">
                  example@info.com
                </Link>
              </div>
            </div>
            {/* single contact information end */}
            {/* single contact information */}
            <div className="single-contact">
              <i className="fa-solid fa-location-crosshairs" />
              <div className="information tmp-link-animation">
                <span>My Address</span>
                <span className="number">66 Broklyant, New York 3269</span>
              </div>
            </div>
            {/* single contact information end */}
          </div>
          {/* social area start */}
          <div className="social-wrapper mt--20">
            <span className="subtitle">find with me</span>
            <div className="social-link">
              <Link to="#">
                <i className="fa-brands fa-instagram" />
              </Link>
              <Link to="#">
                <i className="fa-brands fa-linkedin-in" />
              </Link>
              <Link to="#">
                <i className="fa-brands fa-twitter" />
              </Link>
              <Link to="#">
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
  <div className="d-block d-xl-none ">
    <div className={`tmp-popup-mobile-menu ${mobileSideBar ? "active" : ""}`}>
      <div className="inner">
        <div className="header-top">
          <div className="logo">
            <Link to="/" className="logo-area">
              <img
                className="logo-dark"
                src="assets/images/logo/white-logo-reeni.png"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
              />
              <img
                className="logo-white"
                src="assets/images/logo/logo-white.png"
                alt="Reeni - Personal Portfolio HTML Template for developers and freelancers"
              />
            </Link>
          </div>
          <div onClick={()=>{setMobileSideBar(false)}}  className="close-menu">
            <button className="close-button tmp-round-action-btn">
              <i className="fa-sharp fa-light fa-xmark" />
            </button>
          </div>
        </div>
        <ul className="tmp-mainmenu">
          <li>
            <Link onClick={()=>{setMobileSideBar(false)}} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={()=>{setMobileSideBar(false)}} to="/about">About</Link>
          </li>
          <li className="has-dropdown">
            <Link onClick={()=>{setMobileSideBar(false)}} to="#">
              Services
              <i className="fa-regular fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link onClick={()=>{setMobileSideBar(false)}} to="/service">Service</Link>
              </li>
              <li>
                <Link onClick={()=>{setMobileSideBar(false)}} to="/service-detail">Service Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link onClick={()=>{setMobileSideBar(false)}} to="#">
              Blog
              <i className="fa-regular fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link onClick={()=>{setMobileSideBar(false)}} to="/blog">Blog Classic</Link>
              </li>
              <li>
                <Link onClick={()=>{setMobileSideBar(false)}} to="/blog-detail">Blog Details</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <Link onClick={()=>{setMobileSideBar(false)}} to="#">
              Project
              <i className="fa-regular fa-chevron-down" />
            </Link>
            <ul className="submenu">
              <li>
                <Link onClick={()=>{setMobileSideBar(false)}} to="/project">Project</Link>
              </li>
              <li>
                <Link onClick={()=>{setMobileSideBar(false)}} to="/project-detail">Project Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link onClick={()=>{setMobileSideBar(false)}} to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="social-wrapper mt--40">
          <span className="subtitle">find with me</span>
          <div className="social-link">
            <Link to="#">
              <i className="fa-brands fa-instagram" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-linkedin-in" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-twitter" />
            </Link>
            <Link to="#">
              <i className="fa-brands fa-facebook-f" />
            </Link>
          </div>
        </div>
        {/* social area end */}
      </div>
    </div>
  </div>
</>

  )
}

export default Header