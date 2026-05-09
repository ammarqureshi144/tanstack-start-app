import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-htek.png";

export function Footer() {
  return (
    <footer className="mt-24">
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src={logo} alt="AIB Communications" className="h-14 w-14 object-contain" />
                <div>
                  <div className="text-lg font-bold">AIB Communications</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">Services LLC</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-primary-foreground/85">
                Authorized agent and reseller for the leading Internet & TV providers, delivering
                seamless connectivity to your doorstep.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-yellow">Contact</h4>
              <a href="tel:8884776212" className="mb-2 flex items-center gap-2 text-sm hover:text-yellow">
                <Phone className="h-4 w-4" /> (888) 477-6212
              </a>
              <a href="mailto:support@hopkinstek.com" className="mb-2 flex items-center gap-2 text-sm hover:text-yellow">
                <Mail className="h-4 w-4" /> support@hopkinstek.com
              </a>
              <p className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> 9801 Westheimer Rd Ste 205-10, Houston, TX 77042
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-yellow">Disclaimer</h4>
              <p className="text-xs leading-relaxed text-primary-foreground/75">
                AIB Communications is an authorized reseller / agent. All offers are subject to
                change and availability in your area. Pricing, channels, and speeds may vary by location.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-footer">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} AIB Communications. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-pink">Terms</Link>
            <Link to="/privacy" className="hover:text-pink">Privacy</Link>
            <Link to="/ccpa" className="hover:text-pink">California</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
