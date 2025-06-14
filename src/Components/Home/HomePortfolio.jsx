import { Link } from 'react-router-dom';

const portfolioData = [
  {
    img: 'assets/images/portfolio/portfolio-img-1.png',
    title: 'Digital Transformation Advisors',
    subtitle: 'Development Coaches',
    link: '/project-detail',
  },
  {
    img: 'assets/images/portfolio/portfolio-img-2.png',
    title: 'My work is driven by the belief that thoughtful.',
    subtitle: 'Development App',
    link: '/project-detail',
  },
  {
    img: 'assets/images/portfolio/portfolio-img-3.png',
    title: 'In this portfolio, you’ll find a curated selection',
    subtitle: 'Web Design',
    link: '/project-detail',
  },
  {
    img: 'assets/images/portfolio/portfolio-img-4.png',
    title: 'I’ve had the privilege of working with various',
    subtitle: 'App Development',
    link: '/project-detail',
  },
];

const HomePortfolio = () => {
  return (
    <>
      {/* Tpm Latest Portfolio Area Start */}
      <div className="latest-portfolio-area custom-column-grid tmp-section-gapTop">
        <div className="container">
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Latest Portfolio</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Transforming Ideas into
              <br /> Exceptional
            </h2>
            <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
              Business consulting consultants provide expert advice and guida
              businesses to help them improve their performance, efficiency, and
              organizational
            </p>
          </div>

          <div className="row">
            {portfolioData.map((item, index) => (
              <div className="col-lg-6 col-sm-6" key={index}>
                <div
                  className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}
                >
                  <div className="portfoli-card-img">
                    <div className="img-box v2">
                      <Link
                        className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                        to={item.link}
                      >
                        <img className="w-100" src={item.img} alt="Thumbnail" />
                      </Link>
                    </div>
                  </div>
                  <div className="portfolio-card-content-wrap">
                    <div className="content-left">
                      <h3 className="portfolio-card-title">
                        <Link className="link" to={item.link}>
                          {item.title}
                        </Link>
                      </h3>
                      <p className="portfoli-card-para">{item.subtitle}</p>
                    </div>
                    <Link to={item.link} className="tmp-arrow-icon-btn">
                      <div className="btn-inner">
                        <i className="tmp-icon fa-solid fa-arrow-up-right" />
                        <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tpm Latest Portfolio Area End */}
    </>
  );
};

export default HomePortfolio;
