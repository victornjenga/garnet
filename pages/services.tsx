import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Services() {
  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>Our Services - Premier Garnet Limited</title>
          <meta
            name="description"
            content="Comprehensive business services including office supplies, IT equipment, construction materials, foodstuff supplies, and more from Premier Garnet Limited."
          />
        </Head>

        {/* ── Hero ── */}
        <section className="relative bg-slate-950 py-16 md:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-indigo-900/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-violet-900/20 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-4">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5">
              Our Services
            </h1>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your business needs
            </p>
          </div>
        </section>

        {/* ── Office Supplies & Furniture ── */}
        <section id="office" className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-3xl mx-auto mb-4">🪑</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Office Supplies & Furniture
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full mb-5" />
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                From ergonomic furniture to everyday stationery, we supply everything
                your workspace needs to run smoothly and professionally
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-7">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-1 w-10 bg-indigo-500 rounded-full mb-5" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Office Storage (Cabinets)
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> British Type File Cabinet</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Double Swing Door Cabinet</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Small Double Swing Door</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Steel Wardrobe</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Steel Filing Cabinet With Inner Safety Box</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Swing Glass Door Cabinet</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Sliding Door Filing Cabinet</li>
                  <li className="flex items-start gap-2"><span className="text-indigo-400 mt-0.5">›</span> Account Book Cabinet</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-1 w-10 bg-violet-500 rounded-full mb-5" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Office Furniture
                </h3>
                <p className="text-gray-500 mb-4 text-sm md:text-base leading-relaxed">
                  We offer a wider range in office furniture to turn that workplace to a
                  conducive working environment — from contemporary to traditional,
                  functional to luxurious.
                </p>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> Boardroom Desks & Chairs</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> Fabric Visitor Office Chairs</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> Mesh Chairs</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> Drawerless Office Desks</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> High Back Chairs</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> Mahogany Desks</li>
                  <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">›</span> Office Cabinets</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-1 w-10 bg-cyan-500 rounded-full mb-5" />
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                  Office Stationery
                </h3>
                <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                  {[
                    "Pens, Pencils, Erasers, Pencil Sharpener",
                    "Permanent Markers",
                    "Highlighter Pens",
                    "Paper Clips, Binder Clips",
                    "Stapler, Staples",
                    "Tape Dispenser, Extra Rolls of Tape",
                    "Glue Sticks & Calculator",
                    "Rubber Bands, Scissors",
                    "In/Out Box for Paperwork",
                    "3 Hole Punch",
                    "Envelopes (All Sizes)",
                    "Printer Paper",
                    "Stamps, 3 Ring Binders",
                    "Return Address Labels",
                    "Stationery / Sticky Notes",
                    "Notepads / Index Dividers",
                    "Printer Ink / Toner / Cartridges",
                    "Supplies for Mailing Packages",
                    "All Types of File Folders, Plus Tabs",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── IT Equipment ── */}
        <section id="it" className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <div className="w-14 h-14 rounded-2xl bg-violet-50 flex items-center justify-center text-3xl mx-auto mb-4">💻</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                IT Equipment & Accessories
              </h2>
              <div className="w-12 h-1 bg-violet-500 mx-auto rounded-full mb-5" />
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                We offer the best brands which are used on a day-to-day basis,
                irrespective of whichever company you are in
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { item: "USB Flash Drives", icon: "🔌" },
                { item: "Laptop Bags, Cases & Sleeves", icon: "🎒" },
                { item: "Computer Cables & Connectors", icon: "🔗" },
                { item: "Computer Keyboards & Mice", icon: "⌨️" },
                { item: "Computer Mouse & Mouse Pads", icon: "🖱️" },
                { item: "Keyboard & Mouse Combos", icon: "💡" },
                { item: "Surge Protectors & UPS", icon: "⚡" },
                { item: "Computer Monitors", icon: "🖥️" },
                { item: "Docking Stations & Locks", icon: "🔒" },
                { item: "Hard Drives & Storage", icon: "💾" },
              ].map(({ item, icon }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-violet-200 hover:shadow-md transition-all group text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-50 group-hover:bg-violet-100 flex items-center justify-center text-xl mx-auto mb-3 transition-colors">
                    {icon}
                  </div>
                  <p className="text-gray-800 font-medium text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Construction Materials ── */}
        <section id="construction" className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-3xl mx-auto mb-4">🏗️</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Construction Materials
              </h2>
              <div className="w-12 h-1 bg-amber-500 mx-auto rounded-full mb-5" />
            </div>

            <div className="mb-8 md:mb-12 bg-slate-950 rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 relative">
                Leveraging on vast experience, PREMIER GARNET LIMITED has carved a niche in
                the construction materials industry, professionally linked with reliable
                vendors for the procurement of high quality construction raw materials.
              </p>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed relative">
                Backed by a zealous team of experts, the business has grown in leaps and
                bounds. The dedicated team comprises quality control executives, HR
                personnel, sales & marketing executives and many other allied workers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
              {[
                { title: "Metal Products Supplies", icon: "🔩", color: "bg-amber-50 hover:border-amber-200" },
                { title: "Bricks and Blocks Manufacturing", icon: "🧱", color: "bg-orange-50 hover:border-orange-200" },
                { title: "Wood Products Supplies", icon: "🪵", color: "bg-yellow-50 hover:border-yellow-200" },
                { title: "Glass Products Supplies", icon: "🪟", color: "bg-sky-50 hover:border-sky-200" },
                { title: "Plastic Products Supplies", icon: "🧴", color: "bg-teal-50 hover:border-teal-200" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${item.color} rounded-2xl p-6 text-center border border-transparent hover:shadow-lg transition-all`}
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="text-sm md:text-base font-bold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Foodstuff Supplies ── */}
        <section id="foodstuff" className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-3xl mx-auto mb-4">🥬</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Foodstuff Supplies
              </h2>
              <div className="w-12 h-1 bg-emerald-500 mx-auto rounded-full mb-5" />
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                We have partnered with the best farmers to bring you high quality and
                safe foodstuffs, inclusive of dry and fresh produce
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-lg transition-all">
                <div className="h-1 w-10 bg-emerald-500 rounded-full mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Fresh Produce
                </h3>
                <ul className="space-y-2.5 text-gray-600 text-sm md:text-base">
                  {[
                    "Leafy Green – Lettuce, Spinach and Silverbeet",
                    "Cruciferous – Cabbage, Cauliflower, Brussels Sprouts and Broccoli",
                    "Marrow – Pumpkin, Cucumber and Zucchini",
                    "Root – Potato, Sweet Potato and Yam",
                    "Edible Plant Stem – Celery and Asparagus",
                    "Allium – Onion, Garlic and Shallot",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 hover:shadow-lg transition-all">
                <div className="h-1 w-10 bg-lime-500 rounded-full mb-5" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Dry Foodstuffs
                </h3>
                <ul className="space-y-2.5 text-gray-600 text-sm md:text-base">
                  {["Chickpeas", "Lentils", "Maize", "Peas", "Wheat", "Kidney Beans / Black Beans", "Soybeans"].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-lime-500 mt-0.5">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Additional Services ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                More from Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Additional Services
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full mb-5" />
              <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                Beyond our core offerings, we provide a broad range of specialised services
                to support your operations end-to-end
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
              {[
                { icon: "🚜", title: "Agriculture Tools & Machinery", description: "Farming equipment, agricultural machinery, tools & implements, and quality supplies", topBar: "bg-lime-500", iconBg: "bg-lime-50" },
                { icon: "👔", title: "Apparels & Branding", description: "Safety clothing, staff uniforms, corporate branding, and printing works", topBar: "bg-purple-500", iconBg: "bg-purple-50" },
                { icon: "🧪", title: "Laboratory Liquids", description: "Quality laboratory supplies, certified products, and reliable sourcing", topBar: "bg-cyan-500", iconBg: "bg-cyan-50" },
                { icon: "🚚", title: "Transport Services", description: "Reliable delivery, logistics solutions, timely service, and safe transportation", topBar: "bg-rose-500", iconBg: "bg-rose-50" },
                { icon: "🔨", title: "Construction Services", description: "Professional construction, quality workmanship, and project management", topBar: "bg-slate-500", iconBg: "bg-slate-50" },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all overflow-hidden"
                >
                  <div className={`h-1 ${service.topBar}`} />
                  <div className="p-6 md:p-7">
                    <div className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center text-2xl mb-4`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-14 md:py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Contact us for tailored services and products built around your needs
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-all shadow-lg"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
