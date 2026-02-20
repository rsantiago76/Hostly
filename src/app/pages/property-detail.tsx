import { HostlyLogo } from '../components/hostly/logo';
import { HostlyButton } from '../components/hostly/button';
import { HostlyBadge } from '../components/hostly/badge';
import { ImageGallery } from '../components/hostly/image-gallery';
import { BookingCard } from '../components/hostly/booking-card';
import { ReviewCard } from '../components/hostly/review-card';
import { HostlyFooter } from '../components/hostly/footer';
import { 
  MapPin, 
  Star, 
  Wifi, 
  Waves, 
  Car, 
  Droplet, 
  Utensils,
  Tv,
  Wind,
  Coffee,
  Dumbbell,
  ShieldCheck,
  Share2,
  Heart,
  ArrowLeft
} from 'lucide-react';
import { Link } from 'react-router';

// Mock data
const PROPERTY_IMAGES = [
  'https://images.unsplash.com/photo-1616003618788-413cd29e3f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWFjaCUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcxNTA0ODM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBsaXZpbmclMjByb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxNTcxNDY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1750420556288-d0e32a6f517b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiZWRyb29tJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxNTk1Nzg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1560185127-1902ccdc5094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwd2hpdGUlMjBjb3VudGVydG9wfGVufDF8fHx8MTc3MTYxNzgzMnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1771239048293-72abf673adb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXRocm9vbSUyMGx1eHVyeSUyMHNwYSUyMHNob3dlcnxlbnwxfHx8fDE3NzE2MTc4MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
];

const AMENITIES = [
  { icon: Wifi, label: 'Wi-Fi' },
  { icon: Waves, label: 'Ocean View' },
  { icon: Car, label: 'Free Parking' },
  { icon: Droplet, label: 'Pool' },
  { icon: Utensils, label: 'Kitchen' },
  { icon: Tv, label: 'Smart TV' },
  { icon: Wind, label: 'Air Conditioning' },
  { icon: Coffee, label: 'Coffee Maker' },
  { icon: Dumbbell, label: 'Gym Access' },
  { icon: ShieldCheck, label: 'Security System' },
];

const REVIEWS = [
  {
    id: '1',
    author: 'Sarah Johnson',
    avatar: '',
    rating: 5,
    date: 'February 2026',
    comment: 'Absolutely stunning property! The ocean views were breathtaking and the house was immaculate. Communication with the host was excellent. Would definitely stay here again!',
  },
  {
    id: '2',
    author: 'Michael Chen',
    avatar: '',
    rating: 5,
    date: 'January 2026',
    comment: 'Perfect getaway spot. The amenities were top-notch and the location was ideal - close to the beach but quiet and private. Highly recommend!',
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    avatar: '',
    rating: 4,
    date: 'January 2026',
    comment: 'Beautiful home with everything you need for a relaxing vacation. The kitchen was well-equipped and the outdoor space was perfect for morning coffee.',
  },
  {
    id: '4',
    author: 'David Park',
    avatar: '',
    rating: 5,
    date: 'December 2025',
    comment: 'Exceeded all expectations! The photos don\'t do it justice. Clean, spacious, and the host was incredibly responsive. A truly memorable stay.',
  },
];

export function PropertyDetailPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link 
              to="/listings"
              className="p-2 hover:bg-[#F1F5F9] rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-[#64748B]" />
            </Link>
            <HostlyLogo />
          </div>
          <div className="flex items-center gap-3">
            <HostlyButton variant="ghost" size="sm">Sign in</HostlyButton>
            <HostlyButton variant="primary" size="sm">Sign up</HostlyButton>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="mb-8">
          <ImageGallery images={PROPERTY_IMAGES} />
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Property Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl sm:text-4xl font-bold text-[#0F172A] mb-3">
                    Modern Beach House with Ocean Views
                  </h1>
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <MapPin className="w-5 h-5" />
                    <span className="text-lg">Malibu, California, United States</span>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-[#F1F5F9] rounded-lg transition-colors">
                    <Share2 className="w-5 h-5 text-[#64748B]" />
                  </button>
                  <button className="p-2 hover:bg-[#F1F5F9] rounded-lg transition-colors">
                    <Heart className="w-5 h-5 text-[#64748B]" />
                  </button>
                </div>
              </div>

              {/* Rating & Badges */}
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 fill-[#FCD34D] text-[#FCD34D]" />
                  <span className="font-semibold text-[#0F172A]">4.9</span>
                  <span className="text-[#64748B]">(127 reviews)</span>
                </div>
                <HostlyBadge variant="superhost" />
                <HostlyBadge variant="verified" />
              </div>
            </div>

            {/* Host Info */}
            <div className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#E2E8F0]">
              <div className="w-16 h-16 rounded-full bg-[#EADBC8] flex items-center justify-center">
                <span className="text-2xl font-bold text-[#0F172A]">JD</span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[#0F172A] mb-1">
                  Hosted by Jennifer Davis
                </h3>
                <p className="text-sm text-[#64748B]">
                  Superhost · Joined in 2019 · 156 reviews
                </p>
              </div>
              <HostlyButton variant="ghost" size="sm">
                Contact Host
              </HostlyButton>
            </div>

            {/* Property Info */}
            <div className="p-6 bg-white rounded-2xl border border-[#E2E8F0]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <p className="text-2xl font-bold text-[#0F172A] mb-1">4</p>
                  <p className="text-sm text-[#64748B]">Bedrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F172A] mb-1">3</p>
                  <p className="text-sm text-[#64748B]">Bathrooms</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F172A] mb-1">8</p>
                  <p className="text-sm text-[#64748B]">Guests</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0F172A] mb-1">2,400</p>
                  <p className="text-sm text-[#64748B]">Sq ft</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">About this place</h2>
              <div className="space-y-4 text-[#0F172A] leading-relaxed">
                <p>
                  Escape to this stunning modern beach house perched on the cliffs of Malibu. 
                  This architectural masterpiece offers breathtaking ocean views from every room, 
                  combining contemporary luxury with coastal charm.
                </p>
                <p>
                  The open-concept living space features floor-to-ceiling windows, a gourmet 
                  kitchen with high-end appliances, and elegant furnishings throughout. Step 
                  outside to your private infinity pool and expansive deck - perfect for sunset 
                  cocktails and entertaining.
                </p>
                <p>
                  Located in one of Malibu's most sought-after neighborhoods, you'll enjoy 
                  direct beach access, proximity to world-class restaurants, and the privacy 
                  of a gated community. Whether you're seeking a romantic getaway or a family 
                  vacation, this property offers the ultimate California coastal experience.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AMENITIES.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-[#E2E8F0]">
                      <Icon className="w-5 h-5 text-[#64748B]" />
                      <span className="text-[#0F172A]">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <HostlyButton variant="ghost" size="md" className="w-full sm:w-auto">
                  Show all amenities
                </HostlyButton>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Where you'll be</h2>
              <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden">
                <div className="aspect-video bg-[#E2E8F0] flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-[#64748B] mx-auto mb-2" />
                    <p className="text-[#64748B] font-medium">Malibu, California</p>
                    <p className="text-sm text-[#64748B] mt-1">Interactive map would display here</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#0F172A] mb-2">About the area</h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    This property is located in central Malibu, offering easy access to pristine beaches, 
                    hiking trails, and world-renowned dining. Minutes from Zuma Beach and the iconic 
                    Malibu Pier.
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 fill-[#FCD34D] text-[#FCD34D]" />
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  4.9 · 127 reviews
                </h2>
              </div>

              {/* Review Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  { label: 'Cleanliness', rating: 4.9 },
                  { label: 'Communication', rating: 5.0 },
                  { label: 'Check-in', rating: 4.8 },
                  { label: 'Accuracy', rating: 4.9 },
                  { label: 'Location', rating: 5.0 },
                  { label: 'Value', rating: 4.7 },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm text-[#0F172A] w-28">{stat.label}</span>
                    <div className="flex-1 h-1.5 bg-[#E2E8F0] rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#0F172A] rounded-full" 
                        style={{ width: `${(stat.rating / 5) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-[#0F172A] w-8">{stat.rating}</span>
                  </div>
                ))}
              </div>

              {/* Review Cards */}
              <div className="space-y-6">
                {REVIEWS.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>

              <div className="mt-8">
                <HostlyButton variant="ghost" size="md" className="w-full sm:w-auto">
                  Show all 127 reviews
                </HostlyButton>
              </div>
            </div>

            {/* House Rules */}
            <div>
              <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Things to know</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-3">House rules</h3>
                  <ul className="space-y-2 text-sm text-[#64748B]">
                    <li>Check-in: After 3:00 PM</li>
                    <li>Check-out: 11:00 AM</li>
                    <li>No smoking</li>
                    <li>No pets</li>
                    <li>No parties or events</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-3">Safety & property</h3>
                  <ul className="space-y-2 text-sm text-[#64748B]">
                    <li>Pool/hot tub without gate</li>
                    <li>Security camera/device</li>
                    <li>Carbon monoxide alarm</li>
                    <li>Smoke alarm</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-3">Cancellation policy</h3>
                  <ul className="space-y-2 text-sm text-[#64748B]">
                    <li>Free cancellation for 48 hours</li>
                    <li>Full refund before Mar 13</li>
                    <li>Partial refund after Mar 13</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <BookingCard 
              pricePerNight={450}
              cleaningFee={75}
              serviceFee={85}
              rating={4.9}
              reviewCount={127}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <HostlyFooter />
    </div>
  );
}