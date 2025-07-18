import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { PROJECT_CATEGORIES } from "../../queries/get-post";
import InfiniteScroll from "react-infinite-scroll-component";
// eslint-disable-next-line no-unused-vars
import Loading from "../loading/Loading";

const HomePortfolio = ({ data, filterData }) => {
  console.log("🚀 ~ HomePortfolio ~ data:", data);
  // console.log("🚀 ~ HomePortfolio ~ filterData:", filterData)
  // eslint-disable-next-line no-unused-vars
  const { data: tabs, loading } = useQuery(PROJECT_CATEGORIES, {});
  const [tabCurrent, setTabCurrent] = useState("App Development");
  const location = useLocation();
  const isProjectPage = location.pathname === "/project";
  
  
  // Filtered data based on active tab
  const filtered =
  data?.allProjects?.filter(
    (item) => item?.categories[0]?.name === tabCurrent
  ) || [];
  console.log("🚀 ~ HomePortfolio ~ filtered:", filtered);
  
  
  // Infinite Scroll State
  const [visibleData, setVisibleData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [searchProjects, setsearchProjects] = useState("");
  const itemsPerLoad = 4;
  
  useEffect(() => {
    if (isProjectPage) {
      setVisibleData(filtered.slice(0, itemsPerLoad));
      setHasMore(filtered.length > itemsPerLoad);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabCurrent, data, location.pathname]);

  const fetchMoreData = () => {
    const nextItems = filtered.slice(
      visibleData.length,
      visibleData.length + itemsPerLoad
    );
    setVisibleData((prev) => [...prev, ...nextItems]);
    if (visibleData.length + nextItems.length >= filtered.length) {
      setHasMore(false);
    }
  };
  // eslint-disable-next-line no-unused-vars
  const searchResults =
  filtered.filter((item) =>
    item?.title?.toLowerCase().includes(searchProjects.trim().toLowerCase())
) || [];
console.log("🚀 ~ HomePortfolio ~ searchResults:", searchResults);




  const renderCard = (item, index) => (
    <div className="col-lg-6 col-sm-6" key={index}>
      <div
        className={`latest-portfolio-card tmp-hover-link tmp-scroll-trigger tmp-fade-in animation-order-${
          index + 1
        }`}
      >
        <div className="portfoli-card-img">
          <div className="img-box v2">
            <Link to={`/project-detail/${item?.id}`}>
              <img
                className="w-100"
                src={`https://api.hnhtechsolutions.com${item?.images[0]}`}
                alt="Thumbnail"
              />
            </Link>
          </div>
        </div>
        <div className="portfolio-card-content-wrap">
          <div className="content-left">
            <h3 className="portfolio-card-title">
              <Link to={`/project-detail/${item?.id}`}>{item?.title}</Link>
            </h3>
            <p>{item?.targetAudience}</p>
            <p className="portfoli-card-para">{item?.categories[0]?.name}</p>
          </div>
          <Link
            to={`/project-detail/${item?.id}`}
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
  );

  return (
    <>
      <div className="latest-portfolio-area custom-column-grid tmp-section-gapTop">
        <div className="container">
          <div className="section-head mb--60">
            <div className="section-sub-title center-title">
              <span className="subtitle">Our Featured Projects</span>
            </div>
            <h2 className="title">
              Transforming Ideas into <br /> Exceptional
            </h2>
            <p className="description section-sm">
              Each project reflects our commitment to innovation, precision, and
              client success.
            </p>
          </div>

          {isProjectPage && (
            <div className="tabs mb-4 overflow-x-auto">
              <div className="tab-header" id="tabButtons">
                {tabs?.categories?.map((item, idx) => (
                  <div
                    key={idx}
                    className={tabCurrent === item?.name ? "active" : ""}
                    onClick={() => setTabCurrent(item?.name)}
                  >
                    {item?.name}
                  </div>
                ))}
              </div>
            </div>
          )}
          {isProjectPage && (
            <div className="flex justify-center items-center">
              <input
                type="text"
                name="text"
                value={searchProjects}
                onChange={(e) => setsearchProjects(e.target.value)}
                placeholder="Search"
                className="m-[30px] text-center bg-transparent border-none outline-none max-w-[190px] px-5 py-2.5 text-base !rounded-full shadow-inner text-[#09527E]"
              />
            </div>
          )}

          <div className="row">
            {isProjectPage ? (
              <InfiniteScroll
                dataLength={visibleData.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<div><Loading/></div>}
                className="row w-100 !overflow-hidden"
              >
                {searchResults.length > 0 ? searchResults.map(renderCard) : visibleData.map(renderCard)}
              </InfiniteScroll>
            ) : (
              filterData?.map(renderCard)
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePortfolio;
