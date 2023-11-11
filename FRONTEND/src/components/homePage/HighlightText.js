

import React from 'react'

function HighlightText({text,highlight,text2}) {
    return (
        <p className='tw-text-white tw-font-[600] tw-text-[14px] sm:tw-text-[29px]  3xs:tw-text-[17px] btn:tw-text-[20px] btnalign:tw-text-[26px] '>
            {text}
            <span className='tw-mx-1  tw-text-[17px] 3xs:tw-text-[23px] btn:tw-text-[29px] btnalign:tw-text-[36px] btnalign:tw-ml-2 sm:tw-text-[29px] tw-bg-gradient-to-br tw-from-blue-500 tw-via-cyan-400 tw-to-green-200 tw-text-transparent tw-bg-clip-text'>
                {highlight}
            </span>
            {text2}
        </p>
    )
}

export default HighlightText