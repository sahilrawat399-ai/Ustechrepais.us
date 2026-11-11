import React from 'react';
import { motion, type Variants } from 'motion/react';
import {
  Search,
  Share2,
  FileText,
  Gauge,
  Target,
  Mail,
  Compass,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { CORE_SERVICES } from '../data/content';
import { DigitalService } from '../types';

interface ServicesSectionProps {
  onSelectServiceDeliverables: (service: DigitalService) => void;
  onRequestService: (serviceTitle: string) => void;
  onExplorePackages: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceDeliverables,
  onRequestService,
  onExplorePackages
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-[#39D5FF]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#4F8CFF]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#39D5FF]" />;
      case 'Gauge':
        return <Gauge className="w-5 h-5 text-[#4F8CFF]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#39D5FF]" />;
      case 'Mail':
        return <Mail className="w-5 h-5 text-[#4F8CFF]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#39D5FF]" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-[#4F8CFF]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#39D5FF]" />;
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

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: 'easeOut' }
    }
  };

  return (
    <section id="services" className="py-24 bg-[#101522] border-y border-white/10 relative overflow-hidden">
      {/* Subtle radial ambient accent */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#39D5FF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            Our Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Remote Digital Marketing Services & Packages
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            usrepairs.us provides 8 structured, remote digital marketing services with
            transparent monthly deliverables, clear pricing, and no long-term contract lock-ins.
          </p>
        </motion.div>

        {/* 8 Premium Service Cards (Staggered Animation & Hover Lift) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {CORE_SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                boxShadow: '0 20px 40px -15px rgba(0,0,0,0.7), 0 0 25px -4px rgba(79, 140, 255, 0.35)',
                borderColor: 'rgba(79, 140, 255, 0.5)'
              }}
              transition={{ duration: 0.2 }}
              className="bg-[#141B2A] rounded-2xl p-6 border border-white/10 flex flex-col justify-between group transition-colors shadow-lg"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all"
                  >
                    {getIcon(service.icon)}
                  </motion.div>
                  <span className="text-[11px] font-mono text-[#39D5FF] bg-[#39D5FF]/10 px-2.5 py-1 rounded-md border border-[#39D5FF]/20">
                    Remote SLA
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-[#39D5FF] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A1AABD] leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* Pricing Block */}
                <div className="py-3 px-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-5 group-hover:border-white/10 transition-colors">
                  <div className="text-[11px] text-[#A1AABD]">Standard Investment</div>
                  <div className="flex items-baseline gap-1.5 mt-0.5">
                    <span className="text-xl font-bold font-mono text-white">
                      {service.price}
                    </span>
                    <span className="text-xs text-[#A1AABD]">
                      / {service.billingType}
                    </span>
                  </div>
                  {service.additional && (
                    <div className="text-[10px] text-[#39D5FF] mt-1">
                      {service.additional}
                    </div>
                  )}
                  {service.importantNote && (
                    <div className="text-[10px] text-amber-300/80 mt-1">
                      {service.importantNote}
                    </div>
                  )}
                </div>

                {/* Sample Deliverables Preview */}
                <div className="space-y-1.5 mb-6">
                  {service.deliverables.slice(0, 3).map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-[11px] text-[#F8FAFC]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#39D5FF] shrink-0 mt-0.5" />
                      <span className="leading-tight line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectServiceDeliverables(service)}
                  className="text-xs font-semibold text-[#A1AABD] hover:text-white transition-colors cursor-pointer py-1"
                >
                  View Deliverables
                </button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onRequestService(service.title)}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-[#080B14] gradient-blue-cyan hover:opacity-90 transition-all cursor-pointer shadow-xs"
                >
                  Request
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Bottom Banner Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-14 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onExplorePackages}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/15 text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-md"
          >
            <Layers className="w-4 h-4 text-[#39D5FF]" />
            <span>View Full Dedicated Services & Package Breakdown</span>
            <ArrowRight className="w-4 h-4 text-[#4F8CFF]" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
