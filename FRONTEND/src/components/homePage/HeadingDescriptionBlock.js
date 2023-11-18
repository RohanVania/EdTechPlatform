
import React from 'react'
import HighlightText from './HighlightText'
import Buttons from '../core/Buttons'

function HeadingDescriptionBlock({text, heading1, heading2, btnobj, color, highlight}) {
    return (
        <div className='tw-w-full tw-bg-purple-40 tw-flex tw-flex-col   tw-gap-5 xs:tw-gap-10 tw-py-5 xs:tw-py-9 sm:tw-max-w-[600px]'>
            <div className='tw-flex tw-flex-col tw-gap-4'>
                <HighlightText color={color} text={heading1} highlight={highlight} text2={heading2} />
                <p className='tw-text-richblack-300 tw-text-[10px] 3xs:tw-text-[13px] 2xs:tw-text-[15px] xs:tw-text-[17px] sm:tw-text-[17px] md:tw-text-[21px] tw-pr-0'>
                    {text}
                </p>
            </div>
            <div className='tw-flex tw-gap-2 xs:tw-gap-5 '>
                <Buttons text={btnobj.btn1.text} extrasmall={btnobj.btn1.text} active={btnobj.btn1.active} />
                <Buttons text={btnobj.btn2.text} extrasmall={btnobj.btn2.text} active={btnobj.btn2.active} />
            </div>
        </div>
    )
}

export default HeadingDescriptionBlock