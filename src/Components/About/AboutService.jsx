import React from 'react';
import { Aboutservices } from '../../utils/data';
import CountUp from 'react-countup';

const AboutService = () => {
    return (
        <>
            {/* Tpm Service Area Start */}
            <section className="service-area tmp-section-gap mt-20">
                <div className="container">
                    <div className="section-head mb--50">
                        <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <span className="subtitle">About Us</span>
                        </div>
                        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
                            We're Partner of
                            Your Innovations
                        </h2>
                        <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
                            HNH Soft Tech Solutions has been optimized to give your visitors the best experience in terms of UX/UI, with a unique design.


                        </p>
                    </div>
                    <div className="row justify-content-center">
                        {Aboutservices.map((service, index) => (
                            <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                                <div className={`service-card-v1 h-full tmp-scroll-trigger tmp-fade-in animation-order-${index + 1} tmp-link-animation`}>
                                    <div className="service-card-icon">
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <h4 className="text-6xl  font-bold text-center">
                                        <CountUp start={1} end={service.score} duration={3.5} />+
                                    </h4>
                                    <p className="text-center py-3">{service.title}</p>
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

export default AboutService;
