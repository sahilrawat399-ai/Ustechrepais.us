import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../data/content';

interface ProcessSectionProps {
  onExplorePlans: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onExplorePlans }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  return (
    <section id="methodology" className="py-24 bg-[#101522] border-y border-white/10 relative overflow-hidden">
      {/* Background radial ambient accent */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-[#39D5FF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            Our Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            A structured, transparent operational process designed to eliminate marketing
            guesswork and establish continuous campaign optimization.
          </p>
        </motion.div>

        {/* 6-Step Interactive Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mb-14"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  whileHover={{ y: -4, borderColor: 'rgba(79, 140, 255, 0.4)' }}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#141B2A] border-[#4F8CFF] ring-1 ring-[#4F8CFF] shadow-xl shadow-[#4F8CFF]/15'
                      : 'bg-[#141B2A]/70 border-white/10 hover:border-white/20 hover:bg-[#141B2A]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl gradient-blue-cyan text-[#080B14] font-mono font-bold text-sm flex items-center justify-center shadow-md">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-mono text-[#39D5FF]">
                        Phase 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#A1AABD] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-[#39D5FF]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Deliverable Output</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Action CTA */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px -4px rgba(79, 140, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onExplorePlans}
            className="inline-flex items-center gap-2 gradient-blue-cyan text-[#080B14] px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#4F8CFF]/20 cursor-pointer"
          >
            <span>Explore Marketing Plans & Retainers</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
