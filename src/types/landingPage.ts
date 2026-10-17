export type IconName =
  | 'arrowRight'
  | 'check'
  | 'layers'
  | 'play'
  | 'rocket'
  | 'search'
  | 'sparkles'
  | 'target'
  | 'trending'
  | 'users'
  | 'wrench'
  | 'zap';

export interface LandingPageLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface LandingPageAction extends LandingPageLink {
  variant?: 'default' | 'outline' | 'inverse';
}

export interface BrandProfile {
  /** Stable key used by the preset registry and VITE_LANDING_PAGE_ID. */
  id: string;
  name: string;
  category: string;
  logoSrc: string;
  copyrightYear: string;
  metaTitle: string;
  metaDescription: string;
}

export interface LandingPageTheme {
  background: string;
  foreground: string;
  card: string;
  muted: string;
  mutedForeground: string;
  border: string;
  radius: string;
}

export interface HeroSection {
  label: string;
  title: string;
  description: string;
  primaryAction: LandingPageAction;
  secondaryAction: LandingPageAction;
  trustSignals: Array<{
    icon: IconName;
    label: string;
  }>;
}

export interface FeatureCard {
  icon: IconName;
  title: string;
  description: string;
}

export interface ProcessStep {
  icon: IconName;
  label: string;
  title: string;
  description: string;
}

export interface PricingTier {
  icon: IconName;
  label: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  action: LandingPageAction;
}

export interface DemoSection {
  label: string;
  title: string;
  description: string;
  frameUrl: string;
  frameNote: string;
}

export interface ContactSection {
  label: string;
  title: string;
  description: string;
  form: {
    action?: string;
    method?: 'get' | 'post';
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
  };
}

export interface FooterConfig {
  description: string;
  columns: Array<{
    title: string;
    links: LandingPageLink[];
  }>;
  acknowledgements: Array<{
    label: string;
    href: string;
  }>;
  tagline: string;
}

/** Turn optional page areas on or off in a product preset. */
export type LandingPageSection = 'features' | 'steps' | 'pricing' | 'callToAction' | 'demo' | 'contact';

export interface LandingPageConfig {
  brand: BrandProfile;
  theme: LandingPageTheme;
  /** Sections default to visible. Set a value to false to hide that area. */
  showSections: Partial<Record<LandingPageSection, boolean>>;
  navigation: LandingPageLink[];
  hero: HeroSection;
  features: {
    label: string;
    title: string;
    description: string;
    items: FeatureCard[];
  };
  steps: {
    label: string;
    title: string;
    items: ProcessStep[];
  };
  pricing: {
    label: string;
    title: string;
    description: string;
    tiers: PricingTier[];
  };
  callToAction: {
    label: string;
    title: string;
    description: string;
    action: LandingPageAction;
  };
  demo: DemoSection;
  contact: ContactSection;
  footer: FooterConfig;
}

type OptionalBrandFields = 'id' | 'copyrightYear';

export type LandingPageFactoryInput = Omit<LandingPageConfig, 'brand' | 'theme' | 'showSections'> & {
  brand: Omit<BrandProfile, OptionalBrandFields> & Partial<Pick<BrandProfile, OptionalBrandFields>>;
  theme?: Partial<LandingPageTheme>;
  showSections?: Partial<Record<LandingPageSection, boolean>>;
};
