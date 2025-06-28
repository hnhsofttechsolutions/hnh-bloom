import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PROJECT_CATEGORIES } from "../../queries/get-post";
// eslint-disable-next-line no-unused-vars
import Loading from "../loading/Loading";

const HomePortfolio = ({ data }) => {
  // eslint-disable-next-line no-unused-vars
  const { data: tabs, loading } = useQuery(PROJECT_CATEGORIES, {});
  console.log("🚀 ~ HomePortfolio ~ tabs:", tabs);

  const [tabCurrent, setTabCurrent] = useState("App Development");
  console.log("🚀 ~ HomePortfolio ~ tabCurrent:", tabCurrent)

  const filtered = data?.projects?.data?.filter(
    (items) => items?.categories[0]?.name === tabCurrent
  );
  console.log("🚀 ~ filtered ~ filtered:", filtered);
  const location = useLocation();

  return (
    <>
      {/* Tpm Latest Portfolio Area Start */}
      <div className="latest-portfolio-area custom-column-grid tmp-section-gapTop">
        <div className="container">
          <div className="section-head mb--60">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
              <span className="subtitle">Our Featured Projects</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
              Transforming Ideas into
              <br /> Exceptional
            </h2>
            <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
              Each project reflects our commitment to innovation, precision, and
              client success. Browse through our latest work to see how we help
              businesses improve performance, efficiency, and digital presence.
            </p>
          </div>
          {location.pathname === "/project" ? (
            <div className="tabs mb-4">
              <div className="tab-header" id="tabButtons">
                {tabs.categories.map((items, idx) => (
                  <div
                    key={idx}
                    className={tabCurrent === items.name ? "active" : undefined}
                    onClick={() => setTabCurrent(items.name)}
                  >
                    {items.name}
                  </div>
                ))}
                {/* <div
                  className={tabCurrent === "Web Development" ? "active" : undefined}
                  onClick={() => setTabCurrent("Web Development")}
                >
                  Web APPlications
                </div> */}
                {/* <div
                  className={
                    tabCurrent === "Logos" ? "active" : undefined
                  }
                  onClick={() => setTabCurrent("Logos")}
                >
                  Logos
                </div> */}
              </div>
            </div>
          ) : null}

          <div className="row">
            {location.pathname === "/project"
              ? filtered?.map((item, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div
                      className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <Link
                            className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                            to={`/project-detail/${item?.id}`}
                          >
                            <img
                              className="w-100"
                              src={`https://api.hnhtechsolutions.com${item.images[0]}`}
                              alt="Thumbnail"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            <Link className="link" to={`/project-detail/${item?.id}`}>
                              {item.title}
                            </Link>
                          </h3>
                          <p className="portfoli-card-para">
                            {item.categories[0]?.name}
                          </p>
                        </div>
                        <Link
                          to={item?.ProjectDemoLink[0]?.link}
                          className="tmp-arrow-icon-btn"
                        >
                          <div className="btn-inner">
                            <i className="tmp-icon fa-solid fa-arrow-up-right" />
                            <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : data?.projects?.data?.map((item, index) => (
                  <div className="col-lg-6 col-sm-6" key={index}>
                    <div
                      className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${
                        index + 1
                      }`}
                    >
                      <div className="portfoli-card-img">
                        <div className="img-box v2">
                          <Link
                            className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                            to={`/project-detail/${item?.id}`}
                          >
                            <img
                              className="w-100"
                              src={`https://api.hnhtechsolutions.com${item.images[0]}`}
                              alt="Thumbnail"
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="portfolio-card-content-wrap">
                        <div className="content-left">
                          <h3 className="portfolio-card-title">
                            <Link
                              className="link"
                              to={`/project-detail/${item?.id}`}
                            >
                              {item.title}
                            </Link>
                          </h3>
                          <p className="portfoli-card-para">
                            {item.categories[0]?.name}
                          </p>
                        </div>
                        <Link
                          to={item?.ProjectDemoLink[0]?.link}
                          className="tmp-arrow-icon-btn"
                        >
                          <div className="btn-inner">
                            <i className="tmp-icon fa-solid fa-arrow-up-right" />
                            <i className="tmp-icon-bottom fa-solid fa-arrow-up-right" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      {/* Tpm Latest Portfolio Area End */}
    </>
  );
};

export default HomePortfolio;
