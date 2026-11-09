export interface DigitalService {
  id: string;
  title: string;
  shortDescription: string;
  price: string;
  billingType: string;
  additional?: string;
  importantNote?: string;
  icon: string;
  deliverables: string[];
  keyOutcomes: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  label: string;
  badge?: string;
  description: string;
  price: string;
  billing: string;
  includedServices: string[];
  deliverables: string[];
  popular?: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ValueAdvantage {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface AuditFormData {
  fullName: string;
  businessName: string;
  businessWebsite: string;
  email: string;
  phone: string;
  primaryGoal: string;
  servicesInterested: string[];
  monthlyBudget: string;
  additionalInfo: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  businessWebsite: string;
  preferredDate: string;
  preferredTime: string;
  consultationTopic: string;
  additionalDetails: string;
}

export interface AuditReceipt {
  ticketNumber: string;
  submittedAt: string;
  businessName: string;
  businessWebsite: string;
  contactName: string;
  email: string;
  phone: string;
  primaryGoal: string;
  monthlyBudget: string;
  reviewWindow: string;
}

export interface BookingReceipt {
  bookingId: string;
  bookedAt: string;
  clientName: string;
  businessWebsite: string;
  email: string;
  sessionDate: string;
  sessionTime: string;
  topic: string;
  advisor: string;
}
