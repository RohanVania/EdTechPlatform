import React from 'react'

function Buttons({btnobject,extrasmall}) {

        const extrasmallstyle=extrasmall?'tw-text-[9px]':'tw-text-[10px]'

        const activestyle1=btnobject.texts.btn1.active?"tw-bg-yellow-50":'tw-bg-[#161d29] tw-text-white';
        const activestyle2=btnobject.texts.btn2.active?"tw-bg-yellow-50":'tw-bg-[#161d29] tw-text-white';

    return (
        <>
            <div className={`${activestyle1} ${extrasmallstyle} tw-px-[7px] tw-py-[12px] tw-rounded-full btnalign:tw-rounded-md btn:tw-px-[18px] 2xs:tw-px-[22px] 2xs:tw-text-[14px] tw-font-semibold tw-shadow-md`}>
                {btnobject.texts.btn1.text}
            </div>
            <div className={ `${activestyle2} ${extrasmallstyle} tw-px-[7px] tw-py-[12px] btnalign:tw-rounded-md tw-rounded-full btn:tw-px-[18px] 2xs:tw-px-[22px] 2xs:tw-text-[14px] tw-font-semibold tw-shadow-[0_1px_1px_0px_rgba(255,255,255,0.3)] `}>
            {btnobject.texts.btn2.text}
            </div>
        </>
    )
}

export default Buttons