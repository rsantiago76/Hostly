import { HostlyLogo } from './logo';
import { 
  LayoutDashboard, 
  Home, 
  Calendar, 
  CalendarCheck, 
  Star, 
  DollarSign,
  Menu,
  X,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

type DashboardView = 'dashboard' | 'listings' | 'bookings' | 'calendar' | 'reviews' | 'payouts' | 'messages';

interface DashboardSidebarProps {
  activeView: DashboardView;
  onViewChange: (view: DashboardView) => void;
}

const navItems = [
  { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard, path: '/host/dashboard' },
  { id: 'listings' as const, label: 'My Listings', icon: Home, path: '/host/dashboard' },
  { id: 'bookings' as const, label: 'Bookings', icon: CalendarCheck, path: '/host/dashboard' },
  { id: 'calendar' as const, label: 'Calendar', icon: Calendar, path: '/host/property/calendar' },
  { id: 'messages' as const, label: 'Messages', icon: MessageSquare, path: '/host/messages' },
  { id: 'reviews' as const, label: 'Reviews', icon: Star, path: '/host/dashboard' },
  { id: 'payouts' as const, label: 'Payouts', icon: DollarSign, path: '/host/dashboard' },
];

export function DashboardSidebar({ activeView, onViewChange }: DashboardSidebarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg border border-[#E2E8F0] shadow-lg"
      >
        {isMobileMenuOpen ? (
          <X className="w-5 h-5 text-[#0F172A]" />
        ) : (
          <Menu className="w-5 h-5 text-[#0F172A]" />
        )}
      </button>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white border-r border-[#E2E8F0] z-40
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-[#E2E8F0]">
            <HostlyLogo />
            <p className="text-xs text-[#64748B] mt-2">Host Dashboard</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.id;
                
                return (
                  <li key={item.id}>
                    <Link
                      to={item.path}
                      onClick={() => {
                        onViewChange(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`
                        w-full flex items-center gap-3 px-4 py-3 rounded-lg
                        text-sm font-medium transition-all
                        ${
                          isActive
                            ? 'bg-[#0F172A] text-white'
                            : 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                        }
                      `}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-[#E2E8F0]">
            <div className="bg-[#F8FAFC] rounded-xl p-4">
              <h3 className="text-sm font-semibold text-[#0F172A] mb-1">
                Need help?
              </h3>
              <p className="text-xs text-[#64748B] mb-3">
                Contact our support team
              </p>
              <button className="w-full px-3 py-2 text-xs font-medium text-[#3B82F6] bg-white border border-[#E2E8F0] rounded-lg hover:bg-[#3B82F6] hover:text-white transition-colors">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}