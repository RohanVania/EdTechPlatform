import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import HighlightText from '../components/homePage/HighlightText'
import Buttons from '../components/core/Buttons'
import Banner from "../assets/Images/banner.mp4"
import CodeBlock from '../components/homePage/CodeBlock'

const btndata1 = {
  texts: {
    btn1: {
      text: 'Learn More',
      active: true
    },
    btn2: {
      text: 'Book Now',
      active: false
    }

  }
}
const btndata2 = {
  texts: {
    btn1: {
      text: 'Try it Yourself ➡',
      active: true
    },
    btn2: {
      text: 'Learn More',
      active: false
    }
  }
}




export function HomePage() {
  return (
    <div className='tw-bg-red-20 tw-bg-richblue-900 '>

      {/* Section 1 */}

      <div className='tw-bg-green-30 tw-px-3 tw-w-11/12 tw-mx-auto '>
        {/* BUTTON */}
        <div className=' tw-px- tw-mt-3 tw-text-richblack-200 tw-mx-auto'>
          <div className='tw-flex tw-items-center tw-justify-center tw-gap-2 btn:tw-w-[260px] tw-shadow-[0_0px_6px_0px_rgba(255,255,255,0.3)]  tw-bg-[#161d29] tw-rounded-full tw-px-[6px] tw-py-[12px] tw-text-[11px] 3xs:tw-text-[13px] btnalign:tw-mx-auto btnalign:tw-text-[19px] btnalign:tw-w-[290px]'>
            <div className='tw-px-1'>
              Become an Instructor
            </div>
            <AiOutlineArrowRight />
          </div>
        </div>

        {/* Heading */}
        <div className='tw-mt-5  '>
          <div className='btnalign:tw-text-center'>
            <HighlightText text="Empower Your Future with" highlight="Coding Skills" />
          </div>
          <div className='tw-mt-4 tw-flex tw-flex-col  tw-bg-red-30 sm:tw-max-w-[913px] sm:tw-mx-auto'>
            <p className=' btnalign:tw-text-center btnalign:tw-text-[18px]  tw-text-[10px] 3xs:tw-text-[12px] btn:tw-text-[14.5px] sm:tw-text-[17px] sm:tw-text-center tw-text-richblack-300  '>
              With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </p>
            <div className='tw-flex tw-gap-3 3xs:tw-gap-2 2xs:tw-gap-5 tw-mt-5 btnalign:tw-mx-auto'>
              <Buttons btnobject={btndata1} />
            </div>
          </div>
        </div>

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

        <div className=' tw-bg-red-30 tw-mt-[20px] md:tw-mt-[55px] tw-flex tw-flex-col tw-gap-9 '>
          <CodeBlock btnobj={btndata2}
            text='Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'
            heading1='Unlock your'
            heading2='with our online courses'
            highlight='coding potential'
            code={`<!DOCTYPE html>\n<html>\n<head>Example</title>\n</head>\n<body>\n<h1><a href="/">Link</a><a href="/">Link</a>\n</h1>\n<nav>\n<a href="three">Three</a>\n</nav>\n</body>`}
            codecolor='tw-text-cyan-300'
          />
          <CodeBlock btnobj={btndata2}
            text="Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            heading1='Start'
            highlight='Coding in seconds'
            code={`<!DOCTYPE html>\n<html>\n<head>Example</title>\n</head>\n<body>\n<h1><a href="/">Link</a><a href="/">Link</a>\n</h1>\n<nav>\n<a href="three">Three</a>\n</nav>\n</body>`}
            codecolor='tw-text-cyan-300'
            reverse
          />
        </div>

        {/*  */}

      </div>




      {/* Section 2 */}
      {/* Section 3 */}
      {/* Section 4 */}



    </div>
  )
}
