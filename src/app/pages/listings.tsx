import { useState } from 'react';
import { HostlyLogo } from '../components/hostly/logo';
import { HostlyButton } from '../components/hostly/button';
import { Filters, FilterState } from '../components/hostly/filters';
import { PropertyCard, Property } from '../components/hostly/property-card';
import { HostlyFooter } from '../components/hostly/footer';
import { Search, MapPin, Calendar, Users, Map, SlidersHorizontal, X } from 'lucide-react';

const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1616003618788-413cd29e3f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWFjaCUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxNTA0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Beach House with Ocean Views',
    location: 'Malibu, California',
    rating: 4.9,
    reviewCount: 127,
    price: 450,
    isSuperhost: true,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1771090904152-264a71f4fb57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBiYWxjb255JTIwY2l0eXxlbnwxfHx8fDE3NzE1ODk3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Downtown Penthouse',
    location: 'New York, New York',
    rating: 4.8,
    reviewCount: 93,
    price: 580,
    isSuperhost: true,
    isInstantBook: false,
    isAvailable: true,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1634441213839-ff10f912adc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXN0aWMlMjBjYWJpbiUyMHdvb2RzfGVufDF8fHx8MTc3MTYxNzY2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Rustic Mountain Cabin',
    location: 'Aspen, Colorado',
    rating: 4.7,
    reviewCount: 156,
    price: 320,
    isSuperhost: false,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1557750505-e7b4d1c40410?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWxsYSUyMHN3aW1taW5nJTIwcG9vbCUyMHN1bnNldHxlbnwxfHx8fDE3NzE2MTc2Njh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Private Villa with Infinity Pool',
    location: 'Santorini, Greece',
    rating: 5.0,
    reviewCount: 84,
    price: 720,
    isSuperhost: true,
    isInstantBook: true,
    isAvailable: false,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1677553512940-f79af72efd1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW50aG91c2UlMjBpbnRlcmlvciUyMGx1eHVyeXxlbnwxfHx8fDE3NzE1Nzc2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Contemporary Loft in Arts District',
    location: 'Los Angeles, California',
    rating: 4.6,
    reviewCount: 68,
    price: 280,
    isSuperhost: false,
    isInstantBook: false,
    isAvailable: true,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1561831710-3a8abd9657cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMGNvdHRhZ2UlMjB0cm9waWNhbHxlbnwxfHx8fDE3NzE2MTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tropical Beach Cottage',
    location: 'Tulum, Mexico',
    rating: 4.9,
    reviewCount: 142,
    price: 195,
    isSuperhost: true,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1767706508383-097054618007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2Z0JTIwYXBhcnRtZW50JTIwaW5kdXN0cmlhbHxlbnwxfHx8fDE3NzE2MTc2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Industrial Loft with Skyline Views',
    location: 'Chicago, Illinois',
    rating: 4.8,
    reviewCount: 201,
    price: 340,
    isSuperhost: true,
    isInstantBook: false,
    isAvailable: true,
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1762575537664-0f2c7e0c7f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlZnJvbnQlMjBjYWJpbiUyMG1vdW50YWlufGVufDF8fHx8MTc3MTYxNzY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Lakefront Cabin Retreat',
    location: 'Lake Tahoe, Nevada',
    rating: 4.7,
    reviewCount: 97,
    price: 385,
    isSuperhost: false,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '9',
    image: 'https://images.unsplash.com/photo-1695142920005-3778ab80c841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtaG91c2UlMjBjb3VudHJ5c2lkZXxlbnwxfHx8fDE3NzE2MTc2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Modern Farmhouse Estate',
    location: 'Austin, Texas',
    rating: 4.9,
    reviewCount: 178,
    price: 425,
    isSuperhost: true,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '10',
    image: 'https://images.unsplash.com/photo-1769690176752-f4e703e08e3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY290dGFnZSUyMGdhcmRlbnxlbnwxfHx8fDE3NzE1MTcwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Cozy Garden Cottage',
    location: 'Portland, Oregon',
    rating: 4.8,
    reviewCount: 134,
    price: 210,
    isSuperhost: false,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '11',
    image: 'https://images.unsplash.com/photo-1678122878190-b8a567929f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMG1hcmluYXxlbnwxfHx8fDE3NzE2MTg0OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Luxury Yacht at Marina',
    location: 'Miami, Florida',
    rating: 4.9,
    reviewCount: 89,
    price: 650,
    isSuperhost: true,
    isInstantBook: false,
    isAvailable: true,
  },
  {
    id: '12',
    image: 'https://images.unsplash.com/photo-1544481841-b08054f2d931?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNoYWxldCUyMHNub3d8ZW58MXx8fHwxNzcxNTEwMjI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Alpine Chalet with Ski Access',
    location: 'Whistler, Canada',
    rating: 5.0,
    reviewCount: 164,
    price: 520,
    isSuperhost: true,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '13',
    image: 'https://images.unsplash.com/photo-1749704647688-a5ee71ac578c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBvYXNpcyUyMHZpbGxhfGVufDF8fHx8MTc3MTYxODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Desert Oasis Villa',
    location: 'Scottsdale, Arizona',
    rating: 4.7,
    reviewCount: 112,
    price: 395,
    isSuperhost: false,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '14',
    image: 'https://images.unsplash.com/photo-1765555509849-f07b3e6cc217?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlaG91c2UlMjByZXRyZWF0JTIwZm9yZXN0fGVufDF8fHx8MTc3MTYxODQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Treehouse Forest Retreat',
    location: 'Asheville, North Carolina',
    rating: 4.9,
    reviewCount: 203,
    price: 265,
    isSuperhost: true,
    isInstantBook: true,
    isAvailable: true,
  },
  {
    id: '15',
    image: 'https://images.unsplash.com/photo-1715810349635-cde056c3cf34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMHRvd25ob3VzZSUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzE2MTg0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Historic Brownstone Townhouse',
    location: 'Boston, Massachusetts',
    rating: 4.8,
    reviewCount: 176,
    price: 475,
    isSuperhost: true,
    isInstantBook: false,
    isAvailable: true,
  },
];

const PROPERTIES_PER_PAGE = 9;

export function ListingsPage() {
  const [showMap, setShowMap] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PROPERTIES_PER_PAGE);
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 1000],
    propertyTypes: [],
    amenities: [],
    instantBook: false,
  });

  const displayedProperties = MOCK_PROPERTIES.slice(0, visibleCount);
  const hasMore = visibleCount < MOCK_PROPERTIES.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + PROPERTIES_PER_PAGE, MOCK_PROPERTIES.length));
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <HostlyLogo />
          
          {/* Compact Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center gap-2 px-4 py-2.5 bg-[#F8FAFC] border-2 border-[#E2E8F0] rounded-lg hover:border-[#3B82F6] transition-colors cursor-pointer w-full">
              <MapPin className="w-4 h-4 text-[#64748B]" />
              <input 
                type="text" 
                placeholder="Malibu, California"
                className="bg-transparent text-sm flex-1 outline-none text-[#0F172A]"
              />
              <div className="h-4 w-px bg-[#E2E8F0]"></div>
              <Calendar className="w-4 h-4 text-[#64748B] ml-2" />
              <span className="text-sm text-[#64748B]">Mar 20-25</span>
              <div className="h-4 w-px bg-[#E2E8F0]"></div>
              <Users className="w-4 h-4 text-[#64748B] ml-2" />
              <span className="text-sm text-[#64748B]">2 guests</span>
              <Search className="w-4 h-4 text-[#0F172A] ml-2" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <HostlyButton variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign in
            </HostlyButton>
            <HostlyButton variant="primary" size="sm">
              Sign up
            </HostlyButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex max-w-[1920px] mx-auto">
        {/* Desktop Filters Sidebar */}
        <aside className="hidden lg:block w-80 bg-white border-r border-[#E2E8F0] sticky top-[73px] h-[calc(100vh-73px)] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[#0F172A]">Filters</h2>
              <button className="text-sm text-[#3B82F6] hover:underline">
                Clear all
              </button>
            </div>
            <Filters onFilterChange={setFilters} />
          </div>
        </aside>

        {/* Mobile Filter Modal */}
        {showMobileFilters && (
          <div className="fixed inset-0 bg-black/50 z-50 lg:hidden">
            <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-2xl max-h-[85vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-[#E2E8F0] px-6 py-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-[#0F172A]">Filters</h2>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-[#F1F5F9] rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <Filters onFilterChange={setFilters} />
              </div>
              <div className="sticky bottom-0 bg-white border-t border-[#E2E8F0] p-6 flex gap-3">
                <HostlyButton 
                  variant="ghost" 
                  size="md" 
                  className="flex-1"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Clear all
                </HostlyButton>
                <HostlyButton 
                  variant="primary" 
                  size="md" 
                  className="flex-1"
                  onClick={() => setShowMobileFilters(false)}
                >
                  Show results
                </HostlyButton>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1">
          {/* Top Bar */}
          <div className="bg-white border-b border-[#E2E8F0] px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-[#0F172A]">
                  Stay in Malibu
                </h1>
                <p className="text-sm text-[#64748B] mt-1">
                  {MOCK_PROPERTIES.length} stays · Mar 20 - Mar 25 · 2 guests
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <HostlyButton
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowMobileFilters(true)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </HostlyButton>
                
                <HostlyButton
                  variant={showMap ? 'primary' : 'ghost'}
                  size="sm"
                  onClick={() => setShowMap(!showMap)}
                >
                  <Map className="w-4 h-4 mr-2" />
                  {showMap ? 'Show list' : 'Show map'}
                </HostlyButton>
              </div>
            </div>
          </div>

          {/* Property Grid / Map View */}
          <div className="flex">
            {/* Property Grid */}
            <div className={`${showMap ? 'w-1/2' : 'w-full'} p-4 sm:p-6 lg:p-8`}>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="mt-12 text-center">
                  <HostlyButton variant="secondary" size="md" onClick={loadMore}>
                    Load more properties
                  </HostlyButton>
                </div>
              )}
            </div>

            {/* Map View */}
            {showMap && (
              <div className="hidden md:block w-1/2 sticky top-[73px] h-[calc(100vh-73px)]">
                <div className="w-full h-full bg-[#E2E8F0] relative">
                  {/* Map Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <Map className="w-16 h-16 text-[#64748B] mx-auto mb-4" />
                      <p className="text-[#64748B] font-medium">Map view</p>
                      <p className="text-sm text-[#64748B] mt-2">
                        Interactive map would display here
                      </p>
                    </div>
                  </div>
                  
                  {/* Sample Map Pins */}
                  <div className="absolute top-1/4 left-1/4 w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center shadow-lg font-semibold cursor-pointer hover:scale-110 transition-transform">
                    $450
                  </div>
                  <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center shadow-lg font-semibold cursor-pointer hover:scale-110 transition-transform">
                    $320
                  </div>
                  <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-[#3B82F6] text-white rounded-full flex items-center justify-center shadow-lg font-semibold cursor-pointer hover:scale-110 transition-transform">
                    $195
                  </div>
                  <div className="absolute top-1/2 right-1/4 w-10 h-10 bg-[#0F172A] text-white rounded-full flex items-center justify-center shadow-lg font-semibold cursor-pointer hover:scale-110 transition-transform">
                    $385
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Footer */}
      <HostlyFooter />
    </div>
  );
}