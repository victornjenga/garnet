import Head from "next/head";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Our Partners & Clients
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-lg md:text-xl text-emerald-100 text-center mt-6 max-w-2xl mx-auto">
              Trusted by organizations across Kenya and East Africa
            </p>
          </div>
        </section>

        {/* Partners Overview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Our Commitment
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
                We have managed to create a big database of trustworthy and
                satisfied business owners as partners. Our active partners are
                found across various sectors, and we continue to build lasting
                relationships based on quality, integrity, and excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
              {[
                "Government Ministries & Parastatals",
                "Churches & Religious Institutions",
                "Schools & Educational Institutions",
                "Private Developers & Individuals",
                "SACCO Societies",
                "Corporate Organizations",
                "Healthcare Facilities",
                "Agricultural Cooperatives",
              ].map((client, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-all transform hover:scale-105"
                >
                  <div className="text-3xl md:text-4xl mb-3">🤝</div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{client}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Growth Strategy */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Growth Strategy
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
              <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
                PREMIER GARNET LIMITED utilizes a 4-part growth plan to enable its success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  title: "Product Development Strategy",
                  description:
                    "We shall grow our market share by developing new products to serve that market. These new products should either solve for a new problem or add to the existing problem your product solves.",
                  icon: "🚀",
                },
                {
                  title: "Market Development Strategy",
                  description:
                    "We shall grow our market share by developing new segments of the market, expanding your user base, or expanding your current users' usage of your product.",
                  icon: "📈",
                },
                {
                  title: "Market Penetration Strategy",
                  description:
                    "We shall grow our market share by bundling products, lowering prices, and advertising—basically everything we can do through marketing after our product is created.",
                  icon: "🎯",
                },
                {
                  title: "Diversification Strategy",
                  description:
                    "Growing our market share by entering entirely new markets.",
                  icon: "🌍",
                },
              ].map((strategy, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="text-4xl md:text-5xl mb-4">{strategy.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {strategy.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {strategy.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why Partner With Us
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl mb-4">✅</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Quality Assured
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  We provide quality products made with the best reliable and
                  environmentally safe raw materials.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl mb-4">⚡</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Efficient Service
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Affordable yet efficient services and products delivered with
                  integrity and professionalism.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl mb-4">🤝</div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                  Lasting Relationships
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  We foster lasting relationships with professionals, government
                  bodies, and trade suppliers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
