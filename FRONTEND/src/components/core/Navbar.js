
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links';

function Navbar() {
    const location = useLocation();
    console.log(location)
    console.log(NavbarLinks)
    return (
        <div id='navbar' className='tw-bg-richblack-900 tw-bg-red-300 tw-min-h-[60px] tw-flex tw-items-center'>
            <nav className='md:tw-w-11/12 tw-px-4 md:tw-px-0  tw-flex tw-justify-around tw-items-center tw-mx-auto tw-text-[16px] tw-font-[400] tw-text-richblack-25 '>
                <div>
                    <Link to="/">
                        <img src={logo} alt='homepagelogo' />
                    </Link>
                </div>
                <ul className='tw-flex tw-items-center tw-bg-red-30 tw-gap-x-4 '>
                    {
                        NavbarLinks.map((el, indx) => {
                            const activeLink=el.path===location.pathname?'tw-text-[#FFD60A]':'';
                           return  <Link key={`Navbar-Link-${indx}`} to={el.path}>
                                <li className={`tw-px-3 tw-py-3 ${activeLink}`}>
                                    {el.title}
                                </li>
                            </Link>
                        })
                    }

                    
                </ul>

                <div className='tw-flex tw-gap-x-4 '>
                    <button className='tw-px-[20px] tw-py-[12px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Login</button>
                    <button className='tw-px-[14px] tw-py-[12px] tw-border-[1px] tw-border-richblack-700 tw-rounded-[8px]'>Sign Up</button>
                </div>

            </nav>
        </div>
    )
}

export default Navbar