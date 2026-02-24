import Head from "next/head";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Sustainability() {
  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>Sustainability & Corporate Responsibility - Premier Garnet Limited</title>
          <meta
            name="description"
            content="Learn about Premier Garnet Limited's commitment to sustainability, health & safety, environmental protection, and business transparency."
          />
        </Head>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Sustainability & Corporate Responsibility
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
        </section>

        {/* Sustainability Statement */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                Sustainability Statement
              </h2>
              <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                <p>
                  We respect the law, support universal human rights, protect the
                  environment and benefit the communities where we work.
                </p>
                <p>
                  We conduct our business in a socially responsible and ethical
                  manner.
                </p>
              </div>
            </div>

            {/* Customer Respect */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Customer Respect
              </h2>
              <div className="bg-blue-50 rounded-2xl p-6 md:p-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  To us our customer is always right, and so we do whatever we can
                  to make things right. We provide them with the best possible products
                  and services we can deliver and always treat them with respect and
                  understanding.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  If they become dissatisfied with our products or services, we do our
                  best to quickly resolve the issue with patience and consideration.
                </p>
              </div>
            </div>

            {/* Our Ambition */}
            <div className="mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Our Ambition
              </h2>
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-8 text-center">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Our daily ambition is to provide quality products/service as a result
                  of a dedicated team of professionals.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-4">
                  PREMIER GARNET LIMITED's foundation is built on our values, which
                  distinguish us and guide our actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Health, Safety & Environment */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Health, Safety & Environment Protection
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Protection
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  In accordance with the Occupational Safety and Health Act 2007, we have
                  made it our responsibility to provide free protective equipment including
                  clothing and appliances, and where necessary, suitable gloves, footwear,
                  goggles and head coverings to the workers involved in hazardous work.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We ensure safety and absence of risks to health in connection with the
                  use, handling, storage and transport of articles and substances.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Training
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                  We provide our staff with such information, instruction, training and
                  supervision of workers as a crucial way to maintain a safe and healthy
                  workplace.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  We also ensure cleanliness, ventilation, lighting, drainage of floor,
                  sanitary convenience, avoid overcrowding and control air pollution,
                  noise and vibration at the workplace.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-center">
                As required, we also establish a safety and health committee in accordance
                with regulations prescribed under the law.
              </p>
            </div>
          </div>
        </section>

        {/* Business Transparency */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Business Transparency
              </h2>
              <div className="w-24 h-1 bg-emerald-700 mx-auto"></div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-8">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Openness and transparency are values underpinning all aspects of our
                external and internal relationships.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We will build trust in clients, shareholders and other interested parties
                through the publication of accurate reliable data. We will foster teamwork
                and encourage synergies across the company through the sharing of knowledge
                and best practices.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                This document is intended to provoke thoughtful discussion and promote
                participation in the responsible development of the company. It is not
                intended nor should it be taken to create or form the basis for any legal
                rights or obligations.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
