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
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Test from "./pages/Test";
import VerifyEmailPage from "./pages/VerifyEmailPage";
import { useQuery } from "react-query";
import { getAllCategories } from "./services/operations/publicFunction";
import ModalLoader from "./components/core/ModalLoader";
import DashBoardPage from "./pages/DashBoardPage";


function App() {

  const categoryDataresult = useQuery({
    queryKey: ['categories'],
    staleTime: Infinity,
    queryFn: getAllCategories,
  })


  if (categoryDataresult.isLoading) {
    return <div className="tw-bg-richblack-900 tw-min-h-[100vh] tw-flex tw-justify-center tw-items-center tw-text-white tw-relative">
      <ModalLoader />
    </div>
  }

  if (categoryDataresult.isError) {
    return <div>
      Error
    </div>
  }


  const toastconfiguration = {
    position: 'top-center',
  }

  return (
    <div className="tw-font-inter tw-bg-richblack-900 tw-h-full  tw-relative">
      <Toaster position="top-center" toastOptions={toastconfiguration} />
      <Navbar categoryData={categoryDataresult.data.data} />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/forgotpassword' element={<ForgotPasswordPage />} />


        <Route element={<ProtectedRoute />}>
          <Route element={<DashBoardPage />}  >
            <Route path="/dashboard/my-profile" element={<h1 className="tw-text-white">My Profile</h1>} />
            <Route path="/dashboard/settings" element={<h1 className="tw-text-white">Settings</h1>} />
            <Route path="/dashboard/enrolled-courses" element={<h1 className="tw-text-white">Enrolled Courses</h1>}/>
            <Route path="/dashboard/purchase-history" element={<h1 className="tw-text-white">Purschase History</h1>}/>
          <Route />
        <Route />

          </Route>
          <Route element={<Test />} path="/test" />
          <Route element={<VerifyEmailPage />} path="/verify-email" />
        </Route>

        <Route path="*" element={<div className="tw-text-white tw-mt-[90px]">Not Found</div>} />
      </Routes>
    </div >
  );
}

export default App;
