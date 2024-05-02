

import React from 'react'

function Card() {
    return (
        <div className='tw-flex tw-flex-col tw-gap-y-3 tw-w-[300px] tw-bg-green-500 tw-pb-3 '>
            <div className='tw-h-[201px] tw-bg-yellow-25 tw-rounded-lg tw-overflow-hidden'>
                <img src='https://res.cloudinary.com/dbr73rpz9/image/upload/v1688630790/images/computers-others-wallpaper-preview_suhi9b.jpg' className='tw-object-cover tw-w-full tw-h-full' />
            </div>
            <div className='tw-px-1 tw-flex tw-flex-col tw-gap-2'>
                <h1 className='tw-text-richblack-5 tw-text-[17px]'>
                    The Complete Python Bootcamp from Zero to Hero in Python
                </h1>
                <p className='tw-text-[18px]'>
                    By <span className='tw-text-yellow-50'>Dev Patel</span>
                </p>
                <p className='tw-text-[20px] tw-text-richblack-5'>
                    Rs. 1,200
                </p>
            </div>
        </div>
    )
}

export default Card
