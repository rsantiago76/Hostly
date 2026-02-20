import { HostlyLogo } from '../components/hostly/logo';
import { HostlyButton } from '../components/hostly/button';
import { AvailabilityCalendar } from '../components/hostly/availability-calendar';
import { ArrowLeft, Settings, Download, Upload } from 'lucide-react';
import { Link } from 'react-router';

export function PropertyCalendarPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <HostlyLogo />
              <div className="h-6 w-px bg-[#E2E8F0]"></div>
              <div>
                <h1 className="text-lg font-semibold text-[#0F172A]">
                  Modern Beach House with Ocean Views
                </h1>
                <p className="text-sm text-[#64748B]">Malibu, California</p>
              </div>
            </div>
            <Link to="/host/dashboard">
              <HostlyButton variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </HostlyButton>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#0F172A] mb-1">
              Calendar & Pricing
            </h2>
            <p className="text-sm text-[#64748B]">
              Manage availability and set dynamic pricing for your property
            </p>
          </div>
          <div className="flex items-center gap-3">
            <HostlyButton variant="ghost" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              Import dates
            </HostlyButton>
            <HostlyButton variant="ghost" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export calendar
            </HostlyButton>
            <HostlyButton variant="secondary" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Pricing rules
            </HostlyButton>
          </div>
        </div>

        {/* Calendar Component */}
        <AvailabilityCalendar />

        {/* Additional Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bulk Actions */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
              Bulk actions
            </h3>
            <div className="space-y-3">
              <button className="w-full px-4 py-3 text-left text-sm font-medium text-[#0F172A] bg-[#F8FAFC] hover:bg-[#E2E8F0] rounded-lg transition-colors">
                Block multiple dates
              </button>
              <button className="w-full px-4 py-3 text-left text-sm font-medium text-[#0F172A] bg-[#F8FAFC] hover:bg-[#E2E8F0] rounded-lg transition-colors">
                Apply pricing rule
              </button>
              <button className="w-full px-4 py-3 text-left text-sm font-medium text-[#0F172A] bg-[#F8FAFC] hover:bg-[#E2E8F0] rounded-lg transition-colors">
                Clear availability
              </button>
            </div>
          </div>

          {/* Smart Pricing */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-1">
                  Smart pricing
                </h3>
                <p className="text-sm text-[#64748B]">
                  Automatically adjust rates based on demand
                </p>
              </div>
              <div className="relative inline-flex items-center">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  id="smart-pricing"
                />
                <label
                  htmlFor="smart-pricing"
                  className="w-11 h-6 bg-[#E2E8F0] rounded-full cursor-pointer peer-checked:bg-[#3B82F6] transition-colors relative"
                >
                  <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></span>
                </label>
              </div>
            </div>
            <div className="space-y-2 text-sm text-[#64748B]">
              <div className="flex items-center justify-between">
                <span>Minimum price</span>
                <span className="font-semibold text-[#0F172A]">$350</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Maximum price</span>
                <span className="font-semibold text-[#0F172A]">$750</span>
              </div>
            </div>
            <HostlyButton variant="secondary" size="sm" className="w-full mt-4">
              Configure settings
            </HostlyButton>
          </div>
        </div>
      </main>
    </div>
  );
}
