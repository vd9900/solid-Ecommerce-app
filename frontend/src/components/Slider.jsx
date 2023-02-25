import { useState, useEffect } from "react";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3500,
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
    <div className="mx-auto max-md:my-auto  w-full md:w-4/6 overflow-hidden flex items-center justify-center ">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}{console.log(slides)}
      </div>
      <div className="hidden absolute bottom-2/4 md:flex  w-full justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow  text-gray-800 hover:scale-95"
        >
          <TfiArrowCircleLeft size={25} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow  text-gray-800 hover:scale-95"
        >
          <TfiArrowCircleRight size={25} />
        </button>
      </div>

      <div className="absolute bottom-3 md:-bottom-5 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-1 h-1 z-30 bg-black rounded-full
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
