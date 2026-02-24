import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "9", label: "Service Areas" },
  { value: "2", label: "Countries Served" },
];

const whyUs = [
  {
    icon: "🏆",
    title: "Quality Products",
    description:
      "We source and deliver products made with the best reliable and environmentally safe raw materials.",
  },
  {
    icon: "🌍",
    title: "Wide Reach",
    description:
      "Serving Kenya and East Africa from our Nairobi headquarters, with ambitions to expand across the continent.",
  },
  {
    icon: "🤝",
    title: "Trusted Partners",
    description:
      "A growing network of satisfied business owners and partners across diverse sectors and industries.",
  },
];

const services = [
  {
    icon: "🪑",
    title: "Office Supplies & Furniture",
    desc: "Cabinets, desks, chairs, and all the stationery your office needs",
    href: "/services#office",
    topBar: "bg-indigo-500",
    iconBg: "bg-indigo-50",
    iconHover: "group-hover:bg-indigo-100",
    titleHover: "group-hover:text-indigo-700",
    linkColor: "text-indigo-600",
    cardHover: "hover:border-indigo-200",
  },
  {
    icon: "💻",
    title: "IT Equipment & Accessories",
    desc: "Top-brand computers, peripherals, storage, and connectivity solutions",
    href: "/services#it",
    topBar: "bg-violet-500",
    iconBg: "bg-violet-50",
    iconHover: "group-hover:bg-violet-100",
    titleHover: "group-hover:text-violet-700",
    linkColor: "text-violet-600",
    cardHover: "hover:border-violet-200",
  },
  {
    icon: "🏗️",
    title: "Construction Materials",
    desc: "Metal, wood, glass, plastic, and block supplies from trusted vendors",
    href: "/services#construction",
    topBar: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconHover: "group-hover:bg-amber-100",
    titleHover: "group-hover:text-amber-700",
    linkColor: "text-amber-600",
    cardHover: "hover:border-amber-200",
  },
  {
    icon: "🥬",
    title: "Foodstuff Supplies",
    desc: "Fresh and dry produce sourced from the best farmers in the region",
    href: "/services#foodstuff",
    topBar: "bg-emerald-500",
    iconBg: "bg-emerald-50",
    iconHover: "group-hover:bg-emerald-100",
    titleHover: "group-hover:text-emerald-700",
    linkColor: "text-emerald-600",
    cardHover: "hover:border-emerald-200",
  },
  {
    icon: "🚜",
    title: "Agriculture Tools & Machinery",
    desc: "Farming equipment, implements, and quality agricultural supplies",
    href: "/services#agriculture",
    topBar: "bg-lime-500",
    iconBg: "bg-lime-50",
    iconHover: "group-hover:bg-lime-100",
    titleHover: "group-hover:text-lime-700",
    linkColor: "text-lime-600",
    cardHover: "hover:border-lime-200",
  },
  {
    icon: "👔",
    title: "Apparels & Branding",
    desc: "Uniforms, safety clothing, corporate branding, and printing works",
    href: "/services#apparels",
    topBar: "bg-purple-500",
    iconBg: "bg-purple-50",
    iconHover: "group-hover:bg-purple-100",
    titleHover: "group-hover:text-purple-700",
    linkColor: "text-purple-600",
    cardHover: "hover:border-purple-200",
  },
  {
    icon: "🧪",
    title: "Laboratory Liquids",
    desc: "Certified laboratory supplies sourced reliably for your needs",
    href: "/services#laboratory",
    topBar: "bg-cyan-500",
    iconBg: "bg-cyan-50",
    iconHover: "group-hover:bg-cyan-100",
    titleHover: "group-hover:text-cyan-700",
    linkColor: "text-cyan-600",
    cardHover: "hover:border-cyan-200",
  },
  {
    icon: "🚚",
    title: "Transport Services",
    desc: "Reliable logistics and safe delivery solutions across the region",
    href: "/services#transport",
    topBar: "bg-rose-500",
    iconBg: "bg-rose-50",
    iconHover: "group-hover:bg-rose-100",
    titleHover: "group-hover:text-rose-700",
    linkColor: "text-rose-600",
    cardHover: "hover:border-rose-200",
  },
  {
    icon: "🔨",
    title: "Construction Services",
    desc: "Professional construction and project management you can count on",
    href: "/services#construction-services",
    topBar: "bg-slate-500",
    iconBg: "bg-slate-50",
    iconHover: "group-hover:bg-slate-100",
    titleHover: "group-hover:text-slate-700",
    linkColor: "text-slate-600",
    cardHover: "hover:border-slate-300",
  },
];

export default function Home() {
  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>
            Premier Garnet Limited - General Service Provider | Kenya & East
            Africa
          </title>
          <meta
            name="description"
            content="Premier Garnet Limited offers quality office supplies, IT equipment, construction materials, foodstuff supplies, and comprehensive business services across Kenya and East Africa."
          />
        </Head>

        {/* ── Hero ── */}
        <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-indigo-50 rounded-full pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-[480px] h-[480px] bg-slate-50 rounded-full pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28 w-full">
            <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

              {/* Left — headline & actions */}
              <div>
                <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6">
                  <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" />
                  General Service Provider · Kenya &amp; East Africa
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                  Excellence in Every{" "}
                  <span className="text-indigo-600">Service</span>
                  <br className="hidden sm:block" /> We Deliver
                </h1>

                <p className="text-base md:text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                  Your trusted partner for office supplies, construction
                  materials, IT equipment, foodstuff, and more — across Kenya
                  and East Africa.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 hover:shadow-indigo-200"
                  >
                    Explore Services
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-7 py-3.5 rounded-xl text-base font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* Mobile visual summary */}
                <div className="mt-10 grid grid-cols-2 gap-3 sm:hidden">
                  {stats.slice(0, 2).map((s, i) => (
                    <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/70 px-4 py-3 text-left">
                      <p className="text-xl font-extrabold text-gray-900">{s.value}</p>
                      <p className="text-[11px] text-gray-500 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                  <div className="col-span-2 rounded-2xl border border-dashed border-indigo-100 bg-white px-4 py-3 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {["🪑", "💻", "🏗️"].map((e, i) => (
                        <span key={i} className="w-7 h-7 rounded-full bg-indigo-50 flex items-center justify-center text-xs">{e}</span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 leading-snug">
                      Office, IT, construction &amp; foodstuff services in one reliable partner.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — highlights card (desktop only) */}
              <div className="hidden lg:block">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-100 p-8">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">At a Glance</p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {stats.map((s, i) => (
                      <div key={i} className="bg-gray-50 rounded-xl p-5">
                        <p className="text-3xl font-extrabold text-gray-900">{s.value}</p>
                        <p className="text-sm text-gray-500 mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {["Office Supplies & Furniture", "IT Equipment & Accessories", "Construction Materials", "Foodstuff Supplies"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats bar (mobile & tablet) ── */}
        <section className="bg-indigo-600 py-8 lg:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-2">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-xs text-indigo-200 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── DARK SECTION */}
        <section className="relative py-16 md:py-28 bg-slate-950 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-indigo-900/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-violet-900/20 rounded-full blur-3xl pointer-events-none" />
          {/* Subtle grid lines */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14 md:mb-20">
              <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-3">Why Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Why Choose Premier Garnet
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full mb-5" />
              <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                Committed to delivering value, reliability, and excellence in
                every product and service across Kenya and East Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {whyUs.map((item, i) => (
                <div
                  key={i}
                  className="relative group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Large ghost number */}
                  <span className="absolute -bottom-3 -right-1 text-[7rem] font-extrabold leading-none text-white/[0.04] select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Top accent bar */}
                  <div className="w-10 h-1 bg-indigo-500 rounded-full mb-6 group-hover:w-16 transition-all duration-300" />
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center text-2xl mb-5 group-hover:bg-indigo-500/30 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services Preview ── */}
        <section
          className="py-16 md:py-28 bg-white relative overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle, #e0e7ff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* White fade at top & bottom so dots don't look harsh */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Our Services
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full mb-5" />
              <p className="text-gray-500 text-base md:text-lg">
                Comprehensive solutions for all your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={`group bg-white rounded-2xl border border-gray-100 ${service.cardHover} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col`}
                >
                  {/* Coloured top accent bar */}
                  <div className={`h-1 w-full ${service.topBar}`} />

                  <div className="p-5 sm:p-6 flex flex-col flex-grow">
                    <div className="flex items-start gap-4 sm:block">
                      {/* Icon */}
                      <div
                        className={`w-11 h-11 rounded-xl ${service.iconBg} ${service.iconHover} flex items-center justify-center text-xl flex-shrink-0 mb-0 sm:mb-4 transition-colors`}
                      >
                        {service.icon}
                      </div>
                      <div className="flex flex-col flex-grow sm:block">
                        <h3
                          className={`text-sm sm:text-base font-bold text-gray-900 mb-1 sm:mb-2 ${service.titleHover} transition-colors`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`mt-4 flex items-center gap-1 ${service.linkColor} text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:flex`}
                    >
                      Learn more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10 md:mt-14">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100"
              >
                View All Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-24 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight">
              Ready to Work With Us?
            </h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Contact us today for quality products and services tailored to
              your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-indigo-700 transition-all shadow-lg"
              >
                Get In Touch
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-base font-semibold border border-gray-700 hover:border-gray-500 hover:bg-white/5 transition-all"
              >
                Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
