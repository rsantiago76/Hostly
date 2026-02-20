import { useState } from 'react';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';

type DateStatus = 'available' | 'reserved' | 'blocked';

interface CalendarDate {
  date: number;
  status: DateStatus;
  price: number;
  isCurrentMonth: boolean;
  pricingRule?: string;
  guestName?: string;
}

interface AvailabilityCalendarProps {
  className?: string;
}

export function AvailabilityCalendar({ className = '' }: AvailabilityCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 2)); // March 2026
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  // Generate calendar data with pricing
  const generateCalendarDays = (): CalendarDate[] => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days: CalendarDate[] = [];

    // Add previous month's days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      days.push({
        date: prevMonthLastDay - i,
        status: 'available',
        price: 0,
        isCurrentMonth: false,
      });
    }

    // Add current month's days with pricing and statuses
    for (let i = 1; i <= daysInMonth; i++) {
      let status: DateStatus = 'available';
      let price = 450; // Base price
      let pricingRule = 'Base rate';
      let guestName: string | undefined;

      const dayOfWeek = new Date(year, month, i).getDay();
      
      // Weekend pricing (Friday & Saturday)
      if (dayOfWeek === 5 || dayOfWeek === 6) {
        price = 550;
        pricingRule = 'Weekend rate (+22%)';
      }

      // Reserved dates with guest names
      if ([5, 6, 7, 8].includes(i)) {
        status = 'reserved';
        guestName = 'Michael Chen';
        pricingRule = 'Booked';
      } else if ([12, 13, 14].includes(i)) {
        status = 'reserved';
        guestName = 'Emma Rodriguez';
        pricingRule = 'Booked';
      } else if ([22, 23, 24, 25, 26].includes(i)) {
        status = 'reserved';
        guestName = 'David Kim';
        pricingRule = 'Booked';
      }
      // Blocked dates
      else if ([28, 29, 30, 31].includes(i)) {
        status = 'blocked';
        price = 0;
        pricingRule = 'Blocked for maintenance';
      }
      // Holiday pricing
      else if ([17].includes(i)) {
        price = 650;
        pricingRule = 'Holiday pricing (+44%)';
      }
      // Special discount
      else if ([3, 4, 10, 11].includes(i)) {
        price = 380;
        pricingRule = 'Early week discount (-16%)';
      }

      days.push({
        date: i,
        status,
        price,
        isCurrentMonth: true,
        pricingRule,
        guestName,
      });
    }

    // Add next month's days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: i,
        status: 'available',
        price: 0,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDateStyle = (day: CalendarDate) => {
    if (!day.isCurrentMonth) {
      return 'bg-[#F8FAFC] text-[#CBD5E1] cursor-not-allowed';
    }

    switch (day.status) {
      case 'reserved':
        return 'bg-[#FEE2E2] text-[#991B1B] border-2 border-[#FCA5A5] cursor-default';
      case 'blocked':
        return 'bg-[#F1F5F9] text-[#94A3B8] cursor-not-allowed';
      case 'available':
        return 'bg-white text-[#0F172A] border-2 border-[#E2E8F0] hover:border-[#3B82F6] hover:shadow-md cursor-pointer';
      default:
        return 'bg-white text-[#0F172A] border border-[#E2E8F0]';
    }
  };

  return (
    <div className={`bg-white rounded-2xl border border-[#E2E8F0] p-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-[#0F172A] mb-1">
            Availability & Pricing
          </h2>
          <p className="text-sm text-[#64748B]">
            Manage your calendar and set dynamic pricing
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={goToPreviousMonth}
            className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="w-5 h-5 text-[#64748B]" />
          </button>
          <div className="min-w-[160px] text-center">
            <span className="text-base font-semibold text-[#0F172A]">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
          </div>
          <button
            onClick={goToNextMonth}
            className="p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="w-5 h-5 text-[#64748B]" />
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

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {calendarDays.map((day, index) => (
          <div key={index} className="relative">
            <div
              className={`
                relative aspect-square flex flex-col items-center justify-center rounded-lg
                transition-all
                ${getDateStyle(day)}
              `}
              onMouseEnter={() => day.isCurrentMonth && setHoveredDate(day.date)}
              onMouseLeave={() => setHoveredDate(null)}
            >
              {/* Date Number */}
              <span className={`text-sm font-semibold ${day.status === 'blocked' ? 'line-through' : ''}`}>
                {day.date}
              </span>
              
              {/* Price */}
              {day.isCurrentMonth && day.status !== 'blocked' && (
                <span className={`text-xs mt-0.5 ${
                  day.status === 'reserved' ? 'text-[#991B1B]' : 'text-[#64748B]'
                }`}>
                  ${day.price}
                </span>
              )}

              {/* Tooltip on Hover */}
              {hoveredDate === day.date && day.isCurrentMonth && (
                <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-48">
                  <div className="bg-[#0F172A] text-white text-xs rounded-lg p-3 shadow-xl">
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                      <div className="border-4 border-transparent border-t-[#0F172A]"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold">
                          {currentMonth.toLocaleString('default', { month: 'short' })} {day.date}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                          day.status === 'available' 
                            ? 'bg-[#D1FAE5] text-[#065F46]'
                            : day.status === 'reserved'
                            ? 'bg-[#FEE2E2] text-[#991B1B]'
                            : 'bg-[#F1F5F9] text-[#64748B]'
                        }`}>
                          {day.status.charAt(0).toUpperCase() + day.status.slice(1)}
                        </span>
                      </div>
                      
                      {day.status === 'reserved' && day.guestName && (
                        <div className="pt-2 border-t border-white/20">
                          <p className="text-white/60 text-[10px] mb-1">Guest</p>
                          <p className="font-medium">{day.guestName}</p>
                        </div>
                      )}
                      
                      {day.status !== 'blocked' && (
                        <div className="pt-2 border-t border-white/20">
                          <p className="text-white/60 text-[10px] mb-1">
                            {day.status === 'reserved' ? 'Booking details' : 'Pricing rule'}
                          </p>
                          <p className="font-medium">{day.pricingRule}</p>
                          {day.status === 'available' && (
                            <p className="text-white/80 mt-1">${day.price}/night</p>
                          )}
                        </div>
                      )}
                      
                      {day.status === 'blocked' && (
                        <div className="pt-2 border-t border-white/20">
                          <p className="text-white/60 text-[10px] mb-1">Reason</p>
                          <p className="font-medium">{day.pricingRule}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Legend & Stats */}
      <div className="space-y-4 pt-6 border-t border-[#E2E8F0]">
        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-white border-2 border-[#E2E8F0]"></div>
            <span className="text-xs text-[#64748B]">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#FEE2E2] border-2 border-[#FCA5A5]"></div>
            <span className="text-xs text-[#64748B]">Reserved</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#F1F5F9]"></div>
            <span className="text-xs text-[#64748B]">Blocked</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#F8FAFC] rounded-lg p-3">
            <p className="text-xs text-[#64748B] mb-1">Available nights</p>
            <p className="text-lg font-bold text-[#0F172A]">
              {calendarDays.filter(d => d.isCurrentMonth && d.status === 'available').length}
            </p>
          </div>
          <div className="bg-[#F8FAFC] rounded-lg p-3">
            <p className="text-xs text-[#64748B] mb-1">Reserved nights</p>
            <p className="text-lg font-bold text-[#0F172A]">
              {calendarDays.filter(d => d.isCurrentMonth && d.status === 'reserved').length}
            </p>
          </div>
          <div className="bg-[#F8FAFC] rounded-lg p-3">
            <p className="text-xs text-[#64748B] mb-1">Avg. price/night</p>
            <p className="text-lg font-bold text-[#0F172A]">
              ${Math.round(
                calendarDays
                  .filter(d => d.isCurrentMonth && d.status === 'available')
                  .reduce((sum, d) => sum + d.price, 0) /
                calendarDays.filter(d => d.isCurrentMonth && d.status === 'available').length
              )}
            </p>
          </div>
        </div>

        {/* Info Note */}
        <div className="flex items-start gap-2 p-4 bg-[#DBEAFE] rounded-lg">
          <Info className="w-4 h-4 text-[#3B82F6] mt-0.5 flex-shrink-0" />
          <p className="text-xs text-[#1E40AF] leading-relaxed">
            <strong>Pricing tips:</strong> Weekend rates are 22% higher. Consider adding holiday pricing for peak demand periods to maximize your earnings.
          </p>
        </div>
      </div>
    </div>
  );
}
