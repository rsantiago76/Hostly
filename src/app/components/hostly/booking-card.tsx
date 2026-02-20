import { useState } from 'react';
import { HostlyButton } from './button';
import { Calendar, Users, Shield } from 'lucide-react';
import { Link } from 'react-router';

interface BookingCardProps {
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  rating: number;
  reviewCount: number;
}

export function BookingCard({ 
  pricePerNight, 
  cleaningFee, 
  serviceFee,
  rating,
  reviewCount 
}: BookingCardProps) {
  const [checkIn, setCheckIn] = useState('2026-03-20');
  const [checkOut, setCheckOut] = useState('2026-03-25');
  const [guests, setGuests] = useState(2);

  // Calculate number of nights
  const nights = Math.ceil(
    (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24)
  );

  const subtotal = pricePerNight * nights;
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] shadow-lg shadow-black/5 overflow-hidden sticky top-24">
      {/* Header */}
      <div className="p-6 border-b border-[#E2E8F0]">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-[#0F172A]">${pricePerNight}</span>
          <span className="text-[#64748B]">/ night</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-[#0F172A]">★ {rating}</span>
          <span className="text-sm text-[#64748B]">({reviewCount} reviews)</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="p-6 space-y-4">
        {/* Date Inputs */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-[#0F172A] mb-2">
              Check-in
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-[#0F172A] mb-2">
              Check-out
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Guests Input */}
        <div>
          <label className="block text-xs font-medium text-[#0F172A] mb-2">
            Guests
          </label>
          <div className="relative">
            <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#64748B] pointer-events-none" />
            <input
              type="number"
              min="1"
              max="16"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
              className="w-full pl-10 pr-3 py-3 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-lg text-sm text-[#0F172A] focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all"
            />
          </div>
        </div>

        {/* Reserve Button */}
        <Link to="/checkout" className="block">
          <HostlyButton variant="primary" size="lg" className="w-full">
            Reserve
          </HostlyButton>
        </Link>

        <p className="text-xs text-center text-[#64748B]">
          You won't be charged yet
        </p>

        {/* Price Breakdown */}
        <div className="pt-4 border-t border-[#E2E8F0] space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#64748B]">
              ${pricePerNight} × {nights} {nights === 1 ? 'night' : 'nights'}
            </span>
            <span className="text-[#0F172A] font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#64748B]">Cleaning fee</span>
            <span className="text-[#0F172A] font-medium">${cleaningFee.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#64748B]">Service fee</span>
            <span className="text-[#0F172A] font-medium">${serviceFee.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="pt-4 border-t border-[#E2E8F0]">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#0F172A]">Total</span>
            <span className="text-xl font-bold text-[#0F172A]">${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Secure Payment Indicator */}
        <div className="pt-4 flex items-center justify-center gap-2 text-xs text-[#64748B]">
          <Shield className="w-4 h-4 text-[#3B82F6]" />
          <span>Secure payment powered by Stripe</span>
        </div>
      </div>
    </div>
  );
}