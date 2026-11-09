import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import {
  ArrowRight,
  TrendingUp,
  Target,
  Search,
  CheckCircle2,
  Calendar,
  Activity
} from 'lucide-react';
import { BRAND } from '../data/content';

interface HeroProps {
  onRequestAudit: () => void;
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestAudit, onBookConsultation }) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'traffic' | 'roas'>('leads');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <section id="home" className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-[#080B14]">
      {/* Animated radial ambient lights */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-[#4F8CFF]/15 rounded-full blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.10, 0.20, 0.10]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#39D5FF]/15 rounded-full blur-[150px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Staggered Content Animation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Unboxed Brand Sub-Kicker */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#39D5FF] mb-4">
              <span>Data-Driven Strategy</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span>100% Remote Delivery</span>
              <span className="text-white/30" aria-hidden="true">·</span>
              <span>Month-to-Month Retainers</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white tracking-tight leading-[1.12] mb-6 [text-wrap:balance]">
              Digital Marketing Solutions{' '}
              <span className="text-gradient-blue-cyan block sm:inline">
                Built for Business Growth.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-base sm:text-lg text-[#A1AABD] leading-relaxed mb-8 max-w-2xl">
              {BRAND.subheadline}
            </motion.p>

            {/* CTAs with hover physics */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 30px -4px rgba(79, 140, 255, 0.45)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onRequestAudit}
                className="inline-flex items-center justify-center gap-2.5 gradient-blue-cyan text-[#080B14] px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-150 shadow-lg shadow-[#4F8CFF]/25 cursor-pointer"
              >
                <span>Request Free Marketing Audit</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-2 bg-white/5 text-white border border-white/15 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base transition-all duration-150 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#39D5FF]" />
                <span>Book Strategy Consultation</span>
              </motion.button>
            </motion.div>

            {/* 3 Supporting Trust Indicators */}
            <motion.div variants={itemVariants} className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-[#4F8CFF]/20 text-[#39D5FF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    100% Remote Delivery
                  </h4>
                  <p className="text-[11px] text-[#A1AABD] mt-0.5">
                    Seamless collaboration across US & global clients.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-[#4F8CFF]/20 text-[#39D5FF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Month-to-Month Retainers
                  </h4>
                  <p className="text-[11px] text-[#A1AABD] mt-0.5">
                    Flexible arrangements with simple 7-day cancellation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-md bg-[#4F8CFF]/20 text-[#39D5FF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                    Transparent Analytics
                  </h4>
                  <p className="text-[11px] text-[#A1AABD] mt-0.5">
                    Bi-weekly reviews and verified channel attribution.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: High-End Marketing Performance Dashboard with gentle float animation */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mx-auto max-w-lg lg:max-w-none"
            >
              {/* Outer Glass Card */}
              <div className="bg-[#101522]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-5 sm:p-6 shadow-2xl relative glow-card hover:border-[#4F8CFF]/40 transition-colors">
                {/* Header Strip of Dashboard */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#4F8CFF]/20 flex items-center justify-center text-[#39D5FF]">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        Campaign Optimization Matrix
                      </div>
                      <div className="text-[10px] text-[#A1AABD]">
                        Multi-Channel Attribution Feed
                      </div>
                    </div>
                  </div>

                  {/* Sample Data Disclaimer Label */}
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-[#A1AABD] border border-white/10">
                    Sample Illustrative Data
                  </span>
                </div>

                {/* Key Metric Counters with reactive hover */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-[#141B2A] border border-white/5 transition-all"
                  >
                    <div className="text-[11px] text-[#A1AABD] mb-1 flex items-center justify-between">
                      <span>Qualified Inquiries</span>
                      <span className="text-emerald-400 text-[10px] font-bold">+148%</span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white tabular-nums">
                      84
                    </div>
                    <div className="text-[10px] text-[#A1AABD] mt-1">
                      Filtered & synced to CRM
                    </div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-[#141B2A] border border-white/5 transition-all"
                  >
                    <div className="text-[11px] text-[#A1AABD] mb-1 flex items-center justify-between">
                      <span>Blended CPA</span>
                      <span className="text-[#39D5FF] text-[10px] font-bold">-32%</span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-white tabular-nums">
                      $28.40
                    </div>
                    <div className="text-[10px] text-[#A1AABD] mt-1">
                      Search & Social Pacing
                    </div>
                  </motion.div>
                </div>

                {/* Interactive Chart Section */}
                <div className="p-4 rounded-xl bg-[#141B2A] border border-white/5 mb-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-semibold text-white">
                      Optimization Timeline & Velocity
                    </div>
                    <div className="flex items-center gap-1 text-[10px]">
                      {(['leads', 'traffic', 'roas'] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-2 py-1 rounded transition-all cursor-pointer capitalize ${
                            activeTab === tab
                              ? 'gradient-blue-cyan text-[#080B14] font-bold shadow-xs'
                              : 'text-[#A1AABD] hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {tab === 'traffic' ? 'Search' : tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Animated SVG Line Graph */}
                  <div className="h-32 w-full relative">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#39D5FF" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Grid guidelines */}
                      <line x1="0" y1="20" x2="300" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                      <line x1="0" y1="50" x2="300" y2="50" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="300" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                      {/* Smooth animated area transition */}
                      <AnimatePresence mode="wait">
                        <motion.path
                          key={activeTab}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          d={
                            activeTab === 'leads'
                              ? 'M0,85 Q75,70 150,45 T300,15 L300,100 L0,100 Z'
                              : activeTab === 'traffic'
                              ? 'M0,90 Q75,65 150,55 T300,20 L300,100 L0,100 Z'
                              : 'M0,80 Q75,60 150,40 T300,10 L300,100 L0,100 Z'
                          }
                          fill="url(#heroChartGrad)"
                        />
                      </AnimatePresence>

                      <AnimatePresence mode="wait">
                        <motion.path
                          key={`line-${activeTab}`}
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                          d={
                            activeTab === 'leads'
                              ? 'M0,85 Q75,70 150,45 T300,15'
                              : activeTab === 'traffic'
                              ? 'M0,90 Q75,65 150,55 T300,20'
                              : 'M0,80 Q75,60 150,40 T300,10'
                          }
                          fill="none"
                          stroke="#39D5FF"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </AnimatePresence>

                      {/* Milestone Nodes */}
                      <circle cx="0" cy="85" r="4" fill="#4F8CFF" />
                      <circle cx="100" cy="65" r="4" fill="#4F8CFF" />
                      <circle cx="200" cy="35" r="4" fill="#39D5FF" />
                      <circle cx="300" cy="15" r="5" fill="#39D5FF" stroke="#080B14" strokeWidth="2" />
                    </svg>
                  </div>

                  {/* Horizontal Month Timeline */}
                  <div className="flex justify-between text-[10px] text-[#A1AABD] pt-2 border-t border-white/5 font-mono">
                    <span>Month 1 (Audit)</span>
                    <span>Month 2 (Launch)</span>
                    <span>Month 3 (Prune)</span>
                    <span className="text-[#39D5FF] font-semibold">Month 4 (Scale)</span>
                  </div>
                </div>

                {/* Channel Split Cards */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      <Target className="w-3.5 h-3.5 text-[#4F8CFF]" />
                      <span className="text-white text-[11px]">Google Ads</span>
                    </div>
                    <span className="text-[#39D5FF] text-[11px] font-bold font-mono">3.8x ROAS</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-white/5 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-[#39D5FF]" />
                      <span className="text-white text-[11px]">Organic SEO</span>
                    </div>
                    <span className="text-emerald-400 text-[11px] font-bold font-mono">+124 KWs</span>
                  </div>
                </div>
              </div>

              {/* Decorative background glow frame */}
              <div className="absolute -z-10 -bottom-3 -right-3 w-full h-full rounded-2xl border border-[#4F8CFF]/20 bg-[#4F8CFF]/5 pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
