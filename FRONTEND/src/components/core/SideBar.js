
import React from 'react'
import SideBarLink from './SideBarLink'
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

import { sidebarLinks } from "../../data/dashboard-links"
import { NavLink } from 'react-router-dom';

function SideBar() {
    return (
        <div className=' tw-full tw-fixed tw-left-0 tw-right-0 tw-bottom-0 tw  md:tw-block md:tw-w-[252px] md:tw-sticky md:tw-bottom-0 md:tw-top-[78px] tw-bg-richblack-800 md:tw-h-[100%] md:tw-min-h-[92.1vh] '>

            <ul className='tw-w-full tw-py-[0px] md:tw-py-[28px] tw-flex tw-flex-wrap md:tw-flex-col tw-justify-between  tw-text-richblack-200'>
                {

                    sidebarLinks.map((el) => {

                        if (el.id === 1 || el.type === 'Student')
                            return <SideBarLink key={el.id} linkData={el} />
                    })
                }

                <>
                    <NavLink
                    >
                        <li className='tw-flex md:tw-hidden tw-gap-x-[12px] tw-items-center tw-cursor-pointer hover:tw-bg-[#3d2a01] hover:tw-text-white  tw-px-[21px] tw-py-[12px]'>
                            <div className=''>
                                <IoSettingsOutline className='tw-text-xl sm:tw-text-2xl md:tw-text-lg ' />
                            </div>
                        </li>
                    </NavLink>
                    {/* <NavLink>
                        <li className='tw-flex tw-gap-x-[12px] md:tw-hidden tw-items-center tw-cursor-pointer hover:tw-bg-[#3d2a01] hover:tw-text-white  tw-px-[21px] tw-py-[12px]'>
                            <div className=''>
                                <FiLogOut className='tw-text-xl sm:tw-text-2xl' />
                            </div>
                        </li>
                    </NavLink> */}
                </>
            </ul>
            <div className=' tw-hidden md:tw-block tw-border-b-[1px] tw-border-b-richblack-500  tw-px-[21px] tw-w-[80%] tw-mx-auto'></div>
            <ul className='tw-w-full tw-py-[28px]  tw-flex md:tw-flex-col tw-text-richblack-200 tw-hidden md:tw-block '>
                <NavLink to="/dashboard/settings">
                    <li className='tw-flex tw-gap-x-[12px] tw-items-center tw-cursor-pointer hover:tw-bg-[#3d2a01] hover:tw-text-white  tw-px-[21px] tw-py-[12px]'>
                        <div className=''>
                            <IoSettingsOutline className='tw-text-lg' />
                        </div>
                        <p className='tw-text-[14px] lg:tw-text-[16px] tw-font-inter tw-font-normal '>Settings</p>
                    </li>
                </NavLink>
                <li className='tw-flex tw-gap-x-[12px] tw-items-center tw-cursor-pointer hover:tw-bg-[#3d2a01] hover:tw-text-white  tw-px-[21px] tw-py-[12px]'>
                    <div className=''>
                        <FiLogOut className='tw-text-lg' />
                    </div>
                    <p className='tw-text-[14px] lg:tw-text-[16px] tw-font-inter tw-font-normal '>Logout</p>
                </li>
            </ul>


        </div>
    )
}

export default SideBar