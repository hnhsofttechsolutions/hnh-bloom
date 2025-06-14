import React from 'react';
import { service } from '../../utils/data';

const HomeService = () => {
  return (
    <>
      {/* Tpm Service Area Start */}
      <section className="service-area tmp-section-gap">
        <div className="container">
          <div className="section-head mb--50">
        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">Our Awsome Service</span>
        </div>
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          We Are Dedicated To Serve You All Time.
        </h2>
        {/* <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
          {" "}IT Technology services built specifically for your business.{" "}
        </p> */}
      </div>
          <div className="row justify-content-center">
            {service.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className={`service-card-v1 h-full tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} tmp-link-animation`}>
                  <div className="service-card-icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <h4 className="service-title">
                    <a href={service.link}>{service.title}</a>
                  </h4>
                  <p className="service-para">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tpm Service Area End */}
    </>
  );
};

export default HomeService;
