import React from 'react'


const HomeSupportedCompany = () => {
 const company = [
    "assets/images/our-supported-company/company-logo-12.png",
    "assets/images/our-supported-company/company-logo-10.png",
    "assets/images/our-supported-company/company-logo-13.png",
    "assets/images/our-supported-company/company-logo-22.png",
    "assets/images/our-supported-company/company-logo-18.png",
    "assets/images/our-supported-company/company-logo-14.png",
    "assets/images/our-supported-company/company-logo-26.png",
    "assets/images/our-supported-company/company-logo-20.png"
  ];

  return (
    
    <>
  {/* Tpm Our Supported Company Area Start */}
 <div className="our-supported-company-area tmp-section-gapTop">
  <div className="container">
    <div className="row justify-content-center">
      {company.map((img, indx) => (
        <div
          key={indx}
          className="col-xl-3 col-lg-3 col-md-3 col-sm-6"
        >
          <div className={`support-company-logo tmp-scroll-trigger tmp-fade-in animation-order-${indx + 1}`}>
            <img
              src={img}
              alt={`Company Logo ${indx + 1}`}
              className='h-[70px]'
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  {/* Tpm Our Supported Company Area End */}


    </>
  )
}

export default HomeSupportedCompany