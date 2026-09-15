import {
  Bot,
  CalendarDays,
  Clapperboard,
  Code2,
  Cpu,
  Mail,
  Megaphone,
  Palette,
  PenLine,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type DemoKind =
  | "web-dev"
  | "design"
  | "marketing"
  | "video"
  | "editing"
  | "console";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  long: string;
  features: string[];
  demo: DemoKind;
  cta: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    icon: Code2,
    title: "Web Development",
    desc: "We design and build fast, modern websites and online stores that turn visitors into customers.",
    long: "Every project ships as a fast, accessible, conversion-focused build. We handle everything from information architecture to deployment — and wire AI assistants into your site so every visitor gets instant answers, day or night.",
    features: [
      "Lightning-fast, SEO-ready builds",
      "Custom design system that matches your brand",
      "AI chat assistant trained on your business",
      "Analytics, CMS and maintenance included",
    ],
    demo: "web-dev",
    cta: "Start your site",
  },
  {
    slug: "graphic-designing",
    icon: Palette,
    title: "Graphic Designing",
    desc: "From logos to full brand kits, we create visuals that make your business instantly recognizable.",
    long: "Your brand is your first impression. We design identity systems, social creatives and marketing visuals that feel premium in every size — then hand you a full kit you can use across every platform.",
    features: [
      "Logo & full brand identity",
      "Social media creatives and ad banners",
      "Marketing collateral and pitch decks",
      "Unlimited refinements until it feels right",
    ],
    demo: "design",
    cta: "Design my brand",
  },
  {
    slug: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    desc: "We manage your social presence and campaigns so your brand grows while you focus on your business.",
    long: "We run the campaigns, finesse the copy and study the numbers so your brand stays top-of-mind. From social scheduling to paid campaigns, our team plus AI agents keep your funnel warm around the clock.",
    features: [
      "Social media growth & content calendar",
      "Paid campaigns with healthy ROAS",
      "AI-assisted copywriting and creatives",
      "Monthly reporting you actually understand",
    ],
    demo: "marketing",
    cta: "Grow my brand",
  },
  {
    slug: "video-animation",
    icon: Clapperboard,
    title: "Video Animation",
    desc: "We craft motion graphics, explainer videos and animated brand stories that bring your ideas to life.",
    long: "Explainer videos, logo animations and motion graphics that turn complex ideas into clear, shareable stories. We storyboard, animate and sound-design in-house — so your brand moves with purpose.",
    features: [
      "Explainer & brand story videos",
      "Logo and UI motion graphics",
      "Storyboarding and voice-over scripting",
      "Short-form cuts ready for every platform",
    ],
    demo: "video",
    cta: "Animate my story",
  },
  {
    slug: "video-editing",
    icon: Video,
    title: "Video Editing",
    desc: "From raw footage to polished, scroll-stopping cuts — reels, ads and content engineered to perform.",
    long: "Raw footage becomes content that holds attention. We cut reels, ads, podcasts and long-form videos with pacing that keeps viewers watching — captions, color and sound all handled.",
    features: [
      "Reels, shorts and TikTok edits",
      "Ads and promo cuts ready to publish",
      "Captions, color grading and sound design",
      "Rapid turnaround on weekly content",
    ],
    demo: "editing",
    cta: "Edit my content",
  },
];

export type Product = {
  slug: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  long: string;
  tag: string;
  deployment: "ready" | "custom";
  features: string[];
  demo: DemoKind;
  cta: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "ai-chatbot",
    icon: Bot,
    title: "AI Chatbot",
    desc: "A ready-made chatbot for your website or Instagram DMs that answers questions and books leads instantly.",
    long: "A no-code AI agent for your website and Instagram. Train it on your business in minutes, then let it answer questions, qualify leads and book appointments while you sleep.",
    tag: "Ready to deploy",
    deployment: "ready",
    features: [
      "Trained on your business in minutes",
      "Website widget + Instagram DM integration",
      "Lead capture and booking flows",
      "Goes live the same week",
    ],
    demo: "console",
    cta: "Deploy agent",
  },
  {
    slug: "email-whatsapp-automation",
    icon: Mail,
    title: "Email/WhatsApp Automation",
    desc: "Automatic replies, order confirmations, and follow-up sequences that keep customers engaged without lifting a finger.",
    long: "Never let a lead go cold. Triggered emails and WhatsApp sequences handle confirmations, reminders, follow-ups and re-engagement — so your pipeline moves on autopilot.",
    tag: "Powered by SFlyra Labs",
    deployment: "ready",
    features: [
      "WhatsApp + email trigger sequences",
      "Order confirmations & reminder flows",
      "Smart follow-ups that re-warm cold leads",
      "Personalized at scale, no templates smell",
    ],
    demo: "console",
    cta: "Deploy agent",
  },
  {
    slug: "social-media-auto-poster",
    icon: CalendarDays,
    title: "Social Media Auto-Poster",
    desc: "Schedule and auto-generate captions for your posts across Instagram, Facebook, and LinkedIn.",
    long: "Your content, everywhere, on time. An agent that drafts on-brand captions, keeps a consistent calendar and posts across Instagram, Facebook and LinkedIn — with zero daily admin.",
    tag: "Ready to deploy",
    deployment: "ready",
    features: [
      "Auto-generated on-brand captions",
      "Smart daily posting calendar",
      "Instagram, Facebook & LinkedIn support",
      "A month of content in one sitting",
    ],
    demo: "console",
    cta: "Deploy agent",
  },
  {
    slug: "ai-content-writer",
    icon: PenLine,
    title: "AI Content Writer",
    desc: "Generate on-brand blog posts, captions, and product descriptions in seconds.",
    long: "A writer on tap. Produce blog posts, ad copy, captions and product descriptions tuned to your brand voice — in seconds, not days. Review, edit and publish straight from the console.",
    tag: "Powered by SFlyra Labs",
    deployment: "ready",
    features: [
      "Learns your brand voice",
      "Blog, ads, captions and descriptions",
      "Drafts in seconds, then refine together",
      "Export-ready Markdown",
    ],
    demo: "console",
    cta: "Deploy agent",
  },
  {
    slug: "ai-automation",
    icon: Cpu,
    title: "AI Automation",
    desc: "Custom AI systems that run your operations on autopilot — from lead handling to full back-office workflows.",
    long: "We map the repetitive work hiding in your business and hand it to AI. Custom automations connect your tools, replace manual busywork and report back in plain language.",
    tag: "Custom build",
    deployment: "custom",
    features: [
      "Connects the tools you already use",
      "Replaces manual, repetitive workflows",
      "Custom-built to your exact process",
      "Plain-language reporting for every action",
    ],
    demo: "console",
    cta: "Book consultation",
  },
  {
    slug: "agentic-workflows",
    icon: Workflow,
    title: "Agentic Workflows",
    desc: "Multi-step AI agents that research, decide, and take action across your business tools.",
    long: "Agents that don't just answer — they act. Multi-step systems that research, decide and execute across your tools, with humans in the loop exactly where it matters.",
    tag: "Custom build",
    deployment: "custom",
    features: [
      "Multi-step autonomous decision-making",
      "Ties your whole tool stack together",
      "Human checkpoints at the right moments",
      "Designed, deployed and trained for you",
    ],
    demo: "console",
    cta: "Book consultation",
  },
];

export function findService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function findProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}