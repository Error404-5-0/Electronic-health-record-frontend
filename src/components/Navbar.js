import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import httprequest from "../utils/req";

export default function Navbar() {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();

  const logout = () => {
    httprequest(`/api/${auth}/logout`, "POST").then((res) => {
      if (res.success) {
        navigate("/login");
      } else {
        alert(res.message);
      }
    });
  };

  useEffect(() => {
    httprequest("/api/patient/getDetails", "GET").then((res) => {
      if (res.success) {
        setAuth("patient");
      }
    });
    httprequest("/api/doctor/getDetails", "GET").then((res) => {
      if (res.success) {
        setAuth("doctor");
      }
    });
  });
  return (
    <div>
      {/* <nav className="my-5 mx-5 shadow-md w-5/6 fixed top-0 left-0 bg-sky-50 py-3 md:pt-3 md:py-3 px-2 md:px-7 flex items-center justify-between z-20"> */}
      <nav className="rounded-lg py-3 my-5 mx-5 mr-5 ml-5 shadow-lg bg-sky-200  md:pt-3 md: px-2 md:px-7 z-20">
        <div className="flex justify-between w-full">
          <div>
            {/* <Link to="/"> */}
            <div className="">
              <span>
                {/* <GiMedicines className="inline text-3xl md:text-5xl md:mx-2 text-sky-600 mr-1" /> */}
              </span>
              <h1 className="font-bold font-cursive pt-1.5 text-3xl cursor-pointer bg-clip-text text-gray-900 inline">
                <span>V</span>Care
              </h1>
            </div>
            {/* </Link>  */}
          </div>

          {/* <ul className="md:flex space-x-16 font-semibold hidden md:text-lg">
            <li className="pt-1.5">
              <a href="#home">Home</a>
            </li>
            <li className="pt-1.5">
              <a href="#about-us">About Us</a>
            </li>
            <li className="pt-1.5">
              <a href="#footer">Contact</a>
            </li>
          </ul> */}

          {/* {!user && ( */}
          {!auth && (
            <div>
              <Link to="/signup">
                <button className="bgcolor-gradient py-1 md:px-4 font-semibold  md:text-lg border border-sky-600 rounded-lg text-white bg-sky-500 md:ml-2 hover:shadow-md md:mr-2 px-1 ml-1 mr-2">
                  Sign up
                </button>
              </Link>
              <Link
                className="py-1 md:px-4  font-semibold md:text-lg bg-sky-50 border border-sky-600 rounded-lg text-color-gradient md:mr-2 hover:shadow-md px-1 sm:ml-4"
                to="/login"
              >
                {/* <button > */}
                Log in
                {/* </button> */}
              </Link>
            </div>
          )}
          {auth && (
            <div>
              <Link to={`/${auth}`}>
                <button className="bgcolor-gradient py-1 md:px-4 font-semibold  md:text-lg border border-sky-600 rounded-lg text-white bg-sky-500 md:ml-2 hover:shadow-md md:mr-2 px-1 ml-1 mr-2">
                  Dashboard
                </button>
              </Link>
              <button
                className="py-1 md:px-4  font-semibold md:text-lg bg-sky-50 border border-sky-600 rounded-lg text-color-gradient md:mr-2 hover:shadow-md px-1 sm:ml-4"
                onClick={logout}
              >
                Log out
              </button>
            </div>
          )}
          {/* )} */}
        </div>
      </nav>
    </div>
  );
}
