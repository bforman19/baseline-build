import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Baseline Liquors" },
      {
        name: "description",
        content:
          "Browse our selection of spirits, wine, beer, and local Colorado producers at Baseline Liquors in South Boulder.",
      },
      { property: "og:title", content: "Products — Baseline Liquors" },
      {
        property: "og:description",
        content: "Hand-selected spirits, wine, beer, and Colorado-made bottles — every one chosen for a reason.",
      },
    ],
  }),
  component: ProductsPage,
});

type Product = { tag: string; name: string };

const spirits: Product[] = [
  { tag: "BOURBON", name: "Buffalo Trace" },
  { tag: "BOURBON", name: "Maker's Mark" },
  { tag: "BOURBON", name: "Woodford Reserve" },
  { tag: "BOURBON", name: "Bulleit Bourbon" },
  { tag: "BOURBON", name: "Knob Creek Rye" },
  { tag: "TENNESSEE", name: "Jack Daniel's Old No. 7" },
  { tag: "IRISH", name: "Jameson" },
  { tag: "SCOTCH", name: "Glenfiddich 12yr" },
  { tag: "SCOTCH", name: "Monkey Shoulder" },
  { tag: "TEQUILA", name: "Casamigos Blanco" },
  { tag: "TEQUILA", name: "Patrón Silver" },
  { tag: "TEQUILA", name: "Don Julio Blanco" },
  { tag: "TEQUILA", name: "Espolòn Reposado" },
  { tag: "MEZCAL", name: "Del Maguey Vida" },
  { tag: "VODKA", name: "Tito's Handmade" },
  { tag: "VODKA", name: "Grey Goose" },
  { tag: "VODKA", name: "Ketel One" },
  { tag: "GIN", name: "Hendrick's" },
  { tag: "GIN", name: "Tanqueray No. Ten" },
  { tag: "GIN", name: "The Botanist" },
  { tag: "RUM", name: "Bacardi Superior" },
  { tag: "RUM", name: "Diplomatico Reserva" },
  { tag: "APERITIVO", name: "Aperol" },
  { tag: "APERITIVO", name: "Campari" },
  { tag: "LIQUEUR", name: "St-Germain" },
  { tag: "LIQUEUR", name: "Grand Marnier" },
];

const wine: Product[] = [
  { tag: "ROSÉ", name: "Whispering Angel" },
  { tag: "ROSÉ", name: "Miraval Rosé" },
  { tag: "CHAMPAGNE", name: "Veuve Clicquot Yellow Label" },
  { tag: "CHAMPAGNE", name: "Moët & Chandon Impérial" },
  { tag: "SPARKLING", name: "La Marca Prosecco" },
  { tag: "SAUVIGNON BLANC", name: "Kim Crawford" },
  { tag: "CHARDONNAY", name: "Rombauer" },
  { tag: "CHARDONNAY", name: "Stags' Leap" },
  { tag: "PINOT GRIS", name: "Oyster Bay" },
  { tag: "PINOT GRIS", name: "Santa Margherita" },
  { tag: "PINOT NOIR", name: "Meiomi" },
  { tag: "PINOT NOIR", name: "Elouan Oregon" },
  { tag: "CABERNET", name: "Decoy Cabernet" },
  { tag: "CABERNET", name: "Caymus Special Selection" },
  { tag: "CABERNET", name: "Daou Cabernet" },
  { tag: "RED BLEND", name: "The Prisoner" },
  { tag: "RED BLEND", name: "19 Crimes Red" },
  { tag: "NATURAL", name: "Gut Oggau Winifred" },
  { tag: "NATURAL", name: "Swick Pét-Nat" },
];

const beer: Product[] = [
  { tag: "IMPORT LAGER", name: "Heineken" },
  { tag: "IMPORT LAGER", name: "Corona Extra" },
  { tag: "IMPORT LAGER", name: "Modelo Especial" },
  { tag: "IMPORT LAGER", name: "Stella Artois" },
  { tag: "IMPORT LAGER", name: "Peroni Nastro Azzurro" },
  { tag: "IMPORT LAGER", name: "Dos Equis Lager" },
  { tag: "IMPORT LAGER", name: "Pacifico Clara" },
  { tag: "STOUT", name: "Guinness Draught" },
  { tag: "AMERICAN", name: "Coors Banquet" },
  { tag: "AMERICAN", name: "Bud Light" },
  { tag: "AMERICAN", name: "Miller Lite" },
  { tag: "CRAFT ALE", name: "New Belgium Fat Tire" },
  { tag: "CRAFT IPA", name: "Odell IPA" },
  { tag: "CRAFT WHEAT", name: "Avery White Rascal" },
  { tag: "CRAFT PALE ALE", name: "Oskar Blues Dale's" },
  { tag: "CRAFT STOUT", name: "Left Hand Milk Stout" },
  { tag: "CRAFT LAGER", name: "Upslope Craft Lager" },
];

const local: Product[] = [
  { tag: "WHISKEY", name: "Laws Whiskey House" },
  { tag: "WHISKEY", name: "Stranahan's Colorado" },
  { tag: "BOURBON", name: "Breckenridge Bourbon" },
  { tag: "RUM", name: "Montanya Rum" },
  { tag: "VODKA", name: "Woody Creek Distillers" },
  { tag: "SPIRITS", name: "Leopold Bros." },
  { tag: "BEER", name: "New Belgium Brewing" },
  { tag: "BEER", name: "Odell Brewing Co." },
  { tag: "BEER", name: "Avery Brewing Co." },
  { tag: "BEER", name: "Oskar Blues Brewery" },
  { tag: "BEER", name: "Upslope Brewing Co." },
  { tag: "BEER", name: "4 Noses Brewing" },
  { tag: "BEER", name: "Breckenridge Brewery" },
  { tag: "WINE", name: "BookCliff Vineyards" },
  { tag: "WINE", name: "Sutcliffe Vineyards" },
];

const tabs = [
  {
    id: "spirits",
    label: "Spirits",
    desc: "Extensive selection across all price points — everyday bottles to rare finds.",
    products: spirits,
  },
  {
    id: "wine",
    label: "Wine",
    desc: "Curated for every palate and budget, casual to special occasion.",
    products: wine,
  },
  {
    id: "beer",
    label: "Beer",
    desc: "All beer kept cold. 4-packs, 6-packs, bombers, pint cans, and 750mL bottles.",
    products: beer,
  },
  {
    id: "local",
    label: "Local Colorado",
    desc: "Producers made in this state doing something worth paying attention to.",
    products: local,
  },
];

function ProductCard({ tag, name }: Product) {
  return (
    <div className="group bg-card border border-primary/10 rounded-lg p-4 transition-all duration-200 hover:border-primary/40 hover:bg-primary/5">
      <span className="block text-primary font-mono text-[10px] tracking-[0.14em] mb-1.5 uppercase">
        {tag}
      </span>
      <p className="text-foreground font-semibold text-[15px] leading-snug">{name}</p>
    </div>
  );
}

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("spirits");
  const current = tabs.find((t) => t.id === activeTab)!;

  return (
    <Layout>
      <section className="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="container mx-auto max-w-6xl px-5 md:px-8">
          <FadeIn>
            <div className="pill-label text-primary mb-3">Browse</div>
            <h1
              className="font-display font-semibold text-[40px] md:text-[48px] leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Our Products
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Hand-selected spirits, wine, beer, and Colorado-made bottles — every one chosen for a reason.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 flex gap-1 border-b border-primary/15 overflow-x-auto pb-0 -mx-1 px-1">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`shrink-0 px-5 py-3 text-sm font-semibold tracking-[0.05em] border-b-2 -mb-px transition-all duration-200 ${
                    activeTab === t.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} key={activeTab}>
            <p className="mt-6 mb-8 text-muted-foreground text-[15px]">{current.desc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {current.products.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-12 text-center text-sm text-muted-foreground">
              Selection changes regularly. Come in or call{" "}
              <a href="tel:7209789118" className="text-primary hover:underline">
                720-978-9118
              </a>{" "}
              to check on a specific bottle.
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
