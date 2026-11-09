import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Printer,
  Copy,
  Check
} from 'lucide-react';
import { AuditFormData, AuditReceipt } from '../types';

interface MarketingAuditSectionProps {
  initialService?: string;
  initialPlan?: string;
}

export const MarketingAuditSection: React.FC<MarketingAuditSectionProps> = ({
  initialService,
  initialPlan
}) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    businessName: '',
    businessWebsite: '',
    email: '',
    phone: '',
    primaryGoal: 'Lead Generation & Customer Acquisition',
    servicesInterested: initialService ? [initialService] : ['Search Engine Optimization (SEO)'],
    monthlyBudget: '$1,000 – $2,500 / month',
    additionalInfo: initialPlan ? `Inquiring about ${initialPlan} plan.` : ''
  });

  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReceipt, setSubmittedReceipt] = useState<AuditReceipt | null>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [copiedTicket, setCopiedTicket] = useState(false);

  const availableServices = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Content Creation',
    'Website Optimization',
    'Digital Advertising Management',
    'Email Marketing',
    'Marketing Strategy & Consultation',
    'Analytics & Reporting'
  ];

  const handleToggleService = (sName: string) => {
    setFormData((prev) => {
      const exists = prev.servicesInterested.includes(sName);
      if (exists) {
        return {
          ...prev,
          servicesInterested: prev.servicesInterested.filter((s) => s !== sName)
        };
      } else {
        return {
          ...prev,
          servicesInterested: [...prev.servicesInterested, sName]
        };
      }
    });
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.businessName.trim()) errors.businessName = 'Please enter your company or business name';
    if (!formData.businessWebsite.trim()) {
      errors.businessWebsite = 'Please provide your current website URL';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please provide a valid business email';
    }
    if (!formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 10) {
      errors.phone = 'Please provide a valid 10-digit phone number';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (honeypot) return; // Silent bot drop

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const randNum = Math.floor(1000 + Math.random() * 9000);
      const receipt: AuditReceipt = {
        ticketNumber: `AUDIT-2026-${randNum}`,
        submittedAt: new Date().toLocaleString('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short'
        }),
        businessName: formData.businessName,
        businessWebsite: formData.businessWebsite,
        contactName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        primaryGoal: formData.primaryGoal,
        monthlyBudget: formData.monthlyBudget,
        reviewWindow: 'Within 1 Business Day (24h SLA)'
      };

      try {
        const stored = JSON.parse(localStorage.getItem('ustechrepairs_audits') || '[]');
        stored.push(receipt);
        localStorage.setItem('ustechrepairs_audits', JSON.stringify(stored));
      } catch (err) {
        console.error('Failed to store audit locally', err);
      }

      setSubmittedReceipt(receipt);
      setIsSubmitting(false);
    }, 850);
  };

  const handleCopyTicket = (ticketNum: string) => {
    navigator.clipboard.writeText(ticketNum);
    setCopiedTicket(true);
    setTimeout(() => setCopiedTicket(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-[#101522] border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#4F8CFF]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs font-semibold text-[#39D5FF] tracking-wider uppercase mb-3">
            Complimentary Opportunity Analysis
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Discover Your Biggest Marketing Opportunities.
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            Looking to assess your existing digital presence, search visibility, and marketing performance?
            Request your free marketing audit and receive a customized search gap & positioning report.
          </p>
        </motion.div>

        {/* Audit Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-[#141B2A] rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl glow-card"
        >
          <AnimatePresence mode="wait">
            {submittedReceipt ? (
              <motion.div
                key="receipt"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                <div className="p-4 rounded-2xl bg-[#4F8CFF]/15 border border-[#39D5FF]/30 flex items-start gap-3.5">
                  <CheckCircle2 className="w-6 h-6 text-[#39D5FF] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Marketing Audit Request Confirmed
                    </h3>
                    <p className="text-xs text-[#A1AABD] mt-1">
                      Our strategy team has queued your domain for competitive search crawl and conversion review.
                      Your complete Search Gap Report will be sent to <strong>{submittedReceipt.email}</strong> {submittedReceipt.reviewWindow}.
                    </p>
                  </div>
                </div>

                {/* Receipt Summary Card */}
                <div className="bg-[#101522] rounded-2xl p-6 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <span className="text-xs text-[#A1AABD]">Audit Ticket Identifier</span>
                      <div className="text-xl font-mono font-bold text-white tracking-wider">
                        {submittedReceipt.ticketNumber}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleCopyTicket(submittedReceipt.ticketNumber)}
                      className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white/5 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      {copiedTicket ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Ticket ID</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-[#A1AABD] block">Target Domain</span>
                      <span className="font-semibold text-white truncate block">{submittedReceipt.businessWebsite}</span>
                    </div>
                    <div>
                      <span className="text-[#A1AABD] block">Organization</span>
                      <span className="font-semibold text-white">{submittedReceipt.businessName}</span>
                    </div>
                    <div>
                      <span className="text-[#A1AABD] block">Executive Contact</span>
                      <span className="font-semibold text-white">{submittedReceipt.contactName}</span>
                    </div>
                    <div>
                      <span className="text-[#A1AABD] block">Primary Focus</span>
                      <span className="font-semibold text-[#39D5FF]">{submittedReceipt.primaryGoal}</span>
                    </div>
                    <div>
                      <span className="text-[#A1AABD] block">Budget Alignment</span>
                      <span className="font-semibold text-white">{submittedReceipt.monthlyBudget}</span>
                    </div>
                    <div>
                      <span className="text-[#A1AABD] block">SLA Commitment</span>
                      <span className="font-semibold text-emerald-400">{submittedReceipt.reviewWindow}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.print()}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white flex items-center justify-center gap-2 cursor-pointer transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print Audit Summary</span>
                  </motion.button>

                  <button
                    onClick={() => setSubmittedReceipt(null)}
                    className="text-xs text-[#A1AABD] hover:text-white underline cursor-pointer"
                  >
                    Submit Another Audit Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Anti-spam honeypot */}
                <input
                  type="text"
                  name="user_agent_field"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Row 1: Name & Business Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Full Name <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#101522] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] transition-all ${
                        formErrors.fullName ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.fullName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.fullName}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Business Name <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Consulting Group"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#101522] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] transition-all ${
                        formErrors.businessName ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.businessName && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.businessName}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 2: Website & Email */}
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
                      placeholder="https://yourcompany.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#101522] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] transition-all ${
                        formErrors.businessWebsite ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.businessWebsite && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.businessWebsite}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Work Email Address <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="sarah@yourcompany.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#101522] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] transition-all ${
                        formErrors.email ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Row 3: Phone & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Phone Number <span className="text-[#39D5FF]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 234-5678"
                      className={`w-full px-4 py-3 rounded-xl border bg-[#101522] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] transition-all ${
                        formErrors.phone ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.phone}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                      Monthly Marketing Budget
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#101522] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] cursor-pointer"
                    >
                      <option value="Under $1,000 / month">Under $1,000 / month</option>
                      <option value="$1,000 – $2,500 / month">$1,000 – $2,500 / month</option>
                      <option value="$2,500 – $5,000 / month">$2,500 – $5,000 / month</option>
                      <option value="$5,000+ / month">$5,000+ / month (Enterprise Scaling)</option>
                    </select>
                  </div>
                </div>

                {/* Primary Marketing Goal */}
                <div>
                  <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                    Primary Marketing Goal
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#101522] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] cursor-pointer"
                  >
                    <option value="Lead Generation & Customer Acquisition">Lead Generation & Customer Acquisition</option>
                    <option value="Organic Search Rankings & Google Visibility">Organic Search Rankings & Google Visibility</option>
                    <option value="Paid Ad Scaling & Lowering CAC">Paid Ad Scaling & Lowering CAC</option>
                    <option value="Conversion Rate Optimization (CRO)">Conversion Rate Optimization (CRO)</option>
                    <option value="Full Digital Marketing Strategy Relaunch">Full Digital Marketing Strategy Relaunch</option>
                  </select>
                </div>

                {/* Services Interested In (Multi-Select Tags) */}
                <div>
                  <label className="block text-xs font-semibold text-[#F8FAFC] mb-2">
                    Services Interested In
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.map((s) => {
                      const isSelected = formData.servicesInterested.includes(s);
                      return (
                        <motion.button
                          type="button"
                          key={s}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleToggleService(s)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                            isSelected
                              ? 'gradient-blue-cyan text-[#080B14] font-bold shadow-xs'
                              : 'bg-white/5 border border-white/10 text-[#A1AABD] hover:text-white hover:bg-white/10'
                          }`}
                        >
                          {s}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-xs font-semibold text-[#F8FAFC] mb-1.5">
                    Additional Information (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    placeholder="Share details on current ad spend, specific competitors, or target markets..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#101522] text-sm text-white placeholder-[#A1AABD]/60 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF] resize-none"
                  />
                </div>

                {/* Submit Button with loading animation */}
                <motion.button
                  whileHover={{ scale: 1.02, boxShadow: '0 0 35px -5px rgba(79, 140, 255, 0.45)' }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl gradient-blue-cyan text-[#080B14] font-bold text-sm flex items-center justify-center gap-2 hover:opacity-95 transition-all shadow-lg shadow-[#4F8CFF]/20 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-[#080B14]/30 border-t-[#080B14] rounded-full animate-spin" />
                      <span>Analyzing Request & Queuing Audit...</span>
                    </div>
                  ) : (
                    <>
                      <span>Request My Free Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#A1AABD]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#39D5FF]" />
                  <span>100% Confidential · No Obligation Required · 24-Hour Business Delivery</span>
                </div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
