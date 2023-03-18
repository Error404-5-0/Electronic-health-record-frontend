import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientDash from "./components/PatientDash";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/patient" element={<PatientDash />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
