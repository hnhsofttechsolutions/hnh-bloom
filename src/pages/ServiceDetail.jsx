import React from 'react'
import ServiceDetail from '../Components/Service/ServiceDetail'
import Banner from '../Components/Banner'
import WhyChooseUs from '../Components/Service/WhyChooseUs'

const ServiceDetails = () => {
  return (
    <>
      <Banner heading={"Service Details"} text={"Service Details"} />
      <ServiceDetail />
   <WhyChooseUs />

    </>
  )
}

export default ServiceDetails