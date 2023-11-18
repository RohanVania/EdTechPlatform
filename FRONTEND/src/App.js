import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";


function App() {
  return (
    <div className="tw-font-inter tw-bg-richblack-900 tw-h-screen">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' />
      </Routes>
    </div>
  );
}

export default App;
