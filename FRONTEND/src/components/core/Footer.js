

import React from 'react'
import { FooterLink1 } from '../../data/footer-links'
import { FooterLink2 } from '../../data/footer-links'
import LogoLight from "../../assets/Logo/Logo-Full-Light.png"


function Footer() {
  return (
    <section id='footer' className='tw-bg-richblack-800 tw-py-[10px] sm:tw-py-[30px]'>
      <div id='footer-wrapper' className='tw-py-1 tw-w-11/12 tw-mx-auto sm:tw-max-w-maxContent  '>
        <div className='tw-flex tw-flex-wrap tw-py-10'>
          <div className=' tw-flex-1  tw-flex tw-justify-evenly tw-flex-wrap tw-gap-y-6 tw-gap-y-4'>

            <div className=' tw-flex tw-flex-col tw-gap-y-5 tw-px-3 tw-py-5 footerright:tw-basis-[200px] tw-basis-[90%]'>
              <div className=' tw-w-[100%] '>
                <img src={LogoLight} alt='LogoImage' className='tw-w-full tw-h-full tw-object-cover' />
              </div>
              <div className='tw-flex tw-flex-col tw-gap-2'>
                <h1 className='tw-font-semibold tw-text-[17px] tw-text-richblack-100'>{FooterLink1[0].title}</h1>
                {
                  FooterLink1[0].links.map((el, indx) => (
                    <p key={indx} className='tw-text-richblack-400'>{el.title}</p>
                  ))
                }

              </div>
            </div>

            <div className='tw-flex tw-flex-col tw-gap-9  tw-px-3 tw-py-5  footerright:tw-basis-[200px] tw-basis-[90%] '>
              <div className='tw-flex tw-flex-col tw-gap-2'>
                <h1 className='tw-font-semibold tw-text-[17px] tw-text-richblack-100'>{FooterLink1[1].title}</h1>
                {
                  FooterLink1[1].links.map((el, indx) => (
                    <p key={indx} className='tw-text-richblack-400'>{el.title}</p>
                  ))
                }
              </div>
              <div className='tw-flex tw-flex-col tw-gap-2 '>
                <h1 className='tw-font-semibold tw-text-[17px] tw-text-richblack-100'>{FooterLink1[2].title}</h1>
                {
                  FooterLink1[2].links.map((el, indx) => (
                    <p key={indx} className='tw-text-richblack-400'>{el.title}</p>
                  ))
                }
              </div>
            </div>

            <div className='tw-flex tw-flex-col tw-gap-9  tw-px-3 tw-py-5 footerright:tw-basis-[200px] tw-basis-[90%] '>
              <div className='tw-flex tw-flex-col tw-gap-2'>
                <h1 className='tw-font-semibold tw-text-[17px] tw-text-richblack-100'>{FooterLink1[3].title}</h1>
                {
                  FooterLink1[3].links.map((el, indx) => (
                    <p key={indx} className='tw-text-richblack-400'>{el.title}</p>
                  ))
                }
              </div>
              <div className='tw-flex tw-flex-col tw-gap-2'>
                <h1 className='tw-font-semibold tw-text-[17px] tw-text-richblack-100'>{FooterLink1[2].title}</h1>
                {
                  FooterLink1[4].links.map((el, indx) => (
                    <p key={indx} className='tw-text-richblack-400'>{el.title}</p>
                  ))
                }
              </div>
            </div>

          </div>
          <div className='tw-flex-1  tw-flex tw-gap-y-6 tw-flex-wrap tw-justify-evenly tw-justify-start footerright:tw-border-l-2 tw-border-richblack-700 lg:tw-pl-10'>
            {
              FooterLink2.map((el, index) => (
                <div key={index} className='tw-flex tw-flex-col tw-gap-2 tw-px-3 tw-py-5 footerright:tw-basis-[200px] tw-basis-[90%]'>
                  <h1 className='tw-font-semibold tw-text-[17px] tw-text-richblack-100'>
                    {el.title}
                  </h1>
                  {
                    el.links.map((el, indx) => (
                      <p key={indx} className='tw-text-richblack-400'>{el.title}</p>
                    ))
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className='tw-border-t-2 tw-border-richblack-700 tw-bg-red-300 tw-min-h-[45px] '>
          Made with ❤ by Rohan Vania 
        </div>
      </div>

    </section>
  )
}

export default Footer