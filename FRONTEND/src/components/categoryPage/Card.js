

import React from 'react'

function Card() {
    return (
        <div className='tw-flex tw-flex-col tw-gap-y-4 tw-max-w-[330px] tw-min-h-[430px]   tw-pb-12 tw-bg-transparent'>
            <div className='tw-h-[201px] tw-bg-yellow-25 tw-rounded-lg tw-overflow-hidden tw-cursor-pointer'>
                <img src='https://res.cloudinary.com/dbr73rpz9/image/upload/v1688630790/images/computers-others-wallpaper-preview_suhi9b.jpg' className='tw-object-cover tw-w-full tw-h-full' />
            </div>
            <div className='tw-px-1 tw-text-center 2xs:tw-text-left tw-flex tw-flex-col  tw-gap-2 xs:tw-mt-0 tw-mt-3  '>
                <h1 className='tw-text-richblack-5 tw-text-[17px]'>
                    The Complete Python Bootcamp from Zero to Hero in Python
                </h1>
                <p className='tw-text-[18px] tw-text-richblack-5'>
                    By <span className='tw-text-yellow-50 tw-ml-2'>Dev Patel</span>
                </p>
                <p className='tw-text-[20px] tw-text-richblack-5'>
                    Rs. 1,200
                </p>
            </div>
        </div>
    )
}

export default Card
