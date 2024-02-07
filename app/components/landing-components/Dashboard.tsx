import React from 'react'
import Header from '@/app/components/dashboard-components/Header'
import RevenueCardsView from '../dashboard-components/RevenueCardsView'
import SalesAnalyticsGraph from '../dashboard-components/SalesAnalyticsGraph'
import SocialMediaVisitors from '../dashboard-components/SocialMediaVisitors'

const Dashboard = () => {
  return (
    <div className='w-full p-5'>
      <Header title='eCommerce Dashboard' />
      <RevenueCardsView />
      <div className='w-full grid grid-cols-3 gap-5'>
        <div className='col-start-1 col-end-3'>
          <SalesAnalyticsGraph />
        </div>
        <div className=''>
          <SocialMediaVisitors />
        </div>
      </div>
    </div>
  )
}

export default Dashboard