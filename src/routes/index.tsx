import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ChevronDown,
  Phone,
  Clock,
  MapPin,
  Users,
  DollarSign,
  Mountain,
  Star,
  Quote,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import { StoreInfoCard, MapEmbed } from "@/components/StoreInfo";
import heroBg from "@/assets/hero-bg.jpg";
import storeInterior from "@/assets/store-interior.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <QuickInfoBar />
      <WhatWeCarry />
      <DoorDashSection />
      <WhyShop />
      <AboutSnippet />
      <Reviews />
      <VisitMap />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center noise-overlay overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Baseline Liquors storefront with the Flatirons mountains behind"
          className="w-full h-full object-cover animate-hero-zoom warm-photo"
        />
        <div className="absolute inset-0 bg-background/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-5 md:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          <FadeIn>
            <div
              className="inline-flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border border-primary/60 mb-10"
              style={{ transform: "rotate(-8deg)" }}
            >
              <span className="font-display text-sm md:text-base text-foreground leading-tight">Locally</span>
              <span className="font-display text-sm md:text-base text-foreground leading-tight">Owned</span>
              <span className="font-body text-[10px] uppercase tracking-[0.14em] text-primary/70 mt-1">
                Since 2020
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1
              className="font-display font-bold text-[48px] sm:text-[56px] md:text-[70px] lg:text-[80px] leading-[1.05] text-foreground"
              style={{ letterSpacing: "-0.03em" }}
            >
              Your South Boulder
              <br />
              <span className="text-gradient-amber">Bottle Shop</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              A refreshed selection of beer, wine &amp; spirits with friendly, knowledgeable staff
              ready to help you find the perfect bottle.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link
                to="/products"
                className="glow-amber inline-flex items-center justify-center bg-primary text-primary-foreground px-7 py-4 rounded-md text-sm uppercase tracking-[0.12em] font-medium hover:brightness-110 transition"
              >
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border border-primary/40 text-foreground px-7 py-4 rounded-md text-sm uppercase tracking-[0.12em] font-medium hover:border-primary hover:text-primary transition"
              >
                Find Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-primary/60" size={28} />
      </div>
    </section>
  );
}

function QuickInfoBar() {
  return (
    <div className="container mx-auto max-w-6xl px-5 md:px-8 -mt-12 relative z-20">
      <FadeIn>
        <div className="bg-card rounded-xl border border-primary/15 glow-amber p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10">
          <a
            href="tel:+17209789118"
            className="flex items-center justify-center gap-3 py-3 md:py-0 px-4 hover:text-primary transition"
          >
            <Phone className="text-primary" size={18} />
            <span className="text-sm md:text-base">(303) 494-6097</span>
          </a>
          <div className="flex items-center justify-center gap-3 py-3 md:py-0 px-4">
            <Clock className="text-primary" size={18} />
            <span className="text-sm md:text-base">Open today until 11 PM</span>
          </div>
          <a
            href="https://maps.google.com/?q=2750+Baseline+Rd+Boulder+CO+80305"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 py-3 md:py-0 px-4 hover:text-primary transition"
          >
            <MapPin className="text-primary" size={18} />
            <span className="text-sm md:text-base">2750 Baseline Rd, Boulder</span>
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

const categories = [
  {
    name: "Spirits",
    desc: "Extensive selection across all price points — everyday bottles to rare finds.",
    subs: "BOURBON · SCOTCH · RYE · TEQUILA · MEZCAL · VODKA · GIN · RUM",
  },
  {
    name: "Wine",
    desc: "Curated for every palate and budget, casual to special occasion.",
    subs: "RED · WHITE · ROSÉ · SPARKLING · DESSERT · NATURAL",
  },
  {
    name: "Beer",
    desc: "All beer kept cold. 4-packs, 6-packs, bombers, pint cans, and 750mL bottles.",
    subs: "LOCAL COLORADO CRAFT · DOMESTICS · SEASONAL · IMPORTS · SOURS",
  },
];

function WhatWeCarry() {
  return (
    <section className="noise-overlay py-16 md:py-24 relative">
      <div className="container mx-auto max-w-6xl px-5 md:px-8 relative z-10">
        <FadeIn>
          <SectionHeader pill="Selection" title="What We Carry" />
        </FadeIn>

        <div className="mt-12 divide-y divide-primary/[0.15]">
          {categories.map((c, i) => (
            <FadeIn key={c.name} delay={0.05 * i}>
              <div className="relative py-8 md:py-10 overflow-hidden">
                <span
                  aria-hidden
                  className="absolute -top-2 right-0 font-display font-bold text-[80px] md:text-[120px] leading-none text-foreground select-none pointer-events-none"
                  style={{ opacity: 0.03 }}
                >
                  {c.name}
                </span>
                <div className="relative flex flex-col md:flex-row md:items-baseline md:justify-between gap-3">
                  <h3 className="font-display text-[40px] leading-none font-semibold">{c.name}</h3>
                  <p className="text-muted-foreground md:text-right md:max-w-md">{c.desc}</p>
                </div>
                <div className="relative mt-4 text-[10px] tracking-[0.14em] text-primary/80">
                  {c.subs}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <p className="mt-10 text-sm text-muted-foreground italic">
            Also available: Premade Cocktails · Kegs — ask in-store for details.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function DoorDashSection() {
  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#1A1714" }}>
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <FadeIn className="lg:col-span-3">
            <div className="pill-label text-primary mb-3">Delivery Available</div>
            <h2
              className="font-display font-semibold text-[32px] md:text-[38px] leading-tight"
              style={{ letterSpacing: "-0.01em" }}
            >
              Order Without Leaving the Couch
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed max-w-xl">
              Skip the trip — get Baseline Liquors delivered straight to your door through DoorDash.
              Beer, wine, and spirits, tracked in real-time.
            </p>
            <p className="mt-6 text-xs text-muted-foreground/70">
              Must be 21+. Valid ID required at delivery. Enjoy responsibly.
            </p>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <div
              className="rounded-[14px] p-8"
              style={{
                background: "#2C2820",
                border: "1.5px solid rgba(200, 137, 31, 0.3)",
              }}
            >
              <div
                className="font-bold text-2xl mb-4"
                style={{ color: "#FF3008", letterSpacing: "-0.02em" }}
              >
                DoorDash
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Fast delivery · Real-time tracking · No delivery fee on first order
              </p>
              <a
                href="https://www.doordash.com/en/store/baseline-liquor-store-boulder-39664247/"
                target="_blank"
                rel="noreferrer"
                className="mt-6 block w-full text-center rounded-md py-3.5 text-white font-medium text-sm uppercase tracking-[0.10em] transition"
                style={{ backgroundColor: "#E4002B" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C4001F")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#E4002B")}
              >
                Order on DoorDash →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: Users,
    title: "Knowledgeable Staff",
    desc: "We help you find exactly what you're looking for.",
  },
  {
    icon: DollarSign,
    title: "Fair Prices",
    desc: "Quality bottles at prices that won't break the bank.",
  },
  {
    icon: Mountain,
    title: "Colorado Craft First",
    desc: "Proud supporters of local breweries & distilleries.",
  },
];

function WhyShop() {
  return (
    <section className="noise-overlay py-16 md:py-24 relative">
      <div className="container mx-auto max-w-6xl px-5 md:px-8 relative z-10">
        <FadeIn>
          <SectionHeader pill="Why Baseline" title="Why Shop With Us" />
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {values.map((v, i) => (
            <FadeIn key={v.title} delay={0.05 * i}>
              <div className="flex flex-col items-start">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSnippet() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="pill-label text-primary mb-3">Our Story</div>
            <h2 className="font-display font-semibold text-3xl md:text-[44px] leading-[1.05]">
              A Neighborhood Staple, Refreshed
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Under new ownership since June 2020, Baseline Liquors has been refreshed from top to
              bottom — expanded selection, friendlier service, and a renewed commitment to our
              South Boulder community.
            </p>
            <blockquote className="mt-8 border-l-2 border-primary pl-8 md:pl-12 font-display italic text-2xl md:text-[30px] leading-snug text-foreground/90">
              &ldquo;We&rsquo;re not a corporate chain. We&rsquo;re your neighbors.&rdquo;
            </blockquote>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-primary text-sm uppercase tracking-[0.14em] hover:gap-3 transition-all"
            >
              Learn More About Us →
            </Link>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="photo-hover rounded-xl aspect-[4/5] md:aspect-[5/6]">
              <img src={storeInterior} alt="Curated whiskey selection inside Baseline Liquors" loading="lazy" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const reviews = [
  {
    name: "Kevin & Jason",
    source: "Google",
    text: "Jennifer and her staff are professional, knowledgeable and helpful! This store is clean and organized. Well lit and ample parking available. Fair prices and good selection of wines and premade cocktails. When in Boulder, make sure to stop in at Baseline Liquor Store.",
  },
  {
    name: "Verified Customer",
    source: "Google",
    text: "Amazing customer service! I am out of state and called to make a delivery as a gift. Jennifer was so accommodating and great to work with over the phone. I will definitely be using them in the future as well!",
  },
  {
    name: "Verified Customer",
    source: "Google",
    text: "Amazing stock, friendly staff and best part they are locally and family owned! My favorite liquor store — I travel from Northglenn to come here!",
  },
];

function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-card/30">
      <div className="container mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <SectionHeader
            center
            pill="Reviews"
            title="What Our Customers Say"
            subtitle="Trusted by the South Boulder community since 2020"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Baseline+Liquors+2750+Baseline+Rd+Boulder+CO+80305"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#E8F0FE", color: "#1A73E8" }}
            >
              <span className="font-bold">G</span> Google Reviews
            </a>
            <a
              href="https://www.yelp.com/biz/baseline-liquor-store-boulder"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{ backgroundColor: "#FDE8E8", color: "#D32323" }}
            >
              <span className="font-bold">Yelp</span>
            </a>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <FadeIn key={i} delay={0.05 * i}>
              <div className="relative bg-card rounded-xl p-7 border border-primary/10 h-full">
                <Quote
                  className="absolute top-4 left-4 text-primary/25"
                  size={42}
                  style={{ opacity: 0.4 }}
                />
                <div className="relative pt-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, k) => (
                      <Star key={k} size={14} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic text-foreground/85 text-sm leading-relaxed">&ldquo;{r.text}&rdquo;</p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm font-medium">{r.name}</span>
                    <span
                      className="text-[10px] uppercase tracking-[0.12em] px-2 py-1 rounded-full"
                      style={{
                        backgroundColor: r.source === "Google" ? "#E8F0FE" : "#FDE8E8",
                        color: r.source === "Google" ? "#1A73E8" : "#D32323",
                      }}
                    >
                      {r.source}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-5">
              Enjoyed your visit? We&rsquo;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Baseline+Liquors+2750+Baseline+Rd+Boulder+CO+80305"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground px-6 py-3 rounded-md text-sm uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition"
              >
                ★ Leave a Google Review
              </a>
              <a
                href="https://www.yelp.com/biz/baseline-liquor-store-boulder"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-primary/40 text-foreground px-6 py-3 rounded-md text-sm uppercase tracking-[0.12em] hover:border-primary hover:text-primary transition"
              >
                ★ Leave a Yelp Review
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function VisitMap() {
  return (
    <section className="noise-overlay py-16 md:py-24 relative">
      <div className="container mx-auto max-w-6xl px-5 md:px-8 relative z-10">
        <FadeIn>
          <SectionHeader pill="Location" title="Come See Us" />
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FadeIn>
            <StoreInfoCard />
          </FadeIn>
          <FadeIn delay={0.1}>
            <MapEmbed />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
