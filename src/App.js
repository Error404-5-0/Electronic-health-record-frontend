import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientDash from "./components/PatientDash";
import PatientDetails from "./components/PatientDetails";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/details" element={<PatientDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
