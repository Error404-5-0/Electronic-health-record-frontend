import React from "react"

export default function Navbar() {
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
              <h1 className="font-bold text-2xl cursor-pointer bg-clip-text text-gray-900 inline">
                EHR
              </h1>

            </div>
          {/* </Link>  */}
          </div>

           <ul className="flex space-x-16 font-lg md:text-lg">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>

          {/* {!user && ( */}
            <div>
              {/* <Link to="/login"> */}
                <button className="py-1 md:px-2 font-medium md:text-lg bg-sky-50 border-2 border-sky-600 rounded-lg text-sky-500 md:mr-2 hover:shadow-md px-1 sm:ml-4">
                  Log in
                </button>
              {/* </Link> */}
              {/* <Link to="/signup"> */}
                <button className="bgcolor-gradient py-1 md:px-2 font-medium md:text-lg border-2 border-sky-600 rounded-lg text-white bg-sky-500 md:ml-2 hover:shadow-md md:mr-2 px-1 ml-1 mr-2">
                  Sign up
                </button>
              {/* </Link> */}
            </div>
          {/* )} */}
        </div>

      </nav>
        </div>
    )
}