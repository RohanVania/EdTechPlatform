
import React from 'react'
import HeadingDescriptionBlock from './HeadingDescriptionBlock';
import { TypeAnimation } from 'react-type-animation';



function CodeBlock({ text, heading1, highlight, heading2, btnobj, reverse, code, codecolor, color }) {
    const reversestyle = reverse ? 'codeblock:tw-flex-row-reverse' : '';

    return (
        <div className='tw-mt-[15px] md:tw-mt-[70px] tw-flex tw-flex-col tw-gap-9 tw-pb-[40px] xs:tw-pb-[50px] md:tw-pb-[65px] '>

            <div className={`tw-flex tw-flex-col tw-items-center codeblock:tw-flex-row  ${reversestyle}  md:tw-justify-center tw-gap-[10px] btnalign:tw-gap-[100px]`}>
                {/* Block 1 */}

                <HeadingDescriptionBlock 
                    text={text} heading1={heading1} heading2={heading2} btnobj={btnobj} color={color} highlight={highlight}
                />
                
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
                                omitDeletionAnimation={true}
                                cursor={true}
                            />
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
            )
}

            export default CodeBlock