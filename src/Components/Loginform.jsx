import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { addUser, login } from "../Reducers/Userslice";
import gmail from "./../Images/fe6b03fa754567c1eb33bc84cd251d303a608f84.png";
import gemlaylogo from "./../Images/image.png";
import { auth, googleProvider } from "./../Components/Firebase/Firebase";
import { signInWithPopup } from "firebase/auth";

const Loginform = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState({
    phoneNumber: "",
  });

  const handleGoogleLogin = async () => {
    try {
      // Always prompt account selection
      googleProvider.setCustomParameters({ prompt: "select_account" });

      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google user:", user);
      navigate("/main")
      dispatch(login(user))

      // Redirect or store user info
      // navigate("/dashboard"); or dispatch Redux action
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

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

    dispatch(login(input));
    setInput({ phoneNumber: "" });
    navigate("/main");
  };


  return (
    <>
      <Backdrop sx={(theme) => ({ zIndex: theme.zIndex.drawer + 1 })} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <div className="w-full min-h-screen flex items-center justify-center py-6">
        <div className="bg-white w-full max-w-md rounded-xl py-10">

          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img src={gemlaylogo} alt="Gemlay Logo" className="w-[150px] mb-2" />
            <h2 className="text-lg font-semibold text-gray-800">
              <Link to="/login">LOGIN</Link> / <Link to="/register">SIGN UP</Link>
            </h2>
          </div>

          {/* Phone Input */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="flex items-center gap-2 border border-gray-300 rounded-md px-3 py-2">
                <img src="https://flagcdn.com/w20/in.png" alt="flag" className="w-5" />

                <input
                  type="text"
                  name="phoneNumber"
                  value={input.phoneNumber}
                  onChange={handleInput}
                  maxLength={10}
                  placeholder="+91 Enter phone number"
                  className="w-full focus:outline-none text-gray-700"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-full font-semibold transition"
            >
              GET OTP
            </button>
          </form>

          {/* Signup Text */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Do not have an account?{" "}
            <span className="text-green-700 font-semibold cursor-pointer">
              <Link to="/register">Signup</Link>
            </span>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-2 my-4">
            <div className="h-px bg-gray-300 w-full"></div>
            <span className="text-gray-400 text-sm">Or</span>
            <div className="h-px bg-gray-300 w-full"></div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-3">
            <button
              className="flex items-center justify-center border-r-4  py-2 rounded hover:bg-gray-100"
              onClick={handleGoogleLogin}
            >
              <img src={gmail} alt="Google" className="w-6" />
              Continue with Google
            </button>


            <button className="text-green-700 text-sm text-center font-medium">
              Having Trouble Logging In? Get Help
            </button>
          </div>

        </div>
      </div>
    </>
  );
};

export default Loginform;
