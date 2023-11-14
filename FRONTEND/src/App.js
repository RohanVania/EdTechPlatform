import "./App.css";
import {HomePage} from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="tw-font-inter">
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/courses" element={<CoursePage/>}/>
      <Route path="*" element={<h1 className="tw-h-screen tw-bg-red-300" >NOT FOUND</h1>} />
    </Routes>
      
    </div>
  );
}

export default App;
