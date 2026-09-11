import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bot,
  Code2,
  Instagram,
  Mail,
  Sparkle,
  Workflow,
  Check,
} from "lucide-react";

import logoAsset from "@/assets/sflyra-logo.jpg.asset.json";
import fatimahAsset from "@/assets/fatimah.jpg.asset.json";
import sumiyaPhoto from "@/assets/sumiya.jpg";
import { Sparkles, SparkleBurst } from "@/components/site/Sparkles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SFlyra Labs — Building Intelligence. Fusing Ideas." },
      {
        name: "description",
        content:
          "SFlyra Labs is a premium digital agency for web development, AI automation and agentic workflows — and the makers of SFlyra AI.",
      },
      { property: "og:title", content: "SFlyra Labs — Building Intelligence. Fusing Ideas." },
      {
        property: "og:description",
        content:
          "Web development, AI automation and agentic workflows from SFlyra Labs, makers of SFlyra AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Services", href: "#services" },
  { label: "SFlyra AI", href: "#product" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

function Wordmark() {
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3">
      <span className="relative shrink-0">
        <img
          src={logoAsset.url}
          alt="SFlyra Labs logo"
          width={40}
          height={40}
          className="h-10 w-10 rounded-xl object-cover ring-1 ring-primary/30"
        />
        <span className="absolute inset-0 rounded-xl bg-primary/20 blur-md -z-10" />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-lg leading-none font-semibold">
          SFlyra Labs
        </span>
        <span className="block truncate text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
          Intelligence Fused
        </span>
      </span>
    </a>
  );
}

function PrimaryButton({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-200 hover:scale-[1.03] glow-soft ${className}`}
    >
      {children}
    </a>
  );
}

function GhostButton({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-200 hover:bg-primary/10"
    >
      {children}
    </a>
  );
}

function Navbar() {
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "glass-panel border-x-0 border-t-0 shadow-lg" : "border-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-8">
        <Wordmark />
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground lg:flex">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <PrimaryButton href="#contact" className="px-5 py-2.5 text-xs sm:text-sm">
            Start a project
          </PrimaryButton>
        </div>
      </nav>
    </header>
  );
}

function LogoPanel({ burst = false }: { burst?: boolean }) {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-[-12%] rounded-full bg-primary/15 blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 rounded-full border border-primary/25 animate-spin-slow">
        <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-highlight shadow-[0_0_12px_2px_currentColor]" />
      </div>
      <div className="absolute inset-[9%] rounded-full border border-secondary/25 animate-spin-reverse">
        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary shadow-[0_0_10px_2px_currentColor]" />
      </div>
      <div className="absolute inset-[18%] overflow-hidden rounded-full ring-1 ring-primary/30 glow-strong">
        <img
          src={logoAsset.url}
          alt="SFlyra Labs — winged SF monogram"
          className="h-full w-full scale-110 object-cover"
        />
      </div>
      {burst ? <SparkleBurst /> : null}
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs tracking-[0.3em] text-primary uppercase">{eyebrow}</p>
      <h2 className="mt-4 font-display text-3xl leading-tight font-semibold sm:text-4xl md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

const SERVICES = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Fast, elegant, conversion-focused websites and web apps engineered from the ground up.",
    tags: ["React", "Next-gen UI", "Performance"],
  },
  {
    icon: Bot,
    title: "AI Automation",
    desc: "We remove the repetitive work — AI pipelines that handle it quietly in the background.",
    tags: ["LLM ops", "Integrations", "Chatbots"],
  },
  {
    icon: Workflow,
    title: "Agentic Workflows",
    desc: "Autonomous agents that plan, decide and execute across your tools end to end.",
    tags: ["Multi-agent", "Tooling", "Orchestration"],
  },
];

const STATS = [
  "3 disciplines",
  "1 team",
  "4-step process",
  "SFlyra AI — our own product",
];

const PROCESS = [
  { n: "01", t: "Discover", d: "We map your goals, users and the friction hiding inside your process." },
  { n: "02", t: "Design", d: "Interfaces and systems shaped around clarity, not decoration." },
  { n: "03", t: "Build", d: "Clean engineering with AI woven into the parts that deserve it." },
  { n: "04", t: "Launch", d: "Ship, measure, refine — and hand you something you can grow with." },
];

const FOUNDERS = [
  {
    name: "Fatimah Noman",
    photo: fatimahAsset.url,
    bio: "Leads product and engineering at SFlyra Labs, turning ambitious ideas into shipped, intelligent software.",
  },
  {
    name: "Sumiya",
    photo: sumiyaPhoto,
    bio: "Drives design and client strategy, making sure every build feels considered, premium and human.",
  },
];

function Index() {
  const [burst, setBurst] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setBurst(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <Sparkles />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 pt-36 pb-20 lg:grid-cols-2 lg:px-8 lg:pt-44 lg:pb-28">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-highlight">
              <Sparkle className="h-3.5 w-3.5" /> Building Intelligence. Fusing Ideas.
            </span>
            <h1 className="mt-6 font-display text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
              We build <span className="text-gradient">intelligence</span> into every process.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              SFlyra Labs is a digital agency for web development, AI automation and agentic
              workflows — crafting systems that think, act and scale alongside your team.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="#contact">
                Start a project <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <GhostButton href="#product">Explore SFlyra AI</GhostButton>
            </div>
          </div>
          <div className="relative">
            <LogoPanel burst={burst} />
          </div>
        </section>

        {/* Stats strip */}
        <section className="border-y border-border/60 bg-card/30">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-6 text-center lg:grid-cols-4 lg:px-8">
            {STATS.map((s) => (
              <p key={s} className="text-sm text-muted-foreground">
                <span className="text-foreground">{s.split(" ")[0]}</span>{" "}
                {s.split(" ").slice(1).join(" ")}
              </p>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionTitle eyebrow="Services" title="Three disciplines, one intelligent stack." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s) => (
              <article
                key={s.title}
                className="group glass-panel relative overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-[image:var(--gradient-panel)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Product spotlight */}
        <section id="product" className="relative border-y border-border/60 bg-card/20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32">
            <div>
              <span className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs text-highlight">
                Powered by SFlyra Labs
              </span>
              <h2 className="mt-6 font-display text-3xl leading-tight font-semibold sm:text-5xl">
                SFlyra AI — readymade intelligence for your business.
              </h2>
              <ul className="mt-8 space-y-4">
                {[
                  "A growing line of readymade AI tools, no setup headaches.",
                  "Automations that plug into the tools your team already uses.",
                  "Agentic assistants trained on your own knowledge base.",
                  "Built, maintained and supported in-house by SFlyra Labs.",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <PrimaryButton href="#contact">
                  Get early access <ArrowRight className="h-4 w-4" />
                </PrimaryButton>
              </div>
            </div>
            <LogoPanel />
          </div>
        </section>

        {/* Work */}
        <section id="work" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionTitle eyebrow="Work" title="Selected projects, arriving soon." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {["Web platform", "AI automation", "Agentic system"].map((k) => (
              <article
                key={k}
                className="glass-panel flex aspect-4/3 flex-col justify-between rounded-3xl p-7"
              >
                <span className="text-xs tracking-[0.2em] text-primary uppercase">{k}</span>
                <div>
                  <p className="font-display text-2xl font-semibold">Case study coming soon</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We're preparing the details of this build.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Founders */}
        <section id="team" className="border-y border-border/60 bg-card/20">
          <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
            <SectionTitle eyebrow="Team" title="Two founders, one obsession with craft." />
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {FOUNDERS.map((f) => (
                <article key={f.name} className="glass-panel rounded-3xl p-7">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5">
                    <img
                      src={f.photo}
                      alt={f.name}
                      loading="lazy"
                      className="h-24 w-24 shrink-0 rounded-2xl object-cover ring-1 ring-primary/30"
                    />
                    <div className="min-w-0">
                      <h3 className="truncate font-display text-2xl font-semibold">{f.name}</h3>
                      <p className="mt-1 text-sm text-primary">Co-Founder, SFlyra Labs</p>
                    </div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{f.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <SectionTitle eyebrow="Process" title="A four-step path from idea to launch." />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p) => (
              <div key={p.n} className="rounded-3xl border border-border p-7">
                <span className="font-display text-4xl text-primary/40">{p.n}</span>
                <h3 className="mt-4 font-display text-xl font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statement */}
        <section className="border-y border-border/60">
          <div className="mx-auto max-w-4xl px-5 py-24 text-center lg:py-32">
            <p className="font-display text-2xl leading-snug italic sm:text-4xl">
              “AI should not replace your process — it should understand it, refine it, and quietly
              make it brilliant.”
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-card/40 px-7 py-16 text-center sm:px-14">
            <div className="absolute inset-x-0 -top-24 mx-auto h-56 w-56 rounded-full bg-primary/25 blur-[120px]" />
            <h2 className="relative font-display text-3xl leading-tight font-semibold sm:text-5xl">
              Let's build something intelligent.
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-sm text-muted-foreground sm:text-base">
              Tell us about your project and we'll come back with a plan, a timeline and an honest
              opinion.
            </p>
            <div className="relative mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@sflyralabs.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-primary/10"
              >
                <Mail className="h-4 w-4 text-primary" /> hello@sflyralabs.com
              </a>
              <a
                href="https://instagram.com/sflyralabs"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm transition-colors hover:bg-primary/10"
              >
                <Instagram className="h-4 w-4 text-primary" /> @sflyralabs
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-10 text-sm text-muted-foreground lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:px-8">
          <Wordmark />
          <p>© {new Date().getFullYear()} SFlyra Labs. Building Intelligence. Fusing Ideas.</p>
        </div>
      </footer>
    </div>
  );
}
