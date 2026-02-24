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
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5">
              About Us
            </h1>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full" />
          </div>
        </section>

        {/* ── Company Overview ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-10 md:mb-14">
              <div>
                <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
                  Premier Garnet Limited
                </h2>
                <p className="text-gray-500 text-base md:text-lg mb-4 leading-relaxed">
                  Premier Garnet Limited is a well-established mid-tier business
                  with an exceptional skill base, undertaking office supplies,
                  computer & accessories supplies, foodstuff supplies,
                  agricultural tools and machinery supplies, construction
                  materials supplies, transportation services, and construction
                  services.
                </p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                  With our headquarters and operations offices in Nairobi city, we
                  are poised to serve not only our Kenyan clients but also East
                  Africa at large. We endeavor to serve our potential and
                  current clients with affordable yet efficient services and products.
                </p>
              </div>

              {/* Stats card */}
              <div className="bg-slate-950 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-6 relative">
                  At a Glance
                </p>
                <div className="grid grid-cols-2 gap-4 relative">
                  {[
                    { value: "5+", label: "Professional Staff" },
                    { value: "10+", label: "Years Experience" },
                    { value: "200+", label: "Happy Clients" },
                    { value: "9+", label: "Service Areas" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-2xl font-extrabold text-white">{s.value}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 text-xs mt-5 relative">
                  Administrative, Engineering, Financial & Hygiene Experts
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                <strong className="text-gray-900">PREMIER GARNET LIMITED</strong> is a General Service Provider registered
                to undertake business activities in and around Kenya and the East Africa Community
                with its operation base in Nairobi, Kenya. We are a fully registered company in Kenya
                under the company's act 2015.
              </p>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Having worked across the public and private sectors with a main aim of efficient
                service provision, we have built up an advanced experience working in different parts
                of Kenya and East Africa and now we wish to expand into Africa.
              </p>
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                Our Purpose
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Mission & Vision
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-7 mb-6 md:mb-8">
              <div className="bg-white rounded-2xl p-7 md:p-8 border-l-4 border-indigo-600 shadow-sm hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl mb-4">🎯</div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We are built to provide quality products made with the best
                  reliable and environmentally safe raw materials. To offer
                  excellent services to our customers in each of our professional
                  disciplines, with integrity.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 md:p-8 border-l-4 border-violet-500 shadow-sm hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-violet-50 flex items-center justify-center text-xl mb-4">🔭</div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be a fast-growing, efficient company with high business
                  ethics and excellent reputation as we visualize a reliable and
                  exciting service to our clients while offering great
                  opportunities and a good environment to our staff.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 md:p-8 shadow-sm border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-xl mb-4">🤝</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Commitment</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
                PREMIER GARNET LIMITED is committed to providing the highest quality services
                available by exceeding the expectations of our clients.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                PREMIER GARNET LIMITED was formed with the objective of establishing a
                sustainable and continually improving company which is able to provide quality products
                and services to our clients while concurrently fostering lasting relationships with
                professionals and local government bodies, trade and general suppliers.
              </p>
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="relative py-14 md:py-20 bg-slate-950 overflow-hidden">
          <div className="absolute top-0 right-0 w-[380px] h-[380px] bg-indigo-900/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-violet-900/15 rounded-full blur-3xl pointer-events-none" />
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-3">
                What Drives Us
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
                Our Values
              </h2>
              <div className="w-12 h-1 bg-indigo-500 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
              {[
                { label: "Excellence", icon: "🏆", color: "bg-indigo-500/20 border-indigo-500/30" },
                { label: "Client Focus", icon: "🎯", color: "bg-violet-500/20 border-violet-500/30" },
                { label: "Communication", icon: "💬", color: "bg-cyan-500/20 border-cyan-500/30" },
                { label: "Strong Leadership", icon: "👑", color: "bg-amber-500/20 border-amber-500/30" },
                { label: "Team Work", icon: "🤝", color: "bg-emerald-500/20 border-emerald-500/30" },
              ].map((value, index) => (
                <div
                  key={index}
                  className={`${value.color} border rounded-2xl p-5 md:p-6 text-center hover:scale-105 transition-all duration-300`}
                >
                  <div className="text-3xl md:text-4xl mb-3">{value.icon}</div>
                  <h4 className="font-bold text-white text-sm md:text-base">{value.label}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Principles ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                How We Operate
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Our Principles
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-1 w-10 bg-indigo-500 rounded-full mb-5" />
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">Quality Product</h3>
                <p className="text-gray-600 leading-relaxed">
                  At PREMIER GARNET LIMITED we endeavor to supply and service a quality product or
                  service that we can stand behind with pride.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                <div className="h-1 w-10 bg-violet-500 rounded-full mb-5" />
                <h3 className="text-xl font-extrabold text-gray-900 mb-3">Build a Great Staff</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our employees are our most important asset. Through their hard work and expertise
                  we build this amazing brand called PREMIER, and so we make it our mission and goal
                  to care about them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Organization Structure ── */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
              <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                How We're Structured
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Organization Structure
              </h2>
              <div className="w-12 h-1 bg-indigo-600 mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-5 md:gap-7 mb-6">
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 hover:shadow-lg transition-all overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-indigo-500 rounded-l-2xl" />
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 pl-3">Managers</h3>
                <p className="text-gray-600 leading-relaxed pl-3">
                  This department is made up of self-motivated individuals who are tasked with
                  overseeing and supervising the execution of all the strategies laid down by the director.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-7 md:p-8 border border-gray-100 hover:shadow-lg transition-all overflow-hidden relative">
                <div className="absolute top-0 left-0 h-full w-1 bg-violet-500 rounded-l-2xl" />
                <h3 className="text-xl font-extrabold text-gray-900 mb-3 pl-3">Operations</h3>
                <p className="text-gray-600 leading-relaxed pl-3">
                  Made of experienced and skilled personnel, this department is tasked with executing
                  all customers' requests to ensure that ordered services or supplies are up to standard.
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                At PREMIER GARNET LIMITED, we boast of a permanent staff base of over 5 staff
                with professional qualifications ranging from administrative, civil engineering, financial
                experts, hygiene experts among others. These individuals use their professional expertise
                to ensure that our clients and potential customers are offered nothing but the best.
              </p>
            </div>
          </div>
        </section>

        {/* ── Director ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-950 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-3xl mx-auto mb-5">👤</div>
                <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-2">Leadership</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">Director</h2>
                <p className="text-xl md:text-2xl text-indigo-300 font-semibold mb-5">
                  Jackline Karambu Muriira
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:premiergarnetltd@gmail.com"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  >
                    ✉️ premiergarnetltd@gmail.com
                  </a>
                  <a
                    href="tel:+254717107859"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all"
                  >
                    📞 +254 717 107859
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
