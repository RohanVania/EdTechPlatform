

import React from 'react'
import SideBar from '../components/core/SideBar'
import { Outlet } from 'react-router-dom'

//* This route is protected 
function DashBoardPage() {



  return (
    <>

      <div className='tw-mt-[78px] lg:tw-mt-[78px]   tw-text-black  tw-mx-auto  tw-min-h-[92.1vh] lg:tw-min-h-[91.9vh]  tw-flex '>
        <SideBar />
        <div className='  md:tw-px-10  tw-text-white  tw-w-11/12 tw-max-w-[1100px] py-10 tw-mx-auto tw-pb-[120px]'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default DashBoardPage