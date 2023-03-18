import voiceImage from "./images/voice5.jpg";
import CreateAccount from "./components/createAccount";
import { AppContext } from "./context";
import { useContext } from "react";
import Login from "./components/login";
import Authentication from "./components/auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientDash from "./components/PatientDash";
import Viewcomp from "./components/Viewcomp";
import PatientDetails from "./components/PatientDetails";
import DoctorDash from "./components/DoctorDash";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
          <Route path="/patient" element={<PatientDash />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/details" element={<PatientDetails />} />
          <Route path="/doctor" element={<DoctorDash />} />
          <Route path="/doctor/view/:id" element={<Viewcomp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
