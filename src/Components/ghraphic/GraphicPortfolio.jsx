/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { GET_SUB_CATEGORIES } from "../../queries/get-post";
import { useQuery } from "@apollo/client";

const GraphicPortfolio = () => {
  const [tab, setTabs] = useState("Flyer");
  const { data } = useQuery(GET_SUB_CATEGORIES);
//   const filterData = data?.categories?.map((item) =>
//   item.subCategories.filter((filtr) =>
//     filtr.name?.trim().toLowerCase().includes(tab?.trim().toLowerCase())
//   )
// );
  
  const graphicDesignCategories = data?.categories?.filter(
    (category) => category.name === "Graphic Design"
  );

  const allSubCategories = graphicDesignCategories?.flatMap(
    (category) => category.subCategories || []
  );

    const selectedSubCategory = allSubCategories?.find(
    (sub) => sub.name === tab
  );

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-4 mb-10">
        <div className="flex flex-wrap w-[500px] overflow-auto rounded-md bg-gray-200 shadow-sm text-sm">
          {allSubCategories?.map((sub, index) => {
            return (
              <label key={index} className="flex-1 text-center">
                <input type="radio" name="radio" class="hidden peer" checked />
                <span
                  onClick={() => setTabs(sub.name)}
                  className="flex items-center justify-center cursor-pointer rounded-md px-0 py-2 text-slate-700 transition-all duration-150 peer-checked:bg-white peer-checked:font-bold text-3xl"
                >
                  {sub.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>
      {selectedSubCategory?.images?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center items-center ">
          {selectedSubCategory.images.map((imgPath, imgIndex) => (
            <img
              key={imgIndex}
              className="p-2 object-contain h-[300px] rounded-2xl mx-auto"
              src={`https://api.hnhtechsolutions.com${imgPath}`}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No images found.</p>
      )}
    </>
  );
};

export default GraphicPortfolio;
