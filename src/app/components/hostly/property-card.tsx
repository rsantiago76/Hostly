import { MapPin, Star, Zap } from 'lucide-react';
import { HostlyBadge } from './badge';
import { Link } from 'react-router';

export interface Property {
  id: string;
  image: string;
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  price: number;
  isSuperhost?: boolean;
  isInstantBook?: boolean;
  isAvailable?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link 
      to={`/property/${property.id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-md shadow-black/5 transition-all duration-300 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F1F5F9]">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Availability indicator */}
        {property.isAvailable && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-medium text-[#0F172A] shadow-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Available
            </span>
          </div>
        )}

        {/* Instant Book badge */}
        {property.isInstantBook && (
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-[#3B82F6] rounded-full text-xs font-medium text-white shadow-md">
              <Zap className="w-3 h-3 fill-white" />
              Instant
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-lg font-semibold text-[#0F172A] line-clamp-1 group-hover:text-[#3B82F6] transition-colors">
            {property.title}
          </h3>
          {property.isSuperhost && (
            <HostlyBadge variant="superhost" className="flex-shrink-0" />
          )}
        </div>

        {/* Location */}
        <p className="text-sm text-[#64748B] flex items-center gap-1.5 mb-3">
          <MapPin className="w-4 h-4 flex-shrink-0" />
          <span className="line-clamp-1">{property.location}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-4">
          <Star className="w-4 h-4 fill-[#FCD34D] text-[#FCD34D]" />
          <span className="text-sm font-medium text-[#0F172A]">{property.rating}</span>
          <span className="text-sm text-[#64748B]">({property.reviewCount})</span>
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-[#E2E8F0]">
          <p className="text-xl font-semibold text-[#0F172A]">
            ${property.price}
            <span className="text-sm font-normal text-[#64748B]"> / night</span>
          </p>
        </div>
      </div>
    </Link>
  );
}