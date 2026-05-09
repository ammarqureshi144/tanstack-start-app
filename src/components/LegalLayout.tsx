import { motion } from "framer-motion";
import { ReactNode } from "react";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-x-hidden">
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-primary-foreground">
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-pink/30 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-yellow/20 blur-3xl"
        />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em]"
          >
            {eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-shadow-lg mt-5 text-4xl font-extrabold sm:text-6xl"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="mt-4 text-sm text-primary-foreground/80"
          >
            {updated}
          </motion.p>
        </div>
      </section>

      <motion.article
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-4 py-16 sm:px-6"
      >
        <div className="space-y-6 text-[15px] leading-relaxed text-foreground [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-primary [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-pink [&_p]:text-muted-foreground [&_li]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1.5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1.5">
          {children}
        </div>
      </motion.article>
    </div>
  );
}
