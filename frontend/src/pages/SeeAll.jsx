// hooks & redux
import React, { memo, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//material ui
import { Box, ButtonGroup, Pagination, Slider } from "@mui/material";
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
} from "../services/products/productSlice";

const SeeAll = () => {
  // to get Search
  const dispatch = useDispatch();
  const naviagate = useNavigate();

  // get url  address
  const routeAddress = window.location.href.split("/").splice(3).join("/");
  // console.log(routeAddress);
  const { state } = useContext(SearchContext);
  // const { clickedCategory } = useSelector((state) => state.productsStore);
  const { data, isLoading, isSuccess } =
    useProductByCategoryQuery(routeAddress);
  console.log(data);
  // const data = useSelector((state) => state.productsApi);
  // changing the pagination
  const [currentPage, setCurrentPage] = useState(1);

  //sort & filter btn for small device
  const [toggleSort, setToggleSort] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);

  // price change handler
  const [priceValue, setPriceValue] = useState([0, 10000]);

  const handlePriceChange = (event, newValue) => {
    setPriceValue(newValue);
  };

  return (
    <div className="max-w-screen relative h-screen">
      {/* toggle components */}
      {toggleSort && <Sort />}
      {toggleFilter && <Filter />}

      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="pt-14 bg-gray-100 h-full  ">
          <div className="sm:px-5 sm:py-3 flex gap-3  w-full h-full ">
            <aside className="hidden md:block  fixed left-2 md:w-3/12 lg:w-3/12 xl:w-1/5 sm:pr-2 h-full ">
              <div className=" bg-white flex flex-col px-2 ">
                <span className="text-xl font-medium px-4 py-3 border-b border-gray-300">
                  Filters
                </span>
                <div className=" h-full">
                  <div className="py-3 border-b px-4">
                    <p className="text-xs">CATEGORIES</p>
                    <p className="font-medium ">Applications</p>
                  </div>
                  <div className="py-3 px-4 border-b">
                    <p>Price</p>
                    <Box sx={{ width: "100%" }}>
                      <Slider
                        getAriaLabel={() => "Temperature range"}
                        value={priceValue}
                        onChange={handlePriceChange}
                        valueLabelDisplay="auto"
                        // getAriaValueText={valuetext}
                        // color=""
                        step={100}
                        min={100}
                        max={10000}
                        // color="default"
                      />
                    </Box>
                  </div>
                  <div className="py-3 px-4 border-b flex flex-col gap-2">
                    <p>customer ratings</p>
                    <div className="flex flex-col gap-2 px-2">
                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">
                          4 <AiFillStar fontSize={12} /> & above
                        </span>
                      </span>

                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">
                          3 <AiFillStar fontSize={12} /> & above
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">
                          2 <AiFillStar fontSize={12} /> & above
                        </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">
                          1 <AiFillStar fontSize={12} /> & above
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="py-3 px-4 border-b flex flex-col gap-2">
                    <p>Discounts</p>
                    <div className="flex flex-col gap-2 px-2">
                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">40% and more</span>
                      </span>

                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">30% and more </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">20% and more </span>
                      </span>
                      <span className="flex items-center gap-2">
                        <input className="w-4 h-4" type="checkbox" />{" "}
                        <span className="flex items-center">10% and more </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
            <div className="w-full relative bg-white md:w-9/12  lg:w-9/12 xl:11/12  md:ml-auto  flex flex-col gap-0">
              <div className="px-3 hidden md:flex gap-3 items-center max-lg:text-xs">
                <span className="font-medium text-center">Sort By</span>
                <span className="py-1 border-b-4  border-black">All Items</span>
                <span className="py-1">Price-Low to High</span>
                <span className="py-1">Price-High to Low</span>
                <span className="py-1">Newest First</span>
                <span className="py-1">Oldest First</span>
              </div>
              <div className="md:hidden  fixed w-full z-10 flex bg-slate-100 border-b ">
                <button
                  className="grow border-r py-2"
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
                <div className=" sm:w-11/12  md:mx-auto grid grid-cols-2  lg:grid-cols-4 gap-1 md:gap-10 sm:items-center sm:justify-center">
                  {isSuccess &&
                    data?.products.map((pro) => (
                      <Product key={pro._id} product={pro} />
                    ))}
                </div>
              </div>
              <div className="py-3 mt-auto flex flex-col items-center">
                <Pagination
                  count={5}
                  size={"large"}
                  onChange={(e) =>
                    setCurrentPage(e.target.childNodes[0].nodeValue)
                  }
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
