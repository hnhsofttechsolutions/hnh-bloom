import CountUp from "react-countup";

const HomeCounter = () => {
  return (
    <>
      <section className="counter-area">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="year-of-expariance-wrapper bg-blur-style-one tmp-scroll-trigger tmp-fade-in animation-order-1">
                <div className="year-expariance-wrap">
                  <h2 className="counter year-number">
                    <span style={{ whiteSpace: "nowrap" }}>
                      <CountUp start={1} end={19} duration={3.5} />+
                    </span>
                  </h2>

                  <h3 className="year-title">
                    Years Of <br /> Excellence <br />in Business <br />Consulting
                  </h3>
                </div>
                <p className="year-para">
                  Empowering businesses with strategic insights, operational improvements, and result-driven consulting services tailored to fuel sustainable growth and efficiency.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-xl-6 col-xxl-6">
              <div className="counter-area-right-content">
                <div className="row g-5">
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-1">
                      <h3 className="counter counter-title">
                        <CountUp start={1} end={10000} duration={3.5} />
                        k+
                      </h3>
                      <p className="counter-para">Projects Delivered</p>
                      <p className="text-center ">Successfully completed digital solutions and consulting projects across multiple industries.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                      <h3 className="counter counter-title">
                        <CountUp start={1} end={8000} duration={3.5} />
                        k+
                      </h3>
                      <p className="counter-para">Natural Product Integrations</p>
                      <p className="text-center ">Expertise in tech-driven solutions for natural and sustainable product businesses.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-3">
                      <h3 className="counter counter-title">
                        <CountUp start={1} end={200} duration={3.5} />+
                      </h3>
                      <p className="counter-para">Verified Client Reviews</p>
                      <p className="text-center ">Trusted and recommended by hundreds of satisfied clients worldwide.</p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="counter-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-4">
                      <h3 className="counter counter-title">
                        <CountUp start={1} end={1000} duration={3.5} />+
                      </h3>
                      <p className="counter-para">Happy Clients</p>
                      <p className="text-center ">Delivering measurable results, long-term partnerships, and client satisfaction.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tpm Counter Area End */}
    </>
  );
};

export default HomeCounter;
