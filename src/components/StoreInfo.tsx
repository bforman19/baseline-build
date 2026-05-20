import { MapPin, Phone, Clock, Car, Facebook } from "lucide-react";

export function StoreInfoCard({ showFacebook = false }: { showFacebook?: boolean }) {
  return (
    <div className="bg-card rounded-xl p-7 md:p-8 border border-primary/10 border-l-[3px] border-l-primary">
      <h3 className="font-display text-2xl md:text-3xl font-semibold mb-6">Store Info</h3>
      <ul className="space-y-5 text-sm md:text-base">
        <li className="flex gap-4">
          <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
          <a
            href="https://maps.google.com/?q=2750+Baseline+Rd+Boulder+CO+80305"
            target="_blank"
            rel="noreferrer"
            className="text-foreground hover:text-primary"
          >
            2750 Baseline Rd, Boulder, CO 80305
          </a>
        </li>
        <li className="flex gap-4">
          <Phone size={18} className="text-primary mt-0.5 shrink-0" />
          <a href="tel:+13034946097" className="text-foreground hover:text-primary">
            (303) 494-6097
          </a>
        </li>
        <li className="flex gap-4">
          <Clock size={18} className="text-primary mt-0.5 shrink-0" />
          <div className="text-foreground/90">
            <div>Mon–Sat: 9:00 AM – 11:00 PM</div>
            <div>Sunday: 9:00 AM – 10:30 PM</div>
          </div>
        </li>
        <li className="flex gap-4">
          <Car size={18} className="text-primary mt-0.5 shrink-0" />
          <div className="text-muted-foreground">Ample free parking available.</div>
        </li>
        {showFacebook && (
          <li className="flex gap-4">
            <Facebook size={18} className="text-primary mt-0.5 shrink-0" />
            <a
              href="https://facebook.com/baselineliquorsboulder"
              target="_blank"
              rel="noreferrer"
              className="text-foreground hover:text-primary"
            >
              facebook.com/baselineliquorsboulder
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}

export function MapEmbed() {
  return (
    <div className="rounded-xl overflow-hidden border border-primary/10 min-h-[320px] h-full">
      <iframe
        title="Baseline Liquors Map"
        src="https://www.google.com/maps?q=2750+Baseline+Rd,+Boulder,+CO+80305&output=embed"
        loading="lazy"
        className="w-full h-full min-h-[320px]"
        style={{ border: 0, filter: "grayscale(0.4) contrast(0.95)" }}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
