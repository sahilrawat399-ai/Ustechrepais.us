import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { TrendingUp, Phone, Menu, X, ArrowRight } from 'lucide-react';
import { BRAND } from '../data/content';

interface NavbarProps {
  onOpenConsultation: () => void;
  onOpenBooking: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onOpenBooking,
  onNavigate,
  activeSection = 'home'
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll progress bar at the top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'performance', label: 'Performance' },
    { id: 'methodology', label: 'Our Process' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'why-us', label: 'About Us' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/90 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/40'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] gradient-blue-cyan origin-left z-50 pointer-events-none"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Brand Wordmark & Icon */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4F8CFF] rounded-lg shrink-0 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl gradient-blue-cyan flex items-center justify-center text-white shadow-md shadow-[#4F8CFF]/20 group-hover:shadow-lg group-hover:shadow-[#39D5FF]/30 transition-all">
              <TrendingUp className="w-5 h-5 text-[#080B14]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-none">
                US Tech Repairs
              </span>
              <span className="text-[11px] font-medium text-[#A1AABD] tracking-wide mt-1">
                Digital Marketing Solutions
              </span>
            </div>
          </motion.a>

          {/* Navigation Links with animated hover indicator */}
          <nav className="hidden xl:flex items-center gap-7 text-sm font-medium text-[#A1AABD]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer hover:text-white ${
                    isActive ? 'text-white font-semibold' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] gradient-blue-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3.5 shrink-0">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenBooking}
              className="px-4 py-2 text-xs font-semibold text-[#F8FAFC] bg-white/5 border border-white/10 rounded-xl transition-all whitespace-nowrap cursor-pointer shadow-xs"
            >
              Book Strategy Call
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 25px -3px rgba(79, 140, 255, 0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 gradient-blue-cyan text-[#080B14] px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-150 shadow-md shadow-[#4F8CFF]/20 whitespace-nowrap cursor-pointer"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={BRAND.phoneTel}
              className="p-2 text-[#4F8CFF] hover:text-white rounded-lg border border-white/10 bg-white/5"
              aria-label="Call US Tech Repairs"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-white hover:bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#4F8CFF]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Animated Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="xl:hidden bg-[#101522]/98 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col space-y-1">
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.2 }}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-[#F8FAFC] hover:bg-white/5 hover:text-[#39D5FF] transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-white/10 hover:bg-white/15 text-white py-3 rounded-xl font-semibold text-xs border border-white/15"
              >
                Book Strategy Consultation
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full gradient-blue-cyan text-[#080B14] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
