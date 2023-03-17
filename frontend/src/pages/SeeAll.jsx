// hooks & redux
import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//material ui
import { Box, ButtonGroup, debounce, Pagination, Slider } from "@mui/material";
import PaginationLink from "../components/search/pagination";

//icons
import { AiFillStar } from "react-icons/ai";

//components
import Navbar from "../components/Navbar";
import Product from "../components/Product";
import Loader from "../components/Loder";
import Sort from "../components/smallDevice/Sort";
import Filter from "../components/smallDevice/Filter";
import RangeSlider from "../components/search/priceRange";
import { SearchContext } from "../SearchContext/searchContext";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  getAllProductsApi,
  useProductByCategoryQuery,
  useProductQuery,
} from "../services/products/productApi";
import {
  addClickedCategoryValueOfProduct,
  addClickedValueOfProduct,
  addPriceRange,
  addSort,
  changePage,
  clearFilter,
  addRatingRange,
} from "../services/products/productSlice";
import { DebounceSearch, useDebounce } from "../utils/hooks/Deboune";

const SeeAll = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const filterDetails = useSelector(
    (state) => state.productsStore.SearchAndFilter
  );
  const searchParams = new URLSearchParams({
    ...filterDetails,
  }).toString();
  console.log(filterDetails);
  // const id = searchParams.get("search");

  // const { clickedCategory } = useSelector((state) => state.productsStore);
  // const rootUrl = window.location.href.split("/").splice(3).join("");
  const { data, isLoading, isSuccess, refetch } =
    useProductByCategoryQuery(searchParams);
  // const data = useSelector((state) => state.productsApi);
  // changing the pagination
  const [currentPage, setCurrentPage] = useState(1);

  //sort & filter btn for small device
  const [toggleSort, setToggleSort] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);

  // price change handler
  const [priceValue, setPriceValue] = useState([0, 120000]);
  const [ratingValue, setRatingValue] = useState([0, 5]);
  const [sortValue, setSortValue] = useState("all");

  const isInitialMount = useRef(true);
  const delayedValue = useDebounce(priceValue, 400);

  // console.log(ratin)\

  // filter input function handles

  const handlePriceRange = (value) => {
    setPriceValue(value);
  };
  const handleRatingRange = (value) => {
    setRatingValue(value);
  };
  const handleSortValue = (e) => {
    setSortValue(e.target.dataset.id || e.target.childNodes[1].dataset.id);
  };

  useEffect(() => {
    setPriceValue([0, 120000]);
    setRatingValue([0, 5]);
    setSortValue("all");
  }, [filterDetails.search]);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      const [minValue, maxValue] = priceValue;
      dispatch(addPriceRange({ minValue, maxValue }));
    }
  }, [delayedValue]);
  useEffect(() => {
    dispatch(addSort(sortValue));
  }, [sortValue]);
  useEffect(() => {
    const [minRating, maxRating] = ratingValue;
    dispatch(addRatingRange({ minRating, maxRating }));
  }, [ratingValue]);
  useEffect(() => {
    return () => {
      dispatch(clearFilter());
    };
  }, []);

  return (
    <div className="max-w-screen relative max-md:h-screen bg-gray-100">
      {/* toggle components */}
      {toggleSort && (
        <Sort
          onTogglesort={() => setToggleSort(!toggleSort)}
          sortValue={sortValue}
          onSortClick={handleSortValue}
        />
      )}
      {toggleFilter && (
        <Filter
          priceChange={handlePriceRange}
          ratingChange={handleRatingRange}
          onToggleFilter={() => setToggleFilter(!toggleFilter)}
        />
      )}

      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-14  h-full  ">
          <div className="sm:px-5 sm:py-3 flex gap-4  w-full h-full ">
            <aside className="hidden md:block  md:w-3/12 lg:w-3/12 xl:w-3/12  h-full bg-white">
              <div className="  flex flex-col shadow-md rounded-md h-full">
                <span className=" text-xl font-medium px-4 py-3 border-b border-gray-300">
                  Filters
                </span>
                <div className=" h-full">
                  <div className="py-3 border-b px-4">
                    <p className="text-xs">CATEGORIES</p>
                    <p className="font-medium ">Applications</p>
                  </div>
                  <div className="py-3 px-10">
                    <p>Price</p>
                    <Box sx={{ width: "100%" }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={priceValue}
                        onChange={(e) => handlePriceRange(e.target.value)}
                        valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                        // color=""
                        step={100}
                        min={50}
                        max={120000}
                        // color="default"
                        style={{
                          color: "#000",
                        }}
                      />
                    </Box>
                  </div>
                  <div className="py-3 px-10 border-b">
                    <p>Customer Rating</p>
                    <Box sx={{ width: "100%" }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={ratingValue}
                        onChange={(e) => handleRatingRange(e.target.value)}
                        valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                        // color=""
                        step={1}
                        min={0}
                        max={5}
                        style={{
                          color: "#000",
                        }}
                      />
                    </Box>
                  </div>

                  <div className="  w-full h-64  z-10">
                    <p className="font-medium font-serif border-b px-4 py-3 text-xl ">
                      Sort By
                    </p>
                    <div className="flex flex-col px-5 gap-4 py-3 ">
                      <span
                        onClick={handleSortValue}
                        className=" flex cursor-pointer items-center justify-between   "
                      >
                        All Items
                        <input
                          type="radio"
                          className="h-4 w-4"
                          data-id="all"
                          name="sort"
                          checked={sortValue === "all"}
                        />
                      </span>
                      <span
                        onClick={handleSortValue}
                        className="flex cursor-pointer items-center justify-between   "
                      >
                        Price-Low to High
                        <input
                          type="radio"
                          checked={sortValue === "l_h"}
                          data-id="l_h"
                          className="h-4 w-4"
                          name="sort"
                        />
                      </span>
                      <span
                        onClick={handleSortValue}
                        className="flex cursor-pointer items-center justify-between   "
                      >
                        Price-High to Low
                        <input
                          checked={sortValue === "h_l"}
                          data-id="h_l"
                          type="radio"
                          className="h-4 w-4"
                          name="sort"
                        />
                      </span>
                      <span
                        onClick={handleSortValue}
                        className="flex cursor-pointer items-center justify-between   "
                      >
                        Newest First
                        <input
                          checked={sortValue === "n_o"}
                          data-id="n_o"
                          className="w-4 h-4 bg-slate-900 "
                          type="radio"
                          name="sort"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="rounded-md shadow-md w-full relative bg-white md:w-9/12  lg:w-9/12 xl:w-9/12  md:ml-auto  flex flex-col gap-0">
              <div className="md:hidden  fixed w-full z-10 flex bg-slate-200 border-b py-1">
                <button
                  className="grow border-r border-black/40 py-2"
                  onClick={() => {
                    setToggleSort(!toggleSort);
                    setToggleFilter(false);
                  }}
                >
                  Sort
                </button>
                <button
                  className="grow py-2"
                  onClick={() => {
                    setToggleSort(false);
                    setToggleFilter(!toggleFilter);
                  }}
                >
                  Filter
                </button>
              </div>
              <div className=" p-3 flex flex-col md:items-center md:justify-center max-sm:pt-10">
                {isLoading ? (
                  <Loader />
                ) : (
                  <div className=" sm:w-11/12  md:mx-auto grid grid-cols-2  lg:grid-cols-4 gap-1 md:gap-10 sm:items-center sm:justify-center">
                    {isSuccess &&
                      data?.products.map((pro) => (
                        <Product key={pro._id} product={pro} />
                      ))}
                  </div>
                )}
              </div>
              <div className="py-3 mt-auto flex flex-col items-center">
                <Pagination
                  count={data?.paginationCount}
                  size={"large"}
                  page={Number(filterDetails?.page) || 1}
                  value={Number(filterDetails?.page) || 1}
                  onChange={(e) => {
                    dispatch(changePage(e.target.childNodes[0].nodeValue));
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeeAll;
