import React from 'react';
import { motion, type Variants } from 'motion/react';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#080B14] relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4F8CFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#39D5FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="text-xs font-semibold text-[#39D5FF] tracking-wider uppercase mb-3">
            Transparent Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Digital Marketing Pricing Plans
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            Our approach focuses on structured execution, transparent deliverables, and
            continuous performance optimization with no hidden fees or long-term lock-ins.
          </p>
        </motion.div>

        {/* 4 Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-16"
        >
          {PRICING_PLANS.map((plan) => {
            const isGrowth = plan.popular;
            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  boxShadow: isGrowth
                    ? '0 25px 50px -15px rgba(0,0,0,0.8), 0 0 35px -5px rgba(79, 140, 255, 0.45)'
                    : '0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px -5px rgba(79, 140, 255, 0.25)',
                  borderColor: 'rgba(79, 140, 255, 0.5)'
                }}
                transition={{ duration: 0.2 }}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors relative ${
                  isGrowth
                    ? 'bg-[#141B2A] border-2 border-[#4F8CFF] shadow-2xl shadow-[#4F8CFF]/20 lg:-translate-y-2'
                    : 'bg-[#101522] border border-white/10'
                }`}
              >
                {/* Popular Badge */}
                {plan.badge && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 gradient-blue-cyan text-[#080B14] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md"
                  >
                    {plan.badge}
                  </motion.div>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-mono text-[#39D5FF] block mb-1">
                      {plan.label}
                    </span>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  </div>

                  <p className="text-xs text-[#A1AABD] leading-relaxed mb-6 min-h-[48px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="py-4 px-4 rounded-xl bg-white/[0.03] border border-white/5 mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl font-extrabold font-mono text-white">
                        {plan.price}
                      </span>
                      {plan.price !== 'Custom Pricing' && (
                        <span className="text-xs text-[#A1AABD]">/ month</span>
                      )}
                    </div>
                    <span className="text-[11px] text-[#39D5FF] block mt-1">
                      Billing: {plan.billing}
                    </span>
                  </div>

                  {/* Included Services */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <span className="text-[11px] font-bold text-white uppercase tracking-wider block mb-2">
                        Included Services
                      </span>
                      <ul className="space-y-2">
                        {plan.includedServices.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                            <Check className="w-3.5 h-3.5 text-[#39D5FF] shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables & Reporting */}
                    <div className="pt-3 border-t border-white/5">
                      <span className="text-[11px] font-bold text-[#A1AABD] uppercase tracking-wider block mb-2">
                        Deliverables & Reporting
                      </span>
                      <ul className="space-y-2">
                        {plan.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-[11px] text-[#A1AABD]">
                            <Check className="w-3.5 h-3.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Plan Button */}
                <div className="pt-4 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isGrowth
                        ? 'gradient-blue-cyan text-[#080B14] hover:opacity-95 shadow-md shadow-[#4F8CFF]/25'
                        : 'bg-white/5 hover:bg-white/10 text-white border border-white/15'
                    }`}
                  >
                    <span>
                      {plan.id === 'custom'
                        ? 'Contact Us for Custom Scope'
                        : plan.id === 'starter'
                        ? 'Get Started with Starter'
                        : `Select ${plan.name} Plan`}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Digital Delivery & Retainer Terms Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto p-6 rounded-2xl bg-[#141B2A] border border-white/10 text-xs text-[#A1AABD] leading-relaxed shadow-lg"
        >
          <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
            <ShieldCheck className="w-4 h-4 text-[#39D5FF]" />
            <span>Digital Delivery & Retainer Terms</span>
          </div>
          <p className="mb-2">
            All services are delivered 100% remotely through email, scheduled video consultations,
            digital performance reports, marketing platforms, and shared cloud workspaces.
          </p>
          <p className="mb-2">
            Advertising platform spend (Google/Meta) is paid directly by the client to ad platforms.
          </p>
          <p className="text-white font-medium">
            Retainers operate on flexible month-to-month terms with a simple 7-day cancellation notice.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
