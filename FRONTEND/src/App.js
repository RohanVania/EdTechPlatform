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
import CategoryPage from "./pages/CategoryPage";
import EditCourseLayout from "./components/course/EditCourseLayout";
import FormModal from "./components/core/FormModal";
import VideoPlayerModal from "./components/core/VideoPlayerModal";

function App() {

    const dispatch = useDispatch();
    const authGlobalState = useSelector((state) => state.auth);
    const courseGlobalState = useSelector((state) => state.addcourse);

    const navigate = useNavigate();
    // const check = useSelector((state) => state);
    // console.log("Check all states =>",check)
    const categoryDataresult = useQuery({
        queryKey: ['categories'],
        // staleTime: Infinity,
        queryFn: getAllCategories,

        refetchOnMount: true,
        refetchOnWindowFocus: false
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

    //* LOGOUT AND DELET ACCOUNT FUNCTIONALITY 

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
                <Modal btn1={"Logout"} btn2={"Cancel"} question={"Are You Sure ?"} text={"You will be logged out of your account"} handleLogout={handleLogout} handleLogoutCancel={handleLogoutCancel} />
            }

            {authGlobalState?.deleteAccount &&
                <Modal btn1={"Delete"} btn2={"Cancel"} question={"Are You Sure ?"} text={"Your Account will be deleted permanently and all the data will be lost ?"} handleLogout={handleDeleteAccount} handleLogoutCancel={handleDeleteCancel} />
            }

            {courseGlobalState?.lectureModal &&
                <FormModal element={courseGlobalState?.lectureModal?.element} />
            }

  
            {courseGlobalState?.videoPlayModal &&
                <VideoPlayerModal element={courseGlobalState?.videoPlayModal?.lecture} />
            }



            <div className="tw-font-inter tw-bg-richblack-900 tw-h-auto  tw-relative tw-min-h-screen">
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
                    <Route path='/catalog/:catalogname' element={<CategoryPage />} />
                    <Route element={<VerifyEmailPage />} path="/verify-email" />

                    <Route element={<ProtectedRoute />}>
                        <Route element={<DashBoardPage />}  >
                            <Route path="/dashboard/my-profile" element={<MyProfile />} />
                            <Route path="/dashboard/settings" element={<Settings />} />
                            {/* THIS ROUTES make sure to protect them later to instructor only */}
                            <>
                                <Route path="/dashboard/enrolled-courses" element={<h1 className="tw-text-white">Enrolled Courses</h1>} />
                                <Route path="/dashboard/purchase-history" element={<h1 className="tw-text-white">Purschase History</h1>} />
                                <Route path="/dashboard/my-courses" element={<MyCourses />} />
                                <Route path="/dashboard/add-course" element={<CourseAddLayout />} />
                                <Route path="/dashboard/edit-course/:courseId" element={<EditCourseLayout />} />
                            </>
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
