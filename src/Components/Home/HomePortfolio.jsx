import { Link } from 'react-router-dom';

const portfolioData = [
  {
    img: 'assets/images/portfolio/portfolio-img-10.jpg',
    title: 'Digital Transformation Advisors',
    subtitle: 'Web Design',
    link: '/project-detail',
  },
  {
    img: 'assets/images/portfolio/portfolio-img-6.jpg',
    title: 'My work is driven by the belief that thoughtful.',
    subtitle: 'App Development',
    link: '/project-detail',
  },
  {
    img: 'assets/images/portfolio/portfolio-img-9.jpg',
    title: 'In this portfolio, you’ll find a curated selection',
    subtitle: 'Web Design',
    link: '/project-detail',
  },
  {
    img: 'assets/images/portfolio/portfolio-img-8.jpg',
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
              <span className="subtitle">Our Featured Projects</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Transforming Ideas into
              <br /> Exceptional
            </h2>
            <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
              Each project reflects our commitment to innovation, precision, and client success. Browse through our latest work to see how we help businesses improve performance, efficiency, and digital presence.
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
