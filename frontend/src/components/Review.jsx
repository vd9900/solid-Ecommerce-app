import { CircularProgress, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAddReviewMutation } from "../services/reviews/reviewsApi";
import MyModal from "./modals/MyModal";

const Review = ({ toggleReview, ontoggleChange, productId, refetch }) => {
  const [value, setValue] = useState(0);
  const [reviews, setReviews] = useState({
    rating: 0,
    comment: "",
  });
  const [
    addReview,
    { error: reviewError, data: reviewData, isSuccess, isLoading },
  ] = useAddReviewMutation(undefined, { refetchOnMountOrArgChange: true });

  const handleAddReview = () => {
    if (reviews.comment === "") return;
    const reviewInfo = { ...reviews, productId };
    addReview(reviewInfo);
    refetch();
    setReviews({ rating: 0, comment: "" });
  };
  useEffect(() => {
    isSuccess && ontoggleChange();
  }, [isSuccess]);

  return (
    <MyModal isOpen={toggleReview} onClose={ontoggleChange}>
      <div
        className={`flex  shadow-md z-10  flex-col duration-300  justify-between bg-gray-50 rounded-md py-2 gap-5 max-sm:w-10/12 w-9/12  h-auto   fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
      >
        <div>
          <div className="border-b py-2">
            <p className="px-3 font-serif  text-xl">Add Review</p>
          </div>
          <div className="px-4 flex flex-col gap-0 ">
            <div className="p-2">
              <p className="text-lg py-1">Ratings</p>
              <Rating
                name="simple-controlled"
                value={value}
                size="large"
                onChange={(event, newValue) => {
                  setValue(newValue);
                  setReviews({ ...reviews, rating: event.target.value });
                }}
                className="text-4xl"
              />
            </div>
            <div className="p-2 w-full">
              <p className="text-lg py-1">Description</p>
              <textarea
                rows={6}
                type="text"
                placeholder="say something..."
                className="resize-none border bg-gray-100 outline-none py-1 w-full sm:w-6/12 px-3 rounded-sm "
                name="email"
                onChange={(e) =>
                  setReviews({ ...reviews, comment: e.target.value })
                }
                //   value={emailEditValue}
                //   onChange={handleInputOnChange}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 px-3">
          <button
            onClick={handleAddReview}
            className="disabled:opacity-90 flex items-center gap-1  bg-black text-white  px-6 rounded-full py-1 "
            disabled={isLoading}
          >
            <CircularProgress
              size={16}
              style={{
                color: "white",
                display: `${isLoading ? "inline-block" : "none"}`,
              }}
              className="text-black"
            />
            {/* Post */}
            <span className="">Post</span>
          </button>
          <button
            onClick={() => ontoggleChange()}
            className="border-2 border-black px-6 rounded-full transition duration-200 transform active:scale-95 ease-in-out py-1 "
          >
            cancel
          </button>
        </div>
      </div>
    </MyModal>
  );
};

export default Review;
