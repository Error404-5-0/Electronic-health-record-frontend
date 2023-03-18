import voiceImage from "./images/voice5.jpg";
import CreateAccount from "./components/createAccount";
import { AppContext } from "./context";
import { useContext } from "react";
import Login from "./components/login";
import Authentication from "./components/auth"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientDash from "./components/PatientDash";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/patient" element={<PatientDash />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<CreateAccount/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;