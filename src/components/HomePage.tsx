import { Header } from './Header';
import { Hero } from './Hero';
import { FeaturedProducts } from './FeaturedProducts';
import { ShopByCategories } from './ShopByCategories';
import { ReadyToShop } from './ReadyToShop';
import { Footer } from './Footer';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedProducts />
      <ShopByCategories />
      <ReadyToShop />
      <Footer />
    </div>
  );
}