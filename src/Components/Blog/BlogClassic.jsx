import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const BlogClassic = () => {
    const blogData = [
  {
    id: 1,
    image: 'assets/images/blog/blog-classic-card-img-1.jpg',
    title: 'Stand out from the crowd with a professional portfolio',
    tags: ['Web design', 'Comments (05)', 'June 1, 2025'],
    content:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra...',
  },
  {
    id: 2,
    image: 'assets/images/blog/blog-classic-card-img-2.jpg',
    title: 'Elevate your brand with the stunning portfolio',
    tags: ['UI/UX', 'Comments (03)', 'May 15, 2025'],
    content:
      'Cras vehicula nisi vel felis blandit, a viverra lorem varius. Sed nec justo.',
  },
  {
    id: 3,
    image: 'assets/images/blog/blog-classic-card-img-3.jpg',
    title: 'Boost your presence with creative digital solutions',
    tags: ['Marketing', 'Comments (07)', 'April 28, 2025'],
    content:
      'Maecenas volutpat, diam in facilisis tincidunt, enim dolor facilisis nulla.',
  },
   {
    id: 4,
    image: 'assets/images/blog/blog-classic-card-img-1.jpg',
    title: 'Stand out from the crowd with a professional portfolio',
    tags: ['Web design', 'Comments (05)', 'June 1, 2025'],
    content:
      'Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra...',
  },
];
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
            <div className={`blog-classic-card tmp-scroll-trigger tmponhover tmp-fade-in animation-order-${index + 1}`}>
              <div className="img-box">
                <Link to="/blog-detail">
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
              <div className="blog-classic-content">
                <div className="blog-classic-tag">
                  <ul>
                    {item.tags.map((tag, i) => (
                      <li key={i}>
                        <div className="tag-wrap">
                          <i
                            className={
                              i === 0
                                ? 'fa-solid fa-tag'
                                : i === 1
                                ? 'fa-regular fa-comment'
                                : 'fa-solid fa-calendar-day'
                            }
                          />
                          <h4 className="tag-title">{tag}</h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <h2 className="title">
                  <Link to="#">{item.title}</Link>
                </h2>
                <p className="para">{item.content}</p>
                <div className="tmp-button-here">
                  <Link
                    className="tmp-btn hover-icon-reverse radius-round btn-border btn-md"
                    to="/blog-detail"
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
              <Link to="#" className="single-post">
                <span className="single-post-left">
                  <i className="fa-solid fa-arrow-right" />
                  <span className="post-title">Business Solution</span>
                </span>
                <span className="post-num">(01)</span>
              </Link>
              <Link to="#" className="single-post">
                <span className="single-post-left">
                  <i className="fa-solid fa-arrow-right" />
                  <span className="post-title">Web Development Wizardry</span>
                </span>
                <span className="post-num">(08)</span>
              </Link>
              <Link to="#" className="single-post">
                <span className="single-post-left">
                  <i className="fa-solid fa-arrow-right" />
                  <span className="post-title">
                    Content Creation and Strategy
                  </span>
                </span>
                <span className="post-num">(05)</span>
              </Link>
              <Link to="#" className="single-post">
                <span className="single-post-left">
                  <i className="fa-solid fa-arrow-right" />
                  <span className="post-title">UI/UX Design Innovation</span>
                </span>
                <span className="post-num">(05)</span>
              </Link>
            </div>
          </div>
          <div className="signle-side-bar recent-post-area tmponhover">
            <div className="header">
              <h3 className="title">Recent Post</h3>
            </div>
            <div className="body">
              <div className="single-post-card tmp-hover-link">
                <div className="single-post-card-img">
                  <img
                    src="assets/images/blog/single-post-card-img-1.png"
                    alt=""
                  />
                </div>
                <div className="single-post-right">
                  <div className="single-post-top">
                    <i className="fa-regular fa-folder-open" />
                    <p className="post-title">Category</p>
                  </div>
                  <h3 className="post-title">
                    <Link className="link" to="#">
                      Sustainable Solutions: Designing for Tomorrow
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="single-post-card tmp-hover-link">
                <div className="single-post-card-img">
                  <img
                    src="assets/images/blog/single-post-card-img-2.png"
                    alt=""
                  />
                </div>
                <div className="single-post-right">
                  <div className="single-post-top">
                    <i className="fa-regular fa-folder-open" />
                    <p className="post-title">Category</p>
                  </div>
                  <h3 className="post-title">
                    <Link className="link" to="#">
                      Technological Innovations: Shaping the Future
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="single-post-card tmp-hover-link">
                <div className="single-post-card-img">
                  <img
                    src="assets/images/blog/single-post-card-img-3.png"
                    alt=""
                  />
                </div>
                <div className="single-post-right">
                  <div className="single-post-top">
                    <i className="fa-regular fa-folder-open" />
                    <p className="post-title">Category</p>
                  </div>
                  <h3 className="post-title">
                    <Link className="link" to="#">
                      Adventure Awaits Exploring the Great Outdoors
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="signle-side-bar tmponhover">
            <div className="header">
              <h3 className="title">About Me</h3>
            </div>
            <div className="body">
              <div className="about-me-details">
                <div className="about-me-details-head">
                  <div className="about-me-img">
                    <img
                      src="assets/images/blog/about-me-user-img.png"
                      alt="about-me-user-img"
                    />
                  </div>
                  <div className="about-me-right-content">
                    <h3 className="title">Fatima Afrafy</h3>
                    <p className="para">UI/UX Designer </p>
                    <div className="social-link">
                      <Link to="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-linkedin-in" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                    </div>
                  </div>
                </div>
                <p className="about-me-para">
                  Aliquam eros justo, posuere loborti viverra ullamcorper
                  posuere viverra .Aliquam eros justo, posuere justo, posuere.
                </p>
              </div>
            </div>
          </div>
          <div className="signle-side-bar tmponhover">
            <div className="header">
              <h3 className="title">Tags</h3>
            </div>
            <div className="body">
              <div className="tags-wrapper">
                <Link to="#" className="tag-link">
                  All Project
                </Link>
                <Link to="#" className="tag-link">
                  Resume
                </Link>
                <Link to="#" className="tag-link">
                  Graphics
                </Link>
                <Link to="#" className="tag-link">
                  Web Design
                </Link>
                <Link to="#" className="tag-link">
                  CV
                </Link>
                <Link to="#" className="tag-link">
                  Starts
                </Link>
                <Link to="#" className="tag-link">
                  Creative Portfolio
                </Link>
                <Link to="#" className="tag-link">
                  Portfolio
                </Link>
                <Link to="#" className="tag-link">
                  CV Card
                </Link>
                <Link to="#" className="tag-link">
                  Start shape
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      
    </div>
  </div>
</div>

   </>
  )
}

export default BlogClassic