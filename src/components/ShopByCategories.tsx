import { Users, User, Baby, Smartphone, Home, Zap, Palette, Heart } from 'lucide-react';
import { categoriesData } from '../data/categories';
import { Link } from 'react-router-dom';

const iconMap: { [key: string]: any } = {
  "Men": User,
  "Women": Users,
  "Kids": Baby,
  "Electronics and Accessories": Smartphone,
  "Home Decor": Home,
  "Home Appliances": Zap,
  "Arts, Crafts, and Toys": Palette,
  "Healthcare and Skincare": Heart
};

export function ShopByCategories() {
  return (
    <section id="categories" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl mb-3">Shop by Categories</h2>
          <p className="text-gray-600">Explore our diverse range of product categories</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categoriesData.map((category) => {
            const IconComponent = iconMap[category.title];
            return (
              <div 
                key={category.id} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                {/* Icon and Title */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                    <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl text-center">{category.title}</h3>
                </div>

                {/* Subcategories */}
                <ul className="space-y-2">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.id}>
                      <Link 
                        to={`/category/${subcategory.slug}`}
                        className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                      >
                        • {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}