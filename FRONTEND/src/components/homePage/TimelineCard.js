
import React from 'react'
import TimelineCard1 from "../../assets/Images/Know_your_progress.png"
import TimelineCard2 from "../../assets/Images/Plan_your_lessons.png"
import TimelineCard3 from "../../assets/Images/Compare_with_others.png"


function TimelineCard({className}) {
    const styles=className?className:"";

    return (
        <div className={`tw-flex tw-gap-0 tw-flex-wrap tw-justify-center ${styles}`}>
            <div className='tw-w-[420px] tw-aspect-square'>
                <img src={TimelineCard1} className='sm:tw-ml-[70px] tw-w-full tw-h-full tw-object-cover' />
            </div>
            <div className='tw-relative tw-w-[400px] tw-aspect-square '>
                <img src={TimelineCard3} className='sm:tw-mr-[500px] tw-w-full tw-h-full tw-object-cover tw-g-black' />
            </div>
            <div className='tw-relative tw-w-[420px] tw-aspect-square'>
                <img src={TimelineCard2} className='xl:tw-absolute   tw-top-[10px] tw-left-[-100px] tw-rotate-[0deg]' />
            </div>
        </div>
    )
}

export default TimelineCard