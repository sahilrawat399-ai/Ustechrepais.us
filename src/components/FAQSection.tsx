import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { FAQS, BRAND } from '../data/content';

interface FAQSectionProps {
  onAskDirectly: () => void;
  onOpenRefundPolicy: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onAskDirectly, onOpenRefundPolicy }) => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#101522] border-t border-white/10 relative overflow-hidden">
      {/* Background radial ambient accent */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#4F8CFF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="text-xs font-semibold text-[#39D5FF] tracking-wider uppercase mb-3">
            Got Questions?
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed max-w-2xl mx-auto">
            Is search marketing or social scaling new to your business? Here are simple, transparent
            explanations of how we manage budgets and deliver results.
          </p>
        </motion.div>

        {/* Accordion List with Smooth Height Transition */}
        <div className="space-y-3.5 mb-14">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="bg-[#141B2A] rounded-2xl border border-white/10 overflow-hidden transition-all duration-150 hover:border-white/20"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen ? 'gradient-blue-cyan text-[#080B14]' : 'bg-white/5 text-[#A1AABD]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A1AABD] leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                        {faq.id === 4 && (
                          <div className="mt-3">
                            <button
                              onClick={onOpenRefundPolicy}
                              className="text-xs font-semibold text-[#39D5FF] hover:underline cursor-pointer"
                            >
                              View Full Refund & Cancellation Policy →
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Below FAQ Box with hover physics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-6 rounded-2xl bg-[#141B2A] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#39D5FF] shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Have another question not covered in our resources guidelines?
              </h4>
              <p className="text-xs text-[#A1AABD] mt-0.5">
                Reach our strategy desk directly via {BRAND.email} or {BRAND.phoneDisplay}.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px -4px rgba(79, 140, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            onClick={onAskDirectly}
            className="px-5 py-2.5 rounded-xl gradient-blue-cyan text-[#080B14] font-bold text-xs whitespace-nowrap transition-all shadow-md cursor-pointer shrink-0"
          >
            Ask Us Directly
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
