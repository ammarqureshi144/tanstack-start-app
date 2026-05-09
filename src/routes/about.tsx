import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Sparkles, Globe, Clock, Phone, Mail, MapPin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — AIB Communications" },
      { name: "description", content: "AIB Communications is on a mission to revolutionize your internet experience with cutting-edge connectivity from the providers you trust." },
      { property: "og:title", content: "About AIB Communications" },
      { property: "og:description", content: "A connected world where seamless internet empowers individuals and businesses." },
    ],
  }),
  component: AboutPage,
});

const offers = [
  "Optimum Authorized Reseller services",
  "EarthLink Authorized Reseller services",
  "DirecTV Dealer",
  "24/7 Customer Support",
  "Frontier Authorized Sales Agent",
  "New Cable Connection",
  "Satellite Internet Connection",
  "Fiber Internet Connection",
];

const partners = [
  { name: "Optimum", role: "Authorized Reseller" },
  { name: "Frontier", role: "Authorized Sales Agent" },
  { name: "EarthLink", role: "Reseller" },
  { name: "DirecTV", role: "Dealer" },
  { name: "Kinetic", role: "Authorized Agent" },
];

function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-hero py-24 text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-yellow/20 blur-3xl animate-float" />
          <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-pink/30 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
            About Us
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 text-5xl font-bold md:text-6xl">
            Welcome to <span className="text-yellow">AIB Communications</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-5 max-w-2xl text-lg text-primary-foreground/90">
            We are on a mission to revolutionize your internet experience. Our team of passionate
            innovators is dedicated to providing cutting-edge internet services that not only meet,
            but exceed your expectations.
          </motion.p>
        </div>
      </section>

      {/* Vision */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="rounded-full bg-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-pink">Our Vision</span>
            <h2 className="mt-4 text-4xl font-bold text-primary md:text-5xl">A connected world where everyone thrives.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We envision a connected world where seamless internet connectivity empowers
              individuals and businesses to thrive. By harnessing the power of technology, we
              strive to create a digital landscape that is not just fast and reliable but also
              enriches your daily life.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl bg-gradient-card p-10 shadow-glow">
              <Globe className="h-full w-full text-yellow/80 animate-float" strokeWidth={1} />
            </div>
            <motion.div animate={{ rotate: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -left-6 rounded-2xl bg-pink p-4 text-pink-foreground shadow-pink">
              <Sparkles className="h-7 w-7" />
            </motion.div>
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -right-4 top-8 rounded-2xl bg-yellow px-4 py-2 text-sm font-bold text-yellow-foreground shadow-card">
              Always On
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What we offer */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-primary md:text-5xl">What We Offer</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              A complete suite of connectivity services from the providers you trust.
            </p>
          </motion.div>
          <div className="grid gap-4 md:grid-cols-2">
            {offers.map((o, i) => (
              <motion.div
                key={o}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-card transition-all hover:translate-x-1 hover:shadow-glow"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-pink text-pink-foreground">
                  <Check className="h-5 w-5" />
                </div>
                <span className="font-semibold">{o}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-primary md:text-5xl">Our Partners</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Discover the finest internet and TV service options delivered right to your doorstep.
            AIB Communications partners with industry-leading providers.
          </p>
        </motion.div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, rotate: -2 }}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-card transition-shadow hover:shadow-glow"
            >
              <div className="text-xl font-bold text-primary">{p.name}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-pink">{p.role}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 24/7 + contact */}
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Clock className="mb-4 h-12 w-12 text-yellow animate-float" />
            <h2 className="text-4xl font-bold">24/7 Availability</h2>
            <p className="mt-4 text-lg text-primary-foreground/85">
              We are available around the clock. Whether you need technical support, want to set up
              a new service, or have questions about your existing plan, our team is always ready
              to help.
            </p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow px-7 py-3 text-sm font-bold text-yellow-foreground shadow-card transition-all hover:scale-105">
              Contact Us
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-yellow">Contact Information</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-yellow" /> (888) 477-6212</li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-yellow" /> support@hopkinstek.com</li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-yellow" /> 9801 Westheimer Rd Ste 205-10, Houston, TX 77042</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
