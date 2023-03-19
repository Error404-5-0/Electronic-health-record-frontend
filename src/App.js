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
import PatientView from "./components/PatientView";
function App() {
  return (
    <div className="font-poppins">
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
          <Route
            path="/patient"
            element={
              <>
                <Navbar />
                <PatientDash />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route
            path="/doctor"
            element={
              <>
                <Navbar />
                <DoctorDash />
              </>
            }
          />
          <Route path="/doctor/view/:id" element={<PatientView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
