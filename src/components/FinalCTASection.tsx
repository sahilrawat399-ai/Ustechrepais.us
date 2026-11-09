import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Sparkles, Check } from 'lucide-react';

interface FinalCTASectionProps {
  onGetConsultation: () => void;
  onScheduleCall: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onGetConsultation,
  onScheduleCall
}) => {
  return (
    <section className="py-28 bg-[#080B14] relative overflow-hidden">
      {/* Background ambient glow circles with gentle pulsing */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.28, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-[#4F8CFF]/20 via-[#39D5FF]/20 to-[#4F8CFF]/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#39D5FF] tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready To Grow Your Business?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 [text-wrap:balance]">
            Maximize Your{' '}
            <span className="text-gradient-blue-cyan">
              Market Share.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#A1AABD] max-w-2xl mx-auto leading-relaxed mb-10">
            Let's build a digital marketing strategy that delivers measurable results,
            slashes customer acquisition costs, and drives sustainable growth.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 35px -4px rgba(79, 140, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onGetConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 gradient-blue-cyan text-[#080B14] px-8 py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-xl shadow-[#4F8CFF]/25 cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.98 }}
              onClick={onScheduleCall}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/15 px-7 py-4 rounded-xl font-semibold text-sm sm:text-base transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#39D5FF]" />
              <span>Schedule Discovery Call</span>
            </motion.button>
          </div>

          {/* Supporting text */}
          <div className="inline-flex items-center gap-2 text-xs text-[#A1AABD] bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <Check className="w-3.5 h-3.5 text-emerald-400" />
            <span>Includes 1 Free Google Search Gap Report • No Obligation Required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
