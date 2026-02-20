import { HostlyButton } from './button';
import { Calendar, Users, Star } from 'lucide-react';

export function BookingSummary() {
  const propertyImage = 'https://images.unsplash.com/photo-1616003618788-413cd29e3f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWFjaCUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxNTA0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080';
  
  const pricePerNight = 450;
  const nights = 5;
  const cleaningFee = 75;
  const serviceFee = 85;
  const subtotal = pricePerNight * nights + cleaningFee + serviceFee;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + taxes;

  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 sticky top-24">
      {/* Property Info */}
      <div className="mb-6">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
          <img 
            src={propertyImage} 
            alt="Modern Beach House"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-semibold text-[#0F172A] mb-2">
          Modern Beach House with Ocean Views
        </h3>
        <div className="flex items-center gap-1.5 text-sm text-[#64748B]">
          <Star className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D]" />
          <span className="font-medium text-[#0F172A]">4.9</span>
          <span>(127 reviews)</span>
        </div>
      </div>

      {/* Booking Details */}
      <div className="space-y-4 pb-6 border-b border-[#E2E8F0]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <Calendar className="w-4 h-4" />
            <span>Dates</span>
          </div>
          <span className="text-sm font-medium text-[#0F172A]">Mar 20 - Mar 25</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <Users className="w-4 h-4" />
            <span>Guests</span>
          </div>
          <span className="text-sm font-medium text-[#0F172A]">2 guests</span>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 py-6 border-b border-[#E2E8F0]">
        <h3 className="font-semibold text-[#0F172A] mb-3">Price breakdown</h3>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748B]">${pricePerNight} × {nights} nights</span>
          <span className="text-[#0F172A]">${pricePerNight * nights}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748B]">Cleaning fee</span>
          <span className="text-[#0F172A]">${cleaningFee}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748B]">Service fee</span>
          <span className="text-[#0F172A]">${serviceFee}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-[#64748B]">Taxes</span>
          <span className="text-[#0F172A]">${taxes}</span>
        </div>
      </div>

      {/* Total */}
      <div className="pt-6 pb-6 border-b border-[#E2E8F0]">
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-[#0F172A]">Total (USD)</span>
          <span className="text-2xl font-bold text-[#0F172A]">${total}</span>
        </div>
      </div>

      {/* Confirm Button */}
      <div className="pt-6">
        <HostlyButton 
          variant="primary" 
          size="lg" 
          className="w-full"
          type="submit"
        >
          Confirm & Pay
        </HostlyButton>
        <p className="text-xs text-center text-[#64748B] mt-4">
          You won't be charged until your reservation is confirmed
        </p>
      </div>

      {/* Cancellation Policy */}
      <div className="mt-6 p-4 bg-[#F8FAFC] rounded-xl">
        <h4 className="text-sm font-semibold text-[#0F172A] mb-2">
          Cancellation policy
        </h4>
        <p className="text-xs text-[#64748B] leading-relaxed">
          Free cancellation for 48 hours. Cancel before Mar 13 for a full refund. 
          After that, cancel before check-in for a 50% refund.
        </p>
      </div>
    </div>
  );
}
