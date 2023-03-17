import React from "react";
import Navbar from "../Navbar";
import { useFormik } from "formik";
import * as yup from "yup";
import { useSelector } from "react-redux";
import { useCreateOrderMutation } from "../../services/orders/ordersApi";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  cardnumber: yup
    .number()
    .max(999999999999, "Enter valid card number")
    .required("card number is required"),
  cvv: yup.number().max(999, "Enter valid CVV").required("CVV is required"),
  year: yup.number().required("expiry year required"),
  expirydate: yup.string().required("expiry date required"),
});

const Payment = () => {
  const navigate = useNavigate();
  const [createOrder, { isSuccess, data, isLoading }] =
    useCreateOrderMutation();
  console.log(data);
  const formik = useFormik({
    initialValues: {
      cardnumber: "",
      year: "",
      expirydate: "",
      cvv: "",
      term: false,
    },
    validateOnBlur: true,
    onSubmit: (values) => {
      const orderInfo = { ...cartInfo, ...userAddressInfo };
      console.log(orderInfo);
      createOrder(orderInfo);
    },
    validationSchema: validationSchema,
  });
  if (isSuccess) {
    navigate("/payment/successfull");
  }
  const cartInfo = useSelector((state) => state.cartsStore);
  const userAddressInfo = useSelector(
    (state) => state.productsStore.UserAddress
  );
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar />
      <div className="w-full pt-12 px-4 h-full  flex items-center justify-center">
        <div className="w-full sm:w-5/12 lg:w-4/12 xl:w-3/12  bg-white rounded-md p-4 flex flex-col gap-4">
          <div>
            <p className="text-center font-medium">ONLINE PAYMENT INFO</p>
          </div>
          <div>
            <div className="py-2">
              <img
                className="w-32"
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                alt=""
              />
            </div>
            <form
              action=""
              className="flex flex-col gap-2"
              onSubmit={formik.handleSubmit}
            >
              <div class="py-2">
                <label class="font-medium text-sm mb-2 ml-1">Card number</label>
                <div>
                  <input
                    class="w-full px-2 py-2  border-2 focus-within:outline-none border-gray-200 rounded-md focus-within:border focus-within:border-black/80"
                    placeholder="0000 0000 0000 0000"
                    type="number"
                    name="cardnumber"
                    onChange={formik.handleChange}
                    value={formik.values.cardnumber}
                    onBlur={formik.handleBlur}
                  />
                  <p className="text-red-600 text-xs">
                    {formik.touched.cardnumber && formik.errors.cardnumber
                      ? formik.errors.cardnumber
                      : ""}
                  </p>
                </div>
              </div>
              <div class=" flex items-end">
                <div class=" w-1/2">
                  <label class="font-bold text-sm mb-2 ml-1">
                    Expiration date
                  </label>
                  <div>
                    <select
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      name="expirydate"
                      value={formik.values.expirydate}
                      class="form-select w-full text-sm px-3 py-2 mb-1 border-2 border-gray-200 rounded-md  focus-within:border focus-within:border-black/80 cursor-pointer"
                    >
                      <option value="01">01 - January</option>
                      <option value="02">02 - February</option>
                      <option value="03">03 - March</option>
                      <option value="04">04 - April</option>
                      <option value="05">05 - May</option>
                      <option value="06">06 - June</option>
                      <option value="07">07 - July</option>
                      <option value="08">08 - August</option>
                      <option value="09">09 - September</option>
                      <option value="10">10 - October</option>
                      <option value="11">11 - November</option>
                      <option value="12">12 - December</option>
                    </select>
                    <p className="text-red-600 text-xs">
                      {formik.touched.expirydate && formik.errors.expirydate
                        ? formik.errors.expirydate
                        : ""}
                    </p>
                  </div>
                </div>
                <div class="px-2 w-1/2">
                  <select
                    name="year"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.year}
                    class="form-select w-full px-3 py-2 mb-1 border-2  rounded-md  focus-within:border focus-within:border-black/80 cursor-pointer"
                  >
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                  <p className="text-red-600 text-xs">
                    {formik.touched.year && formik.errors.year
                      ? formik.errors.year
                      : ""}
                  </p>
                </div>
              </div>
              <div class="py-2">
                <label class="font-bold text-sm">CCV</label>
                <div>
                  <input
                    class="w-32  appearance-none hover:appearance-none outline-none focus-within:appearance-none text-sm p-2 border-2 border-gray-200 rounded-md focus-within:outline-none focus-within:border focus-within:border-black/80"
                    placeholder="000"
                    name="cvv"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.cvv}
                    onBlur={formik.handleBlur}
                  />
                  <p className="text-red-600 text-xs">
                    {formik.touched.cvv && formik.errors.cvv
                      ? formik.errors.cvv
                      : ""}
                  </p>
                </div>
              </div>
              <div className=" flex items-center py-1 gap-1">
                <input type="checkbox" className="w-4 h-4" />
                <p className="text-xs text-gray-600">
                  I have read and accept the terms of use rules and privacy
                  policy
                </p>
              </div>
              <div className="py-4 ">
                <button
                  className="disabled:opacity-80 flex mx-auto items-center gap-1 justify-center bg-black  w-10/12 text-white px-10 rounded-full py-2
          transition duration-200 transform active:scale-95 ease-in-out
           "
                  disabled={isLoading}
                  type="submit"
                >
                  <CircularProgress
                    size={18}
                    style={{
                      color: "white",
                      display: `${isLoading ? "inline-block" : "none"}`,
                    }}
                    className="text-black"
                  />
                  Pay now
                </button>
              </div>
            </form>
            <div>
              <p className="text-xs text-gray-600">
                Note: we don't store user credit card details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
