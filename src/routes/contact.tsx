import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Headphones } from "lucide-react";
import { z } from "zod";
import { CallNowButton } from "@/components/CallNowButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AIB Communications" },
      { name: "description", content: "Get in touch with AIB Communications. Our team is available 24/7 for internet and TV support, quotes, and new installations." },
      { property: "og:title", content: "Contact AIB Communications" },
      { property: "og:description", content: "Feel free to contact us anytime — we're here 24/7." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
  consent: z.literal(true, { message: "You must agree to be contacted" }),
});

const fields = [
  { k: "name", label: "Name", type: "text", placeholder: "Jane Doe" },
  { k: "email", label: "Email", type: "email", placeholder: "you@example.com" },
  { k: "company", label: "Company", type: "text", placeholder: "Your company" },
] as const;

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "", consent: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
  };

  const update = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative bg-gradient-hero py-20 text-primary-foreground">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-pink/30 blur-3xl animate-float" />
          <div className="absolute right-10 bottom-0 h-80 w-80 rounded-full bg-yellow/20 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest backdrop-blur">
            Get In Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-5 text-5xl font-bold md:text-6xl">
            Contact <span className="text-yellow">Us</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/85">
            Feel free to reach out anytime — our team is available 24/7 to help you.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex justify-center">
            <CallNowButton />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Left: contact info cards */}
          <motion.aside
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5 lg:col-span-2"
          >
            <div className="rounded-3xl bg-card p-7 shadow-glow">
              <h2 className="text-2xl font-bold text-primary">Feel free to contact us anytime.</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Our dedicated customer support team is available 24/7 to assist our internet and TV
                users. Count on us for timely and reliable support whenever you need help.
              </p>
            </div>

            {[
              { icon: Phone, label: "Phone", value: "(888) 477-6212", href: "tel:8884776212", color: "from-primary to-primary/70" },
              { icon: Mail, label: "Email", value: "support@hopkinstek.com", href: "mailto:support@hopkinstek.com", color: "from-pink to-pink/70" },
              { icon: MapPin, label: "Address", value: "9801 Westheimer Rd Ste 205-10, Houston, TX 77042", color: "from-yellow to-yellow/70" },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:shadow-glow"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${c.color} text-white shadow-card transition-transform group-hover:rotate-12`}>
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="truncate text-sm font-semibold text-foreground">{c.value}</div>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-gradient-pink p-5 text-pink-foreground shadow-pink"
            >
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 animate-float" />
                <div>
                  <div className="text-sm font-bold">Available 24/7</div>
                  <div className="text-xs text-pink-foreground/85">Live support, every day of the year</div>
                </div>
              </div>
            </motion.div>
          </motion.aside>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl bg-card p-8 shadow-glow md:p-10">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-pink/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-yellow/20 blur-2xl" />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-card text-primary-foreground">
                    <Headphones className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Send us a message</h3>
                    <p className="text-xs text-muted-foreground">We'll respond within 24 hours.</p>
                  </div>
                </div>

                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border-2 border-pink/30 bg-pink/5 p-10 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink text-pink-foreground shadow-pink"
                    >
                      <CheckCircle2 className="h-8 w-8" />
                    </motion.div>
                    <h4 className="mt-5 text-2xl font-bold text-primary">Thank you!</h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We received your request and will reach out to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {fields.slice(0, 2).map((f) => (
                        <FieldInput
                          key={f.k}
                          field={f}
                          value={form[f.k as "name" | "email"]}
                          error={errors[f.k]}
                          onChange={(v) => update(f.k, v)}
                        />
                      ))}
                    </div>

                    <FieldInput
                      field={fields[2]}
                      value={form.company}
                      error={errors.company}
                      onChange={(v) => update("company", v)}
                    />

                    <div>
                      <label className="mb-2 block text-sm font-bold text-foreground">
                        Message <span className="text-pink">*</span>
                      </label>
                      <textarea
                        rows={5}
                        placeholder="How can we help?"
                        value={form.message}
                        onChange={(e) => update("message", e.target.value)}
                        className="w-full resize-none rounded-xl border-2 border-border bg-background px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/15"
                      />
                      {errors.message && <p className="mt-1.5 text-xs font-medium text-pink">{errors.message}</p>}
                    </div>

                    <div className="rounded-xl border border-border bg-secondary/50 p-4">
                      <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted-foreground">
                        <input
                          type="checkbox"
                          checked={form.consent}
                          onChange={(e) => update("consent", e.target.checked)}
                          className="mt-0.5 h-4 w-4 shrink-0 accent-pink"
                        />
                        <span>
                          By clicking the button below or entering your information, you consent for
                          AIB Communications, and any of its affiliate service providers to use
                          automated technology including texts, phone calls, prerecorded messages, or
                          email to contact you about offers. This consent is not required to make a
                          purchase. Clicking the button below constitutes your electronic signature.
                        </span>
                      </label>
                      {errors.consent && <p className="mt-1.5 text-xs font-medium text-pink">{errors.consent}</p>}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-pink px-7 py-4 text-sm font-bold uppercase tracking-wider text-pink-foreground shadow-pink transition-all hover:shadow-glow sm:w-auto"
                    >
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /> Send Me Quote
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="h-20" />
    </div>
  );
}

function FieldInput({
  field,
  value,
  error,
  onChange,
}: {
  field: { k: string; label: string; type: string; placeholder: string };
  value: string;
  error?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-foreground">
        {field.label} <span className="text-pink">*</span>
      </label>
      <input
        type={field.type}
        placeholder={field.placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-sm text-foreground transition-all placeholder:text-muted-foreground/60 focus:border-pink focus:outline-none focus:ring-4 focus:ring-pink/15"
      />
      {error && <p className="mt-1.5 text-xs font-medium text-pink">{error}</p>}
    </div>
  );
}
