import React, { useState } from "react";
import Swal from "sweetalert2";

import { Link, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
 // <-- change path as needed

import gmail from "./../Images/fe6b03fa754567c1eb33bc84cd251d303a608f84.png";
import gemlaylogo from "./../Images/image.png";
import { addUser } from "../Reducers/Userslice";

const Registerform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    phoneNumber: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.phoneNumber) {
      Swal.fire("Enter Phone Number!", "", "warning");
      return;
    }

    dispatch(addUser(input));
    setInput({ phoneNumber: "" });
    navigate("/main");
  };

  return (
    <>
      {/* LOADER */}
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="w-full min-h-screen flex items-center justify-center py-6 bg-gray-100">
        <div className="bg-white w-full max-w-md rounded-xl py-10 px-6 shadow-md">
          
          {/* LOGO */}
          <div className="flex flex-col items-center mb-6">
            <img src={gemlaylogo} alt="logo" className="w-[150px] mb-2" />
            <h2 className="text-lg font-semibold text-gray-800">
              <Link to="/">LOGIN</Link> /{" "}
              <Link to="/register">SIGN UP</Link>
            </h2>
          </div>

          {/* PHONE NUMBER INPUT */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="flag"
                  className="w-5"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  maxLength={10}
                  minLength={10}
                  onChange={handleInput}
                  placeholder="+91  Enter phone number"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* TERMS */}
            <p className="text-xs text-gray-500 text-center mb-4">
              By continuing, I agree to the{" "}
              <span className="text-green-700 font-medium cursor-pointer">
                Terms of Use
              </span>{" "}
              &{" "}
              <span className="text-green-700 font-medium cursor-pointer">
                Privacy Policy
              </span>
            </p>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition"
            >
              GET OTP
            </button>
          </form>

          {/* LOGIN LINK */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account?{" "}
            <span className="text-green-700 font-semibold cursor-pointer">
              <Link to="/">Login</Link>
            </span>
          </p>

          {/* DIVIDER */}
          <div className="flex items-center gap-2 my-4">
            <div className="h-px bg-gray-300 w-full"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-3 border border-gray-300 py-2 rounded-full hover:bg-gray-50 transition">
              <img src={gmail} className="w-7" alt="google" />
              Continue with Google
            </button>

            <button className="text-green-700 text-sm text-center font-medium">
              Having Trouble Logging In? Get Help
            </button>
          </div>
        </div>
      </div>    </>
  );
};

export default Registerform;


