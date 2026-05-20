import { createFileRoute } from "@tanstack/react-router";
import { Heart, Award, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeader } from "@/components/SectionHeader";
import storeSign from "@/assets/store-sign.png";
import storeExterior from "@/assets/store-exterior.webp";
import cuThemed from "@/assets/cu-themed.jpeg";
import whiskeyField from "@/assets/whiskey-field.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Baseline Liquors" },
      {
        name: "description",
        content:
          "Under new ownership since 2020, Baseline Liquors is South Boulder's neighborhood bottle shop — locally owned, community first.",
      },
      { property: "og:title", content: "About — Baseline Liquors" },
      {
        property: "og:description",
        content: "New ownership, same neighborhood love. Meet your South Boulder bottle shop.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Community",
    desc: "We're your neighbors. Supporting local events, teams, and causes is part of who we are.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Every bottle on our shelf is one we'd recommend to a friend. Curated, not just stocked.",
  },
  {
    icon: ShieldCheck,
    title: "Service",
    desc: "Our staff knows their stuff. Ask us anything — from cocktail pairings to gift suggestions.",
  },
];

function AboutPage() {
  return (
    <Layout>
      <section className="pt-24 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="pill-label text-primary mb-3">Our Story</div>
              <h1
                className="font-display font-semibold text-[40px] md:text-[48px] leading-[1.05]"
                style={{ letterSpacing: "-0.02em" }}
              >
                New Ownership, Same Neighborhood Love
              </h1>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                In June 2020, Baseline Liquors came under new ownership with a simple mission: make
                the best neighborhood bottle shop in South Boulder. We refreshed the store,
                expanded the selection, and committed to treating every customer like a friend
                walking through the door.
              </p>
              <blockquote className="mt-8 border-l-2 border-primary pl-8 md:pl-12 font-display italic text-2xl md:text-[30px] leading-snug text-foreground/90">
                &ldquo;We&rsquo;re not a corporate chain. We&rsquo;re your neighbors.&rdquo;
              </blockquote>
              <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
                Whether you&rsquo;re a craft beer enthusiast, a wine collector, or just need a
                great bottle for tonight&rsquo;s dinner, we&rsquo;re here to help. Our staff is
                passionate, knowledgeable, and always happy to chat about what&rsquo;s new on the
                shelves.
              </p>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                We&rsquo;re proud to support Colorado breweries, distilleries, and wineries —
                because great things come from right here in our backyard.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-5">
                <div className="photo-hover rounded-xl aspect-[4/3]">
                  <img src={storeSign} alt="Baseline Liquor sign with the Flatirons behind" loading="lazy" />
                </div>
                <div className="photo-hover rounded-xl aspect-[4/3]">
                  <img src={storeExterior} alt="Baseline Liquors storefront exterior" loading="lazy" />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card/30">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <SectionHeader pill="What Drives Us" title="Our Values" />
          </FadeIn>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={0.05 * i}>
                <div className="bg-card border border-primary/12 rounded-xl p-7 md:p-8 h-full">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                    <v.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-2">{v.title}</h3>
                  <p className="text-muted-foreground">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="photo-hover rounded-xl aspect-[4/5]">
                <img src={cuThemed} alt="CU-themed champagne and spirits display" loading="lazy" />
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                className="font-display font-semibold text-3xl md:text-[40px] leading-tight"
                style={{ letterSpacing: "-0.01em" }}
              >
                Part of South Boulder
              </h2>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
                Baseline Liquors is more than a store — it&rsquo;s a part of the neighborhood.
                Whether you&rsquo;re a longtime local or just passing through on your way to the
                Flatirons, you&rsquo;ll find a warm welcome, a great recommendation, and prices
                that keep you coming back.
              </p>
              <div className="photo-hover rounded-xl aspect-[4/3] mt-8">
                <img
                  src={whiskeyField}
                  alt="Laws Whiskey Ralphie's Reserve bourbon on the CU football field"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
