import React from 'react'
import HRMDataCard from './HRMDataCard';

const HRMDataCardsView = () => {

    const hrmsData = [
        {
            id: 0,
            title: 'Total Employees',
            value: '134,152',
            duration: '124 for last month',
        },
        {
            id: 1,
            title: 'Campaign Sent',
            value: '12,412',
            duration: '4 for last month',
        },
        {
            id: 2,
            title: 'Annual Profit',
            value: '$134,152',
            duration: '124 for last month',
        },
        {
            id: 3,
            title: 'Lead Conversation',
            value: '52%',
            duration: '124 for last month',
        },
    ];

    return (
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5'>
            {
                hrmsData?.map((data) => (
                    <HRMDataCard key={data?.id} {...data} />
                ))
            }
        </div>
    )
}

export default HRMDataCardsView