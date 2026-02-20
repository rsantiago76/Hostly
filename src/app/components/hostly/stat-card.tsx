import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  iconBgColor?: string;
  iconColor?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  iconBgColor = 'bg-[#DBEAFE]',
  iconColor = 'text-[#3B82F6]',
}: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 hover:shadow-lg hover:shadow-black/5 transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${iconBgColor} ${iconColor} flex items-center justify-center`}>
          {icon}
        </div>
        {trend && (
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-semibold ${
              trend.isPositive
                ? 'bg-[#D1FAE5] text-[#10B981]'
                : 'bg-[#FEE2E2] text-[#EF4444]'
            }`}
          >
            {trend.isPositive ? (
              <TrendingUp className="w-3 h-3" />
            ) : (
              <TrendingDown className="w-3 h-3" />
            )}
            <span>{trend.value}%</span>
          </div>
        )}
      </div>
      <div>
        <h3 className="text-sm font-medium text-[#64748B] mb-1">{title}</h3>
        <p className="text-3xl font-bold text-[#0F172A] mb-1">{value}</p>
        <p className="text-xs text-[#64748B]">{subtitle}</p>
      </div>
    </div>
  );
}
