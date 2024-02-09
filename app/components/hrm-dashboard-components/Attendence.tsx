'use client'
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import useDarkModeStore from '@/app/stores/themeStore';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import SecondaryButton from '@/app/components/global-components/SecondaryButton';

const StatusButton = ({ color, btnText }: { color: string, btnText: string }) => {
    return (
        <button className={`px-3 py-0.5 bg-[${color}] text-white rounded-full`} style={{ backgroundColor: color }}>{btnText}</button>
    )
}

const Attendence = () => {
    const { isDarkMode } = useDarkModeStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6; // Number of items per page

    // Sample orders data (omitted for brevity)
    const employees = [
        { id: 1, employee: 'John', checkIn: '09:00am', checkOut: '05:00pm', status: 'present' },
        { id: 2, employee: 'Emily', checkIn: '09:15am', checkOut: '06:00pm', status: 'present' },
        { id: 3, employee: 'Michael', checkIn: '09:30am', checkOut: '06:30pm', status: 'absent' },
        { id: 4, employee: 'Sophia', checkIn: '09:10am', checkOut: '06:20pm', status: 'present' },
        { id: 5, employee: 'William', checkIn: '09:20am', checkOut: '06:10pm', status: 'present' },
        { id: 6, employee: 'Olivia', checkIn: '09:25am', checkOut: '06:25pm', status: 'on leave' },
        { id: 7, employee: 'James', checkIn: '09:35am', checkOut: '06:35pm', status: 'present' },
        { id: 8, employee: 'Emma', checkIn: '09:05am', checkOut: '06:15pm', status: 'present' },
        { id: 9, employee: 'Alexander', checkIn: '09:45am', checkOut: '06:45pm', status: 'present' },
        { id: 10, employee: 'Mia', checkIn: '09:55am', checkOut: '06:55pm', status: 'present' },
        { id: 11, employee: 'Benjamin', checkIn: '09:40am', checkOut: '06:40pm', status: 'absent' },
        { id: 12, employee: 'Charlotte', checkIn: '09:50am', checkOut: '06:50pm', status: 'present' },
        { id: 13, employee: 'Daniel', checkIn: '09:12am', checkOut: '06:22pm', status: 'present' },
        { id: 14, employee: 'Ava', checkIn: '09:17am', checkOut: '06:27pm', status: 'on leave' },
        { id: 15, employee: 'Jacob', checkIn: '09:37am', checkOut: '06:47pm', status: 'present' },
        { id: 16, employee: 'Sofia', checkIn: '09:47am', checkOut: '06:57pm', status: 'present' },
        { id: 17, employee: 'Ethan', checkIn: '09:16am', checkOut: '06:26pm', status: 'present' },
        { id: 18, employee: 'Isabella', checkIn: '09:48am', checkOut: '06:58pm', status: 'absent' },
        { id: 19, employee: 'Alexander', checkIn: '09:08am', checkOut: '06:18pm', status: 'present' },
        { id: 20, employee: 'Amelia', checkIn: '09:28am', checkOut: '06:38pm', status: 'present' },
        { id: 21, employee: 'Mason', checkIn: '09:38am', checkOut: '06:48pm', status: 'on leave' },
        { id: 22, employee: 'Evelyn', checkIn: '09:58am', checkOut: '06:08pm', status: 'present' },
        { id: 23, employee: 'Liam', checkIn: '09:32am', checkOut: '06:42pm', status: 'absent' },
        { id: 24, employee: 'Harper', checkIn: '09:22am', checkOut: '06:32pm', status: 'present' },
        { id: 25, employee: 'Logan', checkIn: '09:42am', checkOut: '06:52pm', status: 'present' }
    ];

    const tableHeaders = [
        'Sl No',
        'Employee',
        'Status',
        'Check In',
        'Check Out',
        'Action',
    ];

    // Calculate the indexes of the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

    // Total number of pages
    const totalPages = Math.ceil(employees.length / itemsPerPage);

    const getStatusButton = (orderStatus: string) => {
        let color, btnText;

        switch (orderStatus) {
            case 'present':
                color = '#2592fc';
                btnText = 'Present';
                break;
            case 'absent':
                color = '#df3943';
                btnText = 'Absent';
                break;
            case 'on leave':
                color = '#ff905b';
                btnText = 'On leave';
                break;
            default:
                color = '';
                btnText = '';
        }

        return <StatusButton color={color} btnText={btnText} />;
    };

    return (
        <div className={`w-full h-full ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-white' : 'text-[color:var(--primary-dark)] bg-white'} rounded-[5px]`}>
            {/* Header */}
            <div className={`p-3 px-5 flex justify-between items-center border-b ${isDarkMode ? 'border-b-[#494949]' : 'border-b-[#cccccc]'} border-dashed`}>
                <h1 className='text-lg tracking-tight'>Attendence</h1>
                <div className='w-fit'>
                    <SecondaryButton btnText='View all' />
                </div>
            </div>

            {/* Table */}
            <div className='w-full p-4'>
                <div className='w-full overflow-x-scroll overflow-scroll-hide-scrollbar'>
                    <div className='w-full flex flex-col min-w-[870px] pb-2'>
                        {/* Table headers */}
                        <div className={`mb-2 w-full grid grid-cols-[80px_1fr_1fr_1fr_1fr_100px] justify-items-center place-items-center border border-dashed ${isDarkMode ? 'bg-[#3a3b3c] border-[#494949]' : 'bg-[#dadada] text-[color:var(--primary-dark)] border-[#cccccc]'} rounded-[5px]`}>
                            {tableHeaders.map(header => (
                                <h1 key={header} className='text-[13px] font-[600] w-full py-3 text-center'>{header}</h1>
                            ))}
                        </div>

                        {/* Table body */}
                        {currentItems.map(item => (
                            <div key={item.id} className='w-full grid grid-cols-[80px_1fr_1fr_1fr_1fr_100px]'>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.id}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.employee}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{getStatusButton(item?.status)}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.checkIn}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.checkOut}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>Action</h1>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pagination */}
                <div className={`w-full flex justify-between items-center px-4 py-3 border border-dashed rounded-[5px] text-[12px] ${isDarkMode ? 'border-[#494949]' : 'border-[#cccccc]'}`}>
                    <h1 className='text-[14px]'>Showing {currentPage} out of {totalPages} pages</h1>
                    <div className='flex'>
                        {/* Previous page button */}
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(prevPage => prevPage - 1)}
                            className={`py-0.5 px-3 rounded-md focus:outline-none ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'} ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            <FaAngleLeft />
                        </button>


                        {/* Page numbers */}
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <span
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-2 py-1 mx-1 rounded-md text-[13px] focus:outline-none bg-[color:var(--primary-color)] ${currentPage === page  ? 'bg-[color:var(--primary-color)] text-white' : 'bg-gray-400 text-[color:var(--primary-dark)]'}`}
                            >
                                {page}
                            </span>
                        ))}

                        {/* Next page button */}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(prevPage => prevPage + 1)}
                            className={`py-0.5 px-3 rounded-md focus:outline-none ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600'} ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Attendence;
