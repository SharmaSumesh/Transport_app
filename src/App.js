import "./App.css";
import VehicleInfo from "./Components/VehicleInfo";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/registration" element={<VehicleInfo />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
