

import React from 'react'
import SideBar from '../components/core/SideBar'
import { RxCross2 } from "react-icons/rx";
import { Outlet } from 'react-router-dom'
import { FiUploadCloud } from "react-icons/fi";

//* This route is protected 
function DashBoardPage() {

  return (
    <>
      <div className='tw-mt-[78px lg:tw-mt-[78px   tw-text-black  tw-mx-auto  tw-min-h-[92.1vh] lg:tw-min-h-[91.9vh]  tw-flex tw-bg-green-400'>

        {/* Modal */}
        {
        // true &&
          // <div className="tw-bg-[rgba(0,0,0,0.2)] tw-filter  tw-absolute tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-md tw-flex tw-justify-center tw-items-center ">
          //   <div className=" tw-bg-richblack-80 tw-max-w-[850px] tw-w-[850px]  tw-m-5  tw-text-white tw-overflow-hidden tw-flex tw-flex-col tw-p- tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-0 tw-bg-richblack-800">
          //     <div className='tw-bg-richblack-700 tw-flex tw-justify-between tw-items-center tw-py-6 tw-px-6'>
          //       <h1 className=" tw-font-semibold tw-text-richblack-5  tw-text-[20px] 2xs:tw-text-[22px]  sm:tw-text-2xl">Adding Lecture</h1>
          //       <RxCross2 className=" tw-font-semibold tw-text-richblack-5  tw-text-[20px] 2xs:tw-text-[22px]  sm:tw-text-3xl" />
          //     </div>

          //     <div className=''>
          //       <form className='tw-px-8 tw-py-8 tw-flex tw-flex-col tw-gap-y-6'>
          //         <div className='tw-fex tw-flex-col'>
          //           <label className='tw-text-sm tw-text-richblack-5'>Lecture<sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
          //           <div id='filebox' className='tw-mt-5 tw-bg-richblack-700 tw-flex tw-min-h-[50px] tw-cursor-pointer tw-items-center tw-justify-center tw-rounded-md tw-border-2 tw-border-dotted tw-border-richblack-500'
          //             // onClick={InvokeFileUpload}
          //             // onDragOver={handleOndragOver}
          //             // onDrop={handleOnDrop}

          //           >
          //             {
          //               true ?
          //                 <div className='tw-flex tw-flex-col tw-pb-3'>
          //                   <img src={true || `https://images.unsplash.com/photo-1603892853112-a957bfbd6941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVpZ2h0fGVufDB8fDB8fHww`} className='tw-p-3 tw-object-cover tw-w-full tw-h-full' />
          //                   <button type='button' className='tw-mt-3 tw-text-richblack-400 tw-cursor-pointer tw-underline  tw-py-1' >Cancel</button>
          //                 </div>
          //                 :
          //                 <div className='tw-flex tw-justify-center tw-flex-col tw-items-center  '>
          //                   <input type='file' className='tw-hidden' />
          //                   <div className='tw-w-14 tw-grid tw-place-items-center tw-rounded-full tw-bg-pure-greys-800 tw-aspect-square'>
          //                     <FiUploadCloud className='tw-text-2xl tw-text-yellow-50' />
          //                   </div>
          //                   <div className='tw-max-w-[200px] tw-text-center tw-text-sm tw-text-richblack-200 tw-mt-2'>
          //                     <h1>Drag and drop an image, or</h1>
          //                     <p>click to <span className='tw-font-semibold tw-text-yellow-50'>Browse</span> a file</p>
          //                   </div>
          //                   <ul className='tw-text-xs tw-mt-10 tw-flex tw-flex-col tw-gap-y-[7px]  xs:tw-flex-row  xs:tw-items-center xs:tw-gap-x-[25px] tw-list-inside tw-list-disc tw-text-[#999DAA]'>
          //                     <li >Aspect ratio 16:9</li>
          //                     <li>Recommended size 1024x576</li>
          //                   </ul>
          //                 </div>
          //             }
          //           </div>
          //           {
          //           // filemissing &&
          //             <p className='tw-text-sm tw-mt-3 tw-ml-1 tw-text-pink-500'>Thumbnail is required<sup className='tw-text-pink-400 tw-ml-1'>*</sup></p>
          //           }
          //         </div>

          //         <div className='tw-flex tw-flex-col'>
          //           <label className='tw-mb-2 tw-text-md tw-text-richblack-5'>Lecture Title <sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
          //           <input type='text' className=' tw-bg-richblack-700 tw-text-[#999DAA] formshadow ' placeholder='Enter Lecture Title' />
          //         </div>
          //         <div className='tw-flex tw-flex-col'>
          //           <label className='tw-mb-2 tw-text-md tw-text-richblack-5'>Lecture Description <sup className='tw-text-pink-200 tw-ml-1'>*</sup></label>
          //           <textarea placeholder='Enter Lecture Description' className='tw-w-full tw-min-h-[150px] formshadow tw-bg-richblack-700 tw-resize-none tw-text-[#999DAA]'
          //           />
          //         </div>
          //       </form>
          //     </div>

          //     {/* <p className="tw-text-richblack-200  tw-text-[14px] 2xs:tw-text-[15px]  sm:tw-text-[19px]">You will be logged out of your account</p> */}
          //     {/* <div className="tw-flex tw-mt-3 tw-gap-x-4 tw-bg-red-800 tw-px-6 tw-py-0">
          //       <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-py-2 xs:tw-py-2 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' >
          //         Logout
          //       </button>
          //       <button className='tw-bg-richblack-200 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[15px]  sm:tw-text-[17px]  tw-text-richblack-900' >
          //         Cancel
          //       </button>
          //     </div> */}
          //   </div>

          // </div>
        }

        {/* Layout */}
        <SideBar />
        <div className='  md:tw-px-10  tw-text-white  tw-w-11/12 tw-max-w-[1100px] py-10 tw-mx-auto tw-pb-[120px] '>
          <Outlet />
        </div>

      </div>
    </>
  )
}

export default DashBoardPage