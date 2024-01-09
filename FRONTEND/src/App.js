import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/core/Navbar";
import { HomePage } from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ScrollToTop from "./ScrollToTop";
import ContactPage from "./pages/ContactPage";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Test from "./pages/Test";


function App() {
  return (
    <div className="tw-font-inter tw-bg-richblack-900 tw-h-full  tw-relative">
      <Toaster />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route element={<ProtectedRoute/>}>
          <Route element={<ProfilePage/>} path="/profile" />
          <Route element={<Test/>} path="/test"/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
