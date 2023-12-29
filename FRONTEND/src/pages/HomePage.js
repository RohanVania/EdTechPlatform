// TEST COMMENT

import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HighlightText from '../components/core/HighlightedText'
import Buttons from '../components/core/Buttons'
import CodeBlock from '../components/homePage/CodeBlock'
import CardBlock from '../components/homePage/CardBlock'
import TimeLineSection from '../components/homePage/TimeLineSection'
import Heading from '../components/homePage/Heading'
import TimelineCard from '../components/homePage/TimelineCard'
import Banner from "../assets/Images/banner.mp4"
import Vector from "../assets/Images/bghome.svg"
import InstructorImage from "../assets/Images/Instructor.png"

import Footer from '../components/core/Footer'


const btndata1 = {
  btn1: {
    text: 'Try it Yourself ➡',
    extrasmall: true,
    active: true
  },
  btn2: {
    extrasmall: true,
    text: 'Learn More',
    active: false
  }
}

const btndata2 = {
  btn1: {
    text: 'Continue Lesson ➡',
    extrasmall: true,
    active: true
  },
  btn2: {
    extrasmall: true,
    text: 'Learn More',
    active: false
  }
}

const btndata3 = {
  btn1: {
    text: 'Learn More',
    extrasmall: true,
    active: true
  },
  btn2: {
    text: 'Book a Demo',
    extrasmall: true,
    active: false
  }
}

export function HomePage() {
  return (
    <>
      {/* Section 1 */}
      <div id='section1' className='tw-bg-red-20 tw-bg-richblack-900  tw-mt-[70px]'>

        <div className='tw-px-3 tw-w-11/12 tw-mx-auto '>
          {/* BUTTON */}
          <div className=' tw-px- tw-pt-[60px] tw-pb-[7px] md:tw-pb-[15px]  tw-text-richblack-200 tw-mx-auto'>
            <div className='tw-flex tw-items-center tw-justify-center tw-gap-2 btn:tw-w-[260px] tw-shadow-[0_0px_6px_0px_rgba(255,255,255,0.3)]  tw-bg-[#161d29] tw-rounded-full tw-px-[6px] tw-py-[12px] tw-text-[11px] 3xs:tw-text-[13px] btnalign:tw-mx-auto btnalign:tw-text-[19px] btnalign:tw-w-[290px]'>
              <div className='tw-px-1'>
                Become an Instructor
              </div>
              <AiOutlineArrowRight />
            </div>
          </div>

          {/* Heading */}

          <Heading
            className="tw-my-10"
            text="Empower Your Future with "
            highlight="Coding Skills"
            description="With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. "
            btnobj={btndata3}
          />

          {/* Video */}

          <div className='videobanner:tw-h-[175px] videobanner:tw-mt-6 tw-mt-9 tw-mb-6 sm:tw-max-w-[915px] tw-mx-auto tw-box videohome tw-relative tw-z-[2]'>
            <video src={Banner} muted autoPlay loop className='videobanner:tw-w-full videobanner:tw-h-full videobanner:tw-object-cover ' >
            </video>
            <svg width="0" height="55" viewBox="0 0 1232 535" fill="none" xmlns="http://www.w3.org/2000/svg" className='tw-w-full tw-h-full tw-absolute tw-top-[-25%] tw-left-[-2%] tw-z-[-10] '>
              <g opacity="0.4" filter="url(#filter0_f_11167_17979)">
                <ellipse cx="616" cy="267.5" rx="520" ry="147.5" fill="url(#paint0_linear_11167_17979)" />
              </g>
              <defs>
                <filter id="filter0_f_11167_17979" x="0" y="0" width="1232" height="535" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_11167_17979" />
                </filter>
                <linearGradient id="paint0_linear_11167_17979" x1="39.8769" y1="87.2222" x2="461.586" y2="835.384" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9CECFB" />
                  <stop offset="0.5" stopColor="#65C7F7" />
                  <stop offset="1" stopColor="#0052D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Code Blocks */}

          <CodeBlock
            color="white"
            btnobj={btndata1}
            text='Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'
            heading1='Unlock your'
            heading2='with our online courses'
            highlight='coding potential'
            code={`<!DOCTYPE html>\n<html>\n<head>Example</title>\n</head>\n<body>\n<h1><a href="/">Link</a><a href="/">Link</a>\n</h1>\n<nav>\n<a href="three">Three</a>\n</nav>\n</body>`}
            codecolor='tw-text-cyan-300'
          />
          <CodeBlock
            color="white"
            btnobj={btndata2}
            text="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            heading1='Start'
            highlight='Coding in seconds'
            code={`<!DOCTYPE html>\n<html>\n<head>Example</title>\n</head>\n<body>\n<h1><a href="/">Link</a><a href="/">Link</a>\n</h1>\n<nav>\n<a href="three">Three</a>\n</nav>\n</body>`}
            codecolor='tw-text-cyan-300'
            reverse
          />

          {/* CARD BLOCK  */}
          <div className='tw-mx-auto'>
            <div className=' btnalign:tw-text-center tw-pb-[20px] 3xs:tw-pb-[25px]  sm:tw-pb-[50px] '>
              <Heading
                className="tw-mb-[50px]"
                text="Unlock the "
                highlight="Power of Code"
                nobuttons
                description="Learn to Build Anything You Can Imagine"
              />

              <div className=' tw-bg-red-300 tw-mt-4'>
                buttons later
              </div>

              <div className='flex-area tw-mt-10 tw-flex tw-flex-wrap tw-gap-y-[40px] tw-justify-center tw-gap-x-[3.5rem] '>
                <CardBlock active={true} heading="Learn HTML" level="Beginner" content="6 Lessons" para="This course covers the basic concepts of HTML including creating and structuring web pages, adding text, links, images, and more." />
                <CardBlock heading="Learn CSS" level="Beginner" content="6 Lessons" para="This course explores advanced topics in HTML5 and CSS3, including animations, transitions, and layout techniques." />
                <CardBlock heading="Responsive Web Design" level="Beginner" content="6 Lessons" para="This course teaches responsive web design techniques, allowing web pages to adapt to different devices and screen sizes." />
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Section 2 */}

      <div id='section2' >
        <div style={{ backgroundImage: `url(${Vector})`, objectFit: "cover" }} className='tw-bg-[#F9F9F9]' >
          <div className="tw-h-[260px] sm:tw-h-[300px] tw-max-w-maxContent tw-mx-auto tw-flex tw-justify-center tw-items-center tw-gap-10 ">
            <Buttons active text="Explore Full Catalog ➡" extrasmall />
            <Buttons text="Learn More" extrasmall />
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div id='section3' className='tw-pt-10 tw-bg-[#F9F9F9]'>
        <div id="section3wrapper" className='tw-w-11/12 sm:tw-max-w-maxContent tw-mx-auto tw-pt-6 tw-pb-[50px] sm:tw-pt-[80px]'>

          <div className='tw-flex tw-flex-wrap  tw-gap-y-8 tw-justify-between'>
            <div className='xs:tw-max-w-[85%] tw-mx-auto lg:tw-max-w-[40%] tw-text-black '>
              <HighlightText color="black" text="Get the skills you need for a " highlight="clawclaws that is in demand." />
            </div>
            <div className='xs:tw-max-w-[85%] tw-mx-auto lg:tw-max-w-[50%] tw-flex tw-flex-col tw-gap-10 tw-pb-[30px] 2xs:tw-pb-[45px] sm:tw-pb-[70px]'>
              <p className='tw-text-richblack-700 tw-text-[16px]'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills</p>
              <div className='tw-w-fit'>
                <Buttons text="Learn More" extrasmall active />
              </div>
            </div>
          </div>
          <TimeLineSection />
          <Heading className="tw-my-[40px] md:tw-mt-[150px] md:tw-mb-[70px] tw-mt-5  tw-mx-auto" nobuttons color="tw-text-richblack-800" description="Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more. " text="Your swiss knife for" highlight="learning any language" />
          <TimelineCard />
          <div className="tw-mx-auto tw-w-fit tw-mt-[35px] md:tw-mt-[90px]">
            <Buttons text="Learn More" extrasmall active />
          </div>
        </div>

      </div>

      {/* Section 4 */}

      <div id='section4' className='tw-bg-richblack-900 tw-pb-[50px] sm:tw-pb-[80px]'>
        <div id='section4wrapper' className='tw-w-11/12 tw-mx-auto sm:tw-max-w-maxContent '>

          <div className='tw-flex tw-flex-col tw-gap-y-[20px] md:tw-flex-row tw-flex-wrap tw-py-[10px] tw-justify-around tw-items-center tw-pt-[40px] xs:tw-pt-[95px]'>
            <div className='md:tw-basis-[45%]'>
              <img src={InstructorImage} className='tw-w-full tw-h-full tw-object-cover shadowleft' alt='Instructorimage' />
            </div>
            <div className=' md:tw-basis-[45%]'>
              <div className='tw-flex tw-gap-x-1  tw-justify-start md:tw-flex-col md:tw-mt-0 tw-mt-[10px] tw-flex-wrap '>
                <h1 className='tw-font-[600] tw-text-[17px] sm:tw-text-[29px]  lg:tw-text-[45px]   3xs:tw-text-[21px]  btnalign:tw-text-[26px] tw-text-white'>
                  Become
                </h1>
                <h2 className='  tw-font-[600] tw-text-[17px] sm:tw-text-[29px] lg:tw-text-[45px]  3xs:tw-text-[21px]  btnalign:tw-text-[26px] tw-text-white '>
                  an
                  <span className='tw-bg-gradient-to-br tw-from-blue-500 tw-via-cyan-400 tw-to-green-200 tw-ml-2 tw-text-transparent tw-bg-clip-text'>
                    instructor
                  </span>
                </h2>
              </div>
              <p className='tw-mt-3 tw-text-[14.5px] 3xs:tw-text-[15px] 2xs:tw-text-[16px] tw-text-richblack-300'>
                Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
              </p>
              <Buttons className="tw-w-fit tw-mt-12" text="Start Teaching Today ➡" active />
            </div>
          </div>

        </div>
      </div>
      
      <Footer/>
    </>
  )
}
