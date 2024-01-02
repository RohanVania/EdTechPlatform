import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/core/Navbar";
import { HomePage } from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ScrollToTop from "./ScrollToTop";


function App() {
  return (
    <div className="tw-font-inter tw-bg-richblack-900">
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' element={<AboutUsPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
      </Routes>
    </div>
  );
}

export default App;
