import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import Navbar from "./components/core/Navbar";


function App() {
  return (
    <div className="tw-font-inter">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' element={<AboutUsPage/>} />
        <Route path='/login' element={<div>Login</div>} />
        <Route path='/signup' element={<div>SignUp</div>} />
      </Routes>
    </div>
  );
}

export default App;
