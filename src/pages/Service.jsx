import React from "react";
import AboutOurPricing from "../Components/About/AboutOurPricing";
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
    "dot-net-developer": <ServiceHeroSection serviceData={finalData} />,
    "enterprise-web-development": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "angular-development-company": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "mobile-app-development-services": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "android-development-service": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "flutter-app-development-service": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "iOS-app-development-company": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "metaverse-development-company": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "quality-assurancet-testing-services": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "business-intelligence-services": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "talent-acquisition-services": (
      <ServiceHeroSection serviceData={finalData} />
    ),
    "AI-and-ML-services": <ServiceHeroSection serviceData={finalData} />,
  };

  const DefaultLayout = (
    <>
      <Banner heading="Service" text="Explore our professional services." />
      <ServiceHero />
      <WhyChooseUs />
      <ServiceCards />
      <OurProcess />
      <AboutOurPricing />
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
