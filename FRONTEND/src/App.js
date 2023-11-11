import { Routes,Route } from "react-router-dom";
import "./App.css";
import {HomePage} from "./pages/HomePage";
import CoursePage from "./pages/CoursePage";


function App() {
  return (
    <div className="tw-font-inter">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/courses' element={<CoursePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
