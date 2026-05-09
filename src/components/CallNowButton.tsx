import { Phone, ArrowRight } from "lucide-react";

export function CallNowButton({ className = "" }: { className?: string }) {
  return (
    <a
      href="tel:8884776212"
      className={`group inline-flex items-center gap-3 rounded-full bg-yellow px-7 py-4 text-base font-bold text-yellow-foreground shadow-card transition-all hover:scale-105 hover:bg-yellow/90 animate-pulse-glow ${className}`}
    >
      <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
      Call Now: (888) 477-6212
      <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
    </a>
  );
}
