import Head from "next/head";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function About() {
  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>About Us - Premier Garnet Limited</title>
          <meta
            name="description"
            content="Learn about Premier Garnet Limited - a well-established mid-tier business providing quality products and services across Kenya and East Africa."
          />
        </Head>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              About Us
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                  Who We Are
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-4 leading-relaxed">
                  Premier Garnet Limited is a well-established mid-tier business
                  with an exceptional skill base, undertaking office supplies,
                  computer & accessories supplies, foodstuff supplies,
                  agricultural tools and machinery supplies, construction
                  materials supplies, transportation services, and construction
                  services.
                </p>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  With our headquarters and operations offices in Nairobi city, we
                  are poised to serve not only our Kenyan clients but also East
                  Africa at large. We endeavor to serve our potential and
                  current clients with affordable yet efficient services and
                  products.
                </p>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl p-6 md:p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-emerald-700 mb-2">
                    5+
                  </div>
                  <div className="text-lg md:text-xl text-gray-700">Professional Staff</div>
                  <div className="text-sm md:text-base text-gray-600 mt-4">
                    Administrative, Engineering, Financial & Hygiene Experts
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                <strong>PREMIER GARNET LIMITED</strong> is a General Service Provider and is registered to
                undertake business activities in and around Kenya and the East Africa Community
                with its operation base in Nairobi, Kenya. We are a fully registered company in Kenya
                under the company's act 2015.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                Having worked across the public and private sectors with a main aim of efficient
                service provision, we have built up an advanced experience working in different parts
                of Kenya and East Africa and now we wish to expand into Africa.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 border-l-4 border-emerald-700">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  We are built to provide quality products made with the best
                  reliable and environmentally safe raw materials. To offer
                  excellent services to our customers in each of our professional
                  disciplines, with integrity.
                </p>
              </div>
              <div className="bg-blue-50 rounded-2xl p-6 md:p-8 border-l-4 border-blue-700">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  To be a fast-growing, efficient company with high business
                  ethics and excellent reputation as we visualize a reliable and
                  exciting service to our clients while offering great
                  opportunities and a good environment to our staff.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Our Commitment
              </h3>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                PREMIER GARNET LIMITED is committed to providing the highest quality services
                available by exceeding the expectations of our clients.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                PREMIER GARNET LIMITED was formed with the objective of establishing a
                sustainable and continually improving company which is able to provide quality products
                and services to our clients while concurrently fostering lasting relationships with
                professionals and local government bodies, trade and general suppliers.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
              {[
                "Excellence",
                "Client Focus",
                "Communication",
                "Strong Leadership",
                "Team Work",
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-xl p-4 md:p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl md:text-4xl mb-3">✨</div>
                  <h4 className="font-semibold text-gray-900 text-sm md:text-base">{value}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Principles */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Our Principles
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Quality Product
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  At PREMIER GARNET LIMITED we endeavor to supply and service quality product or service that
                  we can stand behind with pride.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Build a Great Staff
                </h3>
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  Our employees are our most important asset. Through their hard work and expertise
                  we build this amazing brand called PREMIER and so we make it our mission and goals
                  to care about them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Organization Structure */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Organization Structure
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Managers
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  This department is made up of self-motivated individuals who are tasked with overseeing
                  and supervising the execution of all the strategies laid down by the director.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Operations
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Made of experienced and skilled personnel, this department is tasked with executing all
                  the customers' requests to ensure that the ordered service or supplies are up to
                  standard.
                </p>
              </div>
            </div>

            <div className="mt-8 md:mt-12 bg-emerald-50 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                At PREMIER GARNET LIMITED, we boast of a permanent staff base of over 5 staff
                with professional qualifications ranging from administrative, civil engineering, financial
                experts, hygiene experts among others. These individuals use their professional expertise
                to ensure that our clients and potential customers are offered nothing but the best.
              </p>
            </div>
          </div>
        </section>

        {/* Director Info */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Director
              </h2>
              <p className="text-xl md:text-2xl text-emerald-700 font-semibold mb-4">
                Jackline Karambu Muriira
              </p>
              <div className="space-y-2 text-gray-600">
                <p>
                  <a
                    href="mailto:premiergarnetltd@gmail.com"
                    className="hover:text-emerald-700 transition-colors"
                  >
                    premiergarnetltd@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+254717107859"
                    className="hover:text-emerald-700 transition-colors"
                  >
                    +254 717 107859
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
