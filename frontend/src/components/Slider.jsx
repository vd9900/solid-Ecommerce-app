import { useState, useEffect } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3500,
  hideTools = false,
  style = [],
  dotColor = "bg-black",
}) => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div
      className={`${[
        ...style,
      ]} overflow-hidden flex items-center justify-center w-full`}
    >
      <div
        className="flex transition-transform  duration-500 w-full "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div
        className={`${
          hideTools ? "hidden" : "flex"
        }  absolute bottom-3/4  w-full justify-between p-4`}
      >
        <button
          onClick={prev}
          className=" p-1 rounded-full shadow  text-gray-800 "
        >
          <TfiArrowCircleLeft className="" size={30} />
        </button> 
        <button
          onClick={next}
          className="p-1 rounded-full shadow  text-gray-800 "
        >
          <TfiArrowCircleRight size={30} />
        </button>
      </div>

      <div
        className={`${
          hideTools ? "hidden" : ""
        } absolute z-10 bottom-3 md:-bottom-5 right-0 left-0`}
      >
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`
              transition-all w-1 h-1  ${dotColor} rounded-full
              ${curr === i ? "p-1" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
