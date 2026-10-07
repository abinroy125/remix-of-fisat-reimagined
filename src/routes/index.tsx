import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Building2,
  Cpu,
  Coffee,
  Dumbbell,
  Home,
  Lightbulb,
  MapPin,
  Mic2,
  Music,
  Rocket,
  Sparkles,
  Trophy,
  Users,
  Plus,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Mail,
  Phone,
} from "lucide-react";

import { useCountUp, useRevealAll } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const logoTransparent = { url: "/images/fisat-logo-transparent.png" };
const artsSports = { url: "/images/arts-sports.jpg" };
const placementsBanner = { url: "/images/placements.jpg" };
const cseBanner = { url: "/images/cse-banner.jpg" };
const cfsBanner = { url: "/images/cfs-banner.jpg" };
const tcsBanner = { url: "/images/tcs.jpg" };
const rankingsBanner = { url: "/images/rankings.jpg" };
const eieCover = { url: "/images/eie.png" };
const auditorium = "/images/auditorium.jpg";
const realMain = { url: "/images/real-main-campus.jpg" };
const realAcademic = { url: "/images/real-academic-block.jpg" };
const realLibrary = { url: "/images/real-library.jpg" };
const realInnov = { url: "/images/real-innovation-lab.jpg" };
const realInnov2 = { url: "/images/real-innovation-lab-2.jpg" };
const realGround = { url: "/images/real-sports-ground.jpg" };
const realSports = { url: "/images/real-sports.jpg" };
const realHostel = { url: "/images/real-hostel.jpg" };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FISAT — Where Your Journey Begins | Federal Institute of Science and Technology" },
      {
        name: "description",
        content:
          "Discover FISAT Angamaly, Kerala: an autonomous NAAC A+ engineering institute. Explore campus, academics, innovation, student life and placements.",
      },
      { property: "og:title", content: "FISAT — Where Your Journey Begins" },
      {
        property: "og:description",
        content: "Learn. Innovate. Explore. Build the future at FISAT, Angamaly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = ["Home", "About", "Academics", "Campus", "Student Life", "Innovation", "Placements", "Events"];
const navId = (n: string) => n.toLowerCase().replace(/\s+/g, "-");

function Index() {
  useRevealAll();
  return (
    <div className="overflow-x-clip">
      <Nav />
      <Hero />
      <Intro />
      <Explore />
      <Journey />
      <Academics />
      <Innovation />
      <StudentLife />
      <Placements />
      <Events />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-3 py-2.5 transition-all duration-500",
          scrolled || open ? "glass shadow-lift" : "bg-transparent",
        )}
      >
        <a href="#home" className="shrink-0 rounded-2xl bg-card/95 px-3 py-1.5 shadow-lift ring-1 ring-border/60 transition-transform hover:scale-[1.02]" aria-label="FISAT home">
          <img src={logoTransparent.url} alt="FISAT — Federal Institute of Science and Technology" className={cn("w-auto transition-all duration-500", scrolled ? "h-11 sm:h-14" : "h-14 sm:h-20")} />
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n}>
              <a href={`#${navId(n)}`} className="group relative rounded-full px-3 py-2 text-sm font-medium text-on-ink/85 transition-colors hover:text-on-ink">
                {n}
                <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-saffron transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href="#campus" className="hidden rounded-full bg-sun px-5 py-2.5 text-sm font-semibold text-ink shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-flex">
            Explore FISAT
          </a>
          <button onClick={() => setOpen(!open)} className="relative h-11 w-11 rounded-full text-on-ink lg:hidden" aria-label="Menu" aria-expanded={open}>
            <span className={cn("absolute left-3 right-3 h-0.5 rounded bg-current transition-all duration-300", open ? "top-1/2 rotate-45" : "top-[15px]")} />
            <span className={cn("absolute left-3 right-3 top-1/2 h-0.5 rounded bg-current transition-opacity", open && "opacity-0")} />
            <span className={cn("absolute left-3 right-3 h-0.5 rounded bg-current transition-all duration-300", open ? "top-1/2 -rotate-45" : "bottom-[15px]")} />
          </button>
        </div>
      </nav>
      <div className={cn("mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl glass transition-all duration-500 lg:hidden", open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0 border-transparent")}>
        <ul className="p-4">
          {NAV.map((n, i) => (
            <li key={n} style={{ transitionDelay: `${open ? i * 40 : 0}ms` }} className={cn("transition-all duration-500", open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0")}>
              <a onClick={() => setOpen(false)} href={`#${navId(n)}`} className="flex items-center justify-between border-b border-on-ink/10 py-3 font-display text-2xl text-on-ink">
                {n} <ArrowUpRight className="h-5 w-5 text-saffron" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const on = () => setY(window.scrollY);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const chips = [
    { icon: Cpu, label: "Technology", cls: "left-[6%] top-[30%]" },
    { icon: BookOpen, label: "Education", cls: "right-[8%] top-[26%] [animation-delay:1.5s]" },
    { icon: Lightbulb, label: "Innovation", cls: "right-[12%] bottom-[22%] [animation-delay:3s]" },
  ];
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-on-ink">
      <img src={realMain.url} alt="FISAT main campus building, Angamaly" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[center_40%] will-change-transform" style={{ transform: `translateY(${y * 0.3}px) scale(1.1)` }} />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-hero-fade" />
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full border border-saffron/25 animate-spin-slow">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-saffron" />
      </div>

      {chips.map(({ icon: I, label, cls }) => (
        <div key={label} className={cn("absolute hidden items-center gap-2 rounded-full glass px-4 py-2 text-sm animate-float md:flex", cls)}>
          <I className="h-4 w-4 text-saffron" /> {label}
        </div>
      ))}

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 text-center">
        <p className="animate-rise mx-auto inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
          <Sparkles className="h-3.5 w-3.5" /> Autonomous · NAAC A+ · Since 2002
        </p>
        <h1 className="animate-rise mt-6 font-display text-[clamp(3rem,10vw,8.5rem)] font-extrabold leading-[0.9] [animation-delay:.15s]">
          Where Your <br />
          <span className="text-sun">Journey</span> Begins.
        </h1>
        <p className="animate-rise mx-auto mt-6 max-w-xl text-lg text-on-ink/80 [animation-delay:.3s]">
          Learn. Innovate. Explore. Build the future at FISAT.
        </p>
        <div className="animate-rise mt-10 flex flex-wrap justify-center gap-3 [animation-delay:.45s]">
          <a href="#about" className="group inline-flex items-center gap-2 rounded-full bg-sun px-7 py-4 font-semibold text-ink shadow-glow transition-transform hover:-translate-y-1">
            Explore FISAT <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#campus" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 font-semibold transition-colors hover:bg-on-ink/15">
            <MapPin className="h-4 w-4 text-saffron" /> Discover Campus
          </a>
        </div>
      </div>

    </section>
  );
}

/* ---------------- INTRO ---------------- */
function Stat({ to, dec = 0, suffix = "", label }: { to: number; dec?: number; suffix?: string; label: string }) {
  const { ref, text } = useCountUp(to, dec);
  return (
    <div>
      <div className="font-display text-5xl font-extrabold text-primary md:text-6xl">
        <span ref={ref}>{text}</span>
        <span className="text-sun">{suffix}</span>
      </div>
      <p className="mt-2 text-sm font-medium text-muted-foreground">{label}</p>
    </div>
  );
}

function Intro() {
  const pillars = [
    { icon: Trophy, t: "Academic excellence", d: "No.1 in Kerala — Times Engineering Survey 2026." },
    { icon: Lightbulb, t: "Innovation", d: "Kerala’s first Centre for Future Skills with 8+ global tech partners." },
    { icon: Building2, t: "Industry exposure", d: "Labs with Microsoft, Apple, Autodesk, Schneider & more." },
    { icon: Rocket, t: "Student development", d: "220+ industry-relevant certification courses." },
    { icon: Users, t: "Campus life", d: "Fests, clubs, sports and a community that shows up." },
  ];
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <div className="reveal">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">01 · About</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] text-primary">
              More Than <br />a College.
            </h2>
          </div>
          <p className="reveal max-w-md text-lg text-muted-foreground">
            Two decades of shaping engineers in Angamaly — an autonomous institute affiliated to APJ Abdul Kalam Technological University, built on one promise: <em className="font-semibold not-italic text-foreground">Focus on Excellence.</em>
          </p>
        </div>

        <div className="reveal mt-16 grid grid-cols-2 gap-10 border-y border-border py-12 md:grid-cols-4">
          <Stat to={24} suffix="+" label="Years of legacy" />
          <Stat to={607} label="Placement offers, Class of 2026" />
          <Stat to={144} label="Companies visited" />
          <Stat to={17.22} dec={2} suffix=" LPA" label="Highest package" />
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map(({ icon: I, t, d }, i) => (
            <div key={t} className="reveal group rounded-3xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-lift" style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-sun group-hover:text-ink">
                <I className="h-5 w-5" />
              </span>
              <h3 className="mt-6 text-lg font-semibold">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <figure className="reveal mt-16 overflow-hidden rounded-3xl border border-border bg-card">
          <img src={rankingsBanner.url} alt="FISAT rankings 2026: 3rd in CSR, No.1 in Kerala Times Engineering, 2nd in THE WEEK–Hansa" loading="lazy" className="w-full" />
        </figure>
      </div>
    </section>
  );
}

/* ---------------- EXPLORE (CAMPUS MAP) ---------------- */
const PLACES = [
  { name: "Academic Blocks", icon: Building2, x: 30, y: 30, img: realAcademic.url, d: "Five storeys of classrooms, studios and NBA-accredited labs where theory meets hands-on practice." },
  { name: "Library", icon: BookOpen, x: 55, y: 22, img: realLibrary.url, d: "A quiet, sunlit knowledge hub with 50,000+ volumes, digital journals and late-hours reading rooms." },
  { name: "Innovation Hub", icon: Lightbulb, x: 76, y: 38, img: realInnov.url, d: "Robotics, drones, 3D printing and the Centre for Future Skills — where ideas get built." },
  { name: "Hostels", icon: Home, x: 82, y: 72, img: realHostel.url, d: "Safe, comfortable residences for men and women with mess, Wi-Fi and 24/7 support." },
  { name: "Sports Facilities", icon: Dumbbell, x: 18, y: 70, img: realGround.url, d: "Football ground, courts and gym — the place to unwind and compete." },
  { name: "Auditorium", icon: Mic2, x: 46, y: 56, img: auditorium, d: "Home to tech talks, conferences, cultural nights and convocation." },
  { name: "Cafeteria", icon: Coffee, x: 62, y: 80, img: undefined, d: "Kerala meals, chai and the best conversations on campus." },
  { name: "Student Activity Areas", icon: Music, x: 36, y: 86, img: artsSports.url, d: "Courtyards that turn into stages — fests, band nights and club meets." },
];

function Explore() {
  const [active, setActive] = useState(2);
  const p = PLACES[active] ?? PLACES[0]!;
  return (
    <section id="campus" className="relative overflow-hidden bg-ink-gradient py-28 text-on-ink md:py-36">
      <div className="absolute inset-0 grid-lines" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">02 · Campus</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95]">Explore FISAT</h2>
          </div>
          <p className="max-w-sm text-on-ink-muted">Tap a pin to walk the campus. Every location tells a part of your story.</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal relative aspect-[4/3] overflow-hidden rounded-3xl glass">
            {/* stylised map */}
            <svg viewBox="0 0 100 75" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-hidden>
              <path d="M5 40 Q 30 30 50 42 T 95 36" stroke="currentColor" className="text-on-ink/15" strokeWidth="2.5" fill="none" />
              <path d="M48 0 Q 44 35 50 75" stroke="currentColor" className="text-on-ink/15" strokeWidth="2" fill="none" />
              <path d="M5 40 Q 30 30 50 42 T 95 36" stroke="currentColor" className="text-saffron/50" strokeWidth=".3" strokeDasharray="1 1.5" fill="none" />
              <rect x="22" y="16" width="16" height="10" rx="1.5" className="fill-on-ink/10" />
              <rect x="50" y="10" width="12" height="8" rx="1.5" className="fill-on-ink/10" />
              <rect x="70" y="22" width="14" height="10" rx="1.5" className="fill-on-ink/10" />
              <rect x="74" y="48" width="16" height="12" rx="1.5" className="fill-on-ink/10" />
              <ellipse cx="18" cy="52" rx="12" ry="8" className="fill-saffron/10" />
              <rect x="40" y="38" width="12" height="8" rx="4" className="fill-on-ink/10" />
            </svg>
            {PLACES.map((pl, i) => {
              const I = pl.icon;
              const on = i === active;
              return (
                <button
                  key={pl.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ left: `${pl.x}%`, top: `${pl.y}%` }}
                  aria-label={pl.name}
                >
                  {on && <span className="absolute inset-0 rounded-full bg-saffron animate-ping-soft" />}
                  <span className={cn("relative grid h-11 w-11 place-items-center rounded-full border transition-all duration-300", on ? "scale-110 border-transparent bg-sun text-ink shadow-glow" : "border-on-ink/30 bg-ink/70 text-on-ink group-hover:border-saffron")}>
                    <I className="h-4 w-4" />
                  </span>
                  <span className={cn("absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink/80 px-2.5 py-1 text-[11px] font-medium transition-opacity", on ? "opacity-100" : "opacity-0 group-hover:opacity-100")}>
                    {pl.name}
                  </span>
                </button>
              );
            })}
          </div>

          <article key={p.name} className="reveal in animate-rise overflow-hidden rounded-3xl bg-card text-card-foreground shadow-lift">
            <div className="relative aspect-[16/10] overflow-hidden">
              {p.img && <img src={p.img} alt={p.name} className="h-full w-full animate-[kenburns_6s_ease-out_forwards] object-cover" />}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-on-ink">
                {String(active + 1).padStart(2, "0")} / {String(PLACES.length).padStart(2, "0")}
              </span>
            </div>
            <div className="p-7">
              <h3 className="font-display text-3xl font-bold text-primary">{p.name}</h3>
              <p className="mt-3 text-muted-foreground">{p.d}</p>
              <button className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Explore {p.name} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          {PLACES.map((pl, i) => (
            <button key={pl.name} onClick={() => setActive(i)} className={cn("shrink-0 rounded-full border px-4 py-2 text-sm transition-colors", i === active ? "border-saffron bg-saffron/15 text-saffron" : "border-on-ink/20 text-on-ink-muted hover:text-on-ink")}>
              {pl.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
const STAGES = [
  { n: "01", t: "Discover", d: "Admission and orientation — find your people, your path and your place." },
  { n: "02", t: "Learn", d: "Academics and foundational knowledge from industry-experienced faculty." },
  { n: "03", t: "Explore", d: "Clubs, events and campus life that stretch you beyond the classroom." },
  { n: "04", t: "Build", d: "Projects, research and innovation in labs backed by global tech partners." },
  { n: "05", t: "Experience", d: "Internships and industry exposure that make the real world familiar." },
  { n: "06", t: "Launch", d: "Placements and career opportunities with 144+ recruiting companies." },
];

function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const on = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      setProg(Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height)));
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <section className="py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">03 · Journey</p>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] text-primary">Your Journey at FISAT</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Discover → Learn → Explore → Build → Experience → Launch</p>
        </div>
        <div ref={ref} className="relative mt-20">
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />
          <div className="absolute left-6 top-0 w-px bg-sun md:left-1/2" style={{ height: `${prog * 100}%` }} />
          <div className="space-y-16 md:space-y-24">
            {STAGES.map((s, i) => {
              const reached = prog >= (i + 0.3) / STAGES.length;
              const left = i % 2 === 0;
              return (
                <div key={s.n} className="relative grid md:grid-cols-2">
                  <span className={cn("absolute left-6 top-2 z-10 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border-2 transition-all duration-500 md:left-1/2", reached ? "scale-125 border-saffron bg-saffron" : "border-border bg-background")} />
                  <div className={cn("reveal pl-16 md:pl-0", left ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20")}>
                    <span className={cn("font-display text-7xl font-extrabold transition-colors duration-500 md:text-8xl", reached ? "text-sun" : "text-border")}>{s.n}</span>
                    <h3 className="mt-2 font-display text-4xl font-bold text-primary">{s.t}</h3>
                    <p className={cn("mt-3 max-w-sm text-muted-foreground", left && "md:ml-auto")}>{s.d}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACADEMICS ---------------- */
const DEPTS = [
  { code: "CSE", n: "Computer Science & Engineering", d: "Software, systems and theory for a computing-first world. 88.4% placement, Class of 2026.", k: ["Software Engineering", "Cloud & DevOps", "Cybersecurity", "Algorithms"] },
  { code: "AI&DS", n: "Artificial Intelligence & Data Science", d: "Machine learning, analytics and responsible AI built on strong mathematics.", k: ["Deep Learning", "Data Engineering", "NLP", "Computer Vision"] },
  { code: "ECE", n: "Electronics & Communication Engineering", d: "From chips to networks — VLSI, embedded systems and wireless.", k: ["VLSI Design", "Embedded Systems", "5G & IoT", "Signal Processing"] },
  { code: "EEE", n: "Electrical & Electronics Engineering", d: "Powering the energy transition with smart grids and drives.", k: ["Power Systems", "EV Technology", "Renewables", "Control Systems"] },
  { code: "ME", n: "Mechanical Engineering", d: "Design, manufacturing and robotics with Autodesk-powered labs.", k: ["CAD/CAM", "Robotics", "Thermal Engineering", "Additive Mfg."] },
  { code: "CE", n: "Civil Engineering", d: "Building sustainable infrastructure for Kerala and beyond.", k: ["Structural Design", "Geotech", "Smart Cities", "Environmental"] },
];

function Academics() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="academics" className="bg-muted py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">04 · Academics</p>
              <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-[0.95] text-primary">Learn Without Limits.</h2>
              <p className="mt-5 max-w-sm text-muted-foreground">NBA-accredited B.Tech programmes, plus MBA and MCA — taught by people who have built things.</p>
            </div>
            <img src={realAcademic.url} alt="Students working in a FISAT computer lab" loading="lazy" className="reveal mt-10 hidden aspect-[4/3] w-full rounded-3xl object-cover lg:block" />
          </div>
          <div className="space-y-3">
            {DEPTS.map((d, i) => {
              const on = open === i;
              return (
                <div key={d.code} className={cn("reveal overflow-hidden rounded-3xl border bg-card transition-all duration-500", on ? "border-primary shadow-lift" : "border-border hover:border-primary/40")}>
                  <button onClick={() => setOpen(on ? null : i)} className="flex w-full items-center gap-5 p-6 text-left" aria-expanded={on}>
                    <span className={cn("grid h-14 w-16 shrink-0 place-items-center rounded-2xl font-display text-sm font-bold transition-colors", on ? "bg-sun text-ink" : "bg-secondary text-primary")}>{d.code}</span>
                    <span className="min-w-0 flex-1 font-display text-xl font-semibold md:text-2xl">{d.n}</span>
                    <Plus className={cn("h-6 w-6 shrink-0 text-primary transition-transform duration-500", on && "rotate-45")} />
                  </button>
                  <div className={cn("grid transition-all duration-500", on ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 md:pl-[6.75rem]">
                        <p className="text-muted-foreground">{d.d}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {d.k.map((k) => (
                            <span key={k} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{k}</span>
                          ))}
                        </div>
                        <a href="#" className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Explore department <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INNOVATION ---------------- */
function Innovation() {
  const items = [
    { t: "Research", d: "Funded projects across AI, energy and materials.", img: eieCover.url },
    { t: "Student Projects", d: "Robots, drones and apps built every semester.", img: realInnov2.url },
    { t: "Startups", d: "Incubation support from idea to first customer." },
    { t: "Hackathons", d: "24-hour sprints that end in demos, not slides." },
    { t: "Industry Collaboration", d: "Microsoft, AWS, Intel, IBM, Cisco, Apple & more." },
  ];
  return (
    <section id="innovation" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">05 · Innovation</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] text-primary">From Ideas <br />to Impact.</h2>
          </div>
          <p className="max-w-sm text-muted-foreground">An editorial look at what FISAT students research, build and launch.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <article className="reveal group relative overflow-hidden rounded-3xl bg-ink text-on-ink lg:col-span-7 lg:row-span-2">
            <img src={realInnov.url} alt="FISAT innovation lab with fabrication equipment" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-hero-fade" />
            <div className="relative flex min-h-[520px] flex-col justify-end p-8 md:p-10">
              <span className="w-fit rounded-full bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">Featured project</span>
              <h3 className="mt-4 max-w-lg font-display text-4xl font-bold md:text-5xl">Centre for Future Skills — first in Kerala.</h3>
              <p className="mt-4 max-w-md text-on-ink/80">Industry-backed labs powered by 8+ global tech giants, 220+ courses of 40–45 hours each, and globally recognised certifications — open to every FISAT student.</p>
              <a href="#" className="group/b mt-6 inline-flex w-fit items-center gap-2 font-semibold text-saffron">Read the story <ArrowUpRight className="h-4 w-4 transition-transform group-hover/b:-translate-y-0.5 group-hover/b:translate-x-0.5" /></a>
            </div>
          </article>
          {items.slice(0, 2).map((it) => (
            <article key={it.t} className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card lg:col-span-5">
              <div className="grid h-full grid-cols-[1fr_1.1fr]">
                <div className="flex flex-col justify-between p-6">
                  <h3 className="font-display text-2xl font-bold text-primary">{it.t}</h3>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
                <img src={it.img} alt={it.t} loading="lazy" className="h-full min-h-[200px] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </article>
          ))}
          {items.slice(2).map((it, i) => (
            <article key={it.t} className={cn("reveal group rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 lg:col-span-4", i === 1 ? "bg-sun text-ink" : "border border-border bg-card")}>
              <span className="font-display text-sm font-bold opacity-60">0{i + 3}</span>
              <h3 className={cn("mt-8 font-display text-3xl font-bold", i !== 1 && "text-primary")}>{it.t}</h3>
              <p className={cn("mt-2 text-sm", i === 1 ? "text-ink/75" : "text-muted-foreground")}>{it.d}</p>
            </article>
          ))}
        </div>

        <figure className="reveal mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-border shadow-lift">
          <img src={cfsBanner.url} alt="Centre for Future Skills at FISAT with industry partners" loading="lazy" className="w-full" />
        </figure>
      </div>
    </section>
  );
}

/* ---------------- STUDENT LIFE ---------------- */
function StudentLife() {
  const clubs = ["IEEE", "Band & Music", "Dance Crew", "NSS", "Coding Club", "Robotics", "Photography", "Drama", "Entrepreneurship Cell", "Sports Council", "Literary Club", "Green Campus"];
  return (
    <section id="student-life" className="relative overflow-hidden bg-ink py-28 text-on-ink md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="reveal lg:col-span-5 lg:pt-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">06 · Student Life</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,6vw,5.5rem)] font-extrabold leading-[0.95]">Loud, proud &amp; <span className="text-sun">alive.</span></h2>
            <p className="mt-6 max-w-sm text-on-ink-muted">From packed courtyards at the arts fest to sunset football — the years you’ll talk about forever.</p>
          </div>
          <figure className="reveal group relative overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2">
            <img src={artsSports.url} alt="Student band performing to a cheering crowd at FISAT" loading="lazy" className="h-full max-h-[640px] w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <figcaption className="absolute bottom-4 left-4 rounded-full glass px-4 py-2 text-sm">Arts fest, main courtyard</figcaption>
          </figure>
          <figure className="reveal group relative overflow-hidden rounded-3xl lg:col-span-5">
            <img src={realSports.url} alt="Students playing basketball on the FISAT court" loading="lazy" className="aspect-[4/3] w-full object-cover object-[center_45%] transition-transform duration-1000 group-hover:scale-105" />
            <figcaption className="absolute bottom-4 left-4 rounded-full glass px-4 py-2 text-sm">Evenings on the court</figcaption>
          </figure>
        </div>
      </div>
      <div className="mt-16 flex w-max animate-marquee gap-4">
        {[...clubs, ...clubs].map((c, i) => (
          <span key={i} className="rounded-full border border-on-ink/15 px-6 py-3 font-display text-2xl whitespace-nowrap text-on-ink/80">{c} <span className="text-saffron">✦</span></span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- PLACEMENTS ---------------- */
function Placements() {
  const recruiters = ["TCS", "Infosys", "UST", "IBM", "SAP", "Cadence", "Federal Bank", "Nalashaa", "Speridian", "Experion", "Travancore Analytics", "Collabera"];
  return (
    <section id="placements" className="py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">07 · Placements</p>
          <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] text-primary">Launch Ready.</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Class of 2026 — where premium packages find top-tier talent.</p>
        </div>
        <div className="reveal mt-14 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl bg-ink-gradient p-8 text-on-ink md:col-span-2 md:row-span-2">
            <p className="text-sm uppercase tracking-widest text-on-ink-muted">Total offers</p>
            <Big to={607} />
            <p className="mt-4 max-w-xs text-on-ink-muted">Across product, IT, banking and development sectors — with TCS alone extending 151 offers.</p>
          </div>
          <Card label="Average package" to={5.1} dec={1} unit="LPA" />
          <Card label="Highest package" to={17.22} dec={2} unit="LPA" />
          <Card label="Companies visited" to={144} />
          <Card label="CSE placement" to={88.4} dec={1} unit="%" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[placementsBanner, tcsBanner].map((b, i) => (
            <img key={i} src={b.url} alt={i ? "TCS extends 151 offers to FISAT" : "FISAT placements Class of 2026"} loading="lazy" className="reveal w-full rounded-3xl border border-border transition-transform duration-500 hover:-translate-y-1" />
          ))}
        </div>
        <img src={cseBanner.url} alt="FISAT CSE placements Class of 2026" loading="lazy" className="reveal mt-4 w-full rounded-3xl border border-border" />
        <div className="mt-12 overflow-hidden border-y border-border py-6">
          <div className="flex w-max animate-marquee gap-12">
            {[...recruiters, ...recruiters].map((r, i) => (
              <span key={i} className="font-display text-2xl font-semibold whitespace-nowrap text-muted-foreground">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function Big({ to }: { to: number }) {
  const { ref, text } = useCountUp(to);
  return <div className="mt-6 font-display text-8xl font-extrabold text-sun md:text-9xl"><span ref={ref}>{text}</span></div>;
}
function Card({ label, to, dec = 0, unit = "" }: { label: string; to: number; dec?: number; unit?: string }) {
  const { ref, text } = useCountUp(to, dec);
  return (
    <div className="rounded-3xl border border-border bg-card p-6 transition-shadow hover:shadow-lift">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="mt-4 font-display text-5xl font-extrabold text-primary"><span ref={ref}>{text}</span><span className="ml-1 text-xl text-ember">{unit}</span></p>
    </div>
  );
}

/* ---------------- EVENTS ---------------- */
function Events() {
  const events = [
    { d: "18", m: "Nov", t: "Techfest 2026", tag: "Technical", desc: "Three days of hackathons, robo-wars and expert talks." },
    { d: "05", m: "Dec", t: "Arts Fest", tag: "Cultural", desc: "Band nights, dance battles and the loudest courtyard in Kerala." },
    { d: "14", m: "Jan", t: "Industry Connect Summit", tag: "Careers", desc: "Recruiters and alumni on what the next decade of work looks like." },
    { d: "02", m: "Feb", t: "Inter-college Sports Meet", tag: "Sports", desc: "Football, cricket, athletics — represent FISAT." },
  ];
  return (
    <section id="events" className="bg-muted py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember">08 · Events</p>
            <h2 className="mt-4 font-display text-[clamp(2.75rem,7vw,6rem)] font-extrabold leading-[0.95] text-primary">What’s Next.</h2>
          </div>
        </div>
        <ul className="mt-12 divide-y divide-border border-y border-border">
          {events.map((e) => (
            <li key={e.t} className="reveal group">
              <a href="#" className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-6 py-7 transition-all duration-500 md:grid-cols-[120px_1fr_1fr_auto] md:hover:px-6 hover:bg-card">
                <div className="font-display leading-none"><span className="text-5xl font-extrabold text-primary">{e.d}</span> <span className="text-sm uppercase text-ember">{e.m}</span></div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{e.tag}</span>
                  <h3 className="truncate font-display text-2xl font-bold md:text-3xl">{e.t}</h3>
                </div>
                <p className="hidden text-muted-foreground md:block">{e.desc}</p>
                <span className="grid h-12 w-12 place-items-center rounded-full border border-border transition-all group-hover:rotate-45 group-hover:border-transparent group-hover:bg-sun"><ArrowUpRight className="h-5 w-5" /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-on-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="reveal font-display text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[0.9]">Your journey <br /><span className="text-sun">begins here.</span></h2>
        <a href="#" className="reveal mt-10 inline-flex items-center gap-2 rounded-full bg-sun px-8 py-4 font-semibold text-ink shadow-glow transition-transform hover:-translate-y-1">Apply for 2027 <ArrowRight className="h-4 w-4" /></a>
      </div>
      <div className="border-t border-on-ink/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <span className="inline-block rounded-2xl bg-card/95 px-3 py-2 ring-1 ring-on-ink/10"><img src={logoTransparent.url} alt="FISAT" className="h-14 w-auto" loading="lazy" /></span>
            <p className="mt-5 max-w-sm text-sm text-on-ink-muted">Federal Institute of Science and Technology, Hormis Nagar, Mookkannoor P.O., Angamaly, Ernakulam, Kerala 683577</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-saffron">Explore</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-on-ink-muted">
              {NAV.map((n) => <li key={n}><a href={`#${navId(n)}`} className="hover:text-on-ink">{n}</a></li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-saffron">Connect</h4>
            <p className="mt-4 flex items-center gap-2 text-sm text-on-ink-muted"><Phone className="h-4 w-4" /> +91 484 2725272</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-on-ink-muted"><Mail className="h-4 w-4" /> mail@fisat.ac.in</p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Linkedin, Youtube].map((I, i) => (
                <a key={i} href="#" aria-label="Social link" className="grid h-10 w-10 place-items-center rounded-full border border-on-ink/20 transition-colors hover:border-transparent hover:bg-sun hover:text-ink"><I className="h-4 w-4" /></a>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-on-ink/10 py-6 text-center text-xs text-on-ink-muted">© 2026 FISAT · Focus on Excellence · Concept redesign</p>
      </div>
    </footer>
  );
}
