// Types for menu items
export interface MenuItem {
  title: string;
  category: string;
  src: string;
}

// Types for pricing features
export interface PricingFeature {
  name: string;
  active: boolean;
  question?: string;
}

// Types for pricing plans
export interface PricingPlan {
  title: {
    name: string;
    question?: string;
    active: boolean;
  };
  description: string;
  pricing: string;
  features: PricingFeature[];
  button: {
    text: string;
    link: string;
    active: boolean;
  };
}

// Types for testimonials
export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

// Types for contact links
export interface ContactLink {
  name: string;
  icon: string;
}

// Types for menu links
export interface MenuLink {
  name: string;
  link: string;
}

// Types for social links
export interface SocialLink {
  name: string;
  link: string;
}
