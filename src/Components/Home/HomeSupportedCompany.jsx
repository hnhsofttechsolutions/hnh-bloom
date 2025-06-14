import React from 'react'


const HomeSupportedCompany = () => {
 const company = [
    "assets/images/our-supported-company/company-logo-1.png",
    "assets/images/our-supported-company/company-logo-2.png",
    "assets/images/our-supported-company/company-logo-3.png",
    "assets/images/our-supported-company/company-logo-4.png",
    "assets/images/our-supported-company/company-logo-5.png",
    "assets/images/our-supported-company/company-logo-6.png",
    "assets/images/our-supported-company/company-logo-7.png",
    "assets/images/our-supported-company/company-logo-8.png"
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
              className='h-[50px]'
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