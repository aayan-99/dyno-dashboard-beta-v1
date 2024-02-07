import React from 'react'
import RevenueCard from './RevenueCard';

const RevenueCardsView = () => {

    const revenueData = [
        {
            id: 0,
            title: 'Shipping',
            revenue: '$ 34,512',
            profit: '+16.24%',
        },
        {
            id: 1,
            title: 'Orders',
            revenue: '$ 36,894',
            profit: '+16.24%',
        },
        {
            id: 2,
            title: 'Customers',
            revenue: '$ 34,512',
            profit: '+16.24%',
        },
        {
            id: 3,
            title: 'Balance',
            revenue: '$ 728,152',
            profit: '+16.24%',
        },
    ];

    return (
        <div className='w-full flex items-center gap-5 mt-5'>
            {
                revenueData?.map((data) => (
                    <RevenueCard key={data?.id} {...data} />
                ))
            }
        </div>
    )
}

export default RevenueCardsView