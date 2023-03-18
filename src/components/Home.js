import React from "react"
import Navbar from "./Navbar.js"
import Hero from "./Hero.js"
// import ReactDOM  from "react-dom/client"

// const Home = () => {
//     return <div>Home</div>;
//   };
  
// import { React } from "react";
// import { GiMedicines } from "react-icons/gi";
// import { useLogout } from "../hooks/useLogout";
// import { Link } from "react-router-dom";
// import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
//   const { user } = useAuthContext();
//   const { logout } = useLogout();
  //for logout button
//   const handleClick = () => {
//     logout();
//   };
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
};

// export default Navbar;
export default Home;