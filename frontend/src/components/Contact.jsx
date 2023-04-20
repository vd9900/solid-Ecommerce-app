import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import emailjs from "emailjs-com";
import loadprofile from "../assets/imgs/loadprofile.gif";
import { useAuthUser } from "react-auth-kit";

const Contact = () => {
  // const [isFeildEmpty, setIsFelidEmpty] = useState(true);
  const [isSubmited, setIsSubmited] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useAuthUser();
  const message = useRef();
  const handleMessage = (e) => {
    // console.log(auth().email);
    e.preventDefault();
    if (!message.current.value) return;
    const formData = {
      message: message.current.value,
      name: auth().email,
    };
    setLoading(true);
    emailjs
      .sendForm(
        "service_7gyzy3e",
        "template_lsngrat",
        e.target,
        "qzN_SXAXG0bU6ifJu"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsSubmited(true);
          // console.log(result.text);
          e.target.reset();
        },
        (error) => {
          setLoading(false);
          setIsSubmited(false);
          // console.log(error.text);
        }
      );
  };
  return (
    <div className="w-screen h-screen bg-gray-100">
      <Navbar />
      <div className="pt-14 ">
        <div className="px-3 ">
          <div className="overflow-hidden flex flex-col h-full justify-between md:w-9/12 mx-auto">
            <div className="border-b py-2">
              <p className=" font-serif  text-2xl">Contact Us</p>
            </div>
            <div className="flex flex-col gap-0 bg-white rounded-md ">
              <form action="" onSubmit={handleMessage}>
                <div className=" w-full">
                  <div className="py-2 px-3 bg-black rounded-md text-white">
                    <p className="text-lg  ">We'd love to hear from you</p>
                  </div>
                  <div className="p-2">
                    <input
                      type="text"
                      name="name"
                      defaultValue={auth().email}
                      className="hidden"
                    />
                    <textarea
                      rows={6}
                      type="text"
                      placeholder="say something..."
                      className="resize-none border rounded-md  outline-none py-1 w-full sm:w-6/12 px-3  "
                      name="message"
                      ref={message}
                      //   value={emailEditValue}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmited}
                  className="disabled:opacity-70 bg-black m-2 text-white px-8 rounded-full py-2
            transition duration-200 transform active:scale-95 ease-in-out
               flex items-center gap-1 w-32  "
                >
                  {loading ? (
                    <span className="mx-auto">
                      <img
                        src={loadprofile}
                        alt="load"
                        className="w-6 filter brightness-0 invert  mx-auto h-6"
                      />
                    </span>
                  ) : (
                    <span className="mx-auto">
                      {isSubmited ? "Submited" : "Submit"}
                    </span>
                  )}
                </button>
              </form>
            </div>
            <div className="pt-8 pb-3">
              <div>
                <div className="bg-black text-white py-2 rounded-md px-3">
                  <p>Follow us</p>
                </div>
                <div className="bg-white rounded-md p-4 flex gap-5">
                  <a href="https://twitter.com/VD990O" target={"_blank"}>
                    <img
                      src="https://th.bing.com/th/id/OIP.ONNCugYzWU2g1GZ4suV_ugHaGl?pid=ImgDet&w=800&h=711&rs=1"
                      alt=""
                      className="w-12"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/mr.vd9900/"
                    target={"_blank"}
                  >
                    <img
                      src="https://th.bing.com/th/id/R.5e04fd779e7607a47d0bad14976caa90?rik=MYieavaZpaXrMw&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f02%2fNew-Instagram-logo.jpg&ehk=kTNHOU7RNhSBC8VTl4FPXOmyjXgyJlrNtPiZ9qk03fA%3d&risl=&pid=ImgRaw&r=0"
                      alt=""
                      className="w-12"
                    />
                  </a>
                  <a target={"_blank"} href="https://youtu.be/dQw4w9WgXcQ">
                    <img
                      src="https://th.bing.com/th/id/OIP.3rSTYI2unlM-9raJQJW3lwHaHa?pid=ImgDet&rs=1"
                      alt=""
                      className="w-12 scale-110"
                    />
                  </a>
                  <a
                    target={"_blank"}
                    href="https://www.linkedin.com/in/vinith-devadiga-79a342231/"
                  >
                    <img
                      src="https://th.bing.com/th/id/OIP.w_zDkEJ9aLiWR-g0rff8hwHaHa?pid=ImgDet&rs=1"
                      alt=""
                      className="w-12 scale-90"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-center text-gray-600 text-sm">
              <p>Copyright @ 2023 vd.lnc</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
