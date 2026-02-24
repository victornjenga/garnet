import Head from "next/head";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const clientTypes = [
  { label: "Government Ministries & Parastatals", icon: "🏛️", color: "bg-indigo-50 border-indigo-100 hover:border-indigo-300" },
  { label: "Churches & Religious Institutions", icon: "⛪", color: "bg-violet-50 border-violet-100 hover:border-violet-300" },
  { label: "Schools & Educational Institutions", icon: "🏫", color: "bg-cyan-50 border-cyan-100 hover:border-cyan-300" },
  { label: "Private Developers & Individuals", icon: "🏗️", color: "bg-amber-50 border-amber-100 hover:border-amber-300" },
  { label: "SACCO Societies", icon: "🤝", color: "bg-emerald-50 border-emerald-100 hover:border-emerald-300" },
  { label: "Corporate Organizations", icon: "🏢", color: "bg-blue-50 border-blue-100 hover:border-blue-300" },
  { label: "Healthcare Facilities", icon: "🏥", color: "bg-rose-50 border-rose-100 hover:border-rose-300" },
  { label: "Agricultural Cooperatives", icon: "🌾", color: "bg-lime-50 border-lime-100 hover:border-lime-300" },
];

const strategies = [
  {
    title: "Product Development",
    description: "We grow our market share by developing new products to serve that market — solving new problems or adding to the existing ones our products already address.",
    icon: "🚀",
    topBar: "bg-indigo-500",
    num: "01",
  },
  {
    title: "Market Development",
    description: "We grow by developing new segments of the market, expanding our user base, or expanding current users' engagement with our products.",
    icon: "📈",
    topBar: "bg-violet-500",
    num: "02",
  },
  {
    title: "Market Penetration",
    description: "We grow market share through bundled offers, competitive pricing, and advertising — everything we can do through strategic marketing.",
    icon: "🎯",
    topBar: "bg-cyan-500",
    num: "03",
  },
  {
    title: "Diversification",
    description: "Growing our market share by entering entirely new markets and expanding the breadth of our service portfolio.",
    icon: "🌍",
    topBar: "bg-amber-500",
    num: "04",
  },
];

export default function Clients() {
  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>Our Clients & Partners - Premier Garnet Limited</title>
          <meta
            name="description"
            content="Premier Garnet Limited partners with government ministries, educational institutions, churches, private developers, and more across Kenya and East Africa."
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
              Who We Serve
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5">
              Our Partners & Clients
            </h1>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Trusted by organizations across Kenya and East Africa
            </p>
          </div>
        </section>

        {/* ── Partners Overview ── */}
        <section
          className="py-14 md:py-20 bg-white relative overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, #e0e7ff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                Our Commitment
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                A Network You Can Trust
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full mb-5" />
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                We have managed to create a big database of trustworthy and satisfied business
                owners as partners. Our active partners are found across various sectors, and
                we continue to build lasting relationships based on quality, integrity, and excellence.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {clientTypes.map((client, index) => (
                <div
                  key={index}
                  className={`${client.color} border rounded-2xl p-5 md:p-6 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
                >
                  <div className="text-3xl md:text-4xl mb-3">{client.icon}</div>
                  <h4 className="font-semibold text-gray-900 text-xs md:text-sm leading-snug">
                    {client.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Growth Strategy — dark section ── */}
        <section className="relative py-14 md:py-24 bg-slate-950 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-violet-900/15 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-3">
                How We Scale
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Our Growth Strategy
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full mb-5" />
              <p className="text-slate-400 text-base md:text-lg">
                PREMIER GARNET LIMITED utilizes a 4-part growth plan to enable its success
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {strategies.map((s, i) => (
                <div
                  key={i}
                  className="relative group bg-white/5 border border-white/10 rounded-2xl p-6 md:p-7 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute -bottom-2 -right-1 text-[5rem] font-extrabold leading-none text-white/[0.04] select-none pointer-events-none">
                    {s.num}
                  </span>
                  <div className={`w-10 h-1 ${s.topBar} rounded-full mb-5 group-hover:w-14 transition-all duration-300`} />
                  <div className="text-3xl mb-4">{s.icon}</div>
                  <h3 className="text-base font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Partner With Us ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                The Advantage
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Why Partner With Us
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-7">
              {[
                {
                  icon: "✅",
                  title: "Quality Assured",
                  desc: "We provide quality products made with the best reliable and environmentally safe raw materials.",
                  topBar: "bg-indigo-500",
                  iconBg: "bg-indigo-50",
                },
                {
                  icon: "⚡",
                  title: "Efficient Service",
                  desc: "Affordable yet efficient services and products delivered with integrity and professionalism.",
                  topBar: "bg-violet-500",
                  iconBg: "bg-violet-50",
                },
                {
                  icon: "🤝",
                  title: "Lasting Relationships",
                  desc: "We foster lasting relationships with professionals, government bodies, and trade suppliers.",
                  topBar: "bg-cyan-500",
                  iconBg: "bg-cyan-50",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className={`h-1 ${item.topBar}`} />
                  <div className="p-7 md:p-8">
                    <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center text-2xl mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
