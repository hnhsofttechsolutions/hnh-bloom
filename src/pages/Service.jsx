import React from "react";
// import AboutOurPricing from "../Components/About/AboutOurPricing";
import Banner from "../Components/Banner";
import ServiceHero from "../Components/Service/ServiceHero";
import WhyChooseUs from "../Components/Service/WhyChooseUs";
import ServiceCards from "../Components/Service/ServiceCards";
import OurProcess from "../Components/Service/OurProcess";
import { useLocation } from "react-router-dom";
import ServiceHeroSection from "../Components/ui/service-hero-section";
import { serviceData } from "../utils/temp";

const Service = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get("value");
  const filterTemp = serviceData.find( (item) =>
      item.path === value || item.child?.some((child) => child.path === value));

  const isChild = filterTemp?.child?.some((child) => child.path === value);
  const finalData = isChild ? filterTemp.child.find((child) => child.path === value)  : filterTemp;

  const specificLayouts = {
    "dot-net-developer": <ServiceHeroSection Data={finalData} />,
    "enterprise-web-development": (
      <ServiceHeroSection Data={finalData} />
    ),
    "angular-development-company": (
      <ServiceHeroSection Data={finalData} />
    ),
    "mobile-app-development-services": (
      <ServiceHeroSection Data={finalData} />
    ),
    "android-development-service": (
      <ServiceHeroSection Data={finalData} />
    ),
    "flutter-app-development-service": (
      <ServiceHeroSection Data={finalData} />
    ),
    "iOS-app-development-company": (
      <ServiceHeroSection Data={finalData} />
    ),
    "metaverse-development-company": (
      <ServiceHeroSection Data={finalData} />
    ),
    "quality-assurancet-testing-services": (
      <ServiceHeroSection Data={finalData} />
    ),
    "business-intelligence-services": (
      <ServiceHeroSection Data={finalData} />
    ),
    "talent-acquisition-services": (
      <ServiceHeroSection Data={finalData} />
    ),
    "AI-and-ML-services": <ServiceHeroSection Data={finalData} />,
  };

  const DefaultLayout = (
    <>
      <Banner heading="Service" text="Explore our professional services." />
      <ServiceHero />
      <WhyChooseUs />
      <ServiceCards />
      <OurProcess />
      {/* <AboutOurPricing /> */}
    </>
  );

  const RenderComponent = specificLayouts[value] || DefaultLayout;

  return (
    <>
      <div className="py-36">{RenderComponent}</div>
    </>
  );
};

export default Service;
