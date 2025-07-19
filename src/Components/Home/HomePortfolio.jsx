import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link, useLocation } from "react-router-dom";
import { PROJECT_CATEGORIES } from "../../queries/get-post";
// eslint-disable-next-line no-unused-vars
import Loading from "../loading/Loading";

const HomePortfolio = ({ data, filterData }) => {
  const { data: tabs } = useQuery(PROJECT_CATEGORIES, {});
  const [tabCurrent, setTabCurrent] = useState("App Development");
  const location = useLocation();
  const isProjectPage = location.pathname === "/project";

  const filtered =
    data?.allProjects?.filter(
      (item) => item?.categories[0]?.name === tabCurrent
    ) || [];

  const [searchProjects, setsearchProjects] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    if (isProjectPage) {
      setCurrentPage(1);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabCurrent, data, location.pathname]);

  const searchResults = filtered.filter((item) =>
    item?.title?.toLowerCase().includes(searchProjects.trim().toLowerCase())
  );

  const paginatedData = searchResults.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(searchResults.length / itemsPerPage);

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
            Each project reflects our commitment to innovation, precision, and client success.
          </p>
        </div>

        {isProjectPage && (
          <>
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

            <div className="flex justify-center items-center">
              <input
                type="text"
                name="text"
                value={searchProjects}
                onChange={(e) => setsearchProjects(e.target.value)}
                placeholder="Search"
                className="m-[30px] text-center bg-transparent border-none outline-none max-w-[200px] px-5 py-2.5 text-base !rounded-full shadow-inner text-[#09527E]"
              />
            </div>
          </>
        )}

        <div className="row">
          {isProjectPage
            ? paginatedData.map(renderCard)
            : filterData?.length > 0
            ? filterData.map(renderCard)
            : <p className="text-center w-full">No projects found.</p>}
        </div>

        {isProjectPage && totalPages > 1 && (
          <div className="pagination flex justify-center mt-4 gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === page ? "bg-[#09527E] text-white" : "bg-gray-200 text-black"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePortfolio;
