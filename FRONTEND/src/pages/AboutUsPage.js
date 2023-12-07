// ABOUT US
import React from 'react'
import HighlightedText from '../components/core/HighlightedText'
import img1 from "../assets/Images/aboutus1.webp"
import img2 from "../assets/Images/aboutus2.webp"
import img3 from "../assets/Images/aboutus3.webp"
import img4 from "../assets/Images/FoundingStory.png"
import ellipse from "../assets/Images/Ellipse2.png"

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import Buttons from '../components/core/Buttons'
import Footer from "../components/core/Footer"

const aboutnumberdata = [
    {
        heading: '5K',
        description: "Active Students"
    },
    {
        heading: '10+',
        description: "Mentors"
    },
    {
        heading: '200+',
        description: "Courses"
    },
    {
        heading: '50+',
        description: "Awards"
    }
]

const aboutdatacolums = [
    {
        heading: "Our Vision",
        description: 'With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.'
    },
    {
        heading: "Our Mission",
        description: "our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities."
    }
]

const detailsofaboutus = [
    {
        heading1: 'Curriculum Based on',
        heading2: 'Industry Needs',
        description: 'Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.'
    },
    {
        heading1: 'Our Learning',
        heading2: 'Methods',
        description: 'The learning process uses the namely online and offline.'
    },
    {
        heading1: 'Certification',
        heading2: '',
        description: 'You will get a certificate that can be used as a certification during job hunting.'
    }, {
        heading1: 'Rating',
        heading2: '"Auto-grading"',
        description: 'You will immediately get feedback during the learning process without having to wait for an answer or response from the mentor.'
    }
    , {
        heading1: 'Ready to',
        heading2: 'Work',
        description: 'Connected with over 150+ hiring partners, you will have the opportunity to find a job after graduating from our program.'
    }
]

function AboutUsPage() {
    return (
        <div className=''>

            {/* Section 1*/}
            <div id='aboutus-section1' className=' tw-bg-richblack-800 aboutusfloatingsection:tw-h-[55vh] '>
                <div className='tw-mx-auto tw-px-3 tw-text-white tw-w-11/12 '>

                    <div className='videobanner:tw-text-left tw-text-center  tw-flex tw-flex-col tw-gap-5 md:tw-gap-10 sm:tw-mb-[32px] tw-mb-[13px]'>
                        <div className='tw-text-[17px] sm:tw-text-[29px]  3xs:tw-text-[21px]  btnalign:tw-text-[26px] tw-font-[600] '>
                            <h1>Driving Innovation in Online Education for a
                                <HighlightedText className={"md:tw-block tw-bg-gradient-to-br tw-ml-2  tw-from-blue-500 tw-via-cyan-400 tw-to-green-200 tw-text-transparent tw-bg-clip-text "}>Brighter Future</HighlightedText>
                            </h1>
                        </div>
                        <p className='btnalign:tw-text-[18px]  tw-text-[10px] 3xs:tw-text-[13px] btn:tw-text-[14.5px] sm:tw-text-[17px] sm:tw-text-center tw-text-richblack-300 lg:tw-w-[946px] tw-mx-auto'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                    </div>

                    <div className=' tw-flex tw-flex-wrap tw-relative tw-z-10 tw-bg-red700 tw-mx-auto tw-justify-center tw-gap-x-[55px] tw-gap-y-[25px] tw-py-[30px]'>
                        <div className=' tw-bg-red-100'>
                            <img src={img1} className='tw-object-cover tw-w-full tw-h-full' />
                        </div>
                        <div className=' tw-bg-red-100'>
                            <img src={img2} className='tw-object-cover tw-w-full tw-h-full' />
                        </div>
                        <div className=' tw-bg-red-100'>
                            <img src={img3} className='tw-object-cover tw-w-full tw-h-full' />
                        </div>
                        <img src={ellipse} className='tw-absolute tw-top-[-12%] tw-z-[-20] tw-hidden aboutusfloatingsection:tw-block' />
                    </div>

                </div>
            </div>

            {/* Section 2 */}

            <div id='aboutus-section2' className='tw-bg-richblack-900 aboutusfloatingsection:tw-pt-[19vh] tw-pt-[60px]'>
                <div className='tw-mx-auto tw-px-0 tw-text-white tw-w-11/12'>

                    <div className='videobanner:tw-text-left tw-text-center tw-pb-[50px]'>
                        <p className='tw-text-[19px] xs:tw-text-[21px] sm:tw-text-[30px] md:tw-text-[33px] sm:tw-text-center tw-text-richblack-100 lg:tw-w-[85%]  tw-mx-auto tw-font-[400]'>
                            <sup className=' tw-mr-4 '>
                                <FaQuoteLeft className='tw-inline-block ' />
                            </sup>
                            We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightedText className="tw-bg-gradient-to-br tw-from-blue-500 tw-via-cyan-400 tw-to-blue-400 tw-text-transparent tw-bg-clip-text">combines technology</HighlightedText>, <HighlightedText className="tw-text-[#F67922]">expertise</HighlightedText>, and community to create an <HighlightedText className="tw-text-[#F2A515]">unparalleled educational experience</HighlightedText>.
                            <sup className='tw-ml-4'>
                                <FaQuoteRight className='tw-inline-block ' />
                            </sup>
                        </p>
                    </div>
                    <div className='tw-bg-red-30 tw-flex  tw-items-stretch tw-justify-center  tw-gap-x-[110px] tw-flex-wrap tw-gap-y-[100px] md:tw-py-[90px] tw-py-[100px] '>
                        {
                            aboutdatacolums.map((el, indx) => {
                                const stylehighlighted = indx == 0 ? 'tw-bg-gradient-to-br tw-from-[#E65C00] tw-via-[#F9D423] tw-to-[#F9D423] tw-text-transparent tw-bg-clip-text' : 'tw-bg-gradient-to-br tw-from-[#1FA2FF] tw-via-[#12D8FA] tw-to-[#A6FFCB] tw-text-transparent tw-bg-clip-text'
                                return (
                                    <div key={`goalcolumn-${indx}`} className='xl:tw-w-[500px] tw-h-full '>
                                        <h1 className='tw-text-[22px] btnalign:tw-text-[30px] sm:tw-text-[36px] tw-font-[600] tw-mb-5'>
                                            <HighlightedText className={stylehighlighted}>{el.heading}</HighlightedText>
                                        </h1>
                                        <div className='tw-text-richblack-300 tw-font-[400] tw-text-[19px] xs:tw-text-[17px] tw-space-y-[20px]'>
                                            <p className=''>{el.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

            {/* Section 3 */}

            <div id='aboutus-section3' className='tw-bg-richblack-800 '>

                <div className='tw-flex tw-flex-wrap tw-gap-y-[50px]  tw-justify-evenly tw-py-[80px]'>
                    {
                        aboutnumberdata.map((el, indx) => {
                            return (
                                <div key={`number-${indx}`} className='tw-w-[293px] tw-h-[150px] sm:tw-h-[100px] tw-flex tw-flex-col tw-gap-y-[15px] tw-justify-center tw-items-center '>
                                    <h1 className='tw-text-richblack-5 tw-font-[700] tw-text-[30px]'>{el.heading}</h1>
                                    <p className='tw-text-richblack-500 tw-text-[17px]'>{el.description}</p>
                                </div>
                            )
                        })
                    }
                </div>

            </div>

            {/* Section 4 */}

            <div id='aboutus-section4' className='tw-bg-richblack-900 xs:tw-py-[150px] tw-py-[120px]'>
                <div className='tw-mx-auto tw-px-0 tw-text-white tw-w-11/12'>

                    <div className='about_gridcontainer  md:tw-max-w-[90%] tw-mx-auto'>
                        <div className='about_gridchild1  tw-pr-[10px] xs:tw-pr-[40px] tw-pb-[30px]  tw-flex tw-flex-col tw-justify-between tw-gap-y-[50px]'>
                            <div className='tw-text-[19px] 2xs:tw-text-[21px] xs:tw-text-[30px] sm:tw-text-[32px] sm:tw-leading-[44px] tw-font-[600]'>
                                <h1>World-Class Learning for</h1>
                                <h1> <HighlightedText className="tw-bg-gradient-to-br tw-from-[#1FA2FF] tw-via-[#12D8FA] tw-to-[#A6FFCB] tw-text-transparent tw-bg-clip-text">Anyone, Anywhere</HighlightedText></h1>
                                <p className='tw-text-[16px] tw-font-[500] tw-text-richblack-300 tw-leading-normal tw-mt-[20px]'>
                                    Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.
                                </p>
                            </div>
                            <Buttons text="Learn More" active className="tw-w-fit tw-text-black tw-rounded-md" />
                        </div>
                        {
                            detailsofaboutus.map((el, indx) => {
                                return (
                                    <div key={`deatils-${indx}`} className='about_gridchild  tw-h-[294px] sm:tw-h-[302px] tw-py-[32px] tw-px-5 tw-flex tw-flex-col tw-gap-y-[28px]'>
                                        <div className='tw-text-richblack-5 tw-text-[18px] tw-font-[600]'>
                                            <h1>{el.heading1}</h1>
                                            <h1>{el.heading2 ? <HighlightedText className="tw-bg-gradient-to-br tw-from-[#1FA2FF] tw-via-[#12D8FA] tw-to-[#A6FFCB] tw-text-transparent tw-bg-clip-text" >{el.heading2}</HighlightedText> : <br />}</h1>
                                        </div>
                                        <p className='tw-text-richblack-100 tw-text-[15px] tw-font-[400]'>
                                            {el.description}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>

            {/* Section 5 */}
            <div id='aboutus-section5' className="tw-bg-richblack-900 xs:tw-pt-[70px] tw-pb-[120px] tw-bg-yellow-">
                <div className='tw-mx-auto tw-px-0 tw-text-white tw-w-11/12 tw-bg-red-30'>

                    <div className='tw-text-center'>
                        <h1 className='sm:tw-text-[34px] tw-font-[600]'>Get in Touch</h1>
                        <p className='sm:tw-text-[20px] tw-text-richblack-300 tw-font-[500] tw-mt-[15px]'>We'd love to here for you. Please fill out the form.</p>
                    </div>
                    <div className='tw-bg-pink-20 tw-mt-[55px]'>
                        <div className='md:tw-w-[550px] tw-b-caribbeangreen-5 tw-mx-auto '>
                            <form id='about_contact_form' className='tw-flex tw-flex-col tw-justify-center tw-px-3 tw-gap-y-7'>
                                <div className='tw-grid tw-grid-cols-1 btnalign:tw-grid-cols-2 tw-gap-y-6 tw-gap-x-6 tw-justify-center '>
                                    <div className='tw-flex tw-flex-col tw-gap-y-2'>
                                        <label htmlFor='firstname' className='tw-text-richblack-5 tw-font-[400] tw-text-[15px]'>First Name</label>
                                        <input type='text' id='firstname' placeholder='Enter first name' />
                                    </div>
                                    <div className='tw-flex tw-flex-col tw-gap-y-2'>
                                        <label htmlFor='lastname' className='tw-text-richblack-5 tw-font-[400] tw-text-[15px]'>Last Name</label>
                                        <input type='text' id='lastname' placeholder='Enter Last name' />
                                    </div>
                                </div>
                                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                                    <label htmlFor='firstname' className=' tw-font-[400] tw-text-[15px]'>Email Address</label>
                                    <input type='email' id='firstname' placeholder='Enter email address' />
                                </div>
                                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                                    <label htmlFor='phonenumber' className=' tw-font-[400] tw-text-[15px]'>Phone Number</label>
                                    <div className='tw-flex tw-gap-x-5'>
                                        <select className=''>
                                            <option>+91</option>
                                            <option>+92</option>
                                            <option>+93</option>
                                            <option>+94</option>
                                            <option>+95</option>
                                        </select>
                                        <input type='tel' id='phonenumber' placeholder='1234 567890' className='tw-w-full' />
                                    </div>
                                </div>
                                <div className='tw-flex tw-flex-col tw-gap-y-2'>
                                    <label htmlFor='message' className=' tw-font-[400] tw-text-[15px]'>Message</label>
                                    <div
                                        role="textbox"
                                        contentEditable
                                        placeholder='Enter '
                                        aria-placeholder="5-digit zipcode"

                                    ></div>
                                </div>

                                <Buttons text="Send Message" active className="tw-text-black tw-font-[500] tw-text-center tw-text-[18px]" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />

        </div>
    )
}

export default AboutUsPage