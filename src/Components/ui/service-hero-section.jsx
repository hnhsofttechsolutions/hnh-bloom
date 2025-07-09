import { ChevronLeft, ChevronRight } from "lucide-react";
import { serviceData } from "../../utils/temp";
import React from "react";
import { Link } from "react-router-dom";
import ContactForm from "../Contact/ContactForm";
import ServiceAboutSection from "./ServiceAboutSection";
// import HomeGetInTouch from "../Home/HomeGetInTouch";
// console.log(serviceData)
const ServiceHeroSection = ({ Data }) => {

  
  return (
    <>
      <div className="w-full h-10 lg:mt-40 z-50 absolute flex justify-between items-center px-8">
        <Link to={`/service?value=${serviceData?.Data?.child ? serviceData?.Data?.child?.id-1 : serviceData?.[Data?.id-1]?.path}`}><div className="bg-color-primary hover:bg-color-primary duration-300 rounded-full p-2 "><ChevronLeft  className="text-white"/></div></Link>
        <Link to={`/service?value=${serviceData?.Data?.child ? serviceData?.Data?.child?.id+1 : serviceData?.[Data?.id+1]?.path}`}><div className="bg-color-primary hover:bg-color-primary duration-300 rounded-full p-2 "><ChevronRight  className="text-white"/></div></Link>
      </div>
      <div className="container py-20 px-10 relative">
        <div className="banner-one-main-wrapper">
          <div className="row align-items-center">
             <div className="col-lg-5 order-lg-1">
              <div className="inner">
                <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2 mt--5">
                  <span className="header-caption">
                    <span className="cd-headline clip is-full-width">
                      <span className="">
                        <b className="is-visible theme-gradient !text-6xl">
                          {Data?.heading?.split(" ")?.length > 4 ? (
                            <>
                              {Data?.heading?.split(" ")?.map((word, index) =>
                                index === 4 ? (
                                  <>
                                    <br />
                                    {word}{" "}
                                  </>
                                ) : (
                                  <>{word} </>
                                )
                              )}
                            </>
                          ) : (
                            Data?.heading
                          )}
                        </b>
                      </span>
                    </span>
                  </span>
                </h1>
                <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">
                  {Data?.paragraph}
                </p>
               <p className="mt-10">{Data?.p}</p>
              </div>
            </div>
            <ContactForm/>
            {/* <div className="col-lg-6 order-lg-2">
              <div className="contact-inner">
                <div className="contact-form">
                  <div id="form-messages" className="error" />
                  <form
                    className="tmp-dynamic-form"
                    id="contact-form"
                    method="POST"
                    action="#"
                  >
                    <div className="contact-form-wrapper row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            name="name"
                            id="contact-name"
                            placeholder="Your Name"
                            type="text"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            id="contact-phone"
                            placeholder="Phone Number"
                            type="number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            id="contact-email"
                            name="email"
                            placeholder="Your Email"
                            type="email"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="input-field"
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <textarea
                            className="input-field"
                            placeholder="Your Message"
                            name="message"
                            id="contact-message"
                            required=""
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="tmp-button-here">
                          <button
                            className="tmp-btn hover-icon-reverse radius-round w-100"
                            name="submit"
                            type="submit"
                            id="submit"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Appointment Now</span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <ServiceAboutSection Data={Data}/>
    </>
  );
};

export default ServiceHeroSection;
