import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { BookingFormData, BookingReceipt } from '../types';

export const StrategyBookingSection: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    businessWebsite: '',
    preferredDate: '',
    preferredTime: '2:00 PM (ET)',
    consultationTopic: 'Multi-Channel Growth Strategy',
    additionalDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReceipt, setConfirmedReceipt] = useState<BookingReceipt | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid business email';
    }
    if (!formData.businessWebsite.trim()) {
      errs.businessWebsite = 'Please provide your business website';
    }
    if (!formData.preferredDate.trim()) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randId = Math.floor(100 + Math.random() * 900);
      const receipt: BookingReceipt = {
        bookingId: `CALL-2026-${randId}`,
        bookedAt: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short'
        }),
        clientName: formData.name,
        businessWebsite: formData.businessWebsite,
        email: formData.email,
        sessionDate: formData.preferredDate,
        sessionTime: formData.preferredTime,
        topic: formData.consultationTopic,
        advisor: 'Senior Strategy Consultant'
      };

      try {
        const stored = JSON.parse(localStorage.getItem('usrepairs_calls') || '[]');
        stored.push(receipt);
        localStorage.setItem('usrepairs_calls', JSON.stringify(stored));
      } catch (err) {
        console.error('Failed to store call locally', err);
      }

      setConfirmedReceipt(receipt);
      setIsSubmitting(false);
    }, 750);
  };

  return (
    <section id="strategy-booking" className="py-24 bg-[#080B14] relative border-t border-white/10 overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[#39D5FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs font-semibold text-[#39D5FF] tracking-wider uppercase mb-3">
            One-on-One Advisory
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Let's Discuss Your Business Growth.
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            Schedule a strategy consultation to discuss your marketing goals, current challenges,
            and potential opportunities with a dedicated digital strategist.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-[#101522] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl glow-card"
        >
          <AnimatePresence mode="wait">
            {confirmedReceipt ? (
              <motion.div
                key="confirmed"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="text-center py-6 space-y-5"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#4F8CFF]/20 text-[#39D5FF] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>

                <h3 className="text-2xl font-bold text-white">
                  Strategy Consultation Scheduled
                </h3>

                <p className="text-sm text-[#A1AABD] max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong>{confirmedReceipt.clientName}</strong>. Your video strategy session has been provisioned.
                  A calendar invitation with private Google Meet coordinates has been sent to <strong>{confirmedReceipt.email}</strong>.
                </p>

                <div className="bg-[#141B2A] rounded-2xl p-5 border border-white/10 max-w-md mx-auto text-left space-y-2 text-xs">
                  <div className="flex justify-between pb-2 border-b border-white/5">
                    <span className="text-[#A1AABD]">Booking Reference</span>
                    <span className="font-mono font-bold text-white">{confirmedReceipt.bookingId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1AABD]">Target Date</span>
                    <span className="font-semibold text-white">{confirmedReceipt.sessionDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1AABD]">Scheduled Time</span>
                    <span className="font-semibold text-[#39D5FF]">{confirmedReceipt.sessionTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A1AABD]">Consultation Focus</span>
                    <span className="font-semibold text-white">{confirmedReceipt.topic}</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-[#A1AABD]">Host Lead</span>
                    <span className="font-semibold text-emerald-400">{confirmedReceipt.advisor}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setConfirmedReceipt(null)}
                    className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-white cursor-pointer"
                  >
                    Schedule Another Session
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Your Name <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. David Ross"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#141B2A] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] ${
                        errors.name ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Work Email <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="david@company.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#141B2A] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] ${
                        errors.email ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Business Website <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessWebsite}
                      onChange={(e) => setFormData({ ...formData, businessWebsite: e.target.value })}
                      placeholder="https://company.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#141B2A] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] ${
                        errors.businessWebsite ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {errors.businessWebsite && <p className="text-[11px] text-red-400 mt-1">{errors.businessWebsite}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Preferred Date <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] cursor-pointer ${
                        errors.preferredDate ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {errors.preferredDate && <p className="text-[11px] text-red-400 mt-1">{errors.preferredDate}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Preferred Time Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] cursor-pointer"
                    >
                      <option value="10:00 AM (ET)">10:00 AM (ET)</option>
                      <option value="11:30 AM (ET)">11:30 AM (ET)</option>
                      <option value="1:30 PM (ET)">1:30 PM (ET)</option>
                      <option value="3:00 PM (ET)">3:00 PM (ET)</option>
                      <option value="4:30 PM (ET)">4:30 PM (ET)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Consultation Topic
                    </label>
                    <select
                      value={formData.consultationTopic}
                      onChange={(e) => setFormData({ ...formData, consultationTopic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] cursor-pointer"
                    >
                      <option value="Multi-Channel Growth Strategy">Multi-Channel Growth Strategy</option>
                      <option value="SEO Technical & Ranking Review">SEO Technical & Ranking Review</option>
                      <option value="Google & Meta Ad Spend Optimization">Google & Meta Ad Spend Optimization</option>
                      <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (CRO)</option>
                      <option value="Analytics & GTM Attribution Audit">Analytics & GTM Attribution Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                    Additional Details or Objectives (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    placeholder="Tell us about specific growth targets or existing ad performance..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] resize-none"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 35px -5px rgba(79, 140, 255, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl gradient-blue-cyan text-[#080B14] font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-[#4F8CFF]/20 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#080B14]/30 border-t-[#080B14] rounded-full animate-spin" />
                      <span>Reserving Video Strategy Slot...</span>
                    </div>
                  ) : (
                    <>
                      <span>Book Strategy Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
