import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';
import { Wifi, Waves, Car, Droplet, Zap } from 'lucide-react';

interface FiltersProps {
  onFilterChange?: (filters: FilterState) => void;
}

export interface FilterState {
  priceRange: [number, number];
  propertyTypes: string[];
  amenities: string[];
  instantBook: boolean;
}

export function Filters({ onFilterChange }: FiltersProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([]);
  const [amenities, setAmenities] = useState<string[]>([]);
  const [instantBook, setInstantBook] = useState(false);

  const handlePriceChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setPriceRange(newRange);
    onFilterChange?.({
      priceRange: newRange,
      propertyTypes,
      amenities,
      instantBook
    });
  };

  const togglePropertyType = (type: string) => {
    const newTypes = propertyTypes.includes(type)
      ? propertyTypes.filter(t => t !== type)
      : [...propertyTypes, type];
    setPropertyTypes(newTypes);
    onFilterChange?.({
      priceRange,
      propertyTypes: newTypes,
      amenities,
      instantBook
    });
  };

  const toggleAmenity = (amenity: string) => {
    const newAmenities = amenities.includes(amenity)
      ? amenities.filter(a => a !== amenity)
      : [...amenities, amenity];
    setAmenities(newAmenities);
    onFilterChange?.({
      priceRange,
      propertyTypes,
      amenities: newAmenities,
      instantBook
    });
  };

  const handleInstantBookToggle = (checked: boolean) => {
    setInstantBook(checked);
    onFilterChange?.({
      priceRange,
      propertyTypes,
      amenities,
      instantBook: checked
    });
  };

  return (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={priceRange}
            onValueChange={handlePriceChange}
            max={1000}
            step={10}
            minStepsBetweenThumbs={1}
          >
            <Slider.Track className="bg-[#E2E8F0] relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-[#3B82F6] rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb
              className="block w-5 h-5 bg-white border-2 border-[#3B82F6] rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#3B82F6]/20 transition-all"
              aria-label="Minimum price"
            />
            <Slider.Thumb
              className="block w-5 h-5 bg-white border-2 border-[#3B82F6] rounded-full shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#3B82F6]/20 transition-all"
              aria-label="Maximum price"
            />
          </Slider.Root>
          <div className="flex items-center justify-between text-sm">
            <span className="text-[#64748B]">${priceRange[0]}</span>
            <span className="text-[#64748B]">${priceRange[1]}+</span>
          </div>
        </div>
      </div>

      {/* Property Type */}
      <div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Property Type</h3>
        <div className="space-y-3">
          {['House', 'Apartment', 'Cabin', 'Villa'].map((type) => (
            <label key={type} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={propertyTypes.includes(type)}
                onChange={() => togglePropertyType(type)}
                className="w-5 h-5 rounded border-2 border-[#E2E8F0] text-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all cursor-pointer"
              />
              <span className="text-sm text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div>
        <h3 className="text-lg font-semibold text-[#0F172A] mb-4">Amenities</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={amenities.includes('wifi')}
              onChange={() => toggleAmenity('wifi')}
              className="w-5 h-5 rounded border-2 border-[#E2E8F0] text-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all cursor-pointer"
            />
            <Wifi className="w-4 h-4 text-[#64748B]" />
            <span className="text-sm text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
              Wi-Fi
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={amenities.includes('ocean-view')}
              onChange={() => toggleAmenity('ocean-view')}
              className="w-5 h-5 rounded border-2 border-[#E2E8F0] text-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all cursor-pointer"
            />
            <Waves className="w-4 h-4 text-[#64748B]" />
            <span className="text-sm text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
              Ocean View
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={amenities.includes('parking')}
              onChange={() => toggleAmenity('parking')}
              className="w-5 h-5 rounded border-2 border-[#E2E8F0] text-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all cursor-pointer"
            />
            <Car className="w-4 h-4 text-[#64748B]" />
            <span className="text-sm text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
              Parking
            </span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={amenities.includes('pool')}
              onChange={() => toggleAmenity('pool')}
              className="w-5 h-5 rounded border-2 border-[#E2E8F0] text-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10 transition-all cursor-pointer"
            />
            <Droplet className="w-4 h-4 text-[#64748B]" />
            <span className="text-sm text-[#0F172A] group-hover:text-[#3B82F6] transition-colors">
              Pool
            </span>
          </label>
        </div>
      </div>

      {/* Instant Book */}
      <div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#0F172A] mb-1">Instant Book</h3>
            <p className="text-sm text-[#64748B]">Book without waiting for host approval</p>
          </div>
          <Switch.Root
            checked={instantBook}
            onCheckedChange={handleInstantBookToggle}
            className="w-12 h-7 bg-[#E2E8F0] rounded-full relative data-[state=checked]:bg-[#3B82F6] transition-colors outline-none cursor-pointer"
          >
            <Switch.Thumb className="block w-5 h-5 bg-white rounded-full shadow-md transition-transform translate-x-1 will-change-transform data-[state=checked]:translate-x-6" />
          </Switch.Root>
        </div>
      </div>
    </div>
  );
}
