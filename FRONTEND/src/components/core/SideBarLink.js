import React from 'react'
import * as Icons from 'react-icons/vsc'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

function SideBarLink({ linkData }) {
  const Icon = Icons[linkData.icon];
  const location=useLocation();
  const active=location.pathname===linkData.path?'tw-text-yellow-50 tw-border-b-[3px] md:tw-border-l-[3px] md:tw-border-b-0 tw-border-yellow-50':'hover:tw-bg-[#3d2a01] hover:tw-text-white'
  const navigate=useNavigate();
  return (
    <NavLink
      to={linkData.path}
    >
      <li className={`tw-flex tw-gap-x-[12px] tw-items-center tw-cursor-pointer   tw-px-[21px] tw-py-[12px] ${active}`}>
        <div className=''>
          <Icon className="tw-text-xl sm:tw-text-2xl md:tw-text-lg" />
        </div>
        <p className=' tw-hidden md:tw-block tw-text-[14px] lg:tw-text-[16px] tw-font-inter tw-font-normal '>{linkData.name}</p>
      </li>
    </NavLink>
  )
}

export default SideBarLink