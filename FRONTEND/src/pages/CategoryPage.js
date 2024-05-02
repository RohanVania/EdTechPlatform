

import React, { useEffect, useRef } from 'react'
import Footer from '../components/core/Footer'
import { register } from 'swiper/element/bundle';
import Card from '../components/categoryPage/Card';
import Swiper from "swiper"
register();

function CategoryPage() {
    const swiperElRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperElRef.current;
        const params = {
            navigation: true,
            pagination:{
                clickable:true
            },
            
            breakpoints: {
             
                600: {
                    slidesPerView: 2,
                },
                950: {
                    slidesPerView: 1,
                },
            },

        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();

    }, [])

    const coursesArray = [
        {
            image: "	https://res.cloudinary.com/dbr73rpz9/image/upload/v1688631239/images/maxresdefault_2_yii7cf.jpg",
            heading: "The Complete Python Bootcamp from Zero to Hero in Python",
            name: "Dev Patel",
            rating: 2,
            price: 1199
        },
        {
            image: "https://res.cloudinary.com/dbr73rpz9/image/upload/v1688630790/images/computers-others-wallpaper-preview_suhi9b.jpg",
            heading: "The Complete Java Course for Beginners",
            name: "Drake Hertz",
            rating: 4,
            price: 1199
        }

    ]

    return (
        <>
            <section className=''>
                <div className='tw-bg-richblack-700 tw-min-h-[244px] tw-flex tw-flex-col  tw-justify-center tw-px-4'>
                    <div className='tw-flex tw-gap-[24px] tw-bg-red-40  tw-justify-evenly tw-flex-wrap tw-py-[32px] '>
                        <div className='tw-bg-yellow-20 lg:tw-w-[860px] tw-max-w-[860px]'>
                            <h2 className=' tw-mb-2 tw-text-richblack-300 tw-text-[16px]'>
                                Home / catalog / Python
                            </h2>
                            <h1 className='tw-text-[30px] tw-text-richblack-5'>Python</h1>
                            <p className='tw-text-richblack-200 tw-text-[14px] tw-mt-2'>
                                Python is a general-purpose, versatile, and powerful programming language. It’s a great first language because Python code is concise and easy to read. Whatever you want to do, python can do it. From web development to machine learning to data science, Python is the language for you.
                            </p>
                        </div>
                        <div className='tw-bg-yellow-40 tw-px-3 lg:tw-w-[260px] tw-w-[100% tw-justify-start tw-mr-auto lg:tw-mr-0 xl:tw-block tw-hidden'>
                            <h1 className='tw-mb-2 tw-text-richblack-5 tw-font-medium tw-text-[18px]'>Related resources</h1>
                            <ul className='tw-text-richblack-100 tw-text-[14px] tw-space-y-2 tw-list-inside tw-list-disc tw-px-1'>
                                <li>
                                    Doc Python
                                </li>
                                <li>
                                    Cheatsheets
                                </li>
                                <li>
                                    Articles
                                </li>
                                <li>
                                    Community Forums
                                </li>
                                <li>
                                    Projects
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


            </section>

            <section className='tw-w-11/12 tw-mx-auto sm:tw-max-w-[1410px]  tw-bg-red-500 '>
                <section>
                    {/* Heading */}


                    <div className='tw-mb-10'>
                        <h1 className='tw-text-richblack-5 tw-text-[21px] 2xs:tw-text-[23px] sm:tw-text-[30px]'>Courses to get you started</h1>
                    </div>
                    {/* Swiper Section  */}
                    <div className='tw-bg-green-300'>

                        <swiper-container ref={swiperElRef}
                        // navigation="true"
                        // pagination="true"
                        >
                            <swiper-slide>
                                <div className='tw-flex tw-flex-col tw-gap-y-3 tw-w-[300px tw-w-full tw-bg-green-500 tw-pb-3 '>
                                    <div className='tw-h-[201px] tw-bg-yellow-25 tw-rounded-lg tw-overflow-hidden'>
                                        <img src='https://res.cloudinary.com/dbr73rpz9/image/upload/v1688630790/images/computers-others-wallpaper-preview_suhi9b.jpg' className='tw-object-cover tw-w-full tw-h-full' />
                                    </div>
                                    <div className='tw-px-1 tw-flex tw-flex-col tw-gap-2'>
                                        <h1 className='tw-text-richblack-5 tw-text-[17px]'>
                                            The Complete Python Bootcamp from Zero to Hero in Python
                                        </h1>
                                        <p className='tw-text-[18px]'>
                                            By <span className='tw-text-yellow-50'>Dev Patel</span>
                                        </p>
                                        <p className='tw-text-[20px] tw-text-richblack-5'>
                                            Rs. 1,200
                                        </p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide class="tw-bg-pink-200" ><Card /></swiper-slide>
                            <swiper-slide><Card /></swiper-slide>
                            <swiper-slide><Card /></swiper-slide>
                            <swiper-slide class="tw-bg-pink-800"><Card /></swiper-slide>
                            <swiper-slide><Card /></swiper-slide>

                        </swiper-container>
                    </div>
                </section>

            </section>


            <Footer />
        </>
    )
}

export default CategoryPage
