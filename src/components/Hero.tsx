import { ShoppingBag } from 'lucide-react';

export function Hero() {
  const heroImage = "https://images.unsplash.com/photo-1561710309-9a739908b336?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMG1hbGwlMjBzdG9yZXxlbnwxfHx8fDE3NTkyNTY0ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Shopping Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-600/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <ShoppingBag className="w-12 h-12" />
          <h1 className="text-5xl md:text-6xl">Shopping Adda</h1>
        </div>
        
        <p className="text-2xl md:text-3xl mb-4">Your one-stop shopping destination</p>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Discover amazing products at unbeatable prices. From fashion to electronics, we have everything you need for a comfortable and joyful lifestyle. Shop conveniently on WhatsApp!
        </p>
        
        <button 
          onClick={() => {
            const element = document.getElementById('products');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Shop Now
        </button>
      </div>
    </section>
  );
}