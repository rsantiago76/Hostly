import { Code2, Shield, CreditCard, Calendar, Building2, TrendingUp, Sparkles, Webhook, FileX, MapPin } from 'lucide-react';

export function HostlyFooter() {
  return (
    <footer className="bg-[#0F172A] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Built With */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EADBC8] mb-6">
              Built With
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Code2 className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">React + TypeScript</h4>
                  <p className="text-sm text-white/70">Modern, type-safe component architecture</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Shield className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Secure booking flow</h4>
                  <p className="text-sm text-white/70">Multi-step checkout with validation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <CreditCard className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Stripe-ready payments</h4>
                  <p className="text-sm text-white/70">Integration-ready payment processing</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Calendar className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Real availability engine</h4>
                  <p className="text-sm text-white/70">Dynamic calendar with pricing rules</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Building2 className="w-4 h-4 text-[#3B82F6]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Multi-location inventory</h4>
                  <p className="text-sm text-white/70">Scalable property management system</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Enhancements */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#EADBC8] mb-6">
              Future Enhancements
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <TrendingUp className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Dynamic pricing engine</h4>
                  <p className="text-sm text-white/70">AI-based rate optimization</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">AI-powered recommendations</h4>
                  <p className="text-sm text-white/70">Personalized property suggestions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <Webhook className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Real Stripe webhooks</h4>
                  <p className="text-sm text-white/70">Live payment event handling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <FileX className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Smart cancellation rules</h4>
                  <p className="text-sm text-white/70">Flexible policy management</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Map clustering</h4>
                  <p className="text-sm text-white/70">Advanced geographic visualization</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/60">
              © 2026 Hostly. A modern vacation rental platform demo.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
