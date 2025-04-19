const Footer = () => {
  return (
    <footer className="bg-[#009688] text-gray-900 py-10 mt-10"> {/* Changed background and text color */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Civil A-Z 🏗️</h2>
          <p className="text-sm text-gray-800">
            We provide all your construction material needs in one place.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline">Quick Links</h3>
          <ul className="space-y-2 text-gray-800">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/materials" className="hover:text-white">Materials</a></li> {/* ✅ Added */}
            <li><a href="/cart" className="hover:text-white">Cart</a></li>
            <li><a href="/login" className="hover:text-white">Login / Signup</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 underline">Contact Us</h3>
          <p className="text-sm text-gray-800">
            📞 +91 8700771832<br />
            ✉️ support@civilaz.com<br />
            🏢 Delhi, India
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-10 text-black border-t border-gray-400 pt-4 text-sm">
        © {new Date().getFullYear()} Civil A-Z. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
