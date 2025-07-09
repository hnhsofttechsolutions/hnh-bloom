import React, { useState } from "react";
import {
  FaClipboardList,
  FaCogs,
  FaCalendarAlt,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const ProjectDetailsTabs = ({ project }) => {
  console.log("🚀 ~ ProjectDetailsTabs ~ project:", project)
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="mt-6 my-10 py-10 bg-[#09527E] px-5 rounded-3xl ">
      {/* Tabs */}
      <div className="text-4xl font-bold text-white mb-3">
        <h2> {project?.projectById?.title}</h2>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide space-x-3 mb-6">
        {["Overview", "Technologies", "Timeline"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-2 p-4 rounded-2xl font-bold text-3xl border transition-all
        ${
          activeTab === tab
            ? "bg-[#ff014f] text-white border-[#ff014f]"
            : "bg-[#1a1a1a] text-gray-300 border-gray-600 hover:bg-[#2c2c2c]"
        }`}
          >
            {tab === "Overview" && <FaClipboardList />}
            {tab === "Technologies" && <FaCogs />}
            {tab === "Timeline" && <FaCalendarAlt />}
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Overview" && (
        <div>
          <h2 className="text-4xl font-bold text-white mb-3">
            {project?.projectById?.ProjectDescription[0]?.heading ||
              "Project Overview"}
          </h2>
          <p className="text-gray-300 mb-6">
            {/* A full-featured e-commerce platform with advanced filtering and
            payment integration. */}
            {project?.projectById?.ProjectDescription?.map((item, index) => (
              <span key={index}>{item.description}</span>
            ))}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#111] p-5 rounded-3xl border border-gray-700">
              <div className="flex items-center gap-2 text-[#ff014f] mb-2">
                <FaUsers />
                <h3 className="font-semibold text-white">Target Audience</h3>
              </div>
              <p className="text-gray-300">
                {project?.projectById?.targetAudience}
                {/* Retailers and entrepreneurs looking for an online presence. */}
              </p>
            </div>

            <div className="bg-[#111] p-5 rounded-3xl border border-gray-700">
              <div className="flex items-center gap-2 text-[#ff014f] mb-2">
                <FaLightbulb />
                <h3 className="font-semibold text-white">Key Features</h3>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {project?.projectById?.keyFeatures?.map((item, indx) => (
                  <li className="" key={indx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Technologies" && (
        <div className="text-gray-300">
          <h2 className="text-4xl font-semibold text-white mb-5">
            Technologies Used
          </h2>
          <div className="flex flex-wrap gap-4">
            {project?.projectById?.technologies?.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#ff014f] to-[#ff014f] text-white px-5 py-2 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "Timeline" && (
        <div className="text-gray-300 space-y-5">
          <h2 className="text-4xl font-semibold text-white my-5">
            Project Timeline
          </h2>
          {project?.projectById?.ProjectTimeline?.map((item, idx) => (
            <div key={idx} className="w-full border p-4 rounded-3xl">
              <h1 className="text-[20px] text-[#ff014f]">{item.duration}</h1>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsTabs;
