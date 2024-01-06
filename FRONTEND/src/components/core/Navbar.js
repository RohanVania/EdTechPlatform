
import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { NavbarLinks } from '../../data/navbar-links';
import { TfiMenu } from "react-icons/tfi";

function Navbar() {
    const location = useLocation();
    const [open,setOpen]=useState(false);

    return (
        <>
            <div id='navbar' className='tw-bg-richblack-900  tw-min-h-[79px]  tw-flex tw-items-center tw-border-b-[0.7px] tw-border-richblack-700 tw-fixed tw-top-0 tw-w-full tw-z-[999]'>
                <nav className=' tw-w-[100%] xs:tw-w-11/12 tw-px-4 2xs:tw-px-5 xs:tw-px-4 md:tw-px-0  tw-flex navbarmd:tw-justify-between tw-justify-around tw-items-center tw-mx-auto tw-text-[16px] tw-font-[400] tw-text-richblack-25 '>
                    <div className='tw-bg-yellow-10 tw-w-[160px] tw-h-[32px] xs:tw-w-auto'>
                        <Link to="/">
                            <img src={logo} alt='homepagelogo' className='tw-w-full tw-h-full tw-object-cover' />
                        </Link>
                    </div>
                    <ul className='tw-flex tw-items-center  tw-gap-x-4 navbarmd:tw-hidden '>
                        {
                            NavbarLinks.map((el, indx) => {
                                const activeLink = el.path === location.pathname ? 'tw-text-[#FFD60A]' : '';
                                return <li key={`Navbar-Link-${indx}`} className={`tw-px-3 tw-py-3 ${activeLink}`}>
                                    <Link to={el.path}>
                                        {el.title}
                                    </Link>
                                </li>
                            })
                        }


                    </ul>

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

                    <div className='tw-w-[45px] tw-aspect-square tw-bg-orange-4 tw-cursor-pointer navbarmd:tw-block tw-hidden' onClick={()=>setOpen((prev)=>!prev)}>
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