import { Box, Slider } from "@mui/material";
import React, { useState } from "react";

const Filter = ({ priceChange, ratingChange, onToggleFilter,priceRangeBetween }) => {
  const [priceValue, setPriceValue] = useState([0, 120000]);
  const [ratingValue, setRatingValue] = useState([0, 5]);

  const handleApplyBtn = () => {
    priceChange(priceValue);
    ratingChange(ratingValue);
    onToggleFilter();
  };
  return (
    <div className="md:hidden slide-top bg-gray-100  w-full h-auto fixed bottom-0 z-10">
      <p className="font-medium  font-serif border-b px-4 py-3 text-lg  ">
        Filter By
      </p>
      <div className="flex   h-4/5 justify-between flex-col px-5 gap-5 py-3">
        <div className="flex  items-center gap-3 ">
          <p className=" w-36 pl-3 ">Price</p>
          <Box sx={{ width: "100%" }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={priceValue}
              onChange={(e) => setPriceValue(e.target.value)}
              valueLabelDisplay="auto"
              // getAriaValueText={valuetext}
              // color=""
              step={10}
              min={priceRangeBetween[0]}
              max={priceRangeBetween[1]}
              // color="default"
              style={{
                color: "#000",
              }}
            />
          </Box>
        </div>
        <div className="flex  items-center gap-3 ">
          <p className=" w-36 pl-3 ">Ratings</p>
          <Box sx={{ width: "100%" }}>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={ratingValue}
              onChange={(e) => setRatingValue(e.target.value)}
              valueLabelDisplay="auto"
              step={1}
              min={0}
              max={5}
              style={{
                color: "#000",
              }}
            />
          </Box>{" "}
        </div>
        <div className="text-right py-2">
          <button
            onClick={handleApplyBtn}
            className=" bg-black 
              px-8 py-2 text-sm text-white rounded-full
              transition duration-200 transform active:scale-95 ease-in-out"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
