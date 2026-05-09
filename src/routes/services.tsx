import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Headphones, Wifi, Tv, Cable, Satellite, Zap, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — AIB Communications" },
      { name: "description", content: "Internet, Cable TV, and 24/7 customer support from AIB Communications. Authorized partner of Optimum, Frontier, EarthLink, DirecTV, and Kinetic." },
      { property: "og:title", content: "Services — AIB Communications" },
      { property: "og:description", content: "High-speed internet & cable TV delivered to your doorstep." },
    ],
  }),
  component: ServicesPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
} as const;

const core = [
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Access our 24/7 customer support for prompt assistance with any internet-related issues you may encounter. Just give us a call — we have got you covered.",
    color: "from-pink to-pink/70",
  },
  {
    icon: Wifi,
    title: "Get New Internet",
    desc: "Easily obtain a new internet connection at your doorstep by contacting us to check availability in your area.",
    color: "from-primary to-primary/70",
  },
  {
    icon: Cable,
    title: "Get New Cable",
    desc: "Secure a new cable connection conveniently delivered to your doorstep by simply contacting us to arrange installation in your area.",
    color: "from-yellow to-yellow/70",
  },
];

const partners = [
  { name: "Optimum", role: "Authorized Reseller", desc: "Stay connected seamlessly with high-speed internet, ensuring smooth live streaming on platforms like Facebook, Instagram, and TikTok. Enjoy lightning-fast uploads and downloads, along with unlimited streaming without buffering delays.", icon: Wifi },
  { name: "DirecTV", role: "Dealer", desc: "Stay connected seamlessly with premium TV packages and high-speed companion internet for smooth streaming and lightning-fast uploads and downloads — without buffering.", icon: Tv },
  { name: "Frontier", role: "Authorized Sales Agent", desc: "Cutting-edge features like voice control and seamless integration with smart-home devices for a futuristic TV experience. Stunning HD visuals deliver a cinematic viewing experience.", icon: Satellite },
  { name: "EarthLink", role: "Reseller", desc: "Reliable nationwide fiber and DSL internet — privacy-focused, no data caps on most plans, with friendly U.S.-based support.", icon: Zap },
  { name: "Kinetic", role: "Authorized Agent", desc: "Whole-home Wi-Fi powered by next-generation fiber — ideal for streaming, gaming, and remote work in supported regions.", icon: Wifi },
];

function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-hero py-24 text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink/30 blur-3xl animate-float" />
          <div className="absolute right-10 bottom-10 h-80 w-80 rounded-full bg-yellow/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
            What We Do
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 text-5xl font-bold md:text-6xl">
            Our <span className="text-yellow">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">
            High-speed internet, premium cable TV, and around-the-clock support from the providers
            you already trust.
          </motion.p>
        </div>
      </section>

      {/* Core offerings */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary md:text-5xl">Core Offerings</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Everything you need to stay connected — delivered to your doorstep.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {core.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition-shadow hover:shadow-glow"
            >
              <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${c.color} text-white shadow-pink`}>
                <c.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{c.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink/10 transition-transform group-hover:scale-150" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Partners */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="mb-12 text-center">
            <span className="rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink">Our Partners</span>
            <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">Service Details by Partner</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              AIB Communications is proud to be an authorized agent and reseller for these
              leading providers.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {partners.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group rounded-2xl bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-card text-primary-foreground transition-transform group-hover:rotate-12">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary">{p.name}</h3>
                    <span className="text-xs font-semibold uppercase tracking-wider text-pink">{p.role}</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support + New Services blocks */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl bg-gradient-hero p-10 text-primary-foreground shadow-glow">
            <Headphones className="mb-4 h-10 w-10 text-yellow animate-float" />
            <h3 className="mb-3 text-2xl font-bold">Customer Support</h3>
            <p className="text-primary-foreground/85">
              Our dedicated customer support team is available 24/7 to assist our internet and TV
              users. You can count on us to provide timely and reliable support whenever you need
              help with your services.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="rounded-3xl bg-gradient-pink p-10 text-pink-foreground shadow-pink">
            <Zap className="mb-4 h-10 w-10 animate-float" />
            <h3 className="mb-3 text-2xl font-bold">New Internet Services</h3>
            <p className="text-pink-foreground/90">
              Internet-related issues can be frustrating, so we prioritize swift problem resolution.
              We implement a robust ticketing system, track resolution times, and empower our team
              with the tools needed to diagnose and address connectivity or service problems
              efficiently.
            </p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-16 rounded-3xl border border-border bg-card p-10 text-center shadow-card">
          <h3 className="text-3xl font-bold text-primary">Ready to upgrade your connection?</h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Get a free, no-obligation quote tailored to your address.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground shadow-card transition-all hover:scale-105 hover:bg-primary/90">
            Send Me a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
