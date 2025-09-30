import { ShoppingBag, Search, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { categoriesData } from '../data/categories';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search through all subcategories
  const searchResults = searchQuery.trim() === '' ? [] : categoriesData.flatMap(category =>
    category.subcategories
      .filter(sub => 
        sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        category.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(sub => ({
        ...sub,
        categoryTitle: category.title
      }))
  ).slice(0, 8); // Limit to 8 results

  const handleSearchSelect = (slug: string) => {
    navigate(`/category/${slug}`);
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Navigate to home page first, then scroll
      window.location.hash = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <ShoppingBag className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-semibold text-gray-900 hidden sm:inline">Shopping Adda</span>
          </Link>

          {/* Search Bar */}
          <div ref={searchRef} className="relative flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Search Results Dropdown */}
            {showSearchResults && searchQuery.trim() !== '' && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  <div className="py-2">
                    {searchResults.map((result) => (
                      <button
                        key={result.id}
                        onClick={() => handleSearchSelect(result.slug)}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-gray-900">{result.name}</p>
                            <p className="text-sm text-gray-500">{result.categoryTitle}</p>
                          </div>
                          <Search className="w-4 h-4 text-gray-400" />
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 flex-shrink-0">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('products')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Product
            </button>
            <button onClick={() => scrollToSection('categories')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Categories
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}