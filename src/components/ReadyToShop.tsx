import { MessageCircle } from 'lucide-react';

export function ReadyToShop() {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-4xl mb-4">Ready to Shop?</h2>
          <p className="text-xl mb-8 opacity-90">
            Have questions? Need help choosing the right product? Contact us directly on WhatsApp!
          </p>
          <button 
            onClick={() => window.open('https://wa.me/918920743581', '_blank')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-3"
          >
            <MessageCircle className="w-6 h-6" />
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}