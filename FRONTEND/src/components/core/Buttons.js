import React from 'react'

function Buttons({extrasmall,text,active,className}) {

        const extrasmallstyle=extrasmall?'tw-text-[8px]':'tw-text-[10px]'

        const activestyle1=active?"tw-bg-yellow-50 tw-border-0 tw-shadow-0 ":'tw-bg-[#161d29] tw-text-white ';

    return (
        <>
            <div className={`tw-cursor-pointer tw-px-[7px] tw-py-[12px] tw-rounded-full btnalign:tw-rounded-md  tw-font-bold tw-shadow-m tw-shadow-[0_1px_1px_0px_rgba(255,255,255,0.3)] ${activestyle1} ${extrasmallstyle} ${className} `}>
                {text}
            </div>
            
        </>
    )
}

export default Buttons