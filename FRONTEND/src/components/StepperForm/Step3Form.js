import { FaChevronLeft } from "react-icons/fa6";


function Step3Form({ editLayout }) {
    return (
        <div className="">

            <div className="tw-py-4 tw-px-2 tw-space-y-6">
                <h1 className="tw-text-richblack-5 tw-text-[24px] tw-font-medium">Publish Settings</h1>
                <div className=" tw-text-richblack-400 tw-text-[19px] tw-flex tw-items-center tw-gap-x-3 tw-ml-1">
                    <input
                        type="checkbox"
                        className="checkbox-input"
                    //   onChange={handleCheckboxChange}

                    />Make this Course Public
                </div>
            </div>

            <div className="tw-bg-red-4 tw-mt-[30px] tw-flex tw-flex-wrap tw-gap-y-6 tw-justify-between ">
                <div className="">
                    <button className='tw-cursor-wait tw-px-[24px] tw-font-semibold tw-py-[12px] tw-rounded-[8px] tw-text-center tw-text-richblack-5 tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-richblack-700 tw-opacity-[0.3 '>
                        <FaChevronLeft className='tw-text-[13px]' />
                        Back
                    </button>
                </div>
                <div className="  tw-flex tw-gap-x-3">

                    <button className='tw-cursor-wait tw-px-[24px] tw-font-semibold tw-py-[12px] tw-rounded-[8px] tw-text-center tw-text-richblack-5 tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-richblack-700 tw-opacity-[0.3 '>
                        Save as a Draft
                    </button>
                    <button className='tw-cursor-wait tw-font-semibold tw-px-[24px] tw-py-[12px] tw-rounded-[8px] tw-text-center  tw-flex tw-justify-center tw-items-center tw-gap-x-2 tw-bg-yellow-50 tw-text-richblack-900 tw-opacity-[0.3'>
                        Save and Publish
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Step3Form