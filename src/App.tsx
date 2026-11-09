import React, { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { MarketingDashboardSection } from './components/MarketingDashboardSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { MarketingAuditSection } from './components/MarketingAuditSection';
import { StrategyBookingSection } from './components/StrategyBookingSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { DeliverablesModal } from './components/DeliverablesModal';
import { ConsultationModal } from './components/ConsultationModal';
import { PolicyModal } from './components/PolicyModal';
import { DigitalService } from './types';

export default function App() {
  const [selectedServiceForDeliverables, setSelectedServiceForDeliverables] = useState<DigitalService | null>(null);
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'refund' | null>(null);

  // States to pass down prefilled selections
  const [targetAuditService, setTargetAuditService] = useState<string>('');
  const [targetAuditPlan, setTargetAuditPlan] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestServiceFromCard = (serviceTitle: string) => {
    setTargetAuditService(serviceTitle);
    scrollToSection('contact');
  };

  const handleSelectPricingPlan = (planName: string) => {
    setTargetAuditPlan(planName);
    scrollToSection('contact');
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#080B14] text-[#F8FAFC] selection:bg-[#4F8CFF]/30 selection:text-white">
        {/* Sticky Top Navigation with Scroll Progress */}
        <Navbar
          onOpenConsultation={() => setConsultationModalOpen(true)}
          onOpenBooking={() => scrollToSection('strategy-booking')}
          onNavigate={scrollToSection}
        />

        <main className="flex-1">
          {/* Section 4: Hero Section with Live Campaign Dashboard */}
          <Hero
            onRequestAudit={() => scrollToSection('contact')}
            onBookConsultation={() => scrollToSection('strategy-booking')}
          />

          {/* Section 5: Trust and Performance Strip */}
          <TrustStrip />

          {/* Section 6: Digital Campaign Performance Dashboard */}
          <MarketingDashboardSection />

          {/* Section 7: Services Section (All 8 Core Services) */}
          <ServicesSection
            onSelectServiceDeliverables={(service) => setSelectedServiceForDeliverables(service)}
            onRequestService={handleRequestServiceFromCard}
            onExplorePackages={() => scrollToSection('pricing')}
          />

          {/* Section 8: Why Businesses Choose Us */}
          <WhyChooseUs onViewPricing={() => scrollToSection('pricing')} />

          {/* Section 9: How We Work (6-Step Methodology) */}
          <ProcessSection onExplorePlans={() => scrollToSection('pricing')} />

          {/* Section 10: Premium Pricing Section */}
          <PricingSection onSelectPlan={handleSelectPricingPlan} />

          {/* Section 11: Free Marketing Audit Section */}
          <MarketingAuditSection
            initialService={targetAuditService}
            initialPlan={targetAuditPlan}
          />

          {/* Section 12: Book Strategy Consultation Section */}
          <StrategyBookingSection />

          {/* Section 13: Frequently Asked Questions */}
          <FAQSection
            onAskDirectly={() => scrollToSection('contact')}
            onOpenRefundPolicy={() => setActivePolicy('refund')}
          />

          {/* Section 14: Premium Final CTA Section */}
          <FinalCTASection
            onGetConsultation={() => setConsultationModalOpen(true)}
            onScheduleCall={() => scrollToSection('strategy-booking')}
          />
        </main>

        {/* Section 15: Professional Footer */}
        <Footer
          onNavigate={scrollToSection}
          onOpenPolicy={(type) => setActivePolicy(type)}
        />

        {/* Modals with Spring Animations */}
        <DeliverablesModal
          service={selectedServiceForDeliverables}
          onClose={() => setSelectedServiceForDeliverables(null)}
          onRequestService={(title) => {
            setSelectedServiceForDeliverables(null);
            handleRequestServiceFromCard(title);
          }}
        />

        <ConsultationModal
          isOpen={consultationModalOpen}
          onClose={() => setConsultationModalOpen(false)}
          onBookCall={() => {
            setConsultationModalOpen(false);
            scrollToSection('strategy-booking');
          }}
        />

        <PolicyModal
          type={activePolicy}
          onClose={() => setActivePolicy(null)}
        />
      </div>
    </MotionConfig>
  );
}
