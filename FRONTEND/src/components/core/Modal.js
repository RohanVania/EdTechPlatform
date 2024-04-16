import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Modal({ question,text,btn1,btn2,handleLogout,handleLogoutCancel}) {
    // const dispatch = useDispatch();
    // const navigate =useNavigate();

    // async function handleLogout() {
    //     try {
    //         const response = await logoutOperation(dispatch);
    //         if (response?.data?.status === "Success") {
    //             navigate('/')
    //         }

    //     } catch (err) {
    //         console.log(err)
    //     }
    // }

    // function handleLogoutCancel() {
    //     dispatch(setLogout(false))
    // }

    return (
        <>
            <div className="tw-bg-[rgba(0,0,0,0.2)] tw-filter  tw-fixed tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center ">

                <div className=" tw-bg-richblack-800 tw-max-w-[900px]  tw-m-5  tw-text-white tw-flex tw-flex-col tw-p-6 tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-3">
                    <h1 className=" tw-font-semibold tw-text-richblack-5  tw-text-[20px] 2xs:tw-text-[22px]  sm:tw-text-3xl">{question}</h1>
                    <p className="tw-text-richblack-200  tw-text-[14px] 2xs:tw-text-[15px]  sm:tw-text-[19px]">{text}</p>
                    <div className="tw-flex tw-mt-3 tw-gap-x-4">
                        <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-py-2 xs:tw-py-2 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={handleLogout}>
                            {btn1}
                        </button>
                        <button className='tw-bg-richblack-200 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' onClick={handleLogoutCancel} >
                            {btn2}
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Modal;