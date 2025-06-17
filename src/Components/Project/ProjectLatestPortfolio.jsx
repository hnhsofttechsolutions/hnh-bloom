import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioAll, portfolioCloud, portfolioDesign, portfolioMobile, portfolioWeb } from '../../utils/data';


const ProjectLatestPortfolio = () => {
  const [data, setData] = useState(portfolioAll);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className='w-full flex justify-center items-center pt-10'>
            <button  onClick={()=> setData(portfolioAll)} className=' bg-transparent text-[20px] text-white space-x-1 font-semibold p-2 rounded-full'>All</button>
            <button onClick={()=> setData(portfolioWeb)} className=' bg-transparent text-[20px] text-white space-x-1 font-semibold p-2 rounded-full'>Web Development</button>
            <button  onClick={()=> setData(portfolioMobile)} className=' bg-transparent text-[20px] text-white space-x-1 font-semibold p-2 rounded-full'>Mobile Development</button>
            <button  onClick={()=> setData(portfolioDesign)} className=' bg-transparent text-[20px] text-white space-x-1 font-semibold p-2 rounded-full'>Web Design</button>
            <button  onClick={()=> setData(portfolioCloud)} className=' bg-transparent text-[20px] text-white space-x-1 font-semibold p-2 rounded-full'>Cloud Solution</button>
          </div>
          {data.map((item) => (
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
