import React from 'react'
import Header from '@/app/components/common-dashboard-components/Header'
import NoticeBoard from '@/app/components/hrm-dashboard-components/NoticeBoard'
import HRMDataCardsView from '@/app/components/hrm-dashboard-components/HRMDataCardsView'
import AudienceOverviewGraph from '@/app/components/hrm-dashboard-components/AudienceOverviewGraph '
import RecentActivity from '@/app/components/hrm-dashboard-components/RecentActivity'
import Attendence from '@/app/components/hrm-dashboard-components/Attendence'

const EComDashboard = () => {
  return (
    <div className='w-full p-5 pb-16'>
      <Header title='HR Dashboard' />
      <HRMDataCardsView />
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
        <div className='col-start-1 lg:col-end-3'>
          <AudienceOverviewGraph />
        </div>
        <div className=''>
          <RecentActivity />
        </div>
        <div className=''>
          <NoticeBoard />
        </div>
        <div className='lg:col-start-1 xl:col-start-2 col-end-2 lg:col-end-3 xl:col-end-4'>
          <Attendence />
        </div>
      </div>
    </div>
  )
}

export default EComDashboard