import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import AboutUsPage from "./pages/AboutUsPage";


function App() {
  return (
    <div className="tw-font-inter  tw-h-screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/aboutus' element={<AboutUsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
