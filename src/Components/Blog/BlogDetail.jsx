import React from 'react'
import { Link } from 'react-router-dom'

const BlogDetail = () => {
  return (
  <div className="blog-classic-area-wrapper tmp-section-gap">
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <div className="blog-details-left-area">
          <div className="thumbnail-top">
            <img
              src="assets/images/blog/details/01.png"
              alt="Corporate_business"
            />
          </div>
          <div className="blog-details-discription">
            <div className="blog-classic-tag">
              <h4 className="title">By Stanio lainto</h4>
              <ul>
                <li>
                  <div className="tag-wrap">
                    <i className="fa-solid fa-tag" />
                    <h4 className="tag-title">Web design</h4>
                  </div>
                </li>
                <li>
                  <div className="tag-wrap">
                    <i className="fa-solid fa-calendar-day" />
                    <h4 className="tag-title">Comments (05)</h4>
                  </div>
                </li>
              </ul>
            </div>
            <h3 className="title split-collab">
              Elevate Your Brand With A The Stunning Portfolio
            </h3>
            <p className="disc">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
              Aliquam
            </p>
            <p className="disc">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justoposuere lobortis
              non, viverra laoreet augue mattis fermentum ullamcorper viverra
              laore Aliquam eros justo posuere desig loborti viverra laoreet
              matti ullamcorper posuere viverra
            </p>
          </div>
          <div className="quote-area-blog-details">
            <p className="disc">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum ullamcorper viverra
              laoreet.
            </p>
            <h3 className="author">Mark wood</h3>
            <span>
              <i className="fa-solid fa-quote-right" />
            </span>
          </div>
          <div className="blog-details-discription">
            <h3 className="title split-collab">
              Showcase your talent with our portfolio
            </h3>
            <p className="disc">
              Aliquam eros justo, posuere loborti viverra laoreet matti
              ullamcorper posuere viverra .Aliquam eros justo, posuere lobortis,
              viverra laoreet augue mattis fermentum ullamcorper viverra laoreet
              Aliquam eros
            </p>
            <div className="our-portfolio-swiper">
              <div className="blog-details-swiper">
                <div className="our-portfoli-swiper-card">
                  <div className="card-left-content">
                    <p className="disc">
                      Ished fact that a reader will be distrol acted bioii
                      the.ished fact th reader will besi distrol ac laoreet
                      Aliquam fact that a reader will be distrol acted Aliquam
                      posuere loborti viverra laoreet
                    </p>
                    <p className="disc">
                      Aliquam eros justo, posuere loborti viverra laoreet matt
                      design the ullamcorper posuere viverra .Aliquam eros justo
                      posuere inni lobortis non, viverra laoreet augue mattis
                    </p>
                    <p className="disc">
                      Aliquam eros justo, posuere loborti viverra laoreet matti
                      design an the ullamcorper posuere viverra .Aliquam eros
                    </p>
                  </div>
                  <div className="card-right-content">
                    <img
                      src="assets/images/blog/blog-details-swiper-img.jpg"
                      alt="blog-swip-img"
                    />
                  </div>
                </div>
              </div>
              <div className="our-portfolio-swiper-btn-wrap">
                <Link to="#" className="prev-btn">
                  <div className="tmp-arrow-btn">
                    <i className="fa-solid fa-arrow-left" />
                  </div>
                  <div className="btn-content">
                    <span className="para">Previous post</span>
                    <h4 className="title">Insure your peace of mind</h4>
                  </div>
                </Link>
                <Link to="#" className="next-btn">
                  <div className="btn-content">
                    <span className="para">Next post</span>
                    <h4 className="title">Coverage you can count on</h4>
                  </div>
                  <div className="tmp-arrow-btn">
                    <i className="fa-solid fa-arrow-right" />
                  </div>
                </Link>
              </div>
            </div>
            {/* <div className="blog-details-navigation">
              <div className="navigation-tags">
                <h3 className="tag-title">Keyword:</h3>
                <ul>
                  <li>
                    <p className="tag">
                      <Link to="#">Interiour</Link>
                    </p>
                  </li>
                  <li>
                    <p className="tag">
                      <Link to="#">Ux design</Link>
                    </p>
                  </li>
                  <li>
                    <p className="tag">
                      <Link to="#">Graphics</Link>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="social-link footer">
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
            </div> */}
            {/* Comment Area Main Wrapper Start */}
            {/* <div className="comment-area-main-wrapper mt--30">
              <h3 className="title">Comments (3)</h3>
              <div className="single-comment-audience">
                <div className="author-image tmponhover">
                  <img
                    src="assets/images/blog/comments-img-1.png"
                    alt="Corporate_business"
                  />
                </div>
                <div className="right-area-commnet">
                  <div className="top-area-comment">
                    <div className="left">
                      <h6 className="title">Stanio lainto</h6>
                      <span>September 16, 2023</span>
                    </div>
                    <div className="social-link-inner">
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </div>
                  </div>
                  <p className="disc">
                    Ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader will be distrol acted laoreet
                    Aliquam fact that a reader will be distrol acted Aliquam
                    eros justo.
                  </p>
                  <Link to="#" className="reply-btn">
                    reply
                  </Link>
                </div>
              </div>
              <div className="single-comment-audience pl--100">
                <div className="author-image tmponhover">
                  <img
                    src="assets/images/blog/comments-img-2.png"
                    alt="Corporate_business"
                  />
                </div>
                <div className="right-area-commnet">
                  <div className="top-area-comment">
                    <div className="left">
                      <h6 className="title">Court Henry</h6>
                      <span>September 16, 2023</span>
                    </div>
                    <div className="social-link-inner">
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </div>
                  </div>
                  <p className="disc">
                    Ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader will be distrol acted laoreet.
                  </p>
                  <Link to="#" className="reply-btn">
                    reply
                  </Link>
                </div>
              </div>
              <div className="single-comment-audience">
                <div className="author-image tmponhover">
                  <img
                    src="assets/images/blog/comments-img-2.png"
                    alt="Corporate_business"
                  />
                </div>
                <div className="right-area-commnet">
                  <div className="top-area-comment">
                    <div className="left">
                      <h6 className="title">Court Henry</h6>
                      <span>September 16, 2023</span>
                    </div>
                    <div className="social-link-inner">
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-twitter" />
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-instagram" />
                      </Link>
                    </div>
                  </div>
                  <p className="disc">
                    Ished fact that a reader will be distrol acted bioii
                    the.ished fact that a reader will be distrol acted laoreet
                    Aliquam fact that a reader will be distrol acted Aliquam
                    eros justo.
                  </p>
                  <Link to="#" className="reply-btn">
                    reply
                  </Link>
                </div>
              </div>
            </div> */}
            {/* Comment Area Main Wrapper End */}
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="tmp-sidebar">
          <div className="signle-side-bar search-area tmponhover">
            <div className="body">
              <div className="search-area">
                <input type="text" placeholder="Type here" required="" />
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

  )
}

export default BlogDetail