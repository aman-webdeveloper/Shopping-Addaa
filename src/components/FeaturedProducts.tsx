import { MessageCircle } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Sports Running Shoes",
    description: "Comfortable and stylish running shoes perfect for your daily workout and marathon training.",
    price: "₹3,249",
    image: "https://images.unsplash.com/photo-1752238574542-5b76d801e0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBydW5uaW5nJTIwc2hvZXN8ZW58MXx8fHwxNzU5MjU2MDAwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 2,
    name: "Casual Canvas Sneakers",
    description: "Trendy canvas sneakers that go well with any casual outfit. Available in multiple colors.",
    price: "₹1,699",
    image: "https://images.unsplash.com/photo-1631644181783-bb439cdb4fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW52YXMlMjBzbmVha2VycyUyMHllbGxvd3xlbnwxfHx8fDE3NTkyNTYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 3,
    name: "Formal Oxford Shoes",
    description: "Classic Oxford shoes crafted for professionals. Perfect for office and formal events.",
    price: "₹5,499",
    image: "https://images.unsplash.com/photo-1677203006929-fd0d9f4f350d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb3JtYWwlMjBveGZvcmQlMjBzaG9lc3xlbnwxfHx8fDE3NTkyNTYwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 4,
    name: "Hiking Boots",
    description: "Durable hiking boots designed for adventure. Waterproof and slip-resistant for all terrains.",
    price: "₹4,299",
    image: "https://images.unsplash.com/photo-1631287381310-925554130169?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjBib290c3xlbnwxfHx8fDE3NTkyNTYwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 5,
    name: "Basketball Shoes",
    description: "High-performance basketball shoes with excellent grip and ankle support for the court.",
    price: "₹3,799",
    image: "https://images.unsplash.com/photo-1644387026226-b34e6bc0a891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwc25lYWtlcnN8ZW58MXx8fHwxNzU5MjU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    id: 6,
    name: "Boot Shoes",
    description: "Stylish boot shoes with premium leather finish. Perfect for both casual and semi-formal occasions.",
    price: "₹2,799",
    image: "https://images.unsplash.com/photo-1556306535-3529444bf134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzaG9lcyUyMHJ1bm5pbmd8ZW58MXx8fHwxNzU5MjU2MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function FeaturedProducts() {
  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-3">Featured Products</h2>
          <p className="text-gray-600">Browse our latest collection of premium products</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              {/* Product Image */}
              <div className="h-64 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="p-5">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl text-blue-600">{product.price}</span>
                </div>
                <button 
                  onClick={() => {
                    const message = `Hi, I'm interested in: ${product.name} (${product.price})`;
                    window.open(`https://wa.me/918920743581?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Shop on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}