
import React, { useRef,useState } from 'react'
import { MdOutlineFileUpload } from "react-icons/md";
import { isFunctionLike } from 'typescript';

function ChangeImage() {
    const [imgPreview,setImgPreview]=useState(null);
    
    const fileRef=useRef(null);

    function handleclick(){
        fileRef.current.click();
    }
    
    function handleFileChange(e){
        let file=e.target.files[0]
        setImgPreview(URL.createObjectURL(file));
    }


    return (
        <div className=' tw-w-full sm:tw-px-[48px] tw-flex-wrap sm:tw-py-[32px] tw-flex tw-gap-x-5 tw-gap-y-4  tw-p-3 tw-py-[20px] tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800  tw-text-richblack-5'>
            <div className='tw-flex tw-justify-center tw-items-center'>
                <img src={imgPreview || `https://gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50`} className=' tw-object-cover   tw-w-[67px] tw-h-[67px] xs:tw-w-[75px] xs:tw-h-[80px]  tw-rounded-full' alt='profile-picture' />
            </div>
            <div className='tw-flex tw-flex-col tw-gap-y-3 tw-justify-center '>
                <h1 className='tw-'>Change Picture</h1>
                <div className='tw-flex tw-gap-x-2'>
                    <input type='file' ref={fileRef} className='tw-hidden' onChange={handleFileChange}/>
                    <button className='tw-bg-richblack-700 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-5' onClick={handleclick}>
                        Select
                    </button>
                    <button className='tw-bg-yellow-50 tw-font-semibold tw-rounded-md  tw-flex tw-items-center tw-px-4 xs:tw-px-6 tw-h-[40px] xs:tw-h-[40px]   dashboard-imgsetter:tw-h-[44px] tw-gap-x-2 tw-text-[13px] 2xs:tw-text-[13px]  sm:tw-text-[17px]  tw-text-richblack-900 '>
                        <p>Upload</p>
                        <MdOutlineFileUpload />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default ChangeImage