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
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-lg md:text-xl text-emerald-100 text-center mt-6 max-w-2xl mx-auto">
              Get in touch with us for quality products and exceptional services
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">
                  Get In Touch
                </h2>
                <div className="space-y-6 md:space-y-8">
                  <div className="flex items-start">
                    <div className="text-2xl md:text-3xl mr-4 flex-shrink-0">📍</div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-900">
                        Address
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Therapy Corner House off Kise Road, Kasarani
                        <br />
                        P.O. Box 50238 - 00100, Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl md:text-3xl mr-4 flex-shrink-0">📞</div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-900">
                        Phone
                      </h3>
                      <a
                        href="tel:+254717107859"
                        className="text-emerald-700 hover:text-emerald-800 transition-colors text-sm md:text-base"
                      >
                        +254 717 107859
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="text-2xl md:text-3xl mr-4 flex-shrink-0">✉️</div>
                    <div>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 md:mb-2 text-gray-900">
                        Email
                      </h3>
                      <a
                        href="mailto:premiergarnetltd@gmail.com"
                        className="text-emerald-700 hover:text-emerald-800 transition-colors text-sm md:text-base break-all"
                      >
                        premiergarnetltd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-12 bg-emerald-50 rounded-xl p-6 md:p-8">
                  <h3 className="font-semibold text-lg md:text-xl mb-3 md:mb-4 text-gray-900">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-gray-700 text-sm md:text-base">
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 1:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent resize-none text-sm md:text-base"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-800 transition-colors text-sm md:text-base"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Therapy Corner House off Kise Road, Kasarani, Nairobi
              </p>
              <div className="bg-gray-200 rounded-lg h-64 md:h-96 flex items-center justify-center">
                <p className="text-gray-500 text-sm md:text-base">
                  Map integration can be added here
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
