import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";
import { StoreInfoCard, MapEmbed } from "@/components/StoreInfo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Visit — Baseline Liquors" },
      {
        name: "description",
        content:
          "Visit Baseline Liquors at 2750 Baseline Rd, Boulder, CO. Open 7 days a week. Call (303) 494-6097.",
      },
      { property: "og:title", content: "Contact & Visit — Baseline Liquors" },
      {
        property: "og:description",
        content: "Find us in South Boulder — hours, address, parking, and Facebook.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <section className="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <div className="pill-label text-primary mb-3">Find Us</div>
            <h1
              className="font-display font-semibold text-[40px] md:text-[56px] leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Come See Us
            </h1>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FadeIn>
              <StoreInfoCard showFacebook />
            </FadeIn>
            <FadeIn delay={0.1}>
              <MapEmbed />
            </FadeIn>
          </div>
        </div>
      </section>
    </Layout>
  );
}
