/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const HomeMySkills = () => {
  return (
  <>
  {/* Tpm My Skill Area Start */}
  <section className="my-skill tmp-section-gapTop">
    <div className="container">
      <div className="section-head text-align-left mb--50">
        <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
          <span className="subtitle">Elevated Designs, Personalized Experiences</span>
        </div>
        <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
          Crafting Exceptional Digital  <br />Interfaces That Drive Engagement
        </h2>
        <p>My work is rooted in thoughtful design, user behavior, and strategic planning — helping brands connect, convert, and stand out in competitive markets.</p>
      </div>
      <div className="services-widget v1">
        <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
          <div className="my-skill-card">
            <div className="card-icon">
              <i className="fa-light fa-building-columns" />
            </div>
            <div className="card-title">
              <h3 className="main-title">Ui/visual Design</h3>
              <p className="sub-title">Projects Completed: 21</p>
            </div>
            <p className="card-para">
              A showcase of sleek, responsive, and user-friendly interfaces designed for optimal user experience. From web to mobile, each design aligns with brand identity and user goals.
            </p>
            <a href="#" className="read-more-btn">
              Read More{" "}
              <span className="read-more-icon">
                <i className="fa-solid fa-angle-right" />
              </span>
            </a>
          </div>
          <button className="service-link modal-popup" />
        </div>
        <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
          <div className="my-skill-card">
            <div className="card-icon">
              <i className="fa-light fa-calendar" />
            </div>
            <div className="card-title">
              <h3 className="main-title">Web Interface &  <br />Visual Strategy</h3>
              <p className="sub-title">Projects Completed: 21</p>
            </div>
            <p className="card-para">
              Explore a curated portfolio featuring design solutions for responsive websites, SaaS platforms, and custom dashboards — all built for performance and scalability.
            </p>
            <a href="#" className="read-more-btn">
              Read More{" "}
              <span className="read-more-icon">
                <i className="fa-solid fa-angle-right" />
              </span>
            </a>
          </div>
          <button className="service-link modal-popup" />
        </div>
        <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
          <div className="my-skill-card">
            <div className="card-icon">
              <i className="fa-light fa-pen-nib" />
            </div>
            <div className="card-title">
              <h3 className="main-title">Motion Design & <br />Animation</h3>
              <p className="sub-title">Projects Completed: 20</p>
            </div>
            <p className="card-para">
              From animated UI elements to full motion graphics, these projects reflect dynamic storytelling and brand communication through movement and interaction.
            </p>
            <a href="#" className="read-more-btn">
              Read More{" "}
              <span className="read-more-icon">
                <i className="fa-solid fa-angle-right" />
              </span>
            </a>
          </div>
          <button className="service-link modal-popup" />
        </div>
        <div className="active-bg wow fadeInUp mleave" />
      </div>
    </div>
  </section>
  {/* Tpm My Skill Area End */}
</>

  )
}

export default HomeMySkills