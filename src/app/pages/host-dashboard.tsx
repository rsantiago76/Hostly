import { useState } from 'react';
import { DashboardSidebar } from '../components/hostly/dashboard-sidebar';
import { StatCard } from '../components/hostly/stat-card';
import { CalendarGrid } from '../components/hostly/calendar-grid';
import { BookingsList } from '../components/hostly/bookings-list';
import { Home, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router';

type DashboardView = 'dashboard' | 'listings' | 'bookings' | 'calendar' | 'reviews' | 'payouts';

export function HostDashboardPage() {
  const [activeView, setActiveView] = useState<DashboardView>('dashboard');

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <DashboardSidebar activeView={activeView} onViewChange={setActiveView} />

      {/* Main Content */}
      <div className="flex-1 lg:ml-64">
        {/* Header */}
        <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#0F172A]">Dashboard</h1>
                <p className="text-sm text-[#64748B] mt-1">Welcome back, Sarah</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-sm font-medium text-[#0F172A] bg-white border-2 border-[#E2E8F0] rounded-lg hover:border-[#3B82F6] transition-colors">
                  View as guest
                </button>
                <div className="w-10 h-10 rounded-full bg-[#EADBC8] flex items-center justify-center text-[#0F172A] font-semibold">
                  SJ
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 max-w-[1600px]">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Upcoming stays"
              value="12"
              subtitle="Next 30 days"
              icon={<Home className="w-5 h-5" />}
              trend={{ value: 8, isPositive: true }}
              iconBgColor="bg-[#DBEAFE]"
              iconColor="text-[#3B82F6]"
            />
            <StatCard
              title="Occupancy rate"
              value="78%"
              subtitle="This month"
              icon={<TrendingUp className="w-5 h-5" />}
              trend={{ value: 12, isPositive: true }}
              iconBgColor="bg-[#D1FAE5]"
              iconColor="text-[#10B981]"
            />
            <StatCard
              title="Monthly earnings"
              value="$8,450"
              subtitle="February 2026"
              icon={<DollarSign className="w-5 h-5" />}
              trend={{ value: 5, isPositive: false }}
              iconBgColor="bg-[#FEF3C7]"
              iconColor="text-[#F59E0B]"
            />
          </div>

          {/* Calendar & Bookings Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Calendar Availability */}
            <div className="xl:col-span-2">
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-[#0F172A]">
                    Calendar availability
                  </h2>
                  <Link to="/host/property/calendar" className="text-sm text-[#3B82F6] hover:underline font-medium">
                    View full calendar
                  </Link>
                </div>
                <CalendarGrid />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-6">
              {/* Booking Status Summary */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Booking status
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-[#FEF3C7] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
                      <span className="text-sm font-medium text-[#0F172A]">Pending</span>
                    </div>
                    <span className="text-sm font-bold text-[#0F172A]">3</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#DBEAFE] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
                      <span className="text-sm font-medium text-[#0F172A]">Confirmed</span>
                    </div>
                    <span className="text-sm font-bold text-[#0F172A]">8</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-[#D1FAE5] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
                      <span className="text-sm font-medium text-[#0F172A]">Completed</span>
                    </div>
                    <span className="text-sm font-bold text-[#0F172A]">47</span>
                  </div>
                </div>
              </div>

              {/* Revenue Overview */}
              <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">
                  Revenue overview
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-[#64748B]">This month</span>
                      <span className="font-semibold text-[#0F172A]">$8,450</span>
                    </div>
                    <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#3B82F6] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-[#64748B]">Last month</span>
                      <span className="font-semibold text-[#0F172A]">$8,890</span>
                    </div>
                    <div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#64748B] rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#0F172A]">Total earnings</span>
                      <span className="text-lg font-bold text-[#0F172A]">$42,780</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="mt-8">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[#0F172A]">
                  Recent bookings
                </h2>
                <button className="text-sm text-[#3B82F6] hover:underline font-medium">
                  View all
                </button>
              </div>
              <BookingsList />
            </div>
          </div>

          {/* Recent Messages */}
          <div className="mt-8">
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg font-semibold text-[#0F172A]">
                    Recent messages
                  </h2>
                  <span className="px-2 py-0.5 bg-[#3B82F6] text-white text-xs font-semibold rounded-full">
                    2
                  </span>
                </div>
                <Link to="/host/messages" className="text-sm text-[#3B82F6] hover:underline font-medium">
                  View all
                </Link>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 hover:bg-[#F8FAFC] rounded-lg transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-sm font-semibold text-white">
                    MC
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-[#0F172A]">Michael Chen</h3>
                      <span className="text-xs text-[#64748B]">2m ago</span>
                    </div>
                    <p className="text-sm text-[#0F172A] truncate">Thanks! Looking forward to the stay.</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 hover:bg-[#F8FAFC] rounded-lg transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-sm font-semibold text-white">
                    ER
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-semibold text-[#0F172A]">Emma Rodriguez</h3>
                      <span className="text-xs text-[#64748B]">1h ago</span>
                    </div>
                    <p className="text-sm text-[#0F172A] truncate">What time is check-in?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}