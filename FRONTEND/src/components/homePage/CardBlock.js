import React from 'react'
import { HiUsers } from "react-icons/hi2";


function CardBlock({heading,para,level,content,active}) {
    
    const activecard=active?"tw-bg-white shadow":"tw-bg-richblack-800 hover:2xs:tw-scale-[1.075] tw-duration-700";
    const activeheading=active?"tw-text-black":"tw-text-richblue-5";
    const activesymbol=active?"tw-text-[#0F7A9D] tw-border-t-2 tw-border-dashed tw-border-[#0F7A9D]":"tw-text-richblack-300 tw-border-t-2 tw-border-dashed tw-border-richblack-300";
    const svgcolor=active?"#0F7A9D":"#6E7275"

    return (
        <div className={`box ${activecard} tw-min-h-[280px] tw-max-w-[390px] tw-flex tw-flex-col tw-justify-between sm:tw-p-3 tw-cursor-pointer `}>
            <div className='tw-pt-[24px] tw-pl-[14px] tw-pb-[20px] sm:tw-pb-[40px] tw-pr-[20px] tw-flex tw-flex-col  tw-gap-5  tw-text-left tw-flex-1 tw-text-richblack-300  '>
                <h1 className={`tw-font-inter tw-font-bold btnalign:tw-text-[17.9px] xs:tw-text-[21px] ${activeheading} `}>{heading}</h1>
            <p className='tw-text-[14px] btn:tw-text-[14.2px] btnalign:tw-text-[16.5px] xs:tw-text-[19px] '>
                    {para}
                </p>
            </div>
            <div className={`tw-mx-1 btnalign:tw-mx-2 tw-py-5 tw-flex tw-flex-col btnalign:tw-flex-row tw-gap-2 tw-items-start tw-justify-between ${activesymbol} `}>
                <div className='tw-flex tw-items-center tw-gap-4 sm::tw-gap-3'>
                    <HiUsers className='tw-text-[24px] sm:tw-text-[24px]' />
                    <span className='tw-text-[18px] '>
                        {level}
                    </span>
                </div>
                <div className='tw-flex tw-items-center tw-gap-3'>
                    <svg className='tw-text-[18px] sm:tw-text-[24px]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 19 18" fill="none">
                        <g clipPath="url(#clip0_11167_18368)">
                            <path d="M17.168 13.6382V13.5002C17.1668 12.506 16.7713 11.5528 16.0683 10.8498C15.3653 10.1468 14.4122 9.75136 13.418 9.75017H10.418V8.93267C11.5305 8.74461 12.5318 8.14547 13.2235 7.25396C13.9151 6.36246 14.2466 5.24367 14.1522 4.11929C14.0579 2.99491 13.5445 1.94701 12.714 1.18325C11.8835 0.419487 10.7963 -0.00439453 9.66797 -0.00439453C8.53964 -0.00439453 7.45249 0.419487 6.62195 1.18325C5.79141 1.94701 5.27809 2.99491 5.18374 4.11929C5.08938 5.24367 5.42086 6.36246 6.11249 7.25396C6.80412 8.14547 7.80543 8.74461 8.91797 8.93267V9.75017H5.91797C4.92378 9.75136 3.97064 10.1468 3.26764 10.8498C2.56464 11.5528 2.16916 12.506 2.16797 13.5002V13.6382C1.66756 13.8151 1.24581 14.1632 0.97725 14.621C0.708692 15.0788 0.610623 15.6168 0.700377 16.14C0.79013 16.6631 1.06193 17.1376 1.46773 17.4797C1.87353 17.8219 2.38721 18.0095 2.91797 18.0095C3.44874 18.0095 3.96242 17.8219 4.36822 17.4797C4.77402 17.1376 5.04582 16.6631 5.13557 16.14C5.22532 15.6168 5.12726 15.0788 4.8587 14.621C4.59014 14.1632 4.16838 13.8151 3.66797 13.6382V13.5002C3.66797 12.9034 3.90503 12.3311 4.32698 11.9092C4.74894 11.4872 5.32124 11.2502 5.91797 11.2502H8.91797V13.6382C8.41756 13.8151 7.99581 14.1632 7.72725 14.621C7.45869 15.0788 7.36062 15.6168 7.45038 16.14C7.54013 16.6631 7.81193 17.1376 8.21773 17.4797C8.62353 17.8219 9.13721 18.0095 9.66797 18.0095C10.1987 18.0095 10.7124 17.8219 11.1182 17.4797C11.524 17.1376 11.7958 16.6631 11.8856 16.14C11.9753 15.6168 11.8773 15.0788 11.6087 14.621C11.3401 14.1632 10.9184 13.8151 10.418 13.6382V11.2502H13.418C14.0147 11.2502 14.587 11.4872 15.009 11.9092C15.4309 12.3311 15.668 12.9034 15.668 13.5002V13.6382C15.1676 13.8151 14.7458 14.1632 14.4773 14.621C14.2087 15.0788 14.1106 15.6168 14.2004 16.14C14.2901 16.6631 14.5619 17.1376 14.9677 17.4797C15.3735 17.8219 15.8872 18.0095 16.418 18.0095C16.9487 18.0095 17.4624 17.8219 17.8682 17.4797C18.274 17.1376 18.5458 16.6631 18.6356 16.14C18.7253 15.6168 18.6273 15.0788 18.3587 14.621C18.0901 14.1632 17.6684 13.8151 17.168 13.6382Z" fill={`${svgcolor}`} />
                        </g>
                        <defs>
                            <clipPath id="clip0_11167_18368">
                                <rect width="18" height="18" fill="white" transform="translate(0.667969)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <span className='tw-text-[18px]'>
                        {content}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CardBlock