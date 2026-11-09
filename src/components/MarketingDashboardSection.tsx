import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Target,
  Search,
  Zap,
  Mail,
  Info
} from 'lucide-react';

export const MarketingDashboardSection: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<number>(4);

  const monthlyData = [
    {
      month: 'Month 1',
      title: 'Foundation & Audit',
      inquiries: 24,
      qualified: 12,
      cvr: '2.1%',
      organicKws: 35,
      adRoas: '1.8x',
      progress: 30
    },
    {
      month: 'Month 2',
      title: 'Campaign Deployment',
      inquiries: 46,
      qualified: 28,
      cvr: '3.0%',
      organicKws: 58,
      adRoas: '2.4x',
      progress: 55
    },
    {
      month: 'Month 3',
      title: 'Data Pruning & CRO',
      inquiries: 68,
      qualified: 52,
      cvr: '3.9%',
      organicKws: 92,
      adRoas: '3.1x',
      progress: 75
    },
    {
      month: 'Month 4 (Optimized)',
      title: 'Scaling & Multi-Channel',
      inquiries: 112,
      qualified: 84,
      cvr: '4.8%',
      organicKws: 146,
      adRoas: '3.9x',
      progress: 100
    }
  ];

  const current = monthlyData[selectedMonth - 1];

  return (
    <section id="performance" className="py-24 bg-[#080B14] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#4F8CFF]/10 rounded-full blur-[140px] pointer-events-none" />

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
            Structured Analytics & Transparency
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Digital Campaign Performance
          </h2>
          <p className="text-base sm:text-lg text-[#A1AABD] leading-relaxed">
            Monitor campaign activity, performance trends, qualified inquiries, and optimization
            progress through structured analytics and reporting.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-[#A1AABD] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            <Info className="w-3.5 h-3.5 text-[#39D5FF]" />
            <span>Interactive Demo Dashboard · Sample Illustrative Data Only</span>
          </div>
        </motion.div>

        {/* Big Dashboard Showcase Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="bg-[#101522] rounded-3xl border border-white/10 p-6 sm:p-8 lg:p-10 shadow-2xl glow-card hover:border-white/15 transition-all"
        >
          {/* Top Control Bar with 4 Months Timeline */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-8">
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Multi-Channel Attribution Suite</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-[#A1AABD] mt-0.5">
                Active Cycle: {current.month} — {current.title}
              </p>
            </div>

            {/* Monthly Progress Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-[#141B2A] rounded-xl border border-white/10 overflow-x-auto">
              {monthlyData.map((m, idx) => {
                const stepNum = idx + 1;
                const isSelected = selectedMonth === stepNum;
                return (
                  <button
                    key={stepNum}
                    onClick={() => setSelectedMonth(stepNum)}
                    className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      isSelected
                        ? 'text-[#080B14]'
                        : 'text-[#A1AABD] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activeMonthIndicator"
                        className="absolute inset-0 gradient-blue-cyan rounded-lg shadow-md"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{m.month}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 Core Metrics Grid with Animated Number Transitions */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#141B2A] border border-white/5 transition-all"
            >
              <span className="text-xs text-[#A1AABD] block mb-1">Inquiries Managed</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.inquiries}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums"
                >
                  {current.inquiries}
                </motion.div>
              </AnimatePresence>
              <span className="text-[11px] text-emerald-400 mt-1 block">
                Total monthly volume
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#141B2A] border border-white/5 transition-all"
            >
              <span className="text-xs text-[#A1AABD] block mb-1">Qualified Leads</span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.qualified}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="text-2xl sm:text-3xl font-bold font-mono text-[#39D5FF] tabular-nums"
                >
                  {current.qualified}
                </motion.div>
              </AnimatePresence>
              <span className="text-[11px] text-[#A1AABD] mt-1 block">
                Filtered & Synced to CRM
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#141B2A] border border-white/5 transition-all"
            >
              <span className="text-xs text-[#A1AABD] block mb-1">Strategy Review</span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                Bi-Weekly
              </div>
              <span className="text-[11px] text-[#A1AABD] mt-1 block">
                Executive Strategy Calls
              </span>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="p-5 rounded-2xl bg-[#141B2A] border border-white/5 transition-all"
            >
              <span className="text-xs text-[#A1AABD] block mb-1">KPI Audits</span>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tabular-nums">
                100%
              </div>
              <span className="text-[11px] text-[#A1AABD] mt-1 block">
                Transparent attribution
              </span>
            </motion.div>
          </div>

          {/* Split Analytics: Chart Left, Channels Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Graph (col-span-7) */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-[#141B2A] border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-sm font-bold text-white">
                    Lead Acquisition Velocity & Search Trends
                  </h4>
                  <p className="text-xs text-[#A1AABD] mt-0.5">
                    Progressive optimization curves across organic and paid channels
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#39D5FF]">
                    CVR: {current.cvr}
                  </span>
                </div>
              </div>

              {/* Animated SVG Curve */}
              <div className="h-48 w-full relative">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dashAreaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4F8CFF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#39D5FF" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal Guideline lines */}
                  <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.05)" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.05)" />

                  <AnimatePresence mode="wait">
                    <motion.path
                      key={`area-${selectedMonth}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      d={
                        selectedMonth === 1
                          ? 'M0,105 Q100,100 200,90 T400,80 L400,120 L0,120 Z'
                          : selectedMonth === 2
                          ? 'M0,100 Q100,85 200,65 T400,55 L400,120 L0,120 Z'
                          : selectedMonth === 3
                          ? 'M0,95 Q100,75 200,50 T400,35 L400,120 L0,120 Z'
                          : 'M0,95 Q100,65 200,40 T400,15 L400,120 L0,120 Z'
                      }
                      fill="url(#dashAreaGrad)"
                    />
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    <motion.path
                      key={`curve-${selectedMonth}`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      d={
                        selectedMonth === 1
                          ? 'M0,105 Q100,100 200,90 T400,80'
                          : selectedMonth === 2
                          ? 'M0,100 Q100,85 200,65 T400,55'
                          : selectedMonth === 3
                          ? 'M0,95 Q100,75 200,50 T400,35'
                          : 'M0,95 Q100,65 200,40 T400,15'
                      }
                      fill="none"
                      stroke="#4F8CFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </AnimatePresence>
                </svg>
              </div>

              {/* Timeline Indicator */}
              <div className="flex items-center justify-between text-xs text-[#A1AABD] pt-3 border-t border-white/5 font-mono">
                <span>Kickoff & Tracking Setup</span>
                <span>Audience Calibration</span>
                <span>Negative Keyword Tuning</span>
                <span className="text-[#39D5FF] font-bold">Continuous Scaling</span>
              </div>
            </div>

            {/* Right Channel Breakdown Cards (col-span-5) */}
            <div className="lg:col-span-5 space-y-3">
              <motion.div whileHover={{ x: 3 }} className="p-4 rounded-xl bg-[#141B2A] border border-white/5 flex items-center justify-between transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#4F8CFF]/20 text-[#39D5FF] flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Google Ads (Search & Display)</h5>
                    <p className="text-[11px] text-[#A1AABD]">Bidding models & negative query pruning</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-mono text-white">{current.adRoas}</span>
                  <span className="block text-[10px] text-emerald-400">Target ROAS</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 3 }} className="p-4 rounded-xl bg-[#141B2A] border border-white/5 flex items-center justify-between transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#39D5FF]/20 text-[#39D5FF] flex items-center justify-center">
                    <Search className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Organic Search Engine Index</h5>
                    <p className="text-[11px] text-[#A1AABD]">Top-10 keyword rankings in Google SERP</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-mono text-white">+{current.organicKws}</span>
                  <span className="block text-[10px] text-emerald-400">Target Keywords</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 3 }} className="p-4 rounded-xl bg-[#141B2A] border border-white/5 flex items-center justify-between transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#4F8CFF]/20 text-[#39D5FF] flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Meta Ads (Facebook & Instagram)</h5>
                    <p className="text-[11px] text-[#A1AABD]">Creative testing & retargeting sequences</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-mono text-white">4.2%</span>
                  <span className="block text-[10px] text-emerald-400">CTR Velocity</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ x: 3 }} className="p-4 rounded-xl bg-[#141B2A] border border-white/5 flex items-center justify-between transition-transform">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#39D5FF]/20 text-[#39D5FF] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-white">Lifecycle Email Nurture</h5>
                    <p className="text-[11px] text-[#A1AABD]">Automated drip flows & lead reactivation</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold font-mono text-white">42.8%</span>
                  <span className="block text-[10px] text-emerald-400">Open Rate</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
