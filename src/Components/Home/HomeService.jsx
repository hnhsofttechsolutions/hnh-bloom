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
          <span className="subtitle">What We Offer</span>
        </div>
        <h3 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          Results-Driven IT Services to Accelerate Your Digital Growth
        </h3>
        <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
          {" "}Enhance your business with expertly crafted IT solutions—from digital marketing and SEO to scalable software and cross-platform applications. Our services are tailored to deliver performance, visibility, and long-term value.{" "}
        </p>
      </div>
          <div className="row justify-content-center">
            {service.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <div className={`service-card-v1 h-full tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} tmp-link-animation`}>
                  <div className="service-card-icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <h4 className="service-title">
                    <h3>{service.title}</h3>
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
