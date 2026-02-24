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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-lg md:text-xl text-emerald-100 text-center mt-6 max-w-2xl mx-auto">
              Comprehensive solutions for all your business needs
            </p>
          </div>
        </section>

        {/* Office Supplies & Furniture */}
        <section id="office" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-5xl md:text-6xl mb-4">🪑</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Office Supplies & Furniture
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-emerald-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Office Storage (Cabinets)
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• British Type File Cabinet</li>
                  <li>• Double Swing Door Cabinet</li>
                  <li>• Small Double Swing Door</li>
                  <li>• Steel Wardrobe</li>
                  <li>• Steel Filing Cabinet With Inner Safety Box</li>
                  <li>• Swing Glass Door Cabinet</li>
                  <li>• Sliding Door Filing Cabinet</li>
                  <li>• Account Book Cabinet</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Office Furniture
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  We offer a wider range in office furniture to turn that workplace to a
                  conducive working environment. We offer the best quality in today's market
                  from contemporary to traditional, functional to luxurious.
                </p>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• Boardroom Desks & Chairs</li>
                  <li>• Fabric Visitor Office Chairs</li>
                  <li>• Mesh Chairs</li>
                  <li>• Drawerless Office Desks</li>
                  <li>• High Back Chairs</li>
                  <li>• Mahogany Desks</li>
                  <li>• Office Cabinets</li>
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Office Stationery
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• Pens, Pencils, Erasers, Pencil Sharpener</li>
                  <li>• Permanent Markers</li>
                  <li>• Highlighter Pens</li>
                  <li>• Paper Clips, Binder Clips</li>
                  <li>• Stapler, Staples</li>
                  <li>• Tape Dispenser, Extra Rolls of Tape</li>
                  <li>• Glue Sticks & Calculator</li>
                  <li>• Rubber Bands, Scissors</li>
                  <li>• In/Out Box for Paperwork</li>
                  <li>• 3 Hole Punch</li>
                  <li>• Envelopes (All Sizes)</li>
                  <li>• Printer Paper</li>
                  <li>• Stamps, 3 Ring Binders</li>
                  <li>• Return Address Labels</li>
                  <li>• Stationery/Thank You Notes/Sticky Notes</li>
                  <li>• Notepads/Index Dividers</li>
                  <li>• Printer Ink/Toner/Cartridges/File Labels</li>
                  <li>• Supplies for Mailing Packages</li>
                  <li>• File Cabinet or File Box</li>
                  <li>• All Types of File Folders, Plus Tabs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IT Equipment */}
        <section id="it" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-5xl md:text-6xl mb-4">💻</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                IT Equipment & Accessories
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                We offer the best brands which are used on a day to day basis,
                irrespective of whichever company you are in
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                "USB Flash Drives",
                "Laptop Bags, Cases & Sleeves",
                "Computer Cables & Connectors",
                "Computer Keyboards & Mice",
                "Computer Mouse & Mouse Pads",
                "Keyboard & Mouse Combos",
                "Surge Protectors & UPS",
                "Computer Monitors",
                "Docking Stations & Locks",
                "Hard Drives & Storage",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <p className="text-gray-900 font-medium text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Construction Materials */}
        <section id="construction" className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-5xl md:text-6xl mb-4">🏗️</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Construction Materials
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="mb-8 md:mb-12 bg-emerald-50 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Leveraging on vast experience, PREMIER GARNET LIMITED has carved a niche in
                the construction materials industry. This business is professionally linked with
                reliable vendors for the procurement of high quality construction raw materials.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Backed by a zealous team of experts at PREMIER GARNET LIMITED, the business
                has grown in leaps and bounds in the market. The dedicated team comprises quality
                control executives, HR personnel, sales & marketing executives and many other
                allied workers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                { title: "Metal Products Supplies", icon: "🔩" },
                { title: "Bricks and Blocks Manufacturing", icon: "🧱" },
                { title: "Wood Products Supplies", icon: "🪵" },
                { title: "Glass Products Supplies", icon: "🪟" },
                { title: "Plastic Products Supplies", icon: "🧴" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-all"
                >
                  <div className="text-4xl md:text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Foodstuff Supplies */}
        <section id="foodstuff" className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <div className="text-5xl md:text-6xl mb-4">🥬</div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Foodstuff Supplies
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                We have partnered with the best farmers to bring you high quality and
                safe foodstuffs, inclusive of dry and fresh produce
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Fresh Produce
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• Leafy Green – Lettuce, Spinach and Silverbeet</li>
                  <li>• Cruciferous – Cabbage, Cauliflower, Brussels Sprouts and Broccoli</li>
                  <li>• Marrow – Pumpkin, Cucumber and Zucchini</li>
                  <li>• Root – Potato, Sweet Potato and Yam</li>
                  <li>• Edible Plant Stem – Celery and Asparagus</li>
                  <li>• Allium – Onion, Garlic and Shallot</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Dry Foodstuffs
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                  <li>• Chickpeas</li>
                  <li>• Lentils</li>
                  <li>• Maize</li>
                  <li>• Peas</li>
                  <li>• Wheat</li>
                  <li>• Kidney Beans/Black Beans</li>
                  <li>• Soybeans</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: "🚜",
                  title: "Agriculture Tools & Machinery",
                  description: "Farming equipment, agricultural machinery, tools & implements, and quality supplies",
                },
                {
                  icon: "👔",
                  title: "Apparels & Branding",
                  description: "Safety clothing, staff uniforms, corporate branding, and printing works",
                },
                {
                  icon: "🧪",
                  title: "Laboratory Liquids",
                  description: "Quality laboratory supplies, certified products, and reliable sourcing",
                },
                {
                  icon: "🚚",
                  title: "Transport Services",
                  description: "Reliable delivery, logistics solutions, timely service, and safe transportation",
                },
                {
                  icon: "🔨",
                  title: "Construction Services",
                  description: "Professional construction, quality workmanship, and project management",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 hover:shadow-lg transition-all"
                >
                  <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-6 md:mb-8">
              Contact us for tailored services and products
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-emerald-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-emerald-50 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
