import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone, Wifi, Tv, Smartphone, Shield, Check, Plus, Minus,
  Zap, Gauge, Rocket, Star, Sparkles, ArrowRight, Award, Users,
  ChevronRight,
} from "lucide-react";
import cover from "@/assets/cover.jpg";
import cover2 from "@/assets/cover-2.jpg";
import cover3 from "@/assets/cover-3.jpg";
import cover4 from "@/assets/cover-4.jpg";
import logoEarthlink from "@/assets/provider-earthlink.jpg";
import logoFrontier from "@/assets/provider-frontier.jpg";
import logoOptimum from "@/assets/provider-optimum.jpg";
import logoKinetic from "@/assets/provider-kinetic.jpg";
import logoDirectv from "@/assets/provider-directv.jpg";
import chCnn from "@/assets/ch-cnn.jpg";
import chFox from "@/assets/ch-fox.jpg";
import chEspn from "@/assets/ch-espn.jpg";
import chFood from "@/assets/ch-food.jpg";
import chAccn from "@/assets/ch-accn.jpg";
import chBig from "@/assets/ch-big.jpg";
import chMlb from "@/assets/ch-mlb.jpg";
import chNba from "@/assets/ch-nba.jpg";
import chCbs from "@/assets/ch-cbs.jpg";
import chFx from "@/assets/ch-fx.jpg";
import chNhl from "@/assets/ch-nhl.jpg";
import chCinemax from "@/assets/ch-cinemax.jpg";
import chMax from "@/assets/ch-max.jpg";
import chParamount from "@/assets/ch-paramount.jpg";
import chStarz from "@/assets/ch-starz.jpg";

const channels = [
  { src: chCnn, name: "CNN" }, { src: chFox, name: "Fox News" }, { src: chEspn, name: "ESPN" },
  { src: chFood, name: "Food Network" }, { src: chAccn, name: "ACCN" }, { src: chBig, name: "Big Ten" },
  { src: chMlb, name: "MLB Network" }, { src: chNba, name: "NBA TV" }, { src: chCbs, name: "CBS Sports" },
  { src: chFx, name: "FX Movie" }, { src: chNhl, name: "NHL Network" }, { src: chCinemax, name: "Cinemax" },
  { src: chMax, name: "Max" }, { src: chParamount, name: "Paramount+" }, { src: chStarz, name: "STARZ" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AIB Communications — The Best Deals For Your Home" },
      { name: "description", content: "Get the fastest internet, TV, mobile and home security deals from top US providers. Call (888) 477-6212." },
      { property: "og:title", content: "AIB Communications — Best Home Service Deals" },
      { property: "og:description", content: "Top US providers, transparent pricing, no hidden fees." },
    ],
  }),
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
} as const;

function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="tel:8884776212"
      className={`group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-bold text-primary-foreground shadow-card transition-all hover:scale-105 hover:bg-primary/90 animate-pulse-glow ${className}`}
    >
      <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
      (888) 477-6212
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}

const providers = [
  {
    name: "EarthLink", logo: logoEarthlink, color: "from-emerald-500 to-emerald-700",
    price: "$39.95", plan: "100 Mbps Fiber Internet",
    tiers: [
      { tag: "FASTEST", speed: "5000 Mbps", desc: "Stream and game on unlimited devices." },
      { tag: "MOST POPULAR", speed: "300 Mbps", desc: "Work, play & stream on up to 12 devices." },
      { tag: "BEST VALUE", speed: "100 Mbps", desc: "High-speed internet for up to 5 devices." },
    ],
  },
  {
    name: "Frontier", logo: logoFrontier, color: "from-rose-500 to-red-700",
    price: "$29.90", plan: "500 Mbps Fiber Internet",
    tiers: [
      { tag: "FASTEST", speed: "7000 Mbps", desc: "Includes 2 Amazon eero Max 7 devices ($899 value)." },
      { tag: "MOST POPULAR", speed: "2000 Mbps", desc: "Ultra fast for large smart homes. eero Pro 7 included." },
      { tag: "BEST VALUE", speed: "500 Mbps", desc: "Stream & play on several devices. Watch in 4K." },
    ],
  },
  {
    name: "Optimum", logo: logoOptimum, color: "from-amber-400 to-orange-600",
    price: "$40.00", plan: "300 Mbps Fiber Internet",
    tiers: [
      { tag: "FASTEST", speed: "1000 Mbps", desc: "$100 Prepaid Mastercard. 2-year price lock." },
      { tag: "MOST POPULAR", speed: "500 Mbps", desc: "$50 Prepaid Mastercard. Most popular speed!" },
      { tag: "BEST VALUE", speed: "300 Mbps", desc: "Best value w/ $5 Auto Pay & Paperless discount." },
    ],
  },
  {
    name: "Kinetic", logo: logoKinetic, color: "from-sky-500 to-indigo-700",
    price: "$24.99", plan: "100 Mbps Fiber Internet",
    tiers: [
      { tag: "FASTEST", speed: "2000 Mbps", desc: "$200 Kinetic Reward Mastercard. Next-gen speed." },
      { tag: "MOST POPULAR", speed: "1000 Mbps", desc: "$100 Kinetic Reward Mastercard. For home & work." },
      { tag: "BEST VALUE", speed: "100 Mbps", desc: "Affordable plan for basic online needs." },
    ],
  },
];

const directvPlans = [
  {
    name: "ENTERTAINMENT",
    price: "$84.99",
    fine: "$94.99/mo w/ $10/mo Gemini lease fee. Cancel anytime.",
    perks: ["Local channels included", "Unlimited Cloud DVR recording", "90+ MyFree DIRECTV channels", "Special offer on premium networks"],
  },
  {
    name: "CHOICE™",
    price: "$79.99",
    was: "$89.99",
    fine: "$105.98/mo w/req'd Regional Sports Fee & Gemini lease. Save $10/mo for 24 mos.",
    perks: ["Everything in ENTERTAINMENT", "Featured sports channels", "Regional sports networks", "More live programming"],
    featured: true,
  },
  {
    name: "ULTIMATE",
    price: "$109.99",
    was: "$119.99",
    fine: "$135.98/mo w/req'd Regional Sports Fee & Gemini lease. Save $10/mo for 24 mos.",
    perks: ["Everything in CHOICE™", "CBS Sports Network, NHL Network", "Discovery Family, FX Movie Channel", "STARZ Encore & more"],
  },
  {
    name: "PREMIER",
    price: "$154.99",
    was: "$164.99",
    fine: "$180.98/mo w/req'd Regional Sports Fee & Gemini lease. Save $10/mo for 24 mos.",
    perks: ["Everything in ULTIMATE", "Max®", "Paramount+ with SHOWTIME", "STARZ® and Cinemax®"],
  },
];

const speedTiers = [
  { icon: Wifi, range: "25+ Mbps", devices: "1–2 devices", desc: "Occasional streaming, gaming, photo sharing, and downloading music." },
  { icon: Gauge, range: "100+ Mbps", devices: "Up to 5 devices", desc: "Faster downloads for streaming, online gaming, photos and music." },
  { icon: Zap, range: "500+ Mbps", devices: "Up to 12 devices", desc: "Remote school/work, large file downloads, multiplayer gaming, video calls." },
  { icon: Rocket, range: "1–5 Gigs", devices: "Unlimited devices", desc: "Rapid streaming, multiplayer gaming, smart home devices and more." },
];

const faqs = [
  { q: "Why should I choose AIB Communications?", a: "AIB Communications simplifies your life by connecting you with the best home services—Internet, TV, Mobile, and Home Security—all in one place. We partner with top providers across the country to offer tailored solutions at the best possible rates." },
  { q: "Are there any hidden fees or unexpected charges?", a: "Absolutely not. Transparency is core to how we operate. What you see is what you get—no hidden fees, no surprises. We only work with providers who share our commitment to honest pricing and trustworthy service." },
  { q: "How do I get in touch with AIB Communications support?", a: "We're here whenever you need us! Our dedicated customer support team is available 24/7. Just give us a call at (888) 477-6212 or reach out via live chat on our website." },
  { q: "Is AIB Communications a secure and trusted service?", a: "Yes, completely. We are authorized resellers for all the brands and services listed on our platform. Our team is trained to provide expert, unbiased recommendations based on your specific needs." },
  { q: "What services does AIB Communications offer?", a: "We connect you with essential home services including: High-speed Internet, Cable and Satellite TV, Mobile Phone Plans, and Home Security & Automation. All from leading nationwide providers." },
  { q: "How long does installation take?", a: "Installation times vary depending on the service and your location. In most cases, it's quick and hassle-free. Just reach out and our agents will check availability for your address." },
];

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate flex min-h-[88vh] items-center justify-center overflow-hidden bg-gradient-hero text-primary-foreground">
        {/* Hero background image */}
        <div className="absolute inset-0">
          <img src={cover} alt="Family using internet at home" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/95" />
        </div>
        {/* Animated blobs */}
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-pink/40 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-yellow/30 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl px-4 py-24 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-semibold uppercase tracking-wider"
          >
            <Sparkles className="h-3.5 w-3.5 text-yellow" />
            America's #1 Source for Home Service Deals
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-shadow-lg text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
          >
            THE BEST DEALS
            <br />
            FOR <span className="bg-gradient-to-r from-yellow via-pink to-yellow bg-clip-text text-transparent">YOUR HOME!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-7 max-w-2xl text-lg font-medium text-primary-foreground/90 sm:text-xl"
          >
            Get the fastest & most reliable internet for streaming, work, gaming, pleasure and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <CallButton />
            <a href="#providers" className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-base font-semibold text-primary-foreground transition hover:bg-white/15">
              See Plans <ChevronRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 gap-6 text-left sm:grid-cols-4"
          >
            {[
              { icon: Award, label: "Authorized Reseller" },
              { icon: Users, label: "24/7 Live Support" },
              { icon: Shield, label: "No Hidden Fees" },
              { icon: Star, label: "Top US Providers" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-yellow/20 text-yellow">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CALLOUT BANNER */}
      <section className="bg-gradient-pink py-5 text-center text-pink-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3 px-4 text-sm font-semibold sm:text-base">
          <Sparkles className="h-5 w-5 animate-float" />
          Have Questions? Our team is standing by — Call us now at
          <a href="tel:8884776212" className="underline underline-offset-4 hover:text-yellow">(888) 477-6212</a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { icon: Wifi, title: "Internet", desc: "Lightning-fast fiber & broadband from top providers." },
            { icon: Tv, title: "TV", desc: "DirecTV plans with 200+ premium channels." },
            { icon: Smartphone, title: "Mobile", desc: "Unbeatable mobile plans with national coverage." },
            { icon: Shield, title: "Home Security", desc: "Smart, modern home automation & monitoring." },
          ].map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-xl bg-gradient-card text-primary-foreground transition-transform group-hover:scale-110 group-hover:rotate-3">
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* GET CONNECTED — INTERNET PROVIDERS */}
      <section id="providers" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="mb-14 text-center"
        >
          <motion.span variants={fadeUp} className="inline-block rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink">
            Internet Providers
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-extrabold uppercase text-primary sm:text-5xl">
            Get Connected!
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Compare plans from America's top fiber and broadband internet providers.
          </motion.p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {providers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-card p-6 text-primary-foreground shadow-card hover-lift"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink/20 blur-3xl transition-all group-hover:bg-pink/40" />
              <div className="mb-5 flex h-20 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3 shadow-lg">
                <img src={p.logo} alt={`${p.name} authorized reseller`} className="max-h-full max-w-full object-contain" />
              </div>
              <h3 className="text-2xl font-extrabold">{p.name}</h3>
              <p className="mt-1 text-sm text-primary-foreground/75">{p.plan}</p>
              <div className="my-5 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-yellow">{p.price}</span>
                <span className="pb-1 text-sm text-primary-foreground/70">/mo</span>
              </div>
              <ul className="space-y-2">
                {["No Data Caps or Speed Throttling", "Speeds up to 5,000 Mbps", "30-Day Satisfaction Guarantee"].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <details className="group/det mt-5 rounded-lg border border-white/10 p-3">
                <summary className="cursor-pointer text-sm font-semibold text-yellow">See Pricing Tiers</summary>
                <div className="mt-3 space-y-3">
                  {p.tiers.map((t) => (
                    <div key={t.tag} className="rounded-md bg-white/5 p-2.5">
                      <div className="text-[10px] font-bold tracking-wider text-yellow">{t.tag}</div>
                      <div className="text-sm font-bold">{t.speed}</div>
                      <p className="text-xs text-primary-foreground/75">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </details>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CallButton />
        </div>
      </section>

      {/* DIRECTV */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-14 text-center">
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <div className="rounded-2xl bg-white p-4 shadow-card">
                <img src={logoDirectv} alt="DirecTV authorized dealer" className="h-16 w-auto object-contain" />
              </div>
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              Television
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-extrabold uppercase text-primary sm:text-5xl">
              Get DirecTV!
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Starting at <span className="font-bold text-pink">$79.99/mo</span> — premium entertainment for the whole family.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {directvPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col rounded-3xl border-2 bg-card p-6 shadow-sm transition-all hover:shadow-card ${
                  plan.featured ? "border-pink shadow-pink" : "border-border"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-pink px-4 py-1 text-[10px] font-bold uppercase tracking-wider text-pink-foreground shadow-md">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-extrabold text-primary">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/mo*</span>
                  {plan.was && <span className="text-sm text-muted-foreground line-through">{plan.was}</span>}
                </div>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-border pt-3 text-[11px] leading-relaxed text-muted-foreground">{plan.fine}</p>
                <a
                  href="tel:8884776212"
                  className={`mt-4 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition hover:scale-105 ${
                    plan.featured ? "bg-gradient-pink text-pink-foreground" : "bg-primary text-primary-foreground"
                  }`}
                >
                  <Phone className="h-4 w-4" /> Call to Order
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEED GUIDE */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-14 text-center">
          <motion.h2 variants={fadeUp} className="text-4xl font-extrabold uppercase text-primary sm:text-5xl">
            How Much Speed Do You Really Need?
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {speedTiers.map((tier, i) => (
            <motion.div
              key={tier.range}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ rotate: -1, y: -6 }}
              className="group rounded-3xl border border-border bg-gradient-to-br from-card to-secondary/40 p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-yellow text-yellow-foreground transition-transform group-hover:rotate-12">
                <tier.icon className="h-7 w-7" />
              </div>
              <div className="text-3xl font-extrabold text-primary">{tier.range}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-pink">{tier.devices}</div>
              <p className="mt-3 text-sm text-muted-foreground">{tier.desc}</p>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
          Choosing the right internet provider matters more than ever. While 100–200 Mbps suits most homes,
          upload capacity and latency are vital for home offices and gaming. Let us help you decide —
          reach out anytime.
        </p>
      </section>

      {/* TOP PROVIDERS MARQUEE */}
      <section className="border-y border-border bg-secondary/30 py-14">
        <h3 className="mb-8 text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          Authorized Reseller for America's Top Providers
        </h3>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee gap-8 px-6">
            {[logoEarthlink, logoFrontier, logoOptimum, logoKinetic, logoDirectv, logoEarthlink, logoFrontier, logoOptimum, logoKinetic, logoDirectv].map((src, i) => (
              <div key={i} className="flex h-24 w-52 flex-shrink-0 items-center justify-center rounded-2xl bg-white p-4 shadow-card">
                <img src={src} alt="Provider logo" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHANNELS LINEUP */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <img src={cover2} alt="Family enjoying entertainment together" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-pink/80" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-12 text-center text-primary-foreground">
            <motion.span variants={fadeUp} className="inline-block rounded-full bg-yellow/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-yellow">
              200+ Channels
            </motion.span>
            <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-extrabold uppercase sm:text-5xl">
              Watch What You Love
            </motion.h2>
            <motion.p variants={fadeUp} className="mx-auto mt-3 max-w-2xl text-primary-foreground/85">
              From live sports to blockbuster movies, premium networks come included with select DirecTV plans.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5"
          >
            {channels.map((c) => (
              <motion.div
                key={c.name}
                variants={fadeUp}
                whileHover={{ scale: 1.08, rotate: -2 }}
                className="flex aspect-square items-center justify-center rounded-2xl bg-white p-3 shadow-card transition-shadow hover:shadow-glow"
              >
                <img src={c.src} alt={c.name} className="max-h-full max-w-full object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY US — with cover image */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-pink/30 to-yellow/30 blur-2xl" />
            <img src={cover3} alt="Father and daughter using a laptop" className="relative w-full rounded-3xl object-cover shadow-card" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 rounded-2xl bg-yellow px-5 py-4 text-yellow-foreground shadow-glow"
            >
              <div className="text-2xl font-extrabold">24/7</div>
              <div className="text-[11px] font-bold uppercase tracking-wider">Live Support</div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink">
              Why AIB
            </span>
            <h2 className="mt-4 text-4xl font-extrabold uppercase text-primary sm:text-5xl">
              Built for Modern Homes
            </h2>
            <p className="mt-4 text-muted-foreground">
              We do the comparison shopping for you across America's biggest providers,
              so your family gets the right speed, the right channels, and the right price — every time.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, t: "Authorized Resellers", d: "Direct partners with all major brands." },
                { icon: Shield, t: "No Hidden Fees", d: "Transparent pricing, always." },
                { icon: Users, t: "Expert Advisors", d: "Friendly people, not bots." },
                { icon: Star, t: "Top-Rated Service", d: "Thousands of happy households." },
              ].map((x) => (
                <div key={x.t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-lg bg-pink/10 text-pink">
                    <x.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{x.t}</div>
                    <p className="text-xs text-muted-foreground">{x.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8"><CallButton /></div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger} className="mb-12 text-center">
          <motion.span variants={fadeUp} className="inline-block rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink">
            FAQ
          </motion.span>
          <motion.h2 variants={fadeUp} className="mt-4 text-4xl font-extrabold uppercase text-primary sm:text-5xl">
            Got Questions?
          </motion.h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-bold text-foreground">{f.q}</span>
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-pink text-pink-foreground transition-transform">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-hero px-8 py-14 text-center text-primary-foreground shadow-glow"
        >
          <img src={cover4} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 to-pink/70" />
          <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-pink/30 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-yellow/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold sm:text-5xl">Ready to upgrade your home?</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Speak with a friendly expert today and unlock the best deal in your area.
          </p>
          <div className="relative mt-8 flex justify-center">
            <CallButton />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
