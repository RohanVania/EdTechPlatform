
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineFileUpload } from "react-icons/md";
import { changeImageOperation } from "../../services/operations/userFunctions"

function ChangeImage() {
    const [imgPreview, setImgPreview] = useState(null);
    const [imagefile, setImageFile] = useState(null);
    const [apiCalled, setApiCalled] = useState(false);
    const fileRef = useRef(null);
    const profileState = useSelector((state) => state.profile?.userData)
    const dispatch = useDispatch();


    function handleclick() {
        fileRef.current.click();
    }

    function handleFileChange(e) {
        let file = e.target.files[0]
        setImageFile(file);
        setImgPreview(URL.createObjectURL(file));
    }

    async function handleFileUpload() {
        console.log("uploading")
        //* No Image file just return
        if (!imagefile) {
            console.log("There is no image file to upload")
            return
        }

        const fileData={displayPicture:imagefile}
        const result = await changeImageOperation(fileData, dispatch, setApiCalled)

    }


    return (
        <div className=' tw-w-full sm:tw-px-[48px] tw-flex-wrap sm:tw-py-[32px] tw-flex tw-gap-x-5 tw-gap-y-4  tw-p-3 tw-py-[20px] tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800  tw-text-richblack-5'>
            <div className='tw-flex tw-justify-center tw-items-center '>
                <img src={imgPreview || `${profileState?.image}`} className=' tw-object-cover   tw-w-[67px] tw-h-[67px] xs:tw-w-[75px] xs:tw-h-[80px]  tw-rounded-full' alt='user' />
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3 tw-justify-center '>
                <h1 className='tw-text-[20px]'>Change Picture</h1>
                <div className='tw-flex tw-gap-x-2'>
                    <input type='file' ref={fileRef} className='tw-hidden' onChange={handleFileChange} />
                    <button className='tw-bg-richblack-700 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-5' onClick={handleclick}>
                        Select
                    </button>
                    {
                        imgPreview &&
                        (
                            !apiCalled ?
                                <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900 ' onClick={handleFileUpload}>
                                    <p>Upload</p>
                                    <MdOutlineFileUpload />
                                </button> :
                                <button className='tw-bg-yellow-100 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900 ' >
                                    <p>Uploading ...</p>
                                    <MdOutlineFileUpload />
                                </button>

                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default ChangeImage