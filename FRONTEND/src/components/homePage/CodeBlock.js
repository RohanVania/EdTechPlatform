
import React from 'react'
import HighlightText from './HighlightText'
import Buttons from '../core/Buttons'
import { TypeAnimation } from 'react-type-animation';



function CodeBlock({ text, heading1, highlight, heading2, btnobj, reverse, code, codecolor }) {
    const reversestyle = reverse ? 'codeblock:tw-flex-row-reverse' : '';
    return (
        <div className={`tw-flex tw-flex-col tw-items-center codeblock:tw-flex-row  ${reversestyle}  tw-justify-evenly tw-gap-5 btnalign:tw-gap-9 `}>
            {/* Block 1 */}
            <div className='tw-w-full tw-bg-purple-40 tw-flex tw-flex-col   tw-gap-5 xs:tw-gap-10 tw-py-5 xs:tw-py-9 sm:tw-max-w-[600px]'>
                <div className='tw-flex tw-flex-col tw-gap-4'>
                    <HighlightText text={heading1} highlight={highlight} text2={heading2} />
                    <p className='tw-text-richblack-300 tw-text-[10px] 3xs:tw-text-[13px] 2xs:tw-text-[15px] xs:tw-text-[17px] sm:tw-text-[17px] md:tw-text-[21px] tw-pr-0'>
                        {text}
                    </p>
                </div>
                <div className='tw-flex tw-gap-2 xs:tw-gap-5 '>
                    <Buttons text={btnobj.btn1.text} extrasmall={btnobj.btn1.text} active={btnobj.btn1.active}  />
                    <Buttons text={btnobj.btn2.text} extrasmall={btnobj.btn2.text} active={btnobj.btn2.active} />
                </div>
            </div>
            {/* Block 2 */}
            <div className='tw-w-full tw-h-full  tw-py-5 tw-bg-purple-80  tw-flex tw-flex  sm:tw-max-w-[600px] codeblock:tw-h-[395px]  codeblock:tw-py-4'>

                <div className='tw-flex tw-items-center tw-justify-around tw-text-richblack-50 tw-whitespace-pre-line  '>
                    <div className='tw-flex tw-flex-col tw-items-center tw-justify-evenly tw-gap-[1.8px] sm:tw-gap-0  tw-text-[13px] 2xs:tw-text-[16px] xs:tw-text-[20px] tw-items-start  '>
                        <p>1.</p>
                        <p>2.</p>
                        <p>3.</p>
                        <p>4.</p>
                        <p>5.</p>
                        <p>6.</p>
                        <p>7.</p>
                        <p>8.</p>
                        <p>9.</p>
                        <p>10.</p>
                        <p>11.</p>
                    </div>
                    <div className={` ${codecolor} tw-w-full tw-h-full  tw-text-[12px] btn:tw-text-[12px] 2xs:tw-text-[15px] xs:tw-text-[20px] tw-flex-1  tw-h-[100%] tw-w-[100%] xs:tw-h-full codeblock:tw-h-[93.3%] `}>
                        <TypeAnimation
                            style={{ width: '100%', height: '100%' }}
                            sequence={[code, 1000, ""]}
                            repeat={Infinity}
                            omitDeletionAnimation={true }
                            cursor={true}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CodeBlock