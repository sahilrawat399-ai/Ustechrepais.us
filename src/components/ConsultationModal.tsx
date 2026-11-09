import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, ShieldCheck, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  onBookCall
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please provide your name');
      return;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please provide a valid work email');
      return;
    }
    if (!phone.trim()) {
      setError('Please provide a phone number');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
            className="relative w-full max-w-lg bg-[#101522] rounded-3xl shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#141B2A] text-white p-6 sm:p-7 relative border-b border-white/10">
              <button
                onClick={onClose}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-semibold text-[#39D5FF] uppercase tracking-wider mb-1">
                Free Strategy Consultation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                Connect with a Senior Strategist
              </h3>
              <p className="text-xs text-[#A1AABD]">
                Receive a tailored review of search traffic opportunities and paid acquisition efficiency.
              </p>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7">
              {submitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#4F8CFF]/20 text-[#39D5FF] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Consultation Request Received
                  </h4>
                  <p className="text-xs text-[#A1AABD] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong>{name}</strong>. A dedicated growth strategist will reach out to{' '}
                    <strong>{email}</strong> within 1 business day with your initial overview.
                  </p>
                  <div className="pt-2 flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-xl gradient-blue-cyan text-[#080B14] text-xs font-bold cursor-pointer"
                    >
                      Return to Website
                    </motion.button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 rounded-xl bg-red-400/10 border border-red-400/20 text-xs text-red-400 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                      Business Website
                    </label>
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#F8FAFC] mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#141B2A] text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
                    />
                  </div>

                  <div className="pt-2">
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      type="submit"
                      className="w-full py-3 rounded-xl gradient-blue-cyan text-[#080B14] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md hover:opacity-95"
                    >
                      <span>Request Free Consultation</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A1AABD]">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#39D5FF]" />
                      <span>100% Confidential</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onBookCall();
                      }}
                      className="text-[#39D5FF] font-semibold hover:underline cursor-pointer"
                    >
                      Or Pick a Calendar Slot →
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
