import { useParams, Link } from 'react-router-dom';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { allProducts } from '../data/products';
import { categoriesData } from '../data/categories';
import { Header } from './Header';
import { Footer } from './Footer';

export function SubcategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const products = slug ? allProducts[slug] || [] : [];
  
  // Find the category and subcategory name
  let subcategoryName = '';
  let categoryName = '';
  
  categoriesData.forEach(category => {
    const subcategory = category.subcategories.find(sub => sub.slug === slug);
    if (subcategory) {
      subcategoryName = subcategory.name;
      categoryName = category.title;
    }
  });

  const whatsappNumber = "918920743581";

  const handleWhatsAppClick = (productName: string, price: string) => {
    const message = `Hi, I'm interested in: ${productName} (${price})`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-blue-600 text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl mb-2">{subcategoryName}</h1>
          <p className="text-xl text-white/90">{categoryName}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-12">
        {products.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-xl">No products found in this category.</p>
            <Link to="/">
              <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Browse Categories
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600">Showing {products.length} products</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                  {/* Product Image */}
                  <div className="h-56 overflow-hidden bg-gray-100">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-lg mb-2 line-clamp-1">{product.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
                    <div className="mb-4">
                      <span className="text-2xl text-blue-600">{product.price}</span>
                    </div>
                    <button 
                      onClick={() => handleWhatsAppClick(product.title, product.price)}
                      className="w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Shop on WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}