import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { blogData, recentBlogPosts } from '../../utils/data';
const BlogClassic = () => {
 
    const navigate = useNavigate();

  const handleClick = (item) => {
    localStorage.setItem("lastViewedBlog", JSON.stringify(item));
    navigate("/blog-detail", { state: { item } });
  };

  return (
    <>
      <div className="blog-classic-area-wrapper tmp-section-gap">
        <div className="container">
          <div className="row">

            <div className="col-lg-8  pt-10">
              <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{
                  el: '.custom-swiper-pagination',
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<button class="pagination-btn ${className}">${index + 1}</button>`;
                  },
                }}
                className="blog-swiper"
              >
                {blogData.map((item, index) => (
                  <SwiperSlide key={item.id}>
                    <div  onClick={() => handleClick(item)} className={`blog-classic-card cursor-pointer tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${index + 1}`}>
                      <div className="img-box !h-[300px]">
                      
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
                    
                      </div>
                      <div className="blog-classic-content ">
                        <h2 className="title">
                          {item.title}
                        </h2>
                        <p className="para">{item.paragraphs[0]}</p>
                        <div className="tmp-button-here">
                          <Link
                            className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                          >
                            <span className="icon-reverse-wrapper">
                              <span className="btn-text">Read More</span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                              <span className="btn-icon">
                                <i className="fa-sharp fa-regular fa-arrow-right" />
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom pagination bullets styled same as your design */}


              <div className="tmp-pagination-button custom-swiper-pagination mt-8 d-flex gap-2 justify-content-center" />

            </div>

            <div className="col-lg-4">
              <div className="tmp-sidebar">
                <div className="signle-side-bar search-area tmponhover">
                  <div className="body">
                    <div className="search-area">
                      <input type="text" placeholder="Type here" required />
                      <button>
                        <i className="fa-solid fa-magnifying-glass" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="signle-side-bar recent-post-area tmponhover">
                  <div className="header">
                    <h3 className="title">Recent Post</h3>
                  </div>
                  <div className="body">
                    {recentBlogPosts.map((item, index) => (
                      <div onClick={() => handleClick(item)} key={index} className="single-post-card tmp-hover-link cursor-pointer">
                        <div className="single-post-card-img">
                          <img src={item.image} alt="" />
                        </div>
                        <div className="single-post-right">
                          <div className="single-post-top">
                            <i className="fa-regular fa-folder-open" />
                            <p className="post-title">{item.category}</p>
                          </div>
                          <h3 className="post-title">
                            <Link className="link" to="#">
                              {item.title}
                            </Link>
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default BlogClassic