import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Layout } from "@/components/Layout";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Baseline Liquors" },
      {
        name: "description",
        content: "Browse our full selection of beer, wine, spirits, and RTDs at Baseline Liquors in South Boulder.",
      },
    ],
  }),
  component: ProductsPage,
});

// A subcategory can have internal sub-groups (e.g. Reds → California, Italian, etc.)
// If groups has only one entry with an empty label, items render without a sub-header.
type SubGroup = { label: string; items: string[] };
type Subcategory = { label: string; groups: SubGroup[] };
type TabData = { id: string; label: string; subcategories: Subcategory[] };

// Shorthand for subcategories that need no internal grouping
const flat = (label: string, items: string[]): Subcategory => ({
  label,
  groups: [{ label: "", items }],
});

const tabData: TabData[] = [
  {
    id: "beer",
    label: "Beer",
    subcategories: [
      flat("Mexican Lagers", [
        "Modelo Especial", "Modelo Chelada (various flavors)", "Corona Extra",
        "Corona Familiar", "Corona Sunbrew", "Pacífico Clara", "Dos Equis",
        "Tecate", "Sol", "Victoria", "Michi Chelada",
      ]),
      flat("American Macro Lagers", [
        "Bud Light", "Budweiser", "Bud Light Chelada", "Coors Light",
        "Coors Banquet", "Miller Lite", "Miller High Life", "Michelob Ultra",
        "Busch", "Busch Light", "Keystone Light", "Pabst Blue Ribbon",
        "Rolling Rock", "Genesee",
      ]),
      flat("Imported Lagers", [
        "Heineken", "Stella Artois", "Sapporo", "Singha", "Foster's", "Labatt Blue",
      ]),
      flat("Craft Lagers & Pilsners", [
        "Prost", "Upslope", "Odell Lagerado", "Grimm Brothers",
        "Montucky Cold Snacks", "Braxton", "Berthoud Lowrider",
        "Firestone Walker 805", "Howdy Beer",
      ]),
      flat("IPAs & Pale Ales", [
        "Voodoo Ranger (New Belgium)", "Fat Tire", "Stone Brewing",
        "Odell IPA / 90 Shilling / Hazer Tag / Drumroll / Old Doods",
        "Upslope IPA / Citra Pale",
        "Avery (IPA, White Rascal, Highliner, Brightpeak, Paws & Claws, Electric Sunshine)",
        "Sierra Nevada", "Bell's Two Hearted", "Founders All Day IPA",
        "Oskar Blues Dale's", "Victory (Sour Monkey, Golden Monkey, Juicy Monkey)",
        "Melvin 2x4", "Squatters Hop Rising", "Bootstrap", "Dry Dock",
        "Grimm Brothers Prince of Hops / Haze", "Vision Quest",
        "Roadhouse Walrus", "Post Brewing Ol Zippy",
      ]),
      flat("Pale & Amber Ales", [
        "Left Hand Sawtooth", "Maxline Irish Red", "Leinenkugel's", "Lone Tree",
        "Breckenridge", "Firestone Walker (Extra XPA, 805 Blonde)", "Red Rock",
        "Black Tooth Grapefruit", "Prost Grapefruit Radler", "Walter's Green Chile",
      ]),
      flat("Belgian & Wheat", ["Blue Moon"]),
      flat("Stouts", [
        "Guinness (Draught, Extra Stout, Foreign Extra)", "Left Hand Nitro Milk Stout",
      ]),
      flat("Non-Alcoholic", [
        "Samuel Adams Just the Haze", "Athletic Brewing", "Sierra Nevada Trail Pass",
        "Guinness 0", "Michelob Ultra Zero", "Grüvi",
      ]),
    ],
  },
  {
    id: "wine",
    label: "Wine",
    subcategories: [
      {
        label: "Whites",
        groups: [
          {
            label: "Value & Everyday",
            items: [
              "Barefoot (Chardonnay, Pinot Grigio, Sauvignon Blanc, Moscato)",
              "Canyon Oaks", "Three Wishes", "Bota Box", "Franzia",
              "Dark Horse", "House Wine", "Liquid Light", "Mucho Más", "Pavette",
            ],
          },
          {
            label: "California",
            items: [
              "Cupcake Vineyards", "La Crema", "Kendall-Jackson", "Josh Cellars",
              "Bread & Butter", "Decoy", "McManis", "Hahn", "Clos Du Bois",
              "Cycles Gladiator", "Sterling", "Chateau Souverain", "Bogle",
              "Sonoma-Cutrer", "Aquamarine", "Tapestry", "Rainstorm",
              "Trione", "Angels Ink", "Unshackled", "Provenance Deadeye",
              "Fetzer", "Sheep Creek", "Taking Root Blanc", "Skyfall",
            ],
          },
          {
            label: "New Zealand & Pacific",
            items: [
              "Kim Crawford", "Starborough", "Matua", "Sacred Hill",
              "Ant Moore", "Misty Cove", "The Little Sheep", "Watermill Chances R", "Miha",
            ],
          },
          {
            label: "Italian",
            items: [
              "Mirabello", "Spasso", "San Rocco", "San Angelo",
              "Primaterra", "Le Rive", "Modello",
            ],
          },
          {
            label: "European & International",
            items: [
              "Chateau de Campuget", "Winzer Krems Grüner", "Nortico Alvarinho",
              "Concha y Toro Casillero del Diablo",
            ],
          },
          {
            label: "Natural & Organic",
            items: ["Frey Vineyards", "Bee Organic", "Art of Earth", "Bonterra"],
          },
          {
            label: "Colorado",
            items: ["BookCliff Tectonic"],
          },
        ],
      },
      {
        label: "Reds",
        groups: [
          {
            label: "Value & Everyday",
            items: [
              "Dark Horse", "Apothic", "Bota Box (incl. Nighthawk)", "Franzia",
              "Three Wishes", "Canyon Oaks", "Oak Grove", "Tisdale",
              "Gato Negro", "Concha y Toro Frontera",
            ],
          },
          {
            label: "California",
            items: [
              "Mark West", "Josh Cellars", "Bread & Butter", "Bogle",
              "Kendall-Jackson", "Decoy", "La Crema", "Pinot Project",
              "McManis", "Cycles Gladiator", "Sterling", "Pavette", "Hahn",
              "Heron", "A to Z", "Tassajara", "Fogscape", "Séance",
              "Orin Swift Mercury Head", "Smith & Hook", "Annabella",
              "Pessimist", "Gran Famiglia Corte", "Chances", "Christopher Michael",
              "Stephan Vineyards", "Taking Root", "Il Carnevale",
            ],
          },
          {
            label: "Italian",
            items: [
              "Castello di Gabbiano Chianti", "Famiglia Castellani Chianti",
              "Badia al Colle Chianti", "Tenuta Sant'Antonio Scaia",
              "Gerardo Cesari", "Zeni Bardolino", "Monte degli Angeli",
              "Primaterra Pinot Nero",
            ],
          },
          {
            label: "Spanish & South American",
            items: [
              "Aragus Garnacha", "Bodegas Torremoron", "Care Garnacha",
              "Lo-ve GRN 5", "Bodini Malbec", "Crios",
            ],
          },
          {
            label: "French",
            items: [
              "Louis Jadot Beaujolais", "Chateau Nicot Bordeaux",
              "Val des Rois Côtes du Rhône",
            ],
          },
          {
            label: "Natural & Organic",
            items: ["Frey Biodynamic", "Our Daily Organic"],
          },
          {
            label: "Port",
            items: ["San Antonio Port", "Fonseca Port", "Fetzer Reserve Port"],
          },
          {
            label: "Colorado & Mountain",
            items: ["BookCliff Tectonic", "Mobb Mountain"],
          },
        ],
      },
      flat("Rosé", [
        "Barefoot", "Bread & Butter", "Bogle", "Angels & Cowboys",
        "The Little Sheep", "Kim Crawford", "Dark Horse",
        "Montecillo Cumbrero", "Mucho Más", "Ruby Red Grapefruit",
      ]),
      flat("Sparkling, Prosecco & Champagne", [
        "La Marca", "Cook's", "Andre", "Manos CU Boulder Bubbly",
        "Bellini Opera Prima", "Il Carnevale di Venezia", "Brilla", "Zardetto",
        "Riondo", "Freixenet", "Kim Crawford Prosecco", "Bread & Butter Prosecco",
        "Bervini", "Pizzolato", "Mercat Cava", "Decoy Brut", "Veuve Clicquot",
        "Sko Bubbs CU Buffs", "Dragon Fire Mimosa", "Opera Prima Mimosa",
      ]),
      flat("Sangria, Spritzers & Other", [
        "Capriccio Sangria", "Franzia Sangria", "Spritz del Conte",
        "Gruet L'Orangerie / Le Fleuriste", "Autumn Frost Spritzer",
        "Weihnachts Gluhwein", "Ariel (alcohol-removed)",
      ]),
    ],
  },
  {
    id: "spirits",
    label: "Spirits",
    subcategories: [
      flat("Vodka", [
        "Tito's", "Smirnoff (incl. flavored)", "Svedka",
        "New Amsterdam (incl. Pink Whitney)", "Deep Eddy (incl. flavored)",
        "Burnett's", "UV (flavored)", "McCormick", "Taaka", "Skol",
        "Epic", "Camaros", "Dirty Dill Pickle",
      ]),
      {
        label: "Tequila",
        groups: [
          {
            label: "Premium",
            items: ["Patrón", "Don Julio (incl. 1942)", "Casamigos", "LALO", "Herradura"],
          },
          {
            label: "Mid-Range",
            items: [
              "Espolon", "Hornitos", "Familia Camarena", "Teremana",
              "Olmeca Altos", "Corazon", "Milagro", "Riazul", "Dulce Vida",
            ],
          },
          {
            label: "Value & Fun",
            items: [
              "Jose Cuervo", "Sauza Hornitos", "Pantalones", "Frida Kahlo",
              "Trujillo", "Nuestro Placer", "Bandero", "Corrido",
              "Mango Shotta", "Fuck Yes", "Campo Bravo",
            ],
          },
        ],
      },
      flat("Mezcal", ["Xicaru", "Puercoleon"]),
      {
        label: "Whiskey — Bourbon",
        groups: [
          {
            label: "Everyday & Value",
            items: [
              "Jim Beam", "Bulleit", "Wild Turkey", "Benchmark",
              "Kentucky Deluxe", "Holladay / Ben Holladay",
              "Bowman Brothers / Isaac Bowman",
            ],
          },
          {
            label: "Premium",
            items: [
              "Maker's Mark", "Woodford Reserve", "Buffalo Trace", "Four Roses",
              "Knob Creek", "Booker's", "Elijah Craig", "Weller", "Eagle Rare",
              "Blackened", "High West", "American Highway Reserve", "Clyde May's",
              "Widow Jane", "Daviess County", "Old Elk", "Tincup",
            ],
          },
          {
            label: "Colorado & Mountain West",
            items: [
              "Laws Whiskey House", "Five Trail", "291", "Stranahan's",
              "State 38", "Mobb Mountain", "Art of the Spirits",
            ],
          },
        ],
      },
      flat("Whiskey — Tennessee & American Malt", [
        "Jack Daniel's", "Virginia Distillery Co.", "Spirit Hound",
        "Bull Shot Cookies & Cream", "Saint Bernard Peppermint Chocolate",
      ]),
      flat("Whiskey — Rye", ["Bulleit Rye", "Sazerac", "State Colorado Rye"]),
      flat("Whiskey — Irish", ["Jameson", "Bushmills", "Teeling"]),
      flat("Whiskey — Scotch, Japanese & Canadian", [
        "Macallan", "Scoresby", "Duncan Taylor", "Nikka", "Crown Royal", "Pendleton",
      ]),
      flat("Whiskey — Flavored & Cinnamon", ["Fireball", "Skrewball"]),
      flat("Rum", [
        "Bacardí", "Captain Morgan", "Malibu", "Black Magic",
        "Hampden Estate", "Ballmer Peak", "Caribaya", "Gnebriated Gnome",
      ]),
      flat("Gin", [
        "Tanqueray", "Hendrick's", "Roku", "Empress 1908", "Devil's Grin",
        "Gold Dirt Distillery (Lavender, Rocky Mountain)", "Mobb Distillers",
        "Atlantic Nordes",
      ]),
      flat("Brandy & Cognac", ["Hennessy", "Tuaca"]),
      {
        label: "Liqueurs & Cordials",
        groups: [
          {
            label: "Classics & Aperitifs",
            items: [
              "Aperol", "Grand Marnier", "Jägermeister", "Kahlúa", "Kamora",
              "Pernod Absinthe", "Rumple Minze", "Juarez Triple Sec",
              "Select Aperitivo", "Aprili Aperitivo", "Martini & Rossi Fiero",
              "Rockwell Vermouth", "Acid Kuba Kuba",
            ],
          },
          {
            label: "Cream Liqueurs",
            items: [
              "RumChata (incl. Limón, Pumpkin Spice, Horchata)",
              "Saint Brendan's", "Ryan's Irish Cream", "Samuel Gelston's",
              "Vespertino Cream Tequila", "Blue Chair Bay Key Lime Cream",
              "Maya Horchata Rum Cream",
              "Tennessee Legend (Creme Brulee, Bananas Foster)",
              "Pennsylvania Dutch Egg Nog", "Saint Agrestis (NA)",
            ],
          },
          {
            label: "Schnapps & Flavored",
            items: [
              "Hiram Walker (schnapps, crème de cacao)", "Arrow",
              "99 Brand (Banana, Peach, Cherry Limeade, Root Beer)",
              "Kinky Pink", "DV8 Sparkle", "Boba Pops", "Tequila Rose",
            ],
          },
          {
            label: "Specialty & Others",
            items: [
              "di Amore Limoncello", "Marcati Limoncello", "Mobb Mountain Limoncello",
              "Gran Malo Tamarindo", "Oliver Camelot Mead",
              "The Heart Distillery Black Russian",
            ],
          },
        ],
      },
      flat("Asian Spirits (Soju)", ["Hansol", "Damso", "Moonlight Yogurt", "Pineapple Soju"]),
    ],
  },
  {
    id: "rtd",
    label: "RTD & More",
    subcategories: [
      flat("Hard Seltzers", [
        "White Claw", "Truly", "High Noon", "Topo Chico", "Nutrl", "Surfside",
        "-196", "Carbliss", "VMC", "Deep Ellum Blind Lemon", "Wild Leaf", "Borg",
      ]),
      flat("Hard Tea", ["Twisted Tea", "Sun Cruiser", "Monster Nasty Beast"]),
      flat("Hard Lemonade", [
        "Mike's Hard / Mike's Harder", "Simply Spiked", "Stem Mango Lemonade",
        "NOCA", "Easy Sipping", "Lucky One", "Cali Cocktails by Snoop",
      ]),
      flat("Hard Cider", [
        "Angry Orchard", "Stem Ciders", "Schilling", "Snow Capped",
        "Incline", "Excelsior", "Original Sin",
      ]),
      flat("Malt Beverages & FMBs", [
        "Smirnoff Ice", "Four Loko", "Mickey's", "Bombtails Co", "BeatBox",
        "Monaco", "Cayman Jack", "el Jimador New Mix",
        "Bud Light Chelada x Clamato", "Budweiser Chelada",
        "Mom Water", "Meet the Mom Squad",
      ]),
      flat("Pre-Mixed Cocktails", [
        "Cutwater", "BuzzBallz", "1800 The Ultimate Margarita", "Tip Top",
        "On The Rocks", "The Heart Distillery", "Dry Fly", "Riki", "Bourbonola",
        "Greenall's Gin & Tonic", "The Finnish Long Drink", "Crispy Cocktails",
        "Skyy Martinis", "XXI Martinis", "Be Tini", "Delola", "Betty Booze",
        "Cutty Sark & Ginger", "UV Cocktails", "Absolut Ocean Spray", "Ranch20",
        "Sunny Attitude", "Waterbird", "Ocean Organic Espresso Martini",
        "Spritz del Conte", "Tumbler & Rocks", "Crafthouse Cocktails",
        "Idlewild Spirits", "Spa Girl Boozy Pops", "Social & Co",
        "Two Roads Flavortown", "Bols Margarita Azul", "Shottys Gelatin Shots",
        "Zing Zang Bloody Mary", "Corazon Margarita Kit",
      ]),
      flat("Non-Alcoholic Spirits", ["Free Spirits (Bourbon, Tequila)"]),
    ],
  },
];

function countItems(sub: Subcategory) {
  return sub.groups.reduce((n, g) => n + g.items.length, 0);
}

function AccordionSection({ sub }: { sub: Subcategory }) {
  const [open, setOpen] = useState(false);
  const count = countItems(sub);
  const hasSubGroups = sub.groups.length > 1 || sub.groups[0].label !== "";

  return (
    <div className="border border-primary/12 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-primary/4 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[15px]">{sub.label}</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
            {count}
          </span>
        </div>
        <ChevronDown
          size={16}
          className={`text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-5 pt-1 border-t border-primary/8">
          {hasSubGroups ? (
            <div className="space-y-5 mt-3">
              {sub.groups.map((g) => (
                <div key={g.label}>
                  {g.label && (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary mb-2.5">
                      {g.label}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-muted/60 border border-primary/8 rounded-lg text-[13px] text-foreground/80 hover:border-primary/30 transition-colors cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 mt-3">
              {sub.groups[0].items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 bg-muted/60 border border-primary/8 rounded-lg text-[13px] text-foreground/80 hover:border-primary/30 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProductsPage() {
  const [activeTab, setActiveTab] = useState("beer");
  const current = tabData.find((t) => t.id === activeTab)!;

  return (
    <Layout>
      <section className="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="container mx-auto max-w-4xl px-5 md:px-8">
          <FadeIn>
            <div className="pill-label text-primary mb-3">Browse</div>
            <h1
              className="font-display font-semibold text-[40px] md:text-[48px] leading-tight"
              style={{ letterSpacing: "-0.02em" }}
            >
              Our Products
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl">
              Hand-selected and stocked at 2750 Baseline Rd, Boulder CO. Tap any category to expand.
            </p>
          </FadeIn>

          {/* Tab nav */}
          <FadeIn delay={0.1}>
            <div className="mt-10 flex gap-1 border-b border-primary/15 overflow-x-auto -mx-1 px-1">
              {tabData.map((t) => (
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

          {/* Accordion list */}
          <FadeIn delay={0.12} key={activeTab}>
            <div className="mt-6 space-y-2">
              {current.subcategories.map((sub) => (
                <AccordionSection key={sub.label} sub={sub} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Selection changes regularly. Call{" "}
              <a href="tel:7209789118" className="text-primary hover:underline">
                720-978-9118
              </a>{" "}
              or stop by to check on a specific bottle.
            </p>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
