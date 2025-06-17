import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { recentBlogPosts } from '../../utils/data'

const HomeBlog = () => {
   const navigate = useNavigate();

  const handleClick = (post) => {
    localStorage.setItem("lastViewedBlog", JSON.stringify(post));
    navigate("/blog-detail", { state: { post } });
  };
  return (
    <section className="blog-and-news-are tmp-section-gap">
      <div className="container">
        <div className="section-head mb--60">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">Blog and News</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            Elevating Personal Branding <br /> through Powerful Portfolios
          </h2>
        </div>

        <div className="row">
          {recentBlogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6 col-sm-6" key={post.id}>
              <div onClick={() => handleClick(post)} className={`blog-card cursor-pointer tmp-hover-link image-box-hover tmp-scroll-trigger tmp-fade-in animation-order-${index + 1}`}>
                <div className="img-box">
                  <Link to={post.slug}>
                    <img className="w-100 h-[300px]" src={post.image} alt={`Blog ${index + 1}`} />
                  </Link>
                  <ul className="blog-tags">
                    <li>
                      <span className="tag-icon">
                        <i className="fa-regular fa-user" />
                      </span>
                      {post.author}
                    </li>
                    <li>
                      <span className="tag-icon">
                        <i className="fa-solid fa-calendar-days" />
                      </span>
                      {post.date}
                    </li>
                  </ul>
                </div>
                <div className="blog-content-wrap">
                  <h3 className="blog-title">
                    <Link className="link" to={post.slug}>
                      {post.title}
                    </Link>
                  </h3>
                  <div className="more-btn tmp-link-animation">
                    <Link to={post.slug} className="read-more-btn">
                      Read More{" "}
                      <span className="read-more-icon">
                        <i className="fa-solid fa-angle-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBlog
