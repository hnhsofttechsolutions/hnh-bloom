import React from 'react'

const ContactInfo = () => {
  return (
   <>
 <div className="container">
  <div className="contact-info-wrap">
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1">
          <div className="contact-icon">
            <i className="fa-solid fa-location-dot" />
          </div>
          <h3 className="title">Address</h3>
          <p className="para">3900 West northwest highway Apt 1172 Dallas TX 75220</p>
          {/* <p className="para">house of street</p> */}
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-2">
          <div className="contact-icon">
            <i className="fa-solid fa-envelope" />
          </div>
          <h3 className="title">E-mail</h3>
          <a href="mailto:themespark11@gmail.com">
            <p className="para">info@hnhsofttechsolutions.com</p>
          </a>
          {/* <a href="mailto:themespark11@gmail.com">
            <p className="para">themespark11@gmail.com</p>
          </a> */}
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="contact-info tmp-scroll-trigger tmponhover tmp-fade-in animation-order-3">
          <div className="contact-icon">
            <i className="fa-solid fa-phone" />
          </div>
          <h3 className="title">Call Me</h3>
          <p className="para">+1 972 777-4163</p>
          {/* <p className="para">+1234 - 000</p> */}
        </div>
      </div>
    </div>
  </div>
</div>


   </>
  )
}

export default ContactInfo