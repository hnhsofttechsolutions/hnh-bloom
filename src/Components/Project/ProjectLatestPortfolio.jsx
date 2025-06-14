import React from 'react';
import { Link } from 'react-router-dom';

const portfolioData = [
  {
    id: 1,
    title: 'Digital Transformation Advisors',
    subtitle: 'Development Coaches',
    image: 'assets/images/latest-portfolio/tab-image-4.png',
    showIcon: true,
  },
  {
    id: 2,
    title: 'Digital Transformation Advisors',
    subtitle: 'Development Coaches',
    image: 'assets/images/latest-portfolio/tab-image-5.png',
    showIcon: true,
  },
  {
    id: 3,
    title: 'Digital Transformation Advisors',
    subtitle: 'Development Coaches',
    image: 'assets/images/latest-portfolio/tab-image-6.png',
    showIcon: true,
  },
  {
    id: 4,
    title: 'Digital Transformation Advisors',
    subtitle: 'Development Coaches',
    image: 'assets/images/latest-portfolio/tab-image-7.png',
    showIcon: true,
  },
];

const ProjectLatestPortfolio = () => {
  return (
    <>
      {/* Tpm Our Latest Portfolio Area Start */}
      <div className="container">
        <div className="row">
          {portfolioData.map((item) => (
            <div className="col-lg-6 col-md-6 col-12" key={item.id}>
              <div className="latest-portfolio-card v5 tmp-hover-link">
                <div className="portfoli-card-img">
                  <div className="img-box v2">
                    <Link to="/project-detail">
                      <img
                        className="img-primary hidden-on-mobile"
                        src={item.image}
                        alt="Blog Thumbnail"
                      />
                      <img
                        className="img-secondary"
                        src={item.image}
                        alt="Blog Thumbnail"
                      />
                    </Link>
                  </div>
                  {item.showIcon && (
                    <Link to="/project-detail" className="img-link-icon">
                      <i className="fa-solid fa-arrow-up-long" />
                    </Link>
                  )}
                </div>
                <div className="portfolio-card-content-wrap">
                  <div className="content-left">
                    <h3 className="portfolio-card-title">
                      <Link className="link" to="/project-detail">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="portfoli-card-para">{item.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tpm Our Latest Portfolio Area End */}
    </>
  );
};

export default ProjectLatestPortfolio;
