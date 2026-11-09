import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { DigitalService } from '../types';

interface DeliverablesModalProps {
  service: DigitalService | null;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export const DeliverablesModal: React.FC<DeliverablesModalProps> = ({
  service,
  onClose,
  onRequestService
}) => {
  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-[#101522] rounded-3xl shadow-2xl border border-white/10 overflow-hidden my-8"
          >
            {/* Header */}
            <div className="bg-[#141B2A] text-white p-6 sm:p-8 relative border-b border-white/10">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-semibold text-[#39D5FF] uppercase tracking-wider mb-2">
                Detailed Service Deliverables
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
                {service.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1AABD] leading-relaxed max-w-xl">
                {service.shortDescription}
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-xs sm:text-sm">
              {/* Pricing Banner */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#A1AABD] block">Standard Retainer Fee</span>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-2xl font-bold font-mono text-white">{service.price}</span>
                    <span className="text-xs text-[#A1AABD]">/ {service.billingType}</span>
                  </div>
                </div>
                {service.additional && (
                  <span className="text-xs text-[#39D5FF] font-medium max-w-[200px] text-right">
                    {service.additional}
                  </span>
                )}
              </div>

              {service.importantNote && (
                <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-xs text-amber-200">
                  <strong>Notice:</strong> {service.importantNote}
                </div>
              )}

              {/* Included Deliverables List */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#39D5FF]" />
                  <span>Standard Monthly Deliverables & Execution</span>
                </h4>
                <div className="space-y-2.5">
                  {service.deliverables.map((d, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F8FAFC]">
                      <CheckCircle2 className="w-4 h-4 text-[#39D5FF] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Outcomes */}
              <div>
                <h4 className="text-xs font-bold text-[#A1AABD] uppercase tracking-wider mb-2">
                  Target Key Outcomes
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.keyOutcomes.map((outcome, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white"
                    >
                      {outcome}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 bg-[#141B2A] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#A1AABD]">
                <ShieldCheck className="w-4 h-4 text-[#39D5FF]" />
                <span>Month-to-month retainers · No long-term lock-in</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-white/10 text-xs font-medium text-[#A1AABD] hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => {
                    onClose();
                    onRequestService(service.title);
                  }}
                  className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl gradient-blue-cyan text-[#080B14] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                >
                  <span>Request Service</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
