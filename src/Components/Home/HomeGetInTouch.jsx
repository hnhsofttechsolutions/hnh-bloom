import { useMutation } from "@apollo/client";
import { useState } from "react";
import toast from "react-hot-toast";
import { CREATE_CONTACT_MUTATION } from "../../queries/get-post";


const HomeGetInTouch = () => {
   const [ { CreateContact }] = useMutation(CREATE_CONTACT_MUTATION);
  

  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    console.log("Form Data:", contactData);
    setContactData({
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    toast.success("Submit Successfully");
  };

  return (
    <>
      <section className="get-in-touch-area tmp-section-gapTop">
        <div className="container">
          <div className="contact-get-in-touch-wrap">
            <div className="get-in-touch-wrapper tmponhover">
              <div className="row g-5 align-items-center">
                <div className="col-lg-5">
                  <div className="section-head text-align-left">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <span className="subtitle !text-4xl">Contact Us</span>
                    </div>
                    <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">
                      Have a question or need assistance? Get in touch with our
                      team, and we'll be happy to assist you with all your
                      needs.
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="contact-inner">
                    <div className="contact-form">
                      <div id="form-messages" className="error" />
                      <form
                        onSubmit={submitData}
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
                                placeholder="Full Name"
                                type="text"
                                required
                                value={contactData.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="phone"
                                placeholder="Phone Number"
                                type="tel"
                                required
                                value={contactData.phone}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                required
                                value={contactData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <input
                                className="input-field"
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={contactData.subject}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="form-group">
                              <textarea
                                className="input-field"
                                placeholder="Your Message"
                                name="message"
                                required
                                value={contactData.message}
                                onChange={handleChange}
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
                                  <span className="btn-text">
                                    Appointment Now
                                  </span>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeGetInTouch;
