import Head from "next/head";
import Link from "next/link";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>Premier Garnet Limited - General Service Provider | Kenya & East Africa</title>
          <meta
            name="description"
            content="Premier Garnet Limited offers quality office supplies, IT equipment, construction materials, foodstuff supplies, and comprehensive business services across Kenya and East Africa."
          />
        </Head>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="text-center">
              <div className="inline-block mb-4 md:mb-6">
                <span className="bg-emerald-100 text-emerald-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                  General Service Provider
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-4">
                Excellence in Every
                <br />
                <span className="text-emerald-700">Service We Deliver</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                Serving Kenya and East Africa with quality products and exceptional
                services. Your trusted partner for office supplies, construction
                materials, IT equipment, and more.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
                <Link
                  href="/services"
                  className="bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-emerald-800 transition-all transform hover:scale-105 shadow-lg text-center"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-emerald-700 px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold border-2 border-emerald-700 hover:bg-emerald-50 transition-all text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <svg
              className="w-6 h-6 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Quick Overview Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-all">
                <div className="text-4xl md:text-5xl mb-4">🏆</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Quality Products
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  We provide quality products made with the best reliable and
                  environmentally safe raw materials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-all">
                <div className="text-4xl md:text-5xl mb-4">🌍</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Wide Reach
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Serving Kenya and East Africa with our headquarters in Nairobi,
                  ready to expand across Africa.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center hover:shadow-lg transition-all">
                <div className="text-4xl md:text-5xl mb-4">🤝</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Trusted Partners
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  A database of trustworthy and satisfied business owners as
                  partners across various sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto mb-4"></div>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions for all your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[
                { icon: "🪑", title: "Office Supplies & Furniture", href: "/services#office" },
                { icon: "💻", title: "IT Equipment & Accessories", href: "/services#it" },
                { icon: "🏗️", title: "Construction Materials", href: "/services#construction" },
                { icon: "🥬", title: "Foodstuff Supplies", href: "/services#foodstuff" },
                { icon: "🚜", title: "Agriculture Tools & Machinery", href: "/services#agriculture" },
                { icon: "👔", title: "Apparels & Branding", href: "/services#apparels" },
                { icon: "🧪", title: "Laboratory Liquids", href: "/services#laboratory" },
                { icon: "🚚", title: "Transport Services", href: "/services#transport" },
                { icon: "🔨", title: "Construction Services", href: "/services#construction-services" },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  <div className="text-4xl md:text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <Link
                href="/services"
                className="inline-block bg-emerald-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-emerald-800 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-emerald-700 to-emerald-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg md:text-xl text-emerald-100 mb-6 md:mb-8">
              Contact us today for quality products and exceptional services
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
