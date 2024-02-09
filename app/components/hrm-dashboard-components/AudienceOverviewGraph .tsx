'use client'

import useDarkModeStore from '@/app/stores/themeStore';
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const CustomArea = ({ dataKey, stroke, fill }: any) => (
    <Area type="stepAfter" dataKey={dataKey} stroke={stroke} fill={fill} />
);

const AudienceOverviewGraph = () => {

    const [activeGraphFilterId, setActiveGraphFilterId] = useState(0);

    const data = [
        {
            name: 'Mon',
            uv: 4000,
            pv: 2400,
            amt: 400,
        },
        {
            name: 'Tue',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Wed',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Thurs',
            uv: 2780,
            pv: 3908,
            amt: 1040,
        },
        {
            name: 'Fri',
            uv: 14890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Sat',
            uv: 2390,
            pv: 13800,
            amt: 4500,
        },
        {
            name: 'Sun',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const dataMonth = [
        {
            name: 'Jan',
            uv: 4000,
            pv: 2400,
            amt: 400,
        },
        {
            name: 'Feb',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Mar',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Apr',
            uv: 2780,
            pv: 3908,
            amt: 1040,
        },
        {
            name: 'Jun',
            uv: 14890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'July',
            uv: 2390,
            pv: 13800,
            amt: 4500,
        },
        {
            name: 'Aug',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Sept',
            uv: 14890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Oct',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Nov',
            uv: 4000,
            pv: 2400,
            amt: 400,
        },
        {
            name: 'Dec',
            uv: 3490,
            pv: 4300,
        },
    ];

    const dataYears = [
        {
            name: '2019',
            uv: 4000,
            pv: 2400,
            amt: 400,
        },
        {
            name: '2020',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: '2021',
            uv: 14890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: '2022',
            uv: 2390,
            pv: 13800,
            amt: 4500,
        },
        {
            name: '2023',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const graphFilters = [
        {
            id: 0,
            title: 'Week',
        },
        {
            id: 1,
            title: 'Month',
        },
        {
            id: 2,
            title: 'Year',
        },
    ];

    const { isDarkMode } = useDarkModeStore();

    const fillData = () => {
        switch (activeGraphFilterId) {
            case 0:
                return data;
            case 1:
                return dataMonth;
            case 2:
                return dataYears;
            default:
                return data;
        }
    }


    return (
        <div className={`w-full h-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px]`}>
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-lg tracking-tight'>Audience Overview</h1>
                <div className='w-fit flex justify-center gap-2'>
                    {
                        graphFilters?.map((data) => (
                            <button onClick={() => setActiveGraphFilterId(data?.id)} key={data?.id} className={`border active:scale-95 transition-all duration-200 ease-in-out ${isDarkMode ? 'border-[#173f6d]' : !isDarkMode && activeGraphFilterId == data?.id ? 'border-[#63b1ff] text-white' : 'border-[#63b1ff] text-[color:var(--primary-color)]'} ${activeGraphFilterId == data?.id ? 'bg-[color:var(--primary-color)] text-[color:var(--primary-dark)]' : ''} text-[12px] rounded-[5px] py-1 px-2`}>{data?.title}</button>
                        ))
                    }
                </div>
            </div>
            <div className='w-full mt-7'>
                <ResponsiveContainer width='100%' height={300}>
                    <AreaChart
                        data={fillData()}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 10,
                            bottom: 10,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#454545' : '#c4c4c4'} />
                        <XAxis dataKey="name" fontSize={12} />
                        <YAxis dataKey="uv" fontSize={12} />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="uv"
                            stroke="#66798e"
                            fill="#66798e"
                        />
                        <Area
                            type="monotone"
                            dataKey="pv"
                            stroke="#2f5376"
                            fill="#2f5376"
                        />
                        <CustomArea dataKey="pv" stroke="#2f5376" fill="#2f5376" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default AudienceOverviewGraph