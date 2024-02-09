'use client'
import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import useDarkModeStore from '@/app/stores/themeStore';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const StatusButton = ({ color, btnText }: { color: string, btnText: string }) => {
    return (
        <button className={`px-3 py-0.5 bg-[${color}] text-white rounded-full`} style={{ backgroundColor: color }}>{btnText}</button>
    )
}

const RecentOrders = () => {
    const { isDarkMode } = useDarkModeStore();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Number of items per page

    // Sample orders data (omitted for brevity)
    const ordersData = [
        {
            id: 0,
            orderId: '855212',
            customer: 'Alex',
            orderDate: '28/10/23',
            paymentMethod: 'Cash',
            deliveryDate: '02/11/23',
            totalAmount: '$05.22',
            status: 'paid',
        },
        {
            id: 1,
            orderId: '123456',
            customer: 'John',
            orderDate: '15/09/23',
            paymentMethod: 'Credit Card',
            deliveryDate: '20/09/23',
            totalAmount: '$78.90',
            status: 'delivered',
        },
        {
            id: 2,
            orderId: '789012',
            customer: 'Emily',
            orderDate: '03/11/23',
            paymentMethod: 'PayPal',
            deliveryDate: '07/11/23',
            totalAmount: '$123.45',
            status: 'shipped',
        },
        {
            id: 3,
            orderId: '345678',
            customer: 'Michael',
            orderDate: '22/08/23',
            paymentMethod: 'Bitcoin',
            deliveryDate: '28/08/23',
            totalAmount: '$678.90',
            status: 'cancelled',
        },
        {
            id: 4,
            orderId: '901234',
            customer: 'Sarah',
            orderDate: '10/07/23',
            paymentMethod: 'Bank Transfer',
            deliveryDate: '15/07/23',
            totalAmount: '$234.56',
            status: 'pending',
        },
        {
            id: 5,
            orderId: '678901',
            customer: 'David',
            orderDate: '05/06/23',
            paymentMethod: 'Cash',
            deliveryDate: '10/06/23',
            totalAmount: '$345.67',
            status: 'shipped',
        },
        {
            id: 6,
            orderId: '234567',
            customer: 'Emma',
            orderDate: '18/05/23',
            paymentMethod: 'Credit Card',
            deliveryDate: '23/05/23',
            totalAmount: '$456.78',
            status: 'delivered',
        },
        {
            id: 7,
            orderId: '890123',
            customer: 'James',
            orderDate: '09/04/23',
            paymentMethod: 'PayPal',
            deliveryDate: '14/04/23',
            totalAmount: '$567.89',
            status: 'paid',
        },
        {
            id: 8,
            orderId: '456789',
            customer: 'Olivia',
            orderDate: '26/03/23',
            paymentMethod: 'Bitcoin',
            deliveryDate: '31/03/23',
            totalAmount: '$678.90',
            status: 'cancelled',
        },
        {
            id: 9,
            orderId: '012345',
            customer: 'Daniel',
            orderDate: '13/02/23',
            paymentMethod: 'Bank Transfer',
            deliveryDate: '18/02/23',
            totalAmount: '$789.01',
            status: 'pending',
        },
        {
            id: 10,
            orderId: '543210',
            customer: 'Sophia',
            orderDate: '30/01/23',
            paymentMethod: 'Cash',
            deliveryDate: '04/02/23',
            totalAmount: '$890.12',
            status: 'paid',
        },
        {
            id: 11,
            orderId: '210987',
            customer: 'William',
            orderDate: '17/12/22',
            paymentMethod: 'Credit Card',
            deliveryDate: '22/12/22',
            totalAmount: '$901.23',
            status: 'delivered',
        },
        {
            id: 12,
            orderId: '654321',
            customer: 'Isabella',
            orderDate: '04/11/22',
            paymentMethod: 'PayPal',
            deliveryDate: '09/11/22',
            totalAmount: '$012.34',
            status: 'shipped',
        },
        {
            id: 13,
            orderId: '098765',
            customer: 'Liam',
            orderDate: '21/10/22',
            paymentMethod: 'Bitcoin',
            deliveryDate: '26/10/22',
            totalAmount: '$123.45',
            status: 'paid',
        },
        {
            id: 14,
            orderId: '543210',
            customer: 'Charlotte',
            orderDate: '08/09/22',
            paymentMethod: 'Bank Transfer',
            deliveryDate: '13/09/22',
            totalAmount: '$234.56',
            status: 'pending',
        },
        {
            id: 15,
            orderId: '109876',
            customer: 'Mason',
            orderDate: '25/08/22',
            paymentMethod: 'Cash',
            deliveryDate: '30/08/22',
            totalAmount: '$345.67',
            status: 'shipped',
        },
        {
            id: 16,
            orderId: '654321',
            customer: 'Amelia',
            orderDate: '12/07/22',
            paymentMethod: 'Credit Card',
            deliveryDate: '17/07/22',
            totalAmount: '$456.78',
            status: 'delivered',
        },
        {
            id: 17,
            orderId: '567890',
            customer: 'Ethan',
            orderDate: '29/06/22',
            paymentMethod: 'PayPal',
            deliveryDate: '04/07/22',
            totalAmount: '$567.89',
            status: 'paid',
        },
        {
            id: 18,
            orderId: '123456',
            customer: 'Ava',
            orderDate: '16/05/22',
            paymentMethod: 'Bitcoin',
            deliveryDate: '21/05/22',
            totalAmount: '$678.90',
            status: 'shipped',
        },
        {
            id: 19,
            orderId: '789012',
            customer: 'Noah',
            orderDate: '03/04/22',
            paymentMethod: 'Bank Transfer',
            deliveryDate: '08/04/22',
            totalAmount: '$789.01',
            status: 'cancelled',
        },
        {
            id: 20,
            orderId: '987654',
            customer: 'Sophia',
            orderDate: '20/03/22',
            paymentMethod: 'Cash',
            deliveryDate: '25/03/22',
            totalAmount: '$890.12',
            status: 'paid',
        },
        {
            id: 21,
            orderId: '543210',
            customer: 'William',
            orderDate: '07/02/22',
            paymentMethod: 'Credit Card',
            deliveryDate: '12/02/22',
            totalAmount: '$901.23',
            status: 'delivered',
        },
        {
            id: 22,
            orderId: '678901',
            customer: 'Isabella',
            orderDate: '25/01/22',
            paymentMethod: 'PayPal',
            deliveryDate: '30/01/22',
            totalAmount: '$012.34',
            status: 'shipped',
        },
        {
            id: 23,
            orderId: '109876',
            customer: 'Liam',
            orderDate: '12/12/21',
            paymentMethod: 'Bitcoin',
            deliveryDate: '17/12/21',
            totalAmount: '$123.45',
            status: 'paid',
        },
        {
            id: 24,
            orderId: '987654',
            customer: 'Charlotte',
            orderDate: '29/11/21',
            paymentMethod: 'Bank Transfer',
            deliveryDate: '04/12/21',
            totalAmount: '$234.56',
            status: 'pending',
        }
    ];

    const tableHeaders = [
        'Order Id',
        'Customer',
        'Order Date',
        'Payment Method',
        'Delivery Date',
        'Total Amount',
        'Status',
        'Action',
    ];

    // Calculate the indexes of the items to be displayed on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ordersData.slice(indexOfFirstItem, indexOfLastItem);

    // Total number of pages
    const totalPages = Math.ceil(ordersData.length / itemsPerPage);

    const getStatusButton = (orderStatus: string) => {
        let color, btnText;

        switch (orderStatus) {
            case 'paid':
                color = '#008857';
                btnText = 'PAID';
                break;
            case 'delivered':
                color = '#2592fc';
                btnText = 'DELIVERED';
                break;
            case 'pending':
                color = '#ff905b';
                btnText = 'PENDING';
                break;
            case 'shipped':
                color = '#6c757d';
                btnText = 'SHIPPED';
                break;
            case 'cancelled':
                color = '#df3943';
                btnText = 'CANCELLED';
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
                <h1 className='text-lg tracking-tight'>Recent Orders</h1>
                <div className='w-fit'>
                    <div className={`hidden md:flex items-center pl-2 rounded-[8px] bg-transparent ${isDarkMode ? ' border border-gray-600' : ' border border-gray-300'}`}>
                        <IoSearch className={`${isDarkMode ? 'text-white' : 'text-[color:var(--primary-dark)]'}`} size={15} />
                        <input type="text" className={`w-full min-w-[200px] max-w-[300px] px-2 py-1 outline-none rounded-[8px] text-[13px] ${isDarkMode ? 'bg-[color:var(--primary-dark)] text-gray-200' : 'bg-white text-black'}`} placeholder='Search' />
                    </div>
                </div>
            </div>

            {/* Table */}
            <div className='w-full p-4'>
                <div className='w-full overflow-x-scroll overflow-scroll-hide-scrollbar'>
                    <div className='w-full flex flex-col min-w-[870px] pb-2'>
                        {/* Table headers */}
                        <div className={`mb-2 w-full grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_1fr_100px] justify-items-center place-items-center border border-dashed ${isDarkMode ? 'bg-[#3a3b3c] border-[#494949]' : 'bg-[#dadada] text-[color:var(--primary-dark)] border-[#cccccc]'} rounded-[5px]`}>
                            {tableHeaders.map(header => (
                                <h1 key={header} className='text-[13px] font-[600] w-full py-3 text-center'>{header}</h1>
                            ))}
                        </div>

                        {/* Table body */}
                        {currentItems.map(item => (
                            <div key={item.id} className='w-full grid grid-cols-[80px_1fr_1fr_1fr_1fr_1fr_1fr_100px]'>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.orderId}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.customer}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.orderDate}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.paymentMethod}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.deliveryDate}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{item.totalAmount}</h1>
                                <h1 className='text-[12px] font-[500] w-full py-3 text-center text-gray-500'>{getStatusButton(item?.status)}</h1>
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

export default RecentOrders;
