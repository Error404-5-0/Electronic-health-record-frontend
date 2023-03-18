import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientDash from "./components/PatientDash";
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
