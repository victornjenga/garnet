import { useState } from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className={`${geistSans.variable} font-sans`}>
        <Head>
          <title>Contact Us - Premier Garnet Limited</title>
          <meta
            name="description"
            content="Get in touch with Premier Garnet Limited for quality products and exceptional services. Located in Nairobi, Kenya."
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
              Reach Out
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5">
              Contact Us
            </h1>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-6" />
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Get in touch with us for quality products and exceptional services
            </p>
          </div>
        </section>

        {/* ── Contact Section ── */}
        <section className="py-14 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">

              {/* Contact Information */}
              <div>
                <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                  Our Details
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: "📍",
                      label: "Address",
                      content: (
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          Therapy Corner House off Kise Road, Kasarani
                          <br />P.O. Box 50238 - 00100, Nairobi, Kenya
                        </p>
                      ),
                    },
                    {
                      icon: "📞",
                      label: "Phone",
                      content: (
                        <a
                          href="tel:+254717107859"
                          className="text-indigo-600 hover:text-indigo-700 transition-colors text-sm md:text-base font-medium"
                        >
                          +254 717 107859
                        </a>
                      ),
                    },
                    {
                      icon: "✉️",
                      label: "Email",
                      content: (
                        <a
                          href="mailto:premiergarnetltd@gmail.com"
                          className="text-indigo-600 hover:text-indigo-700 transition-colors text-sm md:text-base font-medium break-all"
                        >
                          premiergarnetltd@gmail.com
                        </a>
                      ),
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center text-xl flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                        {item.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="mt-8 bg-slate-950 rounded-2xl p-6 md:p-7 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative">
                    <p className="text-indigo-400 font-semibold text-xs uppercase tracking-widest mb-3">
                      Business Hours
                    </p>
                    <div className="space-y-2 text-sm md:text-base">
                      <div className="flex justify-between text-slate-300">
                        <span>Monday – Friday</span>
                        <span className="font-medium text-white">8:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Saturday</span>
                        <span className="font-medium text-white">9:00 AM – 1:00 PM</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Sunday</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8">
                <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-3">
                  Drop a Message
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-7">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { type: "text", name: "name", placeholder: "Your Name" },
                    { type: "email", name: "email", placeholder: "Your Email" },
                    { type: "tel", name: "phone", placeholder: "Phone Number (optional)" },
                  ].map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      required={field.name !== "phone"}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm md:text-base transition"
                    />
                  ))}
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm md:text-base transition"
                  />
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 text-sm md:text-base"
                  >
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Visit Office ── */}
        <section className="py-14 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
              <div className="text-center mb-6">
                <p className="text-indigo-600 font-semibold text-xs uppercase tracking-widest mb-2">Find Us</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-1">
                  Visit Our Office
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Therapy Corner House off Kise Road, Kasarani, Nairobi
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl h-64 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-3">📍</div>
                  <p className="text-gray-500 text-sm md:text-base">Map integration coming soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
