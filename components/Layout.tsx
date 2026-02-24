import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/clients", label: "Clients" },
    { href: "/sustainability", label: "Sustainability" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex-shrink-0">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-indigo-700">
                 Garnet
                </h1>
                <p className="text-xs text-gray-600">Kenya</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm xl:text-base font-medium transition-colors ${
                    router.pathname === link.href
                      ? "text-indigo-700"
                      : "text-gray-700 hover:text-indigo-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-indigo-600 text-white px-4 xl:px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors font-medium text-sm xl:text-base"
              >
                Get Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 px-4 rounded-lg font-medium transition-colors ${
                    router.pathname === link.href
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-indigo-700 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16 md:pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                Premier Garnet Limited
              </h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                Your trusted partner for quality products and exceptional
                services across Kenya and East Africa.
              </p>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm md:text-base">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-base md:text-lg font-semibold text-white mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2 text-sm md:text-base text-gray-400">
                <li>P.O. Box 50238 - 00100, Nairobi</li>
                <li>
                  <a
                    href="tel:+254717107859"
                    className="hover:text-white transition-colors"
                  >
                    +254 717 107859
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:premiergarnetltd@gmail.com"
                    className="hover:text-white transition-colors"
                  >
                    premiergarnetltd@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
            <p>
              © {new Date().getFullYear()} Premier Garnet Limited. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
