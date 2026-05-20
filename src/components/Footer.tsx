import { Link } from "@tanstack/react-router";
import { Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="noise-overlay relative bg-card/60 border-t border-primary/10 mt-0">
      {/* Receipt strip */}
      <div className="border-b border-primary/10">
        <div className="container mx-auto max-w-7xl px-5 md:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-center md:text-left">
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="text-primary">Tel · </span>
            <a href="tel:+13034946097" className="hover:text-foreground">(303) 494-6097</a>
          </div>
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground text-center">
            <span className="text-primary">Address · </span>
            2750 Baseline Rd, Boulder, CO 80305
          </div>
          <div className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:text-right">
            <span className="text-primary">Hours · </span>
            Mon–Sat 9–11 · Sun 9–10:30
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-5 md:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="font-display font-semibold text-2xl" style={{ letterSpacing: "0.02em" }}>
              <span className="text-foreground">Baseline </span>
              <span className="text-primary">Liquors</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Your South Boulder Bottle Shop. Locally owned, community first.
            </p>
          </div>

          <div>
            <div className="pill-label text-primary mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary text-foreground/80">Home</Link></li>
              <li><Link to="/products" className="hover:text-primary text-foreground/80">Products</Link></li>
              <li><Link to="/about" className="hover:text-primary text-foreground/80">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary text-foreground/80">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="pill-label text-primary mb-4">Connect</div>
            <a
              href="https://facebook.com/baselineliquorsboulder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary"
            >
              <Facebook size={16} /> Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary/10 relative z-10">
        <div className="container mx-auto max-w-7xl px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <div>© 2025 Baseline Liquors · Boulder, CO</div>
          <a
            href="https://www.doordash.com/en/store/baseline-liquor-store-boulder-39664247/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3008]" />
            Available on DoorDash
          </a>
        </div>
      </div>
    </footer>
  );
}
