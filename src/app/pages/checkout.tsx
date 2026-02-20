import { useState } from 'react';
import { HostlyLogo } from '../components/hostly/logo';
import { HostlyButton } from '../components/hostly/button';
import { HostlyInput } from '../components/hostly/input';
import { BookingSummary } from '../components/hostly/booking-summary';
import { Lock, Shield, CreditCard, User, Mail, Phone, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router';

type FlowType = 'signin' | 'guest';

export function CheckoutPage() {
  const [flow, setFlow] = useState<FlowType>('guest');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout submission
    console.log('Checkout submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Header */}
      <header className="bg-white border-b border-[#E2E8F0] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <HostlyLogo />
          <div className="flex items-center gap-2 text-sm text-[#64748B]">
            <Lock className="w-4 h-4" />
            <span className="hidden sm:inline">Secure checkout</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0F172A] text-white flex items-center justify-center text-sm font-semibold">
                1
              </div>
              <span className="text-sm font-medium text-[#0F172A]">Checkout</span>
            </div>
            <div className="w-16 h-0.5 bg-[#E2E8F0]"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E2E8F0] text-[#64748B] flex items-center justify-center text-sm font-semibold">
                2
              </div>
              <span className="text-sm font-medium text-[#64748B]">Confirmation</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Flow Selection */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  onClick={() => setFlow('guest')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    flow === 'guest'
                      ? 'border-[#0F172A] bg-[#0F172A] text-white'
                      : 'border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#3B82F6]'
                  }`}
                >
                  Continue as Guest
                </button>
                <button
                  onClick={() => setFlow('signin')}
                  className={`px-4 py-3 rounded-lg border-2 transition-all ${
                    flow === 'signin'
                      ? 'border-[#0F172A] bg-[#0F172A] text-white'
                      : 'border-[#E2E8F0] bg-white text-[#0F172A] hover:border-[#3B82F6]'
                  }`}
                >
                  Sign In
                </button>
              </div>

              {flow === 'signin' ? (
                /* Sign In Form */
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Email address
                    </label>
                    <HostlyInput
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#0F172A] mb-2">
                      Password
                    </label>
                    <HostlyInput
                      type="password"
                      placeholder="••••••••"
                      value=""
                      onChange={() => {}}
                    />
                  </div>
                  <HostlyButton variant="primary" size="md" className="w-full">
                    Sign in
                  </HostlyButton>
                  <p className="text-sm text-center text-[#64748B]">
                    Don't have an account?{' '}
                    <button className="text-[#3B82F6] hover:underline">Sign up</button>
                  </p>
                </div>
              ) : (
                /* Guest Info Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Guest information
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          First name
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Last name
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Email address
                      </label>
                      <HostlyInput
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Phone number
                      </label>
                      <HostlyInput
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Payment Section */}
            {(flow === 'guest' || flow === 'signin') && (
              <>
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                  <h2 className="text-xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment method
                  </h2>
                  
                  {/* Stripe Security Badge */}
                  <div className="mb-6 p-4 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0]">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-5 h-5 text-[#3B82F6]" />
                      <span className="text-sm font-medium text-[#0F172A]">
                        Secure payment powered by Stripe
                      </span>
                    </div>
                    <p className="text-xs text-[#64748B] ml-8">
                      Your payment information is encrypted and secure
                    </p>
                  </div>

                  {/* Stripe Card Element Placeholder */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Card number
                      </label>
                      <div className="relative">
                        <HostlyInput
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          maxLength={19}
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <div className="w-8 h-5 rounded bg-[#1434CB] flex items-center justify-center text-white text-[8px] font-bold">
                            VISA
                          </div>
                          <div className="w-8 h-5 rounded bg-[#EB001B] flex items-center justify-center">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F00] opacity-80"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Expiry date
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="MM / YY"
                          value={formData.expiryDate}
                          onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                          maxLength={7}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          CVV
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => handleInputChange('cvv', e.target.value)}
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Demo Notice */}
                  <div className="mt-6 p-4 bg-[#FEF3C7] rounded-xl border border-[#FDE68A]">
                    <p className="text-sm text-[#92400E]">
                      <strong>Demo environment:</strong> No real charges will be processed. 
                      This is a demonstration checkout flow.
                    </p>
                  </div>
                </div>

                {/* Billing Address */}
                <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6">
                  <h2 className="text-xl font-semibold text-[#0F172A] mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Billing address
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Address line 1
                      </label>
                      <HostlyInput
                        type="text"
                        placeholder="123 Main Street"
                        value={formData.addressLine1}
                        onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#0F172A] mb-2">
                        Address line 2 (optional)
                      </label>
                      <HostlyInput
                        type="text"
                        placeholder="Apt 4B"
                        value={formData.addressLine2}
                        onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          City
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="New York"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          State
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="NY"
                          value={formData.state}
                          onChange={(e) => handleInputChange('state', e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          ZIP code
                        </label>
                        <HostlyInput
                          type="text"
                          placeholder="10001"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#0F172A] mb-2">
                          Country
                        </label>
                        <HostlyInput
                          type="text"
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right Column - Booking Summary */}
          <div className="lg:col-span-1">
            <BookingSummary />
          </div>
        </div>
      </main>
    </div>
  );
}