import { LuPlusCircle } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useQuery, useQueryClient } from "react-query";
import { fetchMyCourses, deleteACourse } from "../../services/operations/courseFunction";
import ModalLoader from "../core/ModalLoader";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCourse, setEditCourse } from "../../slices/addcourseSlice";

function MyCourses() {
    const query = useQueryClient();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const globalProfileState=useSelector((state)=>state.profile);

    const { data, isLoading, isFetching } = useQuery({
        queryKey: 'mycourses',
        queryFn: fetchMyCourses,
        refetchOnWindowFocus: false,
        staleTime: Infinity,
    })

    // console.log("Courses Data", data)
    function changeEditCourseAndGoToThatCourse(course){
        dispatch(setEditCourse(true));
        dispatch(setCourse(course));
        navigate(`/dashboard/edit-course/${course._id}`)
    }


    async function deleteCourse(el) {
        console.log("Delete Course =>", el)

        const result = await deleteACourse(el._id,globalProfileState?.userData?._id);
        console.log(result)
        // if (result.status !== "Success" && result.data !== null) {
            query.invalidateQueries({ queryKey: 'mycourses' });
        // }
        // console.log(result);
    }


    if (isLoading) {
        return <div className="tw-bg-richblack-900 tw-min-h-[100vh] tw-flex tw-justify-center tw-items-center tw-text-white tw-relative">
            <ModalLoader />
        </div>
    }
    console.log(data.data)
    return (
        <>
            <div>

                <div className='tw-pt-[40px] tw-flex tw-bg-red-40 tw-flex-wrap  tw-justify-between tw-items-center tw-gap-y-4 '>
                    <h1 className='tw-text-3xl  tw-text-richblack-5 tw-font-medium  videobanner:tw-text-xl'>My Courses</h1>
                    <button className=' tw-flex tw-gap-x-2 tw-px-4 videobanner:tw-px-4 tw-py-3  videobanner:tw-text-[14px] tw-font-semibold tw-text-yellow-50 hover:tw-text-black hover:tw-bg-yellow-50 tw-duration-100  tw-items-center tw-rounded-lg tw-border-yellow-50 tw-border-[1px]' onClick={()=>navigate('/dashboard/add-course')} >
                        Add Course
                        <LuPlusCircle className='tw-text-[21px] videobanner:tw-text-[16px]  tw-font-semibold' />
                    </button>
                </div>

                <div className=" tw-py-5 tw-mt-8 ">
                    {
                        data?.data?.courses?.length === 0 ?
                            <p className="tw-bg-red-40 btnalign:tw-text-2xl tw-text-blue-100">
                                You Don't have any courses.
                            </p>
                            :
                            <table className=" tw-w-full tw-py-3"  >
                                <thead className="">
                                    <tr className=" lg:tw-flex-row tw-flex-col tw-flex-wrap tw-text-left tw-gap-x-3 tw-py-4  tw-px-2 tw-hidden xl:tw-flex ">
                                        <td className="tw-flex-1  tw-py-3 tw-px-3  tw-font-[600] tw-text-[20px]">Course</td>
                                        <td className="tw-flex-[0.1]  tw-py-3 tw-px-3 tw-font-[600] tw-text-[20px]">Duration</td>
                                        <td className="tw-flex-[0.1]  tw-py-3 tw-px-3 tw-font-[600] tw-text-[20px]">Price</td>
                                        <td className="tw-flex-[0.1]  tw-py-3 tw-px-3 tw-font-[600] tw-text-[20px]">Action</td>
                                    </tr>
                                </thead>

                                <tbody className="tw-flex tw-flex-col tw-gap-y-[3rem] tw-mt-5 sm:tw-gap-y-[2.7rem] ">
                                    {
                                        data?.data?.courses?.map((el, indx) => {
                                            return <tr key={indx} className="tw-flex xl:tw-flex-row tw-flex-col tw-flex-wrap tw-text-left tw-gap-x-2  tw-px-0 md:tw-px-2 ">

                                                <td className="tw-flex-1  tw-gap-y-3  tw-flex codeblock:tw-flex-row xl:tw-flex-row tw-flex-col tw-gap-x-3 ">
                                                    <div className="xl:tw-max-w-[330px] lg:tw-max-w-[490px]  xl:tw-tw-max-w-[300px]  tw-max-h-[500px]   tw-rounded-md tw-overflow-hidden   ">
                                                        <img className="tw-w-full tw-h-full tw-object-cover tw-rounded-md tw-cursor-pointer" src={el?.thumbnail} alt={`course-${indx}`} />
                                                    </div>
                                                    <div className=" tw-flex tw-flex-col tw-gap-y-5 tw-max-w- tw-self-center tw-mr-auto tw-w-full codeblock:tw-w-auto codeblock:tw-max-w-[340px]">
                                                        <h1 className="tw-text-xl tw-font-semibold tw-text-richblack-5 tw-mt-[7px] tw-pl-1">{el?.courseName}</h1>
                                                        <p className=" videobanner:tw-text-sm tw-text-md tw-text-richblack-300 tw-pl-1 tw-text-wrap tw-break-all">
                                                            {el?.courseDescription}
                                                        </p>
                                                        <p className="tw-text-white tw-text-[14px] tw-py-1 tw-font-[600] tw-pl-1">
                                                            Created : April 27, 2023 | 05:15 PM
                                                        </p>
                                                        <p className=" tw-flex tw-flex-row tw-w-fit tw-items-center tw-rounded-full tw-bg-richblack-700 tw-px-5 tw-py-2  tw-gap-x-2 tw-text-[12px] tw-font-medium ">
                                                            <FaRegClock />
                                                            <p>{el?.status}</p>
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="tw-flex-[0.1] tw-bg-pink-40 xl:tw-py-3 tw-px-1 xl:tw-px-3 tw-text-wrap tw-text-[20px] xl:tw-text-[17px] tw-flex tw-items-center xl:tw-items-start xl:tw-mt-0 tw-mt-8">
                                                    <p className="tw-flex-1 tw-bg-orange-40  tw-font-[600] tw-text-richblack-300 xl:tw-hidden">
                                                        Duration
                                                    </p>
                                                    <p className="tw-flex-1 tw-text-richblack-300 ">
                                                        2h 30m
                                                    </p>
                                                </td>
                                                <td className="tw-flex-[0.1] tw-bg-pink-40 xl:tw-py-3 tw-px-1 xl:tw-px-3 tw-text-wrap tw-text-[20px] xl:tw-text-[17px] tw-flex tw-items-center xl:tw-items-start xl:tw-mt-0 tw-mt-1">
                                                    <p className="tw-flex-1 tw-bg-orange-40  tw-font-[600] tw-text-richblack-300 xl:tw-hidden">
                                                        Price
                                                    </p>
                                                    <p className="tw-flex-1 tw-text-richblack-300 ">
                                                        $ {el?.price}
                                                    </p>
                                                </td>
                                                <td className="tw-flex-[0.1]  xl:tw-py-3 tw-px-1 xl:tw-px-3 tw-text-wrap tw-text-[20px] xl:tw-text-[15px] tw-flex tw-items-center xl:tw-items-start xl:tw-mt-0 tw-mt-1">
                                                    <p className="tw-flex-1   tw-font-[600] tw-text-richblack-300 xl:tw-hidden">
                                                        Action
                                                    </p>
                                                    <p className="tw-flex-1 tw-text-richblack-300 tw-text-[20px]  tw-flex xl:tw-gap-x-0 tw-gap-x-3 ">
                                                        <FiEdit2 className=" tw-text-[30px] xl:tw-text-[25px]  tw-p-[2px] xl:tw-flex-1 tw-cursor-pointer hover:tw-scale-[1.2] tw-duration-200" onClick={()=> changeEditCourseAndGoToThatCourse(el)}/>
                                                        <MdDelete className=" tw-text-[30px] xl:tw-text-[25px] tw-p-[2px] xl:tw-flex-1   tw-cursor-pointer hover:tw-scale-[1.2] tw-duration-200" onClick={() => { deleteCourse(el) }} />
                                                    </p>
                                                </td>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>

                    }



                </div>

            </div>
        </>

    )
}

export default MyCourses