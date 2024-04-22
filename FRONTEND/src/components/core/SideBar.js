
import React, { useState } from 'react'
import SideBarLink from './SideBarLink'
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { sidebarLinks } from "../../data/dashboard-links"
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {setLogout} from "../../slices/authSlice"
import { logoutOperation } from '../../services/operations/authFunctions';

function SideBar() {
    const dispatch=useDispatch();
    const globalStateProfile = useSelector((state) => state.profile)
    // const globalStateAuth = useSelector((state) => state.auth)

    const location = useLocation();
    const active = location.pathname === '/dashboard/settings' ? 'tw-text-yellow-50 tw-border-b-[3px] md:tw-border-l-[3px] md:tw-border-b-0 tw-border-yellow-50' : 'hover:tw-bg-[#3d2a01] hover:tw-text-white'

    function handleLogout(){
        console.log("Hello")
        //~ To show Logout Model
        dispatch(setLogout(true))
        // dispatch({type:'logout'})
        // dispatch(setLogout(true))
    }

    return (
        <>

            <div className=' tw-full tw-z-[998] tw-fixed tw-left-0 tw-right-0 tw-bottom-0    md:tw-w-[252px] md:tw-sticky md:tw-bottom- md:tw-bottom-[38px] tw-bg-richblack-800 md:tw-min-h-[100%]  '>


                <ul className='tw-w-full tw-py-[0px] md:tw-py-[28px] tw-flex tw-flex-wrap md:tw-flex-col tw-justify-between  tw-text-richblack-200'>
                    {

                        sidebarLinks.map((el) => {
                            // console.log(el);
                            if (el.id === 1 || el.type === globalStateProfile.userData?.accountType)
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

                    </>
                </ul>
                <div className=' tw-hidden md:tw-block tw-border-b-[1px] tw-border-b-richblack-500  tw-px-[21px] tw-w-[80%] tw-mx-auto'></div>
                <ul className='tw-w-full tw-py-[28px]  tw-flex md:tw-flex-col tw-text-richblack-200 md:tw-block '>
                    <NavLink to="/dashboard/settings">
                        <li className={`${active} tw-flex tw-gap-x-[12px] tw-items-center tw-cursor-pointer   tw-px-[21px] tw-py-[12px]`}>
                            <div className=''>
                                <IoSettingsOutline className='tw-text-lg' />
                            </div>
                            <p className='tw-text-[14px] lg:tw-text-[16px] tw-font-inter tw-font-normal '>Settings</p>
                        </li>
                    </NavLink>
                    <li className={` tw-flex tw-gap-x-[12px] tw-items-center tw-cursor-pointer   tw-px-[21px] tw-py-[12px] hover:tw-bg-[#3d2a01] hover:tw-text-white`} onClick={handleLogout}>
                        <div className=''>
                            <FiLogOut className='tw-text-lg' />
                        </div>
                        <p className='tw-text-[14px] lg:tw-text-[16px] tw-font-inter tw-font-normal  tw-p-1' >Logout</p>
                    </li>
                </ul>


            </div>
        </>
    )
}

export default SideBar