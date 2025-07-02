import React from 'react'
import Banner from '../Components/Banner'
import ContactInfo from '../Components/Contact/ContactInfo'
import HomeGetInTouch from '../Components/Home/HomeGetInTouch'

const Contact = () => {
  return (
    <>
     <Banner heading={"Contact"} text={"Contact"}/>
     
 <div className="contact-area-wrapper tmp-section-gap">
    <ContactInfo/>
   <div className='container md:mt-20 mt-5'>
     <HomeGetInTouch/>
   </div>
 </div>
    </>
  )
}

export default Contact