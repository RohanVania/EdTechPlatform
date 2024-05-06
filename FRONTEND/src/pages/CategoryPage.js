

import React, { useEffect, useRef } from 'react'
import Footer from '../components/core/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../index.css"

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import Card from "../components/categoryPage/Card"


function CategoryPage() {


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
                <div className='tw-bg-[#161d29] tw-min-h-[244px] tw-flex tw-flex-col  tw-justify-center tw-px-4'>
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

            <section className='tw-w-11/12 tw-mx-auto sm:tw-max-w-[1410px]  tw-flex tw-flex-col tw-gap-y-[80px] tw-py-[100px]'>
                <section>
                    {/* Heading */}
                    <div className='tw-mb-10'>
                        <h1 className='tw-text-richblack-5 tw-text-[21px] 2xs:tw-text-[23px] sm:tw-text-[30px]'>Courses to get you started</h1>

                    </div>
                    {/* Swiper Section  */}
                    <div className='tw-bg-gray-30'>
                        <Swiper
                            loop={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            grabCursor={true}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    // spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    // spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                Array.from({ length: 10 }).map((el, indx) => {
                                    return <SwiperSlide className='tw-flex tw-justify-center tw-items-center' key={`swiper-${indx}`}>
                                        <Card />
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>
                </section>

                <section>
                    {/* Heading */}
                    <div className='tw-mb-10'>
                        <h1 className='tw-text-richblack-5 tw-text-[21px] 2xs:tw-text-[23px] sm:tw-text-[30px]'>Top courses in Python and Web Development</h1>

                    </div>
                    {/* Swiper Section  */}
                    <div className='tw-bg-gray-30'>
                        <Swiper
                            loop={true}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            grabCursor={true}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 1,
                                    // spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 2,
                                    // spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                Array.from({ length: 10 }).map((el, indx) => {
                                    return <SwiperSlide className='tw-flex tw-justify-center tw-items-center' key={`swiper-${indx}`}>
                                        <Card />
                                    </SwiperSlide>
                                })
                            }

                        </Swiper>
                    </div>
                </section>

                <section className=''>
                    <div className='tw-mb-10'>
                        <h1 className='tw-text-richblack-5 tw-text-[21px] 2xs:tw-text-[23px] sm:tw-text-[30px]'>Frequently bought Together</h1>
                    </div>
                    <div className='gridcategorycontainer tw-flex tw-flex-wrap '>
                        <Card className="tw-w-full tw-max-w-none" imgheight={"tw-h-[350px]"} />
                        <Card className="tw-w-full tw-max-w-none" imgheight={"tw-h-[350px]"} />
                        <Card className="tw-w-full tw-max-w-none" imgheight={"tw-h-[350px]"} />
                        <Card className="tw-w-full tw-max-w-none" imgheight={"tw-h-[350px]"} />
                        <Card className="tw-w-full tw-max-w-none" imgheight={"tw-h-[350px]"} />
                        <Card className="tw-w-full tw-max-w-none" imgheight={"tw-h-[350px]"} />
                    </div>
                </section>

            </section >


            <Footer />
        </>
    )
}

export default CategoryPage
