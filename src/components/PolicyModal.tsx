import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, FileText, RefreshCw } from 'lucide-react';
import { POLICY_CONTENT, BRAND } from '../data/content';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'refund' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  const content = type ? POLICY_CONTENT[type] : null;

  return (
    <AnimatePresence>
      {type && content && (
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
            <div className="bg-[#141B2A] text-white p-6 sm:p-7 relative flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#39D5FF]">
                  {type === 'privacy' ? (
                    <Shield className="w-5 h-5" />
                  ) : type === 'refund' ? (
                    <RefreshCw className="w-5 h-5" />
                  ) : (
                    <FileText className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {content.title}
                  </h3>
                  <p className="text-xs text-[#A1AABD]">
                    {BRAND.name} · {BRAND.domain} · {content.lastUpdated}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-5 max-h-[65vh] overflow-y-auto text-xs sm:text-sm text-[#A1AABD] leading-relaxed">
              {content.sections.map((sec, idx) => (
                <div key={idx} className="space-y-1.5">
                  <h4 className="text-sm font-bold text-white">
                    {sec.heading}
                  </h4>
                  <p>{sec.text}</p>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-[#141B2A] border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-[#A1AABD]">
                For questions, email {BRAND.email} or call {BRAND.phoneDisplay}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-5 py-2 rounded-xl gradient-blue-cyan text-[#080B14] text-xs font-bold cursor-pointer hover:opacity-95 transition-opacity"
              >
                Acknowledge & Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
