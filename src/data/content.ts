import {
  DigitalService,
  PricingPlan,
  ProcessStep,
  ValueAdvantage,
  FAQItem
} from '../types';

export const BRAND = {
  name: 'US Tech Repairs',
  domain: 'USTechRepairs.net',
  url: 'https://ustechrepairs.net',
  tagline: 'Digital Marketing Solutions Built for Business Growth',
  subheadline:
    'US Tech Repairs is a digital marketing services company providing remote marketing solutions to businesses. We formulate data-driven strategies designed to improve online visibility, customer acquisition, and marketing performance.',
  email: 'support@ustechrepairs.net',
  phoneDisplay: '+1 442-313-1406',
  phoneTel: 'tel:+14423131406',
  hours: 'Monday–Friday, 9:00 AM–6:00 PM (ET)',
  model: '100% Remote Digital Marketing Services',
  coverageNote: 'Remote digital marketing services for businesses across the US and worldwide.'
};

export const TRUST_STRIP = [
  '100% Remote Digital Marketing Services',
  'Flexible Monthly Retainers',
  'Transparent Analytics Reporting',
  'Strategic Campaign Optimization',
  'Client-Focused Support'
];

export const CORE_SERVICES: DigitalService[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    shortDescription:
      'Comprehensive organic search strategy, keyword research, technical SEO optimization, on-page structuring, and monthly performance tracking.',
    price: '$799',
    billingType: 'per month',
    additional: 'Custom quotes available for enterprise sites.',
    icon: 'Search',
    deliverables: [
      'In-depth competitor keyword research & gap matrix',
      'Technical site health audit & Core Web Vitals fixes',
      'On-page title, meta, schema, & header tag structuring',
      'High-authority backlink profiling & outreach planning',
      'Monthly organic search impressions & rankings report'
    ],
    keyOutcomes: ['Higher Google SERP visibility', 'Qualified organic search traffic', 'Long-term compounding ROI']
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription:
      'Strategic content planning, post creation, graphic design, social scheduling, and monthly engagement performance reporting across major social channels.',
    price: '$699',
    billingType: 'per month',
    additional: 'Custom tiered packages for multi-platform management.',
    icon: 'Share2',
    deliverables: [
      'Monthly content calendar with brand aesthetic alignment',
      'Custom graphic design assets & branded carousel decks',
      'Cross-platform post publishing & caption copywriting',
      'Community engagement monitoring & follower growth review',
      'End-of-month engagement & demographic analytics report'
    ],
    keyOutcomes: ['Consistent brand authority', 'Audience engagement & reach', 'Direct community inbound inquiries']
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    shortDescription:
      'High-quality, search-optimized blog posts, service page copy, case studies, downloadable guides, and brand copywriting tailored to your target market.',
    price: '$599',
    billingType: 'per month',
    additional: 'Fixed-price article bundles starting at $150 / article.',
    icon: 'FileText',
    deliverables: [
      'Search-intent optimized long-form articles (1,200–2,000 words)',
      'Persuasive service page and landing page copywriting',
      'Customer case studies & lead magnet guides',
      'Internal linking structure & semantic entity optimization',
      'Ready-to-publish formatting with custom editorial imagery'
    ],
    keyOutcomes: ['Topical domain authority', 'Engaging conversion-focused copy', 'Higher reader time-on-page']
  },
  {
    id: 'website-optimization',
    title: 'Website Optimization',
    shortDescription:
      'Technical speed improvements, mobile responsiveness enhancements, conversion-focused layout adjustments, and user experience refinements.',
    price: '$849',
    billingType: 'one-time project fee',
    additional: '$450 / month ongoing optimization.',
    icon: 'Gauge',
    deliverables: [
      'Asset compression, code minification & server response caching',
      'Mobile UX inspection & touch target refinement',
      'Above-the-fold CTA placement & hero section restructuring',
      'Form abandonment friction reduction & conversion flow tuning',
      'Cross-browser rendering verification & speed score audit'
    ],
    keyOutcomes: ['Sub-second page load times', 'Lower bounce rates', 'Increased conversion velocity']
  },
  {
    id: 'digital-advertising',
    title: 'Digital Advertising Management',
    shortDescription:
      'End-to-end setup, monitoring, bid management, and creative optimization for Google Ads Search & Display and Meta Ads Facebook & Instagram.',
    price: '$899',
    billingType: 'per month management retainer',
    importantNote: 'Ad spend is paid directly by the client to advertising platforms.',
    icon: 'Target',
    deliverables: [
      'Multi-tier campaign architecture (Search, Display, Meta)',
      'High-intent search query targeting & negative keyword pruning',
      'A/B headline, ad copy, and creative asset iteration',
      'ROAS pacing, smart bidding adjustments & audience exclusions',
      'Bi-weekly spend attribution & qualified lead verification'
    ],
    keyOutcomes: ['Lower Customer Acquisition Cost (CAC)', 'High commercial intent traffic', 'Scalable ad pipeline']
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    shortDescription:
      'Automated email sequences, promotional newsletter campaigns, audience list segmentation, responsive template design, and deliverability monitoring.',
    price: '$499',
    billingType: 'per month',
    additional: 'Custom quotes for high-volume subscriber lists.',
    icon: 'Mail',
    deliverables: [
      'Welcome sequence, abandoned funnel & post-purchase nurture flows',
      'Bi-weekly promotional newsletters & educational updates',
      'Audience demographic and engagement list segmentation',
      'Clean responsive HTML email template styling',
      'SPF, DKIM, DMARC domain health & inbox deliverability tracking'
    ],
    keyOutcomes: ['Higher customer lifetime value (LTV)', 'Consistent repeat purchases', 'Direct inbox relationship']
  },
  {
    id: 'marketing-strategy',
    title: 'Marketing Strategy & Consultation',
    shortDescription:
      'One-on-one strategic marketing consultation, competitor market analysis, channel allocation advisory, and custom 12-month digital growth roadmaps.',
    price: '$450',
    billingType: 'Single Strategic Consultation & Roadmap',
    additional: '$950 / month for ongoing monthly strategic advisory.',
    icon: 'Compass',
    deliverables: [
      'Deep-dive 60-minute executive strategy review session',
      'Comprehensive competitive landscape & channel gap analysis',
      'Custom 12-month multi-channel marketing growth roadmap',
      'Budget allocation recommendations based on target unit economics',
      'Prioritized tactical action plan with milestone tracking'
    ],
    keyOutcomes: ['Clear growth trajectory', 'Elimination of budget waste', 'Executive strategic clarity']
  },
  {
    id: 'analytics-reporting',
    title: 'Analytics & Reporting',
    shortDescription:
      'Google Analytics 4 configuration, conversion tracking setup, Google Tag Manager implementation, and custom real-time reporting dashboards.',
    price: '$499',
    billingType: 'one-time setup fee',
    additional: '$399 / month including ongoing maintenance and monthly executive reporting.',
    icon: 'BarChart3',
    deliverables: [
      'Complete Google Analytics 4 (GA4) property & stream setup',
      'Google Tag Manager (GTM) server & client-side trigger mapping',
      'Custom Looker Studio real-time executive dashboard',
      'Form submit, phone click, & purchase conversion event wiring',
      'Monthly executive video walkthrough of core metrics'
    ],
    keyOutcomes: ['Single source of marketing truth', 'Transparent channel attribution', 'Reliable ROI tracking']
  }
];

export const ADVANTAGES: ValueAdvantage[] = [
  {
    title: 'Data-Driven Strategies',
    description:
      'We focus on measurable outcomes. Every ad campaign, keyword target, and creative iteration is designed to improve visibility and marketing efficiency.',
    icon: 'LineChart'
  },
  {
    title: 'Dedicated Marketing Specialists',
    description:
      'Our team focuses on Google Ads search, Meta ad placements, technical SEO, and conversion-oriented landing page development.',
    icon: 'Award'
  },
  {
    title: 'Transparent Reporting',
    description:
      'Get comprehensive monthly performance reports detailing campaign activity, ad spend management, and key performance metrics without confusing jargon.',
    icon: 'FileCheck'
  },
  {
    title: 'Analytical Testing & Optimization',
    description:
      'We run structured testing, analyze traffic trends, and refine keyword targeting to continuously improve campaign performance over time.',
    icon: 'Zap'
  },
  {
    title: 'Engaging Creative Design',
    description:
      'We craft targeted visual assets, compelling ad copywriting, and responsive landing pages designed to engage your target audience.',
    icon: 'Palette'
  },
  {
    title: 'Direct Client Support',
    description:
      'We operate as an agile remote marketing partner. Connect with our team via email, phone, and scheduled video consultations during business hours.',
    icon: 'Headphones'
  },
  {
    title: 'Transparent Monthly Terms',
    description:
      'We provide flexible month-to-month digital marketing retainers with clear deliverables and straightforward cancellation policies.',
    icon: 'ShieldCheck'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery & Analysis',
    description:
      'We review your existing digital presence, analyze target customer segments, and understand your core business objectives.'
  },
  {
    step: '02',
    title: 'Market & Search Research',
    description:
      'We analyze high-intent search keywords, evaluate competitive positioning, and identify valuable organic and paid traffic opportunities.'
  },
  {
    step: '03',
    title: 'Strategy Formulation',
    description:
      'We build a tailored marketing roadmap outlining recommended channels, target demographics, ad budget allocation, and milestones.'
  },
  {
    step: '04',
    title: 'Campaign & Asset Launch',
    description:
      'Our team designs custom ad creatives, drafts compelling ad copy, configures conversion tracking pixels, and deploys targeted campaigns.'
  },
  {
    step: '05',
    title: 'Active Optimization',
    description:
      'We monitor search query data, adjust bidding models, refine audience targeting, and optimize landing page engagement.'
  },
  {
    step: '06',
    title: 'Reporting & Strategic Review',
    description:
      'We provide detailed monthly analytics reports and hold strategic review sessions to evaluate campaign performance and plan future iterations.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    label: 'Foundational Tier',
    description:
      'Designed to help small and emerging businesses establish foundational search visibility and digital marketing infrastructure.',
    price: '$599',
    billing: 'Month-to-Month',
    includedServices: [
      'Targeted Keyword Research & Mapping',
      'Foundational On-Page SEO Optimizations',
      'Setup & Management of 1 Primary Ad or Social Channel',
      'Google Analytics 4 & Conversion Tag Configuration',
      'Visual Creative Design (8 Custom Assets / Month)'
    ],
    deliverables: [
      'Monthly SEO & Search Query Performance Report',
      'Ad / Social Campaign Structure Setup & Creative Delivery',
      'Digital Asset Archive via Shared Cloud Folder',
      '100% Remote Delivery via Email & Cloud Docs',
      'Email Support with 24-Hour Business SLA'
    ]
  },
  {
    id: 'growth',
    name: 'Growth',
    label: 'Most Popular for Scaling',
    badge: 'Most Popular',
    popular: true,
    description:
      'A comprehensive package designed for businesses looking for ongoing multi-channel marketing, active optimization, and growth support.',
    price: '$1,199',
    billing: 'Month-to-Month',
    includedServices: [
      'Full-Funnel SEO Strategy & Technical Health Audits',
      'Multi-Channel Campaign Management (Google Ads & Meta Ads)',
      'Continuous Bidding Optimization & Negative Keyword Pruning',
      'Content Strategy & 2 Optimized SEO Articles / Month',
      'Visual Creative Production (18 Custom Assets / Month)',
      'Conversion Rate Optimization Landing Page Reviews'
    ],
    deliverables: [
      'Bi-Weekly Campaign Performance & Spend Pacing Review',
      'Multi-Channel Search & Social Ad Sets with A/B Copy Variations',
      'Comprehensive Monthly Analytics & Channel Attribution Report',
      'Monthly 45-Minute Strategic Video Consultation',
      'Priority Email & Scheduled Video Call Support'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    label: 'Comprehensive Enterprise',
    description:
      'Our highest-tier package with the most comprehensive services, tailored multi-channel strategy, high-volume asset production, and senior support.',
    price: '$2,099',
    billing: 'Month-to-Month',
    includedServices: [
      'Complete Omnichannel Strategy (Search, Paid Social, Video & Web)',
      'Advanced Search Engine Optimization & Core Web Vitals Tuning',
      'Multi-Platform Paid Advertising (Google Search, Display, Meta, LinkedIn)',
      'Automated Email Marketing & Customer Nurture Sequences',
      'High-Volume Creative Production (35+ Custom Assets / Month)',
      '4 In-Depth SEO Long-Form Articles & Landing Page Copywriting',
      'Funnel & Conversion Rate Optimization Implementation'
    ],
    deliverables: [
      'Live Real-Time Performance Dashboard (Looker Studio)',
      'Weekly Campaign Optimization & Budget Pacing Adjustments',
      'Bi-Weekly Executive Strategy & Roadmap Review Meetings',
      'Dedicated Senior Marketing Specialist & Account Lead',
      'Priority Direct Support via Email, Phone & Scheduled Video Sessions'
    ]
  },
  {
    id: 'custom',
    name: 'Custom',
    label: 'Bespoke Solution',
    description:
      'Tailored digital marketing architecture, high-scale multi-channel deployment, and bespoke strategy for organizations with unique scope requirements.',
    price: 'Custom Pricing',
    billing: 'Flexible Scope',
    includedServices: [
      'Fully Customized Omnichannel Marketing Architecture',
      'Dedicated Multi-Channel Campaign Management & Scaling',
      'Bespoke Analytics & Tailored Executive KPI Dashboards',
      'High-Volume Multi-Format Asset Production & Video',
      'Custom Technical Integrations & CRO Architecture'
    ],
    deliverables: [
      'Custom Delivery Schedule & Milestone Strategic Roadmap',
      'Dedicated Senior Account Executive & Strategy Director',
      'Tailored Reporting Cadence (Weekly / Real-Time)',
      'Direct Strategy Sessions via Scheduled Video Calls',
      'Priority SLA & Dedicated Support Communication'
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'What is US Tech Repairs and what services do you provide?',
    answer:
      'US Tech Repairs is a digital marketing services company providing remote marketing solutions to businesses. We provide comprehensive digital marketing services across 8 core disciplines: Search Engine Optimization (SEO), Social Media Marketing, Content Creation, Website Optimization, Digital Advertising Management, Email Marketing, Marketing Strategy & Consultation, and Analytics & Reporting.'
  },
  {
    id: 2,
    question: 'How are your digital marketing services delivered?',
    answer:
      'All services are delivered remotely through email, scheduled online meetings, marketing platforms, digital reports, and electronic communication channels. Customers do not need to receive physical products.'
  },
  {
    id: 3,
    question: 'How do monthly retainers and billing work?',
    answer:
      'Our services operate through transparent monthly retainers or clearly defined project fees. Retainers are month-to-month, and clients can cancel with a simple 7-day cancellation notice.'
  },
  {
    id: 4,
    question: 'What is your refund policy?',
    answer:
      'Our refund policy is governed by our formal Refund & Cancellation Policy. Because digital marketing retainers involve dedicated strategic labor, custom creative asset production, and continuous analytical work, retainers are non-refundable once work has commenced for that billing cycle. Clients may cancel any upcoming retainer cycle at any time with a 7-day written notice prior to the next billing date. You can review our full policy via the Refund & Cancellation Policy link in our footer.'
  },
  {
    id: 5,
    question: 'How do I contact customer support or request a consultation?',
    answer:
      'Customers can contact our support team through support@ustechrepairs.net or +1 442-313-1406 during business hours (Monday–Friday, 9:00 AM–6:00 PM ET).'
  }
];

export const POLICY_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'Effective November 2026',
    sections: [
      {
        heading: '1. Information We Collect',
        text: 'US Tech Repairs collects business and contact details provided voluntarily by visitors and clients, including business name, website URL, contact names, email addresses, phone numbers, and marketing campaign parameters. We collect this data solely to formulate strategies, provide service proposals, and deliver remote digital marketing services.'
      },
      {
        heading: '2. Client Data Confidentiality & Security',
        text: 'We respect the strict confidentiality of your business analytics, conversion figures, customer lists, and strategic roadmaps. We never sell, lease, or distribute client marketing data to third parties. Access to client ad accounts (Google Ads, Meta Business Manager) is maintained strictly via official partner permission delegation.'
      },
      {
        heading: '3. Analytics and Cookies',
        text: 'Our website uses standard anonymous web analytics to monitor aggregate traffic patterns, page load performance, and user engagement. You may adjust browser cookie preferences at any time.'
      },
      {
        heading: '4. Contact Information',
        text: 'For questions regarding your privacy rights, please contact our privacy compliance officer at support@ustechrepairs.net or +1 442-313-1406.'
      }
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    lastUpdated: 'Effective November 2026',
    sections: [
      {
        heading: '1. Service Scope & Remote Delivery',
        text: 'US Tech Repairs provides 100% remote digital marketing solutions. All deliverables, including SEO reports, creative assets, ad copy, and strategic consultation, are transmitted digitally via email, video calls, digital dashboards, or shared cloud folders. No physical goods are manufactured or shipped.'
      },
      {
        heading: '2. Advertising Platform Spend',
        text: 'Management retainers cover professional strategy, setup, campaign execution, and optimization labor only. Direct advertising spend (e.g., Google Ads, Meta Ads click charges) is billed directly by the respective ad platform to the client credit card on file.'
      },
      {
        heading: '3. Retainer Terms & Cancellation',
        text: 'All recurring retainers operate on a month-to-month basis with no long-term contract lock-in. Clients may cancel future billing cycles by providing written notice to support@ustechrepairs.net at least seven (7) days prior to the start of the next billing cycle.'
      },
      {
        heading: '4. Disclaimer of Search Engine & Ad Guarantees',
        text: 'While we formulate data-driven best practices based on rigorous market testing, third-party platform algorithms (such as Google search ranking algorithms and Meta ad auction costs) are outside direct control. We do not guarantee specific third-party rankings or arbitrary numerical financial returns.'
      }
    ]
  },
  refund: {
    title: 'Refund & Cancellation Policy',
    lastUpdated: 'Effective November 2026',
    sections: [
      {
        heading: '1. Dedicated Digital Labor & Deliverables',
        text: 'Because digital marketing services require immediate allocation of senior strategists, copywriters, and technical analysts who produce tailored intellectual property, fees paid for ongoing monthly retainers are non-refundable once work on that cycle has begun.'
      },
      {
        heading: '2. Transparent 7-Day Cancellation',
        text: 'To avoid being billed for a subsequent month, clients must submit a cancellation request via email to support@ustechrepairs.net at least seven (7) business days prior to the next scheduled renewal date. Upon timely cancellation, services and billing will terminate cleanly at the end of the active paid period.'
      },
      {
        heading: '3. One-Time Projects & Consultation Sessions',
        text: 'Fees for single strategic consultations and one-time technical website audits may be rescheduled with at least 24 hours advance notice. Once an audit roadmap has been delivered or a consultation conducted, the service fee is non-refundable.'
      },
      {
        heading: '4. Dispute Resolution',
        text: 'If you have concerns about the quality or scope of your deliverables, please contact your account lead or email support@ustechrepairs.net to initiate an immediate executive review.'
      }
    ]
  }
};
