import React from 'react'
import Logo1 from "../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../assets/TimeLineLogo/Logo4.svg"

import Image from "../../assets/Images/TimelineImage.png"




const timelinedata = [{
    logo: Logo1,
    heading: 'Leadership',
    description: 'Fully committed to the success company'
},
{
    logo: Logo2,
    heading: 'Responsibility',
    description: 'Students will always be our top priority'
},
{
    logo: Logo3,
    heading: 'Flexibility',
    description: 'The ability to switch is an important skills'
},
{
    logo: Logo4,
    heading: 'Solve the problem',
    description: 'The ability to switch is an important skills'
}
]

function TimeLineSection() {
    return (
        <div className='tw-mt-4 tw-py-6 tw-flex tw-flex-col md:tw-flex-row md:tw-justify-between tw-gap-y-[58px]'>
            <div className='tw-flex tw-flex-col tw-gap-[50px] tw-basis-[40%] tw-justify-center '>
                {
                    timelinedata.map((el, indx) => {
                        return (
                            <div key={`Timeline-${indx}`} className='tw-flex tw-gap-4 md:tw-justify-center 2xs:tw-justify-center'>
                                <div className='tw-w-[48px] tw-basis-[51px] btnalign:tw-basis-[75px]  tw-aspect-square tw-flex tw-justify-center tw-items-center '>
                                    <img className='tw-bg-white tw-shadow-xl tw-w-full tw-aspect-square tw-p-1 btnalign:tw-p-3 tw-flex tw-items-center tw-justify-center  tw-rounded-full' src={el.logo} />
                                </div>
                                <div className=' tw-flex tw-flex-col tw-gap-1 2xs:tw-gap-2 btn:tw-gap-4 tw-basis-[70%] '>
                                    <h1 className='tw-ring-richblack-800 tw-text-[13px] tw-font-bold btn:tw-text-[15px] btnalign:tw-text-[20px]'>
                                        {el.heading}
                                    </h1>
                                    <p className='tw-text-richblack-700 tw-text-[12px] btn:tw-text-[14px] btnalign:tw-text-[18px]'>
                                        {el.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='tw-basis-[50%] tw-relative '>
                <img className='tw-w-full tw-h-full tw-object-cover' src={Image} />

                <div className='xs:tw-absolute xs:tw-w-[38%] xs:tw-h-[60%] tw-bottom-0 tw-left-0  md:tw-h-auto md:tw-bottom-[-15%] md:tw-left-[7.4%] tw-px-[2px] tw-py-[24px] xs:tw-py-[32px] tw-bg-caribbeangreen-700 md:tw-w-[85%] tw-flex tw-justify-around tw-gap-4 tw-flex-wrap' >
                    <div className='tw-flex tw-justify-around  tw-gap-5'>
                        <div className='xs:tw-text-[36px] xs:tw-leading-[50px] tw-text-white tw-font-bold tw-text-[28px]'>
                                10
                        </div>
                        <div className='tw-flex tw-flex-col tw-text-caribbeangreen-300'>
                            <p className='tw-uppercase xs:tw-text-[17px] tw-text-[15px]'>Years</p>
                            <p className='tw-uppercase xs:tw-text-[17px] tw-text-[15px]'>Experience</p>
                        </div>
                    </div>

                    <div className='tw-flex tw-justify-around tw-gap-5 '>
                        <div className='xs:tw-text-[36px] xs:tw-leading-[50px] tw-text-white tw-font-bold tw-text-[28px]'>
                            25
                        </div>
                        <div className='tw-flex tw-flex-col tw-text-caribbeangreen-300'>
                            <p className='tw-uppercase xs:tw-text-[17px] tw-text-[15px]'>Years</p>
                            <p className='tw-uppercase xs:tw-text-[17px] tw-text-[15px]'>Experience</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default TimeLineSection