import { ShoppingBag, Facebook, Instagram, Twitter, Phone, Mail, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Website Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBag className="w-6 h-6 text-blue-400" />
              <span className="text-xl">Shopping Adda</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted online shopping destination offering the best products at the most competitive prices.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle - Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Product
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Right - Contact Info */}
          <div id="contact">
            <h3 className="text-xl mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">+91 7398470844</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">shoppingadda@support.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">WhatsApp Support</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Shopping Adda. All rights reserved. | Your one-stop shopping destination
          </p>
        </div>
      </div>
    </footer>
  );
}