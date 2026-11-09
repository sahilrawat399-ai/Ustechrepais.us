import React from 'react';
import { motion } from 'motion/react';
import {
  TrendingUp,
  Mail,
  Phone,
  Clock,
  ArrowUp,
  Globe2,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { BRAND } from '../data/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPolicy: (type: 'privacy' | 'terms' | 'refund') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPolicy }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B14] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (Col span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl gradient-blue-cyan flex items-center justify-center text-[#080B14] shadow-md shadow-[#4F8CFF]/20">
                <TrendingUp className="w-5 h-5 text-[#080B14]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  US Tech Repairs
                </span>
                <span className="text-[11px] font-medium text-[#A1AABD] tracking-wide mt-1">
                  USTechRepairs.net · Digital Marketing Solutions
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A1AABD] leading-relaxed max-w-sm">
              US Tech Repairs provides remote digital marketing services designed to help businesses
              improve their online visibility, customer acquisition, and marketing performance through
              structured, data-driven execution.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#39D5FF]">
              <Globe2 className="w-3.5 h-3.5" />
              <span>100% Remote Digital Marketing Services</span>
            </div>
          </div>

          {/* Column 2: Our Services (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1AABD]">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Google Ads (PPC) Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Meta Ads (Facebook & Instagram)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Website & Landing Page Optimization
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Content Creation & Copywriting
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Methodology (Col span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A1AABD]">
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  About US Tech Repairs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('methodology')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Our Methodology & Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('pricing')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Pricing Packages & Retainers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#39D5FF] transition-colors cursor-pointer text-left"
                >
                  Contact Our Marketing Team
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Legal (Col span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Contact & Hours
            </h4>
            <div className="space-y-2 text-xs text-[#A1AABD] mb-6">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-3.5 h-3.5 text-[#39D5FF]" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-[#39D5FF] transition-colors">
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-[#4F8CFF]" />
                <a href={BRAND.phoneTel} className="hover:text-[#39D5FF] transition-colors">
                  {BRAND.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#39D5FF]" />
                <span>{BRAND.hours}</span>
              </div>
              <p className="text-[11px] text-[#A1AABD]/80 pt-1 leading-relaxed">
                {BRAND.coverageNote}
              </p>
            </div>

            <h5 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">
              Legal & Policies
            </h5>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#A1AABD]">
              <button
                onClick={() => onOpenPolicy('privacy')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onOpenPolicy('terms')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => onOpenPolicy('refund')}
                className="hover:text-white transition-colors cursor-pointer text-left"
              >
                Refund & Cancellation Policy
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1AABD]">
          <div>
            © 2026 US Tech Repairs. All Rights Reserved. Domain: {BRAND.domain}
          </div>

          <div className="flex items-center gap-6">
            <span>Remote Marketing Architecture</span>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:text-[#39D5FF] hover:border-[#39D5FF]/40 transition-colors cursor-pointer"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
