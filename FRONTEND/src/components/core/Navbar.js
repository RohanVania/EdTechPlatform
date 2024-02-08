
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links';
import { TfiMenu } from "react-icons/tfi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { VscDashboard } from "react-icons/vsc";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { useSelector } from 'react-redux';

function Navbar({ categoryData }) {
    const { token } = useSelector((state) => state.auth);
    const {userData} = useSelector((state) => state.profile);

    // console.log(token)


    // console.log("Navbar log =>",token)
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const categories = categoryData;



    return (
        <>
            <div id='navbar' className='tw-bg-richblack-900  tw-min-h-[78px]  tw-flex tw-items-center tw-border-b-[0.7px] tw-border-richblack-700 tw-fixed tw-top-0 tw-w-full tw-z-[999] '>
                <nav className=' tw-w-[100%] xs:tw-w-11/12 tw-px-4 2xs:tw-px-5 xs:tw-px-4 md:tw-px-0  tw-flex navbarmd:tw-justify-between tw-justify-around tw-items-center tw-mx-auto tw-text-[16px] tw-font-[400] tw-text-richblack-25 '>
                    <div className='tw-bg-yellow-10 tw-w-[160px] tw-h-[32px] xs:tw-w-auto'>
                        <Link to="/">
                            <img src={logo} alt='homepagelogo' className='tw-w-full tw-h-full tw-object-cover' />
                        </Link>
                    </div>
                    <ul className='tw-flex tw-items-center  tw-gap-x-4 navbarmd:tw-hidden '>
                        {
                            NavbarLinks.map((el, indx) => {
                                const activeLink = el.path === location.pathname ? 'tw-text-[#FFD60A] ' : '';
                                return el.title !== 'Catalog' ?
                                    <li key={`Navbar-Link-${indx}`} className={`tw-px-3 tw-py-3 ${activeLink}`}>
                                        <Link to={el.path} className=''>
                                            {el.title}
                                        </Link>

                                    </li> : <li key={`Navbar-Link-${indx}`} className={`tw-px-3 tw-group  tw-bg-red-40 tw tw-py-7 tw-relative ${activeLink}`}>
                                        <div className='tw-flex tw-items-center tw-justify-between tw-gap-x-2 '>
                                            <Link to={el.path} className='tw-flex tw-justify-between'>
                                                {el.title}
                                            </Link>
                                            {
                                                categories.length !== 0 && <MdOutlineArrowDropDown className='tw-cursor-pointer' />
                                            }
                                        </div>
                                        {
                                            categories.length !== 0 && <div className='tw-min-w-fit  tw-flex-col tw-gap-y-1  tw-absolute tw-hidden tw-py-5 tw-px-4  tw-rounded-lg tw-bg-[#F1F2FF] tw-top-[65.1px] tw-left-[-13px] group-hover:tw-block  group-hover:tw-flex-col group-hover:tw-gap-y-1 '>
                                                {
                                                    categories.map((el, indx) => {
                                                        return <a className='tw-cursor-pointer' key={`SubNavbar-${indx}`}>
                                                            <h1 className='tw-whitespace-nowrap tw-px-4 tw-py-5 tw-bg-transparent  hover:tw-bg-richblack-50 tw-rounded-lg tw-text-black'>{el.name}</h1>
                                                        </a>
                                                    })
                                                }

                                                <div className='tw-bg-[#F1F2FF] tw-w-[35px] tw-h-[35px] tw-absolute tw-top-[-7px] tw-left-[82px] tw-rotate-45 tw-rounded-sm tw-z-[-1]'>
                                                </div>

                                            </div>
                                        }
                                    </li>
                            })
                        }


                    </ul>

                    {
                        // Does our application have a cookie that is not expired
                        !token ?

                            <div className='tw-flex tw-gap-x-4  navbarmd:tw-hidden'>
                                {
                                    location.pathname === '/login' &&
                                    <Link to='/signup'>
                                        <button className='tw-px-[14px] tw-py-[10px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Sign Up</button>
                                    </Link>
                                }
                                {
                                    location.pathname === '/signup' &&
                                    <Link to='/login'>
                                        <button className='tw-px-[14px] tw-py-[10px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Login</button>
                                    </Link>

                                }
                                {
                                    location.pathname !== '/signup' && location.pathname !== '/login' && <>
                                        <Link to="/login">
                                            <button className='tw-px-[21px] tw-py-[10px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Login</button>
                                        </Link>
                                        <Link to="/signup">
                                            <button className='tw-px-[14px] tw-py-[10px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Sign Up</button>
                                        </Link>
                                    </>

                                }

                            </div>
                            :

                            <div className='tw-flex tw-gap-x-5  navbarmd:tw-hidden  tw-relative'>
                                {

                                    <Link to='/dashboard/cart' onClick={()=>setProfileOpen(false)}>
                                        <button className='tw-bg-red-20 tw-h-full   '>
                                            <FaCartShopping className='tw-w-[25px] tw-h-[25px] tw-object-cover' />
                                        </button>
                                    </Link>
                                }
                                {
                                        <button className='  tw-h-full tw-flex tw-justify-center tw-gap-x-0 tw-items-center tw-relative ' onClick={() => setProfileOpen((prev) => !prev)}>
                                            <img className='tw-rounded-full tw-object-cover  tw-w-[35px] tw-aspect-square' src={`${userData?.image}`} />
                                            <IoMdArrowDropdown />
                                        </button>
                                }
                                {
                                    profileOpen && <ul className='tw-bg-richblack-800 tw-absolute  tw-top-[44px] tw-right-[0px] tw-flex tw-flex-col tw-rounded-md tw-overflow-hidden tw-border-[1px] tw-border-richblack-700 '>
                                        <Link to='/dashboard/my-profile' onClick={()=>setProfileOpen(false)}>
                                            <li className='tw-flex tw-items-center tw-gap-x-1 tw-cursor-pointer  tw-py-[10px] tw-px-[12px] tw-text-sm tw-text-richblack-100 hover:tw-bg-richblack-700 hover:tw-text-richblack-25 '>
                                                <VscDashboard />
                                                <p>Dashboard</p>
                                            </li>
                                        </Link>

                                        <li className='tw-flex tw-items-center tw-gap-x-1 tw-cursor-pointer    tw-py-[10px] tw-px-[12px] tw-text-sm tw-text-richblack-100 hover:tw-bg-richblack-700 hover:tw-text-richblack-25 '>
                                            <MdLogout />
                                            <p>Logout</p>
                                        </li>
                                    </ul>
                                }


                            </div>
                    }


                    <div className='tw-w-[45px] tw-aspect-square tw-bg-orange-4 tw-cursor-pointer navbarmd:tw-block tw-hidden' onClick={() => setOpen((prev) => !prev)}>
                        <TfiMenu className='tw-w-full tw-h-full tw-object-cover tw-p-2' />
                    </div>



                </nav>
            </div>
            {
                open &&
                <div className='tw-w-[50%] tw-h-[100%] tw-absolute tw-right-0 tw-top-[0%] tw-bg-red-500 tw-z-50'>
                    dksad
                </div>
            }
        </>
    )
}

export default Navbar