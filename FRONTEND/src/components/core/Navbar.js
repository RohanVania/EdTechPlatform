
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links';

function Navbar() {
    const location = useLocation();

    return (
        <div id='navbar' className='tw-bg-richblack-900  tw-min-h-[79px]  tw-flex tw-items-center tw-border-b-[0.7px] tw-border-richblack-700 tw-fixed tw-top-0 tw-w-full tw-z-[999]'>
            <nav className='md:tw-w-11/12 tw-px-4 md:tw-px-0  tw-flex tw-justify-around tw-items-center tw-mx-auto tw-text-[16px] tw-font-[400] tw-text-richblack-25 '>
                <div>
                    <Link to="/">
                        <img src={logo} alt='homepagelogo' />
                    </Link>
                </div>
                <ul className='tw-flex tw-items-center tw-bg-red-30 tw-gap-x-4 '>
                    {
                        NavbarLinks.map((el, indx) => {
                            const activeLink = el.path === location.pathname ? 'tw-text-[#FFD60A]' : '';
                            return <li className={`tw-px-3 tw-py-3 ${activeLink}`}>
                                <Link key={`Navbar-Link-${indx}`} to={el.path}>
                                    {el.title}
                                </Link>
                            </li>
                        })
                    }


                </ul>

                <div className='tw-flex tw-gap-x-4 '>
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
                        location.pathname != '/signup' && location.pathname != '/login' && <>
                            <Link to="/login">
                                <button className='tw-px-[21px] tw-py-[10px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Login</button>
                            </Link>
                            <Link to="/signup">
                                <button className='tw-px-[14px] tw-py-[10px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Sign Up</button>
                            </Link>
                        </>

                    }
                </div>

            </nav>
        </div>
    )
}

export default Navbar