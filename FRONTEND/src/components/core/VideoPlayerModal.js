import React from 'react'
import { ImCross } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { BigPlayButton, Player } from 'video-react';
import { setVideoPlayModal } from '../../slices/addcourseSlice';

function VideoPlayerModal({ element }) {
    const dispatch=useDispatch();
    console.log(element._id)
    return (
        <>
            <div className="tw-bg-[rgba(0,8,20,0.8)]   tw-fixed tw-top-0 tw-bottom-0 tw-z-[1000] tw-h-full tw-w-full tw-backdrop-blur-[0px] tw-flex tw-justify-center tw-items-center ">

                <div className="tw-max-w-[660px] 3xs:tw-w-[660px] tw-bg-richblack-800   tw-mx-[10px] tw-overflow-hidden  tw-text-white tw-flex tw-flex-col tw-p- tw-rounded-lg tw-border tw-border-richblack-400 tw-gap-y-3">
                    <div className="tw-pt-3 tw-px-5   tw-flex tw-justify-between tw-items-center tw-font-semibold tw-text-[18px]   ">
                        <div className=" tw-p-1 tw-text-white tw-cursor-pointer tw-ml-auto " onClick={()=>dispatch(setVideoPlayModal(null))}  >
                            <ImCross />
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-col tw-gap-y-2   tw-pb-10 tw-px-2 md:tw-px-4">

                        <div className='tw-fex tw-flex-col'>
                            <Player src={element?.videoUrl} className="" playsInline aspectRatio="5:3" >
                                <BigPlayButton className="tw-bg-red-400 " position="center">

                                </BigPlayButton>
                            </Player>
                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export default VideoPlayerModal
