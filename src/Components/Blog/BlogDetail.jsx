import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { recentBlogPosts } from '../../utils/data'

const BlogDetail = () => {

  const navigate = useNavigate();

  const handleClick = (post) => {
    localStorage.setItem("lastViewedBlog", JSON.stringify(post));
    navigate("/blog-detail", { state: { post } });
  };
  const location = useLocation();
  const locationBlog = location.state?.service;
  const storedBlog = localStorage.getItem("lastViewedBlog");
  const blog = locationBlog || (storedBlog && JSON.parse(storedBlog));

  console.log(blog, "blog");

  return (
    <div className="blog-classic-area-wrapper tmp-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="blog-details-left-area">
              {/* Blog Banner Image */}
              <div className="thumbnail-top !h-[500px]">
                <img src={blog?.image} alt={blog?.title} className='h-full w-full' />
              </div>

              {/* Blog Metadata */}
              <div className="blog-details-discription">
                <div className="blog-classic-tag">
                  <h4 className="title">By HNH Soft Tech Solutions</h4>
                  <ul>
                    {blog?.tags?.map((tag, i) => (
                      <li key={i}>
                        <div className="tag-wrap">
                          <i className="fa-solid fa-tag" />
                          <h4 className="tag-title">{tag}</h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Blog Title */}
                <h3 className="title split-collab">{blog?.title}</h3>

                {/* Blog Content */}
                {blog?.paragraphs?.map((para, idx) => (
                  <p className="disc" key={idx}>{para}</p>
                ))}




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
                  {recentBlogPosts.map((post, index) => (
                    <div onClick={() => handleClick(post)} key={index} className="single-post-card cursor-pointer tmp-hover-link">
                      <div className="single-post-card-img">
                        <img src={post.image} alt="" />
                      </div>
                      <div className="single-post-right">
                        <div className="single-post-top">
                          <i className="fa-regular fa-folder-open" />
                          <p className="post-title">{post.category}</p>
                        </div>
                        <h3 className="post-title">
                          <Link className="link" to="#">
                            {post.title}
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

  )
}

export default BlogDetail