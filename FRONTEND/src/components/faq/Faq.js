import { GiHamburgerMenu } from "react-icons/gi";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5";
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion";

function Faq({ element }) {

    const [subsectionArray, setSubSectionArray] = useState([]);


    const [open, setOpen] = useState(false);
    console.log(element)


    return (
        <>
            <li className='tw-bg-yellow-30   tw-flex tw-flex-col   btnalign:tw-gap-x-3 tw-gap-x-0 btn:tw-mx-2 tw-py- tw-border-[1px] tw-border-richblack-500' >
                {/* Section Created */}
                <div className='tw-flex btnalign:tw-gap-x-3 tw-gap-x-1 btnalign:tw-px-3  tw-flex-wrap tw-w-full tw-border-b-[1px] tw-border-richblack-500  tw-py-3 tw-gap-y-4 tw-justify-between tw-px-2'>
                    <div className="tw-flex tw-gap-x-2">
                        <div className='tw-flex tw-justify-cente tw-items-center tw-bg-red-40 tw-px-1 tw-gap-x-3'>
                            <FaChevronDown className='tw-self-center tw-text-[19px] tw-hidde btnalign:tw-block tw-cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
                            <GiHamburgerMenu className='tw-text-[19px] tw-self-center' />
                        </div>
                        <p className='btnalign:tw-text-[17px] tw-text-[15px]'>
                            {element?.name}
                        </p>
                    </div>
                    <div className=" tw-self-center">
                        <div className='tw-flex  tw-gap-x-2 tw-items-center tw-justify-center    btnalign:tw-text-[19px] tw-text-[19px] tw-px-1 '>
                            <FiEdit2 className=' tw-cursor-pointer' />
                            <MdDelete className=' tw-cursor-pointer' />
                            <div className=' tw-border-l-[2px] tw-border-richblack-500  tw-pl-2 tw-flex tw-items-center tw-self-center btnalign:tw-block'>
                                <FaChevronDown className='  tw-self-start tw-cursor-pointer ' onClick={() => setOpen((prev) => !prev)} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* We can have many lectures in a section */}
                <AnimatePresence initial={false}>
                    {
                        open &&
                        <motion.div key={`modal`} className='tw-w-[90%] tw-mx-auto tw-flex tw-flex-col tw-gap-y-2 '
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 0, height: 0 },
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >

                            {
                                subsectionArray?.map((el, indx) => {
                                    return <div key={`subsection-${indx}`} className='tw-flex btnalign:tw-gap-x-3 tw-gap-x-1 tw-gap-y-3 tw-flex-wrap tw-w-full tw-border-b-[2px] tw-border-richblack-500 tw-py-3 tw-justify-between'>
                                        <div className="tw-flex tw-gap-x-2">
                                            <div className='tw-flex tw-justify-cente tw-items-center tw-bg-red-40 tw-px-1 tw-gap-x-3'>
                                                <IoPlay className='tw-self-center tw-text-[19px] tw-cursor-pointer' onClick={() => setOpen((prev) => !prev)} />
                                            </div>
                                            <p className='btnalign:tw-text-[17px] tw-text-[15px]'>
                                                {element?.name}
                                            </p>
                                        </div>
                                        <div className=" tw-self-center">
                                            <div className='tw-flex  tw-gap-x-2 tw-items-center tw-justify-center    btnalign:tw-text-[19px] tw-text-[19px] tw-px-1 '>
                                                <FiEdit2 className=' tw-cursor-pointer' />
                                                <MdDelete className=' tw-cursor-pointer' />
                                            </div>
                                        </div>
                                    </div>
                                })

                            }

                            <div className='tw-bg-red-40 tw-py-2  tw-px-1 tw-bg-red-40'>
                                <button className=' tw-flex tw-items-center tw-gap-x-3 tw-text-yellow-50  tw-cursor-pointer tw-px-2 tw-py-1' onClick={() => setSubSectionArray((prev)=>[...prev,1])}>
                                    <FaPlus className='tw-font-bold ' />
                                    Add Lecture
                                </button>
                            </div>
                        </motion.div>

                    }
                </AnimatePresence>



            </li>
        </>
    )
}


export default Faq;