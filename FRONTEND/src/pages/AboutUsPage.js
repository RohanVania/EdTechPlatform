import React from 'react'
import HighlightedText from '../components/core/HighlightedText'
import img1 from "../assets/Images/aboutus1.webp"
import img2 from "../assets/Images/aboutus2.webp"
import img3 from "../assets/Images/aboutus3.webp"
import img4 from "../assets/Images/FoundingStory.png"
import ellipse from "../assets/Images/Ellipse2.png"

import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";



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
                <div className='tw-mx-auto tw-px-0 tw-text-white tw-w-11/12 '>

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
                        <div className=' tw-bg-yellow5 xl:tw-w-[500px] tw-h-full '>
                            <h1 className='tw-text-[22px] btnalign:tw-text-[30px] sm:tw-text-[36px] tw-font-[600] tw-mb-5'>
                                <HighlightedText className="tw-bg-gradient-to-br tw-from-[#E65C00] tw-via-[#F9D423] tw-to-[#F9D423] tw-text-transparent tw-bg-clip-text">Our Vision</HighlightedText>
                            </h1>
                            <div className='tw-text-richblack-300 tw-font-[400] tw-text-[19px] xs:tw-text-[17px] tw-space-y-[20px]'>
                                <p className=''>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>

                            </div>
                        </div>
                        <div className=' tw-bg-yellow5 xl:tw-w-[500px] tw-h-full '>
                            <h1 className='tw-text-[22px] btnalign:tw-text-[30px] sm:tw-text-[36px] tw-font-[600] tw-mb-5'>
                                <HighlightedText className="tw-bg-gradient-to-br tw-from-[#1FA2FF] tw-via-[#12D8FA] tw-to-[#A6FFCB] tw-text-transparent tw-bg-clip-text">Our Mission</HighlightedText>
                            </h1>
                            <div className='tw-text-richblack-300 tw-font-[400] tw-text-[19px] xs:tw-text-[17px] tw-space-y-[20px]'>
                                <p className=''>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section 3 */}

            <div id='aboutus-section3' className='tw-bg-richblack-800 '>

                <div className='tw-flex tw-justify-evenly tw-py-[80px]'>
                    <div className='tw-w-[293px] tw-h-[100px] tw-bg-red-400'>
                        asds
                    </div>
                    <div className='tw-w-[293px] tw-h-[100px] tw-bg-red-400'>
                        asds
                    </div>
                    <div className='tw-w-[293px] tw-h-[100px] tw-bg-red-400'>
                        asds
                    </div>
                    <div className='tw-w-[293px] tw-h-[100px] tw-bg-red-400'>
                        asds
                    </div>
                </div>

            </div>




        </div>
    )
}

export default AboutUsPage