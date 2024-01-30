import React from 'react'
import { ScaleLoader } from "react-spinners"


function ModalLoader({className}) {
  return (
    <div className={`tw-bg-richblack-900  tw-opacity-[0.9] tw-absolute tw-w-full tw-h-full tw-z-[50] tw-flex tw-justify-center tw-items-center tw-top-[0px] ${className}`}>
            <ScaleLoader color='yellow' height={'120px'} />
        </div>
  )
}

export default ModalLoader;