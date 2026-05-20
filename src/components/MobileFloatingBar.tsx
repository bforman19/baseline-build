import { Phone, MapPin } from "lucide-react";

export function MobileFloatingBar() {
  return (
    <div className="md:hidden fixed bottom-1 left-1 right-1 z-40 grid grid-cols-2 gap-2 p-2 rounded-xl bg-background/85 backdrop-blur-xl border border-primary/15">
      <a
        href="tel:+13034946097"
        className="glow-amber inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-lg py-3 text-sm font-medium"
      >
        <Phone size={16} /> Call
      </a>
      <a
        href="https://maps.google.com/?q=2750+Baseline+Rd+Boulder+CO+80305"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground rounded-lg py-3 text-sm font-medium"
      >
        <MapPin size={16} /> Directions
      </a>
    </div>
  );
}
