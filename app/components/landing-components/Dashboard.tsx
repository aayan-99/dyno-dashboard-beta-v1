import React from 'react'
import Header from '@/app/components/dashboard-components/Header'
import RevenueCardsView from '@/app/components/dashboard-components/RevenueCardsView'
import SalesAnalyticsGraph from '@/app/components/dashboard-components/SalesAnalyticsGraph'
import SocialMediaVisitors from '@/app/components/dashboard-components/SocialMediaVisitors'
import NewCustomers from '@/app/components/dashboard-components/NewCustomers'
import RecentOrders from '@/app/components/dashboard-components/RecentOrders'

const Dashboard = () => {
  return (
    <div className='w-full p-5 pb-16'>
      <Header title='eCommerce Dashboard' />
      <RevenueCardsView />
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-5'>
        <div className='col-start-1 lg:col-end-3'>
          <SalesAnalyticsGraph />
        </div>
        <div className=''>
          <SocialMediaVisitors />
        </div>
        <div className=''>
          <NewCustomers />
        </div>
        <div className='lg:col-start-1 xl:col-start-2 col-end-2 lg:col-end-3 xl:col-end-4'>
          <RecentOrders />
        </div>
      </div>
    </div>
  )
}

export default Dashboard