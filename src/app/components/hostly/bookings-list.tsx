import { Calendar, User, DollarSign, MoreVertical } from 'lucide-react';

interface Booking {
  id: string;
  guestName: string;
  propertyName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  amount: number;
  status: 'pending' | 'confirmed' | 'completed';
}

const MOCK_BOOKINGS: Booking[] = [
  {
    id: '1',
    guestName: 'Michael Chen',
    propertyName: 'Modern Beach House',
    checkIn: 'Mar 20, 2026',
    checkOut: 'Mar 25, 2026',
    guests: 4,
    amount: 2250,
    status: 'pending',
  },
  {
    id: '2',
    guestName: 'Emma Rodriguez',
    propertyName: 'Luxury Downtown Penthouse',
    checkIn: 'Mar 15, 2026',
    checkOut: 'Mar 18, 2026',
    guests: 2,
    amount: 1740,
    status: 'confirmed',
  },
  {
    id: '3',
    guestName: 'James Wilson',
    propertyName: 'Rustic Mountain Cabin',
    checkIn: 'Mar 22, 2026',
    checkOut: 'Mar 29, 2026',
    guests: 6,
    amount: 2240,
    status: 'confirmed',
  },
  {
    id: '4',
    guestName: 'Sofia Patel',
    propertyName: 'Tropical Beach Cottage',
    checkIn: 'Feb 10, 2026',
    checkOut: 'Feb 14, 2026',
    guests: 2,
    amount: 780,
    status: 'completed',
  },
  {
    id: '5',
    guestName: 'David Kim',
    propertyName: 'Modern Beach House',
    checkIn: 'Feb 1, 2026',
    checkOut: 'Feb 8, 2026',
    guests: 3,
    amount: 3150,
    status: 'completed',
  },
];

export function BookingsList() {
  const getStatusStyle = (status: Booking['status']) => {
    switch (status) {
      case 'pending':
        return 'bg-[#FEF3C7] text-[#92400E] border-[#FDE68A]';
      case 'confirmed':
        return 'bg-[#DBEAFE] text-[#1E40AF] border-[#BFDBFE]';
      case 'completed':
        return 'bg-[#D1FAE5] text-[#065F46] border-[#A7F3D0]';
      default:
        return 'bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]';
    }
  };

  const getStatusLabel = (status: Booking['status']) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#E2E8F0]">
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Guest</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Property</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Check-in</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Check-out</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Guests</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Amount</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4">Status</th>
            <th className="text-left text-xs font-semibold text-[#64748B] pb-3 px-4"></th>
          </tr>
        </thead>
        <tbody>
          {MOCK_BOOKINGS.map((booking) => (
            <tr
              key={booking.id}
              className="border-b border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors"
            >
              <td className="py-4 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#EADBC8] flex items-center justify-center text-xs font-semibold text-[#0F172A]">
                    {booking.guestName.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="text-sm font-medium text-[#0F172A]">
                    {booking.guestName}
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span className="text-sm text-[#0F172A]">{booking.propertyName}</span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <Calendar className="w-4 h-4" />
                  <span>{booking.checkIn}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <Calendar className="w-4 h-4" />
                  <span>{booking.checkOut}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2 text-sm text-[#64748B]">
                  <User className="w-4 h-4" />
                  <span>{booking.guests}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#0F172A]">
                  <DollarSign className="w-4 h-4" />
                  <span>{booking.amount.toLocaleString()}</span>
                </div>
              </td>
              <td className="py-4 px-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${getStatusStyle(
                    booking.status
                  )}`}
                >
                  {getStatusLabel(booking.status)}
                </span>
              </td>
              <td className="py-4 px-4">
                <button className="p-1 hover:bg-[#E2E8F0] rounded transition-colors">
                  <MoreVertical className="w-4 h-4 text-[#64748B]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
