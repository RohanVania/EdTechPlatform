import { LuPlusCircle } from "react-icons/lu";

function MyCourses() {
    return (
        <>
            <div className='tw-pt-[40px] tw-flex tw-bg-red-40 tw-flex-wrap  tw-justify-between tw-items-center tw-gap-y-4 '>
                <h1 className='tw-text-3xl  tw-text-richblack-5 tw-font-medium  videobanner:tw-text-xl'>My Courses</h1>
                <button className=' tw-flex tw-gap-x-2 tw-px-4 videobanner:tw-px-4 tw-py-3  videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px]' >
                    Add Course
                    <LuPlusCircle className='tw-text-[21px] videobanner:tw-text-[16px]  tw-font-semibold' />
                </button>
            </div>

            <div className=" tw-py-5 tw-mt-8 ">

                <table className=" tw-w-full">
                    <thead className="">
                        <tr className=" lg:tw-flex-row tw-flex-col tw-flex-wrap tw-text-left tw-gap-x-3 tw-py-[1.7rem] tw-bg-white tw-px-2 tw-hidden lg:tw-flex ">
                            <td className="tw-flex-1 tw-bg-red-200 tw-py-3 tw-px-3">Course</td>
                            <td className="tw-flex-[0.3 tw-bg-pink-400 tw-py-3 tw-px-3">Duration</td>
                            <td className="tw-flex-[0.3 tw-bg-yellow-400 tw-py-3 tw-px-3">Price</td>
                            <td className="tw-flex-[0.3 tw-bg-purple-400 tw-py-3 tw-px-3">Action</td>
                        </tr>
                    </thead>
                    <tbody className="">
                        <tr className="tw-flex lg:tw-flex-row tw-flex-col tw-flex-wrap tw-text-left tw-gap-x-3 tw-pb-4   tw-bg-white tw-px-2 ">
                            <td className="tw-flex-1 tw-bg-red-200 tw-py-3 tw-px-3">Course</td>
                            <td className="tw-flex-[0.3 tw-bg-pink-400 tw-py-3 tw-px-3">Duration</td>
                            <td className="tw-flex-[0.3 tw-bg-yellow-400 tw-py-3 tw-px-3">Price</td>
                            <td className="tw-flex-[0.3 tw-bg-purple-400 tw-py-3 tw-px-3">Action</td>
                        </tr>
                        <tr className="tw-flex lg:tw-flex-row tw-flex-col tw-flex-wrap tw-text-left tw-gap-x-3  tw-bg-white tw-px-2 ">
                            <td className="tw-flex-1 tw-bg-red-200 tw-py-3 tw-px-3">Course</td>
                            <td className="tw-flex-[0.3 tw-bg-pink-400 tw-py-3 tw-px-3">Duration</td>
                            <td className="tw-flex-[0.3 tw-bg-yellow-400 tw-py-3 tw-px-3">Price</td>
                            <td className="tw-flex-[0.3 tw-bg-purple-400 tw-py-3 tw-px-3">Action</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </>
    )
}

export default MyCourses