import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type DayStatus = 'available' | 'booked' | 'blocked' | 'today';

interface CalendarDay {
  date: number;
  status: DayStatus;
  isCurrentMonth: boolean;
}

export function CalendarGrid() {
  const [currentMonth] = useState(new Date(2026, 1)); // February 2026

  // Generate calendar days
  const generateCalendarDays = (): CalendarDay[] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: CalendarDay[] = [];

    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,
        status: 'available',
        isCurrentMonth: false,
      });
    }

    // Add current month's days with mock statuses
    for (let i = 1; i <= daysInMonth; i++) {
      let status: DayStatus = 'available';
      
      // Today
      if (i === 20) {
        status = 'today';
      }
      // Some booked days
      else if ([5, 6, 7, 12, 13, 14, 15, 22, 23, 24, 25, 26].includes(i)) {
        status = 'booked';
      }
      // Some blocked days
      else if ([28, 29].includes(i)) {
        status = 'blocked';
      }

      days.push({
        date: i,
        status,
        isCurrentMonth: true,
      });
    }

    // Add next month's days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        status: 'available',
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getStatusStyle = (status: DayStatus, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) {
      return 'text-[#CBD5E1] bg-white';
    }

    switch (status) {
      case 'today':
        return 'text-white bg-[#3B82F6] font-semibold ring-2 ring-[#3B82F6] ring-offset-2';
      case 'booked':
        return 'text-[#0F172A] bg-[#EADBC8]';
      case 'blocked':
        return 'text-[#64748B] bg-[#F1F5F9] line-through';
      case 'available':
        return 'text-[#0F172A] bg-white hover:bg-[#F8FAFC] cursor-pointer';
      default:
        return 'text-[#0F172A] bg-white';
    }
  };

  return (
    <div>
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-semibold text-[#0F172A]">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4 text-[#64748B]" />
          </button>
          <button className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4 text-[#64748B]" />
          </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2 mb-2">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs font-semibold text-[#64748B] py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`
              aspect-square flex items-center justify-center text-sm rounded-lg
              transition-all
              ${getStatusStyle(day.status, day.isCurrentMonth)}
            `}
          >
            {day.date}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-[#E2E8F0]">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-white border-2 border-[#E2E8F0]"></div>
          <span className="text-xs text-[#64748B]">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#EADBC8]"></div>
          <span className="text-xs text-[#64748B]">Booked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#F1F5F9]"></div>
          <span className="text-xs text-[#64748B]">Blocked</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#3B82F6]"></div>
          <span className="text-xs text-[#64748B]">Today</span>
        </div>
      </div>
    </div>
  );
}
