import React from 'react'
import * as Icons from 'react-icons/vsc'

function SideBarLink({linkData}) {
  const Icon = Icons[linkData.icon];
  return (
    <li className='tw-flex tw-gap-x-[12px] tw-items-center tw-cursor-pointer hover:tw-bg-[#3d2a01] hover:tw-text-white  tw-px-[21px] tw-py-[12px]'>
        <div className=''>
          <Icon className="tw-text-xl sm:tw-text-2xl md:tw-text-lg"/>
        </div>
        <p className=' tw-hidden md:tw-block tw-text-[14px] lg:tw-text-[16px] tw-font-inter tw-font-normal '>{linkData.name}</p>
    </li>
  )
}

export default SideBarLink