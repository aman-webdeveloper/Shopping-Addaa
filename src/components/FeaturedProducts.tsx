import { useState } from "react";
import { MessageCircle } from "lucide-react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const products = [
  {
    id: 1,
    name: "Striped trendy check shirt",
    description: "",
    price: "₹260",
    images: [
      "/FeaturedProduct/Check-Shirt-For-Mens.jpg",
      "/FeaturedProduct/Stlyish-Check -Shirts -For-Men Cotton.jpg"
    ]
  },
  {
    id: 2,
    name: "Stlyish Check Shirts",
    description: "",
    price: "₹290",
    images: ["/FeaturedProduct/Stlyish-Check -Shirts -For-Men Cotton.jpg"]
  },
  {
    id: 3,
    name: "Printed Kurti",
    description: "",
    price: "₹270",
    images: ["/FeaturedProduct/Kurta Fabric.jpg"]
  },
  {
    id: 4,
    name: "Kurta Fabric",
    description: "",
    price: "₹350",
    images: ["/FeaturedProduct/Kurta Fabric2.jpg"]
  },
  {
    id: 5,
    name: "Latest Kidwear Set",
    description: "",
    price: "₹250",
    images: ["/FeaturedProduct/Latest Kidwear Set.jpg"]
  },
  {
    id: 6,
    name: "UniSex Collections for Kids",
    description: "",
    price: "₹360",
    images: ["/FeaturedProduct/UniSex Collections for Kids.jpg"]
  }
];

export function FeaturedProducts() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [slides, setSlides] = useState<{ src: string }[]>([]);
  const [index, setIndex] = useState(0);

  const openLightbox = (product, imgIndex = 0) => {
    const productSlides = product.images.map((img) => ({ src: img }));
    setSlides(productSlides);
    setIndex(imgIndex);
    setLightboxOpen(true);
  };

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
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Product Image */}
              <div
                className="h-64 overflow-hidden bg-gray-100 cursor-pointer"
                onClick={() => openLightbox(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain"
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
                    window.open(
                      `https://wa.me/918920743581?text=${encodeURIComponent(message)}`,
                      "_blank"
                    );
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

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={index}
        slides={slides}
        plugins={[Fullscreen, Zoom]}
      />
    </section>
  );
}
