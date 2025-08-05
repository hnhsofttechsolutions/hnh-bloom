import { useState } from "react";
import { motion } from "framer-motion";

const ImageSlider = ({ mediaList, handleMediaClick }) => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % mediaList.length);
  };

  const handleBack = () => {
    setStartIndex((prev) =>
      (prev - 1 + mediaList.length) % mediaList.length
    );
  };

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1.6, zIndex: 5 },
    left1: { x: "-50%", scale: 1.0, zIndex: 3 },
    left: { x: "-90%", scale: 0.9, zIndex: 2 },
    right: { x: "90%", scale: 0.9, zIndex: 1 },
    right1: { x: "50%", scale: 1.0, zIndex: 3 },
  };

  const getVisibleItems = () => {
    let items = [];
    for (let i = 0; i < Math.min(5, mediaList.length); i++) {
      const index = (startIndex + i) % mediaList.length;
      items.push({ media: mediaList[index], positionKey: positions[i], index });
    }
    return items;
  };

  return (
    <div className="relative flex items-center justify-center h-[500px] my-10 overflow-hidden">
      {getVisibleItems().map(({ media, positionKey, index }) => (
        <motion.div
          key={index}
          className="absolute cursor-pointer"
          initial="center"
          animate={positionKey}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "40%" }}
          onClick={() => handleMediaClick(media)}
        >
          {media.trim().endsWith(".mp4") ? (
            <video
              src={`https://api.hnhtechsolutions.com${media.trim()}`}
              autoPlay
              loop
              muted
              className="w-full h-96 object-contain rounded-lg"
            />
          ) : (
            <img
              src={`https://api.hnhtechsolutions.com${media.trim()}`}
              alt={`media-${index}`}
              className="w-full h-96 object-contain rounded-lg"
            />
          )}
        </motion.div>
      ))}

      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 z-10">
        <button
          onClick={handleBack}
          className="bg-[#387499] text-white py-2 px-4 w-44 rounded-md"
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          className="bg-[#387499] text-white py-2 px-4 w-44 rounded-md"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
