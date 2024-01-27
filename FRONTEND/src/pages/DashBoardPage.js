

import React from 'react'
import SideBar from '../components/core/SideBar'
import { Outlet } from 'react-router-dom'

//* This route is protected 
function DashBoardPage() {


  return (
    <div className='tw-mt-[78px] lg:tw-mt-[80px]   tw-text-black  tw-min-h-[92.1vh] lg:tw-min-h-[91.9vh] tw-flex'>
      <SideBar />
      <div className='tw-bg-yellow-700 tw-w-full tw-ml-0 tw-h-[200vh] tw-text-white'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoardPage