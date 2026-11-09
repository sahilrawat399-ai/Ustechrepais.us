import React from 'react';
import { motion, type Variants } from 'motion/react';
import {
  LineChart,
  Award,
  FileCheck,
  Zap,
  Palette,
  Headphones,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { ADVANTAGES } from '../data/content';

interface WhyChooseUsProps {
  onViewPricing: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onViewPricing }) => {
  const getAdvantageIcon = (iconName: string) => {
    switch (iconName) {
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-[#39D5FF]" />;
      case 'Award':
        return <Award className="w-5 h-5 text-[#4F8CFF]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-[#39D5FF]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#4F8CFF]" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#39D5FF]" />;
      case 'Headphones':
        return <Headphones className="w-5 h-5 text-[#4F8CFF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#39D5FF]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#39D5FF]" />;
    }
  };

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
    <section id="why-us" className="py-24 bg-[#080B14] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#4F8CFF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            Our Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Why Businesses Choose Us
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            We combine technical digital execution with clean design to help improve search
            visibility, lead acquisition, and online performance.
          </p>
        </motion.div>

        {/* 7 Advantage Cards with Staggered Entrance */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {ADVANTAGES.map((adv, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{
                y: -6,
                borderColor: 'rgba(79, 140, 255, 0.45)',
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px -4px rgba(79, 140, 255, 0.25)'
              }}
              transition={{ duration: 0.2 }}
              className={`bg-[#141B2A] rounded-2xl p-7 border border-white/10 transition-colors shadow-lg ${
                idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getAdvantageIcon(adv.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                {adv.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#A1AABD] leading-relaxed">
                {adv.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Action CTA with spring hover */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px -4px rgba(79, 140, 255, 0.4)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewPricing}
            className="inline-flex items-center gap-2 gradient-blue-cyan text-[#080B14] px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg shadow-[#4F8CFF]/20 cursor-pointer"
          >
            <span>View Flexible Pricing</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};
