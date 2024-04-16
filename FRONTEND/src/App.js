import { Routes, Route, useNavigate } from "react-router-dom";
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
import { getAllCategories, checkAuthenticated } from "./services/operations/publicFunction";
import ModalLoader from "./components/core/ModalLoader";
import DashBoardPage from "./pages/DashBoardPage";
import ResetPasswordPage from "./components/core/ResetPasswordPage";
import MyProfile from "./components/dashboard/MyProfile";
import Settings from "./components/dashboard/Settings";
import { useDispatch, useSelector } from "react-redux";
import { setLogout, setdeleteAccount } from "./slices/authSlice";
import { logoutOperation } from "./services/operations/authFunctions"
import { deleteOperation } from "./services/operations/userFunctions";
import CourseAddLayout from "./components/course/CourseAddLayout";
import MyCourses from "./components/course/MyCourses";
import Modal from "./components/core/Modal";

function App() {

  const dispatch = useDispatch();
  const authGlobalState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // const check = useSelector((state) => state);
  // console.log("Check all states =>",check)
  const categoryDataresult = useQuery({
    queryKey: ['categories'],
    // staleTime: Infinity,
    queryFn: getAllCategories,
    refetchOnMount: true
  })

  const alreadyLoggedIn = useQuery({
    queryKey: ['alreadyLoggedIn'],
    queryFn: () => {
      checkAuthenticated(dispatch, authGlobalState.token)
    },
    staleTime: Infinity,
  })



  if (categoryDataresult.isLoading || alreadyLoggedIn.isLoading) {
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

  function handleLogoutCancel() {
    dispatch(setLogout(false))
  }

  async function handleLogout() {
    try {
      const response = await logoutOperation(dispatch);
      if (response?.data?.status === "Success") {
        navigate('/')
      }

    } catch (err) {
      console.log(err)
    }
  }

  async function handleDeleteAccount() {
    try {
      const response = await deleteOperation(dispatch);
      if (response?.data?.status === "Success") {
        navigate('/')
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleDeleteCancel() {
    dispatch(setdeleteAccount(false))
  }


  return (
    <>
      {authGlobalState?.logout &&
        <Modal btn1={"Logout"} btn2={"Cancel"} question={"Are You Sure ?"} text={"You will be logged out of your account"} handleLogout={handleLogout} handleLogoutCancel={handleLogoutCancel}/> 
        // <div className="tw-bg-[rgba(0,0,0,0.2)] tw-filter  tw-fixed tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center ">

        //   <div className=" tw-bg-richblack-800 tw-max-w-[900px]  tw-m-5  tw-text-white tw-flex tw-flex-col tw-p-6 tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-3">
        //     <h1 className=" tw-font-semibold tw-text-richblack-5  tw-text-[20px] 2xs:tw-text-[22px]  sm:tw-text-3xl">Are You Sure ?</h1>
        //     <p className="tw-text-richblack-200  tw-text-[14px] 2xs:tw-text-[15px]  sm:tw-text-[19px]">You will be logged out of your account</p>
        //     <div className="tw-flex tw-mt-3 tw-gap-x-4">
        //       <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-py-2 xs:tw-py-2 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={handleLogout}>
        //         Logout
        //       </button>
        //       <button className='tw-bg-richblack-200 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={handleLogoutCancel} >
        //         Cancel
        //       </button>
        //     </div>
        //   </div>

        // </div>
      }

      {authGlobalState?.deleteAccount &&
      <Modal btn1={"Delete"} btn2={"Cancel"} question={"Are You Sure ?"} text={"Your Account will be deleted permanently and all the data will be lost ?"} handleLogout={handleDeleteAccount} handleLogoutCancel={handleDeleteCancel}/> 
        // <div className="tw-bg-[rgba(0,0,0,0.2)] tw-filter  tw-fixed tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center ">

        //   <div className=" tw-bg-richblack-800 tw-max-w-[900px]  tw-m-5  tw-text-white tw-flex tw-flex-col tw-p-6 tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-3">
        //     <h1 className=" tw-font-semibold tw-text-richblack-5  tw-text-[20px] 2xs:tw-text-[22px]  sm:tw-text-3xl">Are You Sure ?</h1>
        //     <p className=" tw-text-[14px] 2xs:tw-text-[15px]  sm:tw-text-[19px] tw-text-red-600">Your Account will be deleted permanently and all the data will be lost ?</p>
        //     <div className="tw-flex tw-mt-3 tw-gap-x-4">
        //       <button className='tw-bg-red-500 tw-text-white tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-py-2 xs:tw-py-2 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  ' onClick={handleDeleteAccount}>
        //         Delete
        //       </button>
        //       <button className='tw-bg-richblack-200 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={handleDeleteCancel} >
        //         Cancel
        //       </button>
        //     </div>
        //   </div>

        // </div>
      }

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
          <Route path='/reset-password/:resetToken' element={<ResetPasswordPage />} />
          <Route element={<VerifyEmailPage />} path="/verify-email" />

          <Route element={<ProtectedRoute />}>
            <Route element={<DashBoardPage />}  >
              <Route path="/dashboard/my-profile" element={<MyProfile />} />
              <Route path="/dashboard/settings" element={<Settings />} />
              <Route path="/dashboard/enrolled-courses" element={<h1 className="tw-text-white">Enrolled Courses</h1>} />
              <Route path="/dashboard/purchase-history" element={<h1 className="tw-text-white">Purschase History</h1>} />
              <Route path="/dashboard/my-courses" element={<MyCourses />} />
              <Route path="/dashboard/add-course" element={<CourseAddLayout />} />
            </Route>

            <Route element={<Test />} path="/test" />
          </Route>

          <Route path="*" element={<div className="tw-text-white tw-mt-[90px]">Not Found</div>} />
        </Routes>
      </div >
    </>
  );
}

export default App;
