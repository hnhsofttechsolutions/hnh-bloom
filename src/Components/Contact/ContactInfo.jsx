import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="container">
        <div className="contact-info-wrap">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
                <div className="contact-icon">
                  <i className="fa-solid fa-location-dot text-white" />
                </div>
                <h3 className="title text-white">Address</h3>
                <p className="para">
                   <a
                        href="https://www.google.com/maps?q=3900+West+Northwest+Highway+Apt+1172+Dallas+TX+75220"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        3900 West Northwest Highway Apt 1172, Dallas, TX 75220
                      </a>
                </p>
                {/* <p className="para">house of street</p> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
                <div className="contact-icon">
                  <i className="fa-solid fa-envelope text-white" />
                </div>
                <h3 className="title text-white">E-mail</h3>
                <a href="mailto:themespark11@gmail.com">
                  <p className="para text-white">info@hnhsofttechsolutions.com</p>
                </a>
                {/* <a href="mailto:themespark11@gmail.com">
            <p className="para">themespark11@gmail.com</p>
          </a> */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
                <div className="contact-icon">
                  <i className="fa-solid fa-phone text-white" />
                </div>
                <h3 className="title text-white">Call Me</h3>
                <p className="para">
                  {" "}
                  <a
                    href="https://wa.me/19403440682"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    +1 940 3440 682
                  </a>
                </p>
                {/* <p className="para">+1234 - 000</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
