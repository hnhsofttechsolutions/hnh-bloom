import React from 'react'
import { Link } from 'react-router-dom'

const LeaveCommit = () => {
  return (
 <>
   {/* Blog Details Form Wrapper Start */}
            <div className="blog-details-form-wrapper tmponhover my-10 container md:px-20">
              <h4 className="title">Leave a comment</h4>
              <span className="subtitle">
                By using form u agree with the message sorage, you can contact
                us directly now
              </span>
              <form action="#" className="blog-details-form">
                <div className="single-input">
                  <label>Your Name</label>
                  <input type="text" placeholder="Name" />
                </div>
                <div className="single-input">
                  <label>Your Email</label>
                  <input type="text" placeholder="Email" />
                </div>
                <label>Message</label>
                <textarea placeholder="Message here.." defaultValue={""} />
                <div className="blog-submit-btn mt--40">
                  <div className="tmp-button-here">
                    <Link
                      className="tmp-btn hover-icon-reverse radius-round w-100"
                      to="/blog-detail"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Submit Now</span>
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
              </form>
            </div>
            {/* Blog Details Form Wrapper End */}
 </>

  )
}

export default LeaveCommit