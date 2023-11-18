
import React from 'react'
import HighlightText from './HighlightText'
import Buttons from '../core/Buttons'

function Heading({ description, nobuttons, text, highlight, color, className, btnobj }) {
    const styles = className ? className : '';

    const textcolor = color ? color : 'white'
    return (
        <div className={` ${styles}`}>
            <div className='btnalign:tw-text-center'>
                <HighlightText color={textcolor} text={text} highlight={highlight} />
            </div>
            <div className='tw-mt-4 tw-flex tw-flex-col  tw-bg-red-30 sm:tw-max-w-[913px] sm:tw-mx-auto'>
                <p className={`tnalign:tw-text-center btnalign:tw-text-[18px]  tw-text-[10px] 3xs:tw-text-[12px] btn:tw-text-[14.5px] sm:tw-text-[17px] sm:tw-text-center tw-text-richblack-300 ${color}`}>
                    {description}
                </p>
                {!nobuttons &&
                    <div className='tw-flex tw-gap-3 3xs:tw-gap-2 2xs:tw-gap-5 tw-mt-5 btnalign:tw-mx-auto'>
                        <Buttons text={btnobj.btn1.text} active extrasmall />
                        {btnobj.btn2 && <Buttons text={btnobj.btn2.text} extrasmall />}
                    </div>
                }
            </div>
        </div>
    )
}

export default Heading