'use client'
import useDarkModeStore from '@/app/stores/themeStore';
import React, { useState } from 'react';

const CustomCalendar: React.FC = () => {
  // Initialize state for the selected date
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Function to handle click on a date
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  // Function to generate an array of dates for a given month and year
  const generateDatesArray = (year: number, month: number) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay(); // Get the starting day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const datesArray = [];

    // Add blank spaces for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      datesArray.push(null);
    }

    // Add dates for the current month
    for (let i = 1; i <= daysInMonth; i++) {
      datesArray.push(new Date(year, month, i));
    }

    return datesArray;
  };

  // Get the current date
  const currentDate = new Date();

  // Get the current month and year
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Generate an array of dates for the current month
  const datesArray = generateDatesArray(currentYear, currentMonth);

  
  const { isDarkMode } = useDarkModeStore();

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-[color:var(--primary-dark)] border-gray-600 text-white' : 'bg-white text-[color:var(--primary-dark)] border-gray-300'} border min-w-[350px] rounded-[7px]`}>
      <div className="grid grid-cols-7 gap-1">
        {/* Render day labels */}
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-[13px]">{day}</div>
        ))}
        {/* Render dates */}
        {datesArray.map((date, index) => (
          <div
            key={index}
            className={`text-center p-2 cursor-pointer ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-300'} rounded-[5px] text-[15px] ${
              !date ? 'text-gray-400' : '' // Disable blank spaces
            } 
            ${date && date.toDateString() === currentDate.toDateString() ? 'bg-[color:var(--primary-color)] text-white' : ''} 
            ${selectedDate && date && date.toDateString() === selectedDate.toDateString() ? 'bg-[color:var(--primary-color)] text-white' : ''}`} // Highlight selected date
            onClick={() => date && handleDateClick(date)}
          >
            {date && date.getDate()}
          </div>
        ))}
      </div>
      {/* Display selected date */}
      {selectedDate && (
        <div className="mt-4">
          Selected Date: {selectedDate.toDateString()}
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;
