import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import {  useQueryClient } from "react-query";
import { setDeleteConfirmationModal } from "../../slices/addcourseSlice";
import { deleteSubSectionApiCall } from "../../services/operations/subSectionFunction";
import { deleteSection } from "../../services/operations/section";
import { deleteACourse } from "../../services/operations/courseFunction";

function DeleteConfirmationModal({ element }) {
    const dispatch = useDispatch();
    const query = useQueryClient();
    const globalProfileState = useSelector((state) => state.profile);
    const globalCourseState = useSelector((state) => state.addcourse);

    function exitDeleteModal() {
        dispatch(setDeleteConfirmationModal(null))
    }

    async function deletsubSectionApi(element) {
        const formObject = {
            sectionId: globalCourseState.deleteConfirmationModal.sectionId,
            subSectionId: element?._id
        }

        const result = await deleteSubSectionApiCall(formObject)
        console.log(result);

        dispatch(setDeleteConfirmationModal(null))

    }

    async function deleteSectionApi(element) {
        const formObject = {
            courseId: globalCourseState.course._id,
            sectionId: element._id,
            SubsectionIdArray: element.subSection.map((el) => el._id),
        }

        const result = await deleteSection(formObject, dispatch)
        console.log(result);
        dispatch(setDeleteConfirmationModal(null))
    }

    async function deleteCourseApi(element){
        const result = await deleteACourse(element._id, globalProfileState?.userData?._id);
        console.log(result)
        // if (result.status !== "Success" && result.data !== null) {
        query.invalidateQueries({ queryKey: 'mycourses' });
        // }
        dispatch(setDeleteConfirmationModal(null))
        // console.log(result);
    }


    const title = globalCourseState.deleteConfirmationModal.lecture ? 'lecture' : globalCourseState.deleteConfirmationModal.course?'course':'section';

    return (
        <>
            <div className="tw-bg-[rgba(0,8,20,0.7)]   tw-fixed tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-[0px] tw-flex tw-justify-center tw-items-center ">

                <div className="tw-max-w-[660px] 3xs:tw-w-[660px] tw-bg-richblack-800   tw-mx-[10px] tw-overflow-hidden  tw-text-white tw-flex tw-flex-col tw-p- tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-3">
                    <div className="tw-pt-3 tw-px-5   tw-flex tw-justify-end tw-items-center tw-font-semibold tw-text-[18px]   ">
                        <div className=" tw-p-1 tw-text-white tw-cursor-pointer  " onClick={() => { exitDeleteModal() }}  >
                            <ImCross />
                        </div>
                    </div>

                    <div>

                        <div className="tw-flex tw-flex-col tw-gap-y-2 tw-mt-2  tw-pb-4 tw-px-2 md:tw-px-4 ">

                            <div className='tw-flex tw-flex-col tw-gap-y-6'>
                                {title === 'lecture' &&
                                    <h1 className="tw-text-wrap tw-text-[26px] 2xs:tw-text-[29px] tw-text-red-500">
                                        Are you sure you want to delete the lecture
                                    </h1>
                                }
                                {title === 'section' &&
                                    <h1 className="tw-text-wrap tw-text-[22px] 2xs:tw-text-[23px] tw-text-red-500">
                                        Are you sure you want to delete the Section
                                        , <span className="tw-text-blue-200">
                                            all the lecture will be deleted
                                        </span>
                                    </h1>
                                }
                                {title === 'course' &&
                                    <h1 className="tw-text-wrap tw-text-[22px] 2xs:tw-text-[23px] tw-text-red-500">
                                        Are you sure you want to delete the course
                                        , <span className="tw-text-blue-200">
                                            all the sections and lecture will be deleted
                                        </span>
                                    </h1>
                                }

                                <div className='tw-flex   tw-justify-end tw-gap-x-4'>
                                    <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-gray-700 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-white ' onClick={() => exitDeleteModal()}  >
                                        Cancel
                                    </button>
                                    {
                                        title !== 'course' ?
                                            <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-red-500 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-white'
                                                onClick={() => {
                                                    if (title === 'lecture') {
                                                        deletsubSectionApi(element)
                                                    } else {
                                                        deleteSectionApi(element)
                                                    }
                                                }

                                                }
                                            >
                                                Delete
                                            </button>
                                            :
                                            <button className='tw-ml-aut  tw-flex tw-items-center tw-bg-red-500 tw-cursor-pointer tw-gap-x-2 tw-rounded-md tw-py-2 tw-px-5 tw-font-semibold tw-text-white'
                                                onClick={() => {
                                                    deleteCourseApi(element)
                                                }}
                                            >
                                                Delete
                                            </button>

                                    }
                                </div>

                            </div>
                        </div>
                    </div>

                </div >

            </div>
        </>
    )
}

export default DeleteConfirmationModal;




