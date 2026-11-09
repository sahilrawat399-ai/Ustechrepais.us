import React from 'react';
import { motion } from 'motion/react';
import { Globe2, ShieldCheck, BarChart3, Zap, Headphones } from 'lucide-react';
import { TRUST_STRIP } from '../data/content';

export const TrustStrip: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Globe2 className="w-4 h-4 text-[#39D5FF]" />;
      case 1:
        return <ShieldCheck className="w-4 h-4 text-[#4F8CFF]" />;
      case 2:
        return <BarChart3 className="w-4 h-4 text-[#39D5FF]" />;
      case 3:
        return <Zap className="w-4 h-4 text-[#4F8CFF]" />;
      case 4:
        return <Headphones className="w-4 h-4 text-[#39D5FF]" />;
      default:
        return <ShieldCheck className="w-4 h-4 text-[#4F8CFF]" />;
    }
  };

  return (
    <section className="py-6 bg-[#101522] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 items-center"
        >
          {TRUST_STRIP.map((item, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
              }}
              whileHover={{ y: -2, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
              className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.02] border border-white/5 justify-center sm:justify-start transition-colors cursor-default shadow-xs"
            >
              <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                {getIcon(idx)}
              </div>
              <span className="text-xs font-medium text-[#F8FAFC] leading-snug">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
