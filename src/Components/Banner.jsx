import React from 'react'
import { Link } from 'react-router-dom'

const Banner = ({heading,text}) => {
  return (
   <>
  {/* Breadcrumb Area Start */}
  <div className="breadcrumb-area breadcrumb-bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inner text-center">
            <h1 className="title split-collab font-extrabold">{heading}</h1>
            <ul className="page-list">
              <li className="tmp-breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="icon">
                <i className="fa-solid fa-angle-right" />
              </li>
              <li className="tmp-breadcrumb-item active">{text}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Breadcrumb Area End */}
</>

  )
}

export default Banner