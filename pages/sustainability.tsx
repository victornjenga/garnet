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
              Our Responsibility
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
              Sustainability &<br className="hidden sm:block" /> Corporate Responsibility
            </h1>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>
        </section>

        {/* ── Sustainability Statement ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Statement banner */}
            <div className="bg-slate-950 rounded-2xl p-7 md:p-10 mb-10 md:mb-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-3xl mx-auto mb-4">🌱</div>
                <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-3">
                  Our Statement
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-5">
                  Sustainability Statement
                </h2>
                <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
                <div className="max-w-2xl mx-auto space-y-3 text-slate-300 text-base md:text-lg leading-relaxed">
                  <p>We respect the law, support universal human rights, protect the environment and benefit the communities where we work.</p>
                  <p>We conduct our business in a socially responsible and ethical manner.</p>
                </div>
              </div>
            </div>

            {/* Customer Respect & Ambition */}
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
              <div className="bg-white rounded-2xl border border-gray-100 p-7 md:p-8 hover:shadow-lg transition-all overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-indigo-500 rounded-l-2xl" />
                <div className="pl-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl mb-4">💎</div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
                    Customer Respect
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-3">
                    To us our customer is always right, and so we do whatever we can to make things
                    right. We provide them with the best possible products and services we can deliver
                    and always treat them with respect and understanding.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    If they become dissatisfied with our products or services, we do our best to
                    quickly resolve the issue with patience and consideration.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-gray-100 p-7 md:p-8 hover:shadow-lg transition-all overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-violet-500 rounded-l-2xl" />
                <div className="pl-4">
                  <div className="w-11 h-11 rounded-xl bg-violet-50 flex items-center justify-center text-xl mb-4">🔭</div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4">
                    Our Ambition
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-3">
                    Our daily ambition is to provide quality products and services as a result of a
                    dedicated team of professionals.
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed">
                    PREMIER GARNET LIMITED's foundation is built on our values, which distinguish
                    us and guide our actions every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Health, Safety & Environment ── dark ── */}
        <section className="relative py-14 md:py-24 bg-slate-950 overflow-hidden">
          <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-violet-900/15 rounded-full blur-3xl pointer-events-none" />
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
                Our Duty
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Health, Safety & Environment
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full mb-5" />
              <p className="text-slate-400 text-base md:text-lg">
                We hold ourselves to the highest standards of workplace safety and environmental care
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-7 mb-6">
              {[
                {
                  icon: "🛡️",
                  title: "Protection",
                  num: "01",
                  topBar: "bg-indigo-500",
                  text: [
                    "In accordance with the Occupational Safety and Health Act 2007, we provide free protective equipment including clothing and appliances, suitable gloves, footwear, goggles, and head coverings to workers involved in hazardous work.",
                    "We ensure safety and absence of risks to health in connection with the use, handling, storage and transport of articles and substances.",
                  ],
                },
                {
                  icon: "📚",
                  title: "Training",
                  num: "02",
                  topBar: "bg-violet-500",
                  text: [
                    "We provide our staff with information, instruction, training and supervision as a crucial way to maintain a safe and healthy workplace.",
                    "We also ensure cleanliness, ventilation, lighting, drainage of floors, sanitary convenience, and control of air pollution, noise and vibration at the workplace.",
                  ],
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative group bg-white/5 border border-white/10 rounded-2xl p-7 md:p-8 hover:bg-white/10 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden"
                >
                  <span className="absolute -bottom-2 -right-1 text-[5rem] font-extrabold leading-none text-white/[0.04] select-none pointer-events-none">
                    {item.num}
                  </span>
                  <div className={`w-10 h-1 ${item.topBar} rounded-full mb-5 group-hover:w-14 transition-all duration-300`} />
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                  {item.text.map((p, j) => (
                    <p key={j} className={`text-slate-400 text-sm leading-relaxed ${j > 0 ? "mt-3" : ""}`}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                As required, we also establish a safety and health committee in accordance
                with regulations prescribed under the law.
              </p>
            </div>
          </div>
        </section>

        {/* ── Business Transparency ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                Open & Honest
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Business Transparency
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-5 md:gap-7 mb-6">
              {[
                { icon: "📊", title: "Accurate Data", topBar: "bg-indigo-500", iconBg: "bg-indigo-50", desc: "We build trust in clients, shareholders and other interested parties through the publication of accurate, reliable data." },
                { icon: "🔗", title: "Knowledge Sharing", topBar: "bg-violet-500", iconBg: "bg-violet-50", desc: "We foster teamwork and encourage synergies across the company through the sharing of knowledge and best practices." },
                { icon: "⚖️", title: "Ethical Conduct", topBar: "bg-cyan-500", iconBg: "bg-cyan-50", desc: "Openness and transparency are values underpinning all aspects of our external and internal relationships." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className={`h-1 ${item.topBar}`} />
                  <div className="p-6 md:p-7">
                    <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center text-xl mb-4`}>{item.icon}</div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
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
