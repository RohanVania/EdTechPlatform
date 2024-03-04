import React from 'react'

function CourseTip() {
  return (
    <div className='tw-max-w-[400px] tw-p-6 tw-rounded-md tw-border-[1px] tw-border-richblack-700 tw-bg-richblack-800'>
    <h1 className='tw-mb-8 tw-text-lg tw-text-richblack-5'>⚡ Course Upload Tips</h1>
    <ul className='tw-list-item tw-list-disc tw-space-y-4 tw-text-xs tw-text-richblack-5 tw-ml-5'>
        <li>
            Set the course price option or make it free
        </li>
        <li>
            Standar size for the course thumbnail is 1024x576.
        </li>
        <li>
            Video section controls the course overview video.
        </li>
        <li>
            Course builder is where you create & organize a course.
        </li>
        <li>
            Add topics in the course builder section to create lessons, quizzes, and assignments.
        </li>
        <li>
            Information from the additional data section shows up on the course single page.
        </li>
        <li>
            Make announcemenrs to notify any important
        </li>
        <li>
            Notes to all enrolled students at once
        </li>
    </ul>
</div>
  )
}

export default CourseTip