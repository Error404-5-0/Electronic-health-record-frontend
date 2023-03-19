import React, { useContext, useEffect, useState } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineMailOutline, MdLockOutline } from "react-icons/md";
import { AppContext } from "../context";
import voiceImage from "../images/doctor.jpg";
import { Link, useNavigate } from "react-router-dom";
import httprequest from "../utils/req";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    httprequest(
      `${process.env.REACT_APP_API}/api/${user ? "doctor" : "patient"}/login`,
      "POST",
      { email, password }
    ).then((res) => {
      if (res.success) {
        // Window.localStorage.setItem(res.data.key, res.data.token);
        localStorage.setItem(res.data.key, res.data.token);
        navigate(`/${user ? "doctor" : "patient"}`);
      } else {
        alert(res.message);
      }
    });
  };

  useEffect(() => {
    httprequest(
      `${process.env.REACT_APP_API}/api/${
        user ? "doctor" : "patient"
      }/getDetails`,
      "GET",
      { email, password }
    ).then((res) => {
      if (res.success) {
        console.log(res.data);
        // navigate(`/${user ? "doctor" : "patient"}`);
      } else {
        alert(res.message);
      }
    });
  }, []);
  return (
    <main className=" font-poppins">
      <div className="grid grid-flow-row gap-4 sm:gap-0 sm:grid-cols-2 h-screen">
        <div className="flex justify-center align-middle bg-[#FFFFFF] pb-2 sm:pb-0">
          <div className="m-auto">
            <img src={voiceImage} alt="" />
            <h1 className="text-white text-center text-md sm:text-3xl mt-3">
              <span className="text-[#0C4770]">Login</span>
            </h1>
          </div>
        </div>
        <div className="px-5 sm:px-10 lg:px-24 flex flex-col justify-center">
          <div className="flex justify-center mb-4 gap-2">
            <button
              className={`${
                user === 0
                  ? "bg-[#2EADC5] text-white"
                  : "bg-white text-[#2EADC5] border-2 border-[#2EADC5]"
              } px-4 py-1 rounded-md font-bold `}
              onClick={() => setUser(0)}
            >
              Patient
            </button>
            <button
              className={`${
                user === 1
                  ? "bg-[#2EADC5] text-white"
                  : "bg-white text-[#2EADC5] border-2 border-[#2EADC5]"
              } px-4 py-1 rounded-md font-bold`}
              onClick={() => setUser(1)}
            >
              Doctor
            </button>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold" htmlFor="username">
                Your Email
              </label>
              <div className=" relative overflow-hidden">
                <MdOutlineMailOutline
                  size={18}
                  className="absolute top-4 left-3 text-[#929298]"
                ></MdOutlineMailOutline>
                <input
                  className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="block text-sm font-semibold" htmlFor="username">
                Password
              </label>
              <div className=" relative overflow-hidden">
                <MdLockOutline
                  size={18}
                  className="absolute top-4 left-3 text-[#929298]"
                ></MdLockOutline>
                <input
                  className=" border text-xs focus:outline-none w-full pl-9 py-4 rounded-md"
                  type="password"
                  placeholder="Enter your name"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                className="accent-[#2EADC5]"
                name=""
                id=""
              />
              <p className="text-xs font-semibold text-[#929298]">
                I agree to the{" "}
                <a href="#" className="text-[#2EADC5]">
                  Terms and Conditions
                </a>
              </p>
            </div>
            <button className="bg-[#2EADC5] hover:bg-[#0C4770] ease-in-out text-xs py-4 rounded-md font-bold text-white mt-2">
              Submit
            </button>
            <div className="mt-4">
              <p className="text-xs font-semibold text-[#929298] text-center">
                new user ?{" "}
                <Link
                  to="/signup"
                  href="#"
                  className="text-[#2EADC5] underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
