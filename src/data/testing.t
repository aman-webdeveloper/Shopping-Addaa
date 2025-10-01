export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  categorySlug: string;
}

// Helper function to generate products for a category
const generateProducts = (categorySlug: string, count: number): Product[] => {
  const productTemplates: { [key: string]: any } = {
    "men-ethnic-footwear": {
      prefix: "Traditional",
      items: ["Mojari", "Jutti", "Kolhapuri", "Nagra", "Khussa"],
      descriptions: ["Handcrafted ethnic footwear", "Traditional design with modern comfort", "Premium quality ethnic shoes", "Authentic regional style"],
      priceRange: [799, 2499],
      images: ["https://images.unsplash.com/photo-1631287381310-925554130169?w=400", "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=400"]
    },
    "men-shoes": {
      prefix: "",
      items: ["Casual Sneakers", "Sports Shoes", "Formal Shoes", "Loafers", "Running Shoes", "Oxford Shoes", "Derby Shoes", "Canvas Shoes"],
      descriptions: ["Comfortable everyday wear", "Perfect for casual outings", "Professional look guaranteed", "Stylish and durable design"],
      priceRange: [1299, 5499],
      images: ["https://images.unsplash.com/photo-1621519765361-59e3295d0f2c?w=400", "https://images.unsplash.com/photo-1556306535-3529444bf134?w=400", "https://images.unsplash.com/photo-1677203006929-fd0d9f4f350d?w=400"]
    },
    "men-watches": {
      prefix: "",
      items: ["Analog Watch", "Digital Watch", "Smart Watch", "Chronograph", "Luxury Watch", "Sports Watch", "Leather Strap Watch"],
      descriptions: ["Elegant timepiece for every occasion", "Premium quality movement", "Water-resistant design", "Sophisticated style statement"],
      priceRange: [999, 8999],
      images: ["https://images.unsplash.com/photo-1667854792753-26ec904c0295?w=400", "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"]
    },
    "men-apparel": {
      prefix: "",
      items: ["Cotton Shirt", "Polo T-Shirt", "Kurta", "Jeans", "Chinos", "Tracksuit", "Hoodie", "Jacket", "Blazer"],
      descriptions: ["Premium fabric quality", "Comfortable fit for all-day wear", "Trendy design and color", "Perfect for any occasion"],
      priceRange: [499, 3999],
      images: ["https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=400", "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400"]
    },
    "men-accessories": {
      prefix: "",
      items: ["Leather Belt", "Sunglasses", "Messenger Bag", "Wallet", "Backpack", "Tie", "Bow Tie", "Cufflinks"],
      descriptions: ["Essential accessory for modern men", "Premium quality materials", "Stylish and functional design", "Perfect gift choice"],
      priceRange: [299, 2999],
      images: ["https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400", "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400"]
    },
    "women-ethnic-footwear": {
      prefix: "Designer",
      items: ["Mojari", "Jutti", "Kolhapuri", "Ethnic Sandals", "Embroidered Flats"],
      descriptions: ["Handcrafted with intricate details", "Perfect for ethnic occasions", "Comfortable traditional footwear", "Authentic ethnic design"],
      priceRange: [699, 2999],
      images: ["https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400", "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=400"]
    },
    "women-shoes": {
      prefix: "",
      items: ["High Heels", "Flats", "Sandals", "Sports Shoes", "Casual Sneakers", "Wedges", "Boots", "Pumps"],
      descriptions: ["Comfortable and stylish design", "Perfect for any occasion", "Premium quality materials", "Trendy fashion footwear"],
      priceRange: [899, 4999],
      images: ["https://images.unsplash.com/photo-1670607231621-c00fd76d2387?w=400", "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400"]
    },
    "women-watches": {
      prefix: "",
      items: ["Analog Watch", "Smart Watch", "Fashion Watch", "Bracelet Watch", "Diamond Watch", "Rose Gold Watch"],
      descriptions: ["Elegant and sophisticated", "Perfect accessory for every outfit", "Water-resistant design", "Luxury timepiece"],
      priceRange: [799, 9999],
      images: ["https://images.unsplash.com/photo-1539874754764-5a96559165b0?w=400", "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=400"]
    },
    "women-apparel": {
      prefix: "",
      items: ["Kurti", "Saree", "Lehenga", "Dress", "Top", "Jeans", "Palazzo", "Jumpsuit", "Ethnic Suit"],
      descriptions: ["Trendy fashion statement", "Comfortable and elegant design", "Premium fabric quality", "Perfect for special occasions"],
      priceRange: [599, 5999],
      images: ["https://images.unsplash.com/photo-1612331003820-f1b0df5e6e93?w=400", "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400"]
    },
    "women-accessories": {
      prefix: "",
      items: ["Handbag", "Clutch", "Jewelry Set", "Earrings", "Necklace", "Sunglasses", "Scarf", "Bracelet"],
      descriptions: ["Must-have fashion accessory", "Premium quality design", "Perfect for every occasion", "Stylish and elegant"],
      priceRange: [399, 4999],
      images: ["https://images.unsplash.com/photo-1601924928357-22d3b3abfcfb?w=400", "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400"]
    },
    "boys-clothing": {
      prefix: "Kids",
      items: ["T-Shirt", "Shirt", "Jeans", "Shorts", "Tracksuit", "Jacket", "Ethnic Kurta", "Party Wear"],
      descriptions: ["Comfortable kids clothing", "Durable and easy to wash", "Trendy kids fashion", "Perfect for active kids"],
      priceRange: [299, 1999],
      images: ["https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400", "https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=400"]
    },
    "girls-clothing": {
      prefix: "Girls",
      items: ["Dress", "Frock", "Lehenga", "Top", "Skirt", "Jeans", "Ethnic Suit", "Party Dress"],
      descriptions: ["Adorable and comfortable", "Cute designs kids love", "Premium quality fabric", "Perfect for special occasions"],
      priceRange: [349, 2499],
      images: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=400", "https://images.unsplash.com/photo-1621452773781-0f992fd1f5cb?w=400"]
    },
    "toys": {
      prefix: "",
      items: ["Educational Toy", "Building Blocks", "Puzzle", "Soft Toy", "Remote Car", "Board Game", "Action Figure", "Doll"],
      descriptions: ["Fun and educational", "Safe for children", "Develops creativity and skills", "Hours of entertainment"],
      priceRange: [199, 2999],
      images: ["https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400", "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400"]
    },
    "kids-accessories": {
      prefix: "Kids",
      items: ["School Bag", "Water Bottle", "Lunch Box", "Watch", "Shoes", "Cap", "Sunglasses"],
      descriptions: ["Essential kids accessory", "Durable and kid-friendly", "Colorful and attractive design", "Perfect for school and play"],
      priceRange: [149, 1499],
      images: ["https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=400", "https://images.unsplash.com/photo-1587662738667-fca5ad36e5c0?w=400"]
    },
    "mobile-accessories": {
      prefix: "",
      items: ["Phone Case", "Screen Protector", "Charger", "Power Bank", "Phone Holder", "USB Cable", "Pop Socket"],
      descriptions: ["Premium mobile accessory", "Perfect fit and protection", "Fast and reliable", "Essential phone accessory"],
      priceRange: [99, 1999],
      images: ["https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400", "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400"]
    },
    "headphones-speakers": {
      prefix: "",
      items: ["Wireless Headphones", "Earbuds", "Bluetooth Speaker", "Gaming Headset", "Noise Cancelling Headphones", "Studio Headphones"],
      descriptions: ["Premium sound quality", "Long battery life", "Comfortable fit", "Crystal clear audio"],
      priceRange: [499, 8999],
      images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400"]
    },
    "smart-watches": {
      prefix: "",
      items: ["Fitness Tracker", "Smart Watch Pro", "Sports Watch", "Hybrid Watch", "GPS Watch"],
      descriptions: ["Track your fitness goals", "Stay connected on the go", "Advanced health monitoring", "Stylish and functional"],
      priceRange: [1999, 12999],
      images: ["https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400"]
    },
    "other-gadgets": {
      prefix: "",
      items: ["USB Drive", "Webcam", "Mouse", "Keyboard", "Laptop Stand", "Cable Organizer", "Ring Light"],
      descriptions: ["Essential tech gadget", "Enhance your productivity", "Modern design", "Perfect for work and play"],
      priceRange: [299, 3999],
      images: ["https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400", "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400"]
    },
    "wall-decor": {
      prefix: "",
      items: ["Wall Art", "Photo Frame", "Wall Clock", "Wall Sticker", "Canvas Painting", "Mirror", "Wall Shelf"],
      descriptions: ["Transform your walls", "Modern home decor", "Premium quality finish", "Easy to install"],
      priceRange: [299, 4999],
      images: ["https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=400", "https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=400"]
    },
    "lighting": {
      prefix: "",
      items: ["LED Bulb", "Table Lamp", "Floor Lamp", "Ceiling Light", "String Lights", "Night Lamp", "Smart Light"],
      descriptions: ["Energy-efficient lighting", "Perfect ambiance for your home", "Modern design", "Long-lasting quality"],
      priceRange: [199, 3999],
      images: ["https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400", "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400"]
    },
    "furnishing": {
      prefix: "",
      items: ["Cushion Cover", "Bedsheet", "Curtain", "Table Cover", "Rug", "Carpet", "Throw Blanket"],
      descriptions: ["Enhance your home comfort", "Premium fabric quality", "Beautiful patterns and colors", "Easy to maintain"],
      priceRange: [299, 5999],
      images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400", "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400"]
    },
    "decorative-items": {
      prefix: "",
      items: ["Vase", "Showpiece", "Candle Holder", "Planter", "Artificial Plant", "Dream Catcher", "Wind Chime"],
      descriptions: ["Beautiful home decoration", "Add charm to your space", "Perfect gift item", "Premium quality craftsmanship"],
      priceRange: [199, 2999],
      images: ["https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400", "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400"]
    },
    "kitchen-appliances": {
      prefix: "",
      items: ["Mixer Grinder", "Air Fryer", "Electric Kettle", "Toaster", "Blender", "Rice Cooker", "Microwave Oven"],
      descriptions: ["Make cooking easier", "Energy-efficient appliance", "Durable and reliable", "Modern kitchen essential"],
      priceRange: [999, 15999],
      images: ["https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=400", "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400"]
    },
    "cleaning-appliances": {
      prefix: "",
      items: ["Vacuum Cleaner", "Steam Mop", "Robot Vacuum", "Wet & Dry Vacuum", "Handheld Vacuum"],
      descriptions: ["Efficient cleaning solution", "Save time and effort", "Advanced cleaning technology", "Keep your home spotless"],
      priceRange: [1999, 19999],
      images: ["https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400", "https://images.unsplash.com/photo-1600494603989-9650cf6dba4d?w=400"]
    },
    "personal-care-appliances": {
      prefix: "",
      items: ["Hair Dryer", "Straightener", "Trimmer", "Electric Shaver", "Epilator", "Massager"],
      descriptions: ["Personal grooming essential", "Professional results at home", "Easy to use", "Long-lasting quality"],
      priceRange: [599, 6999],
      images: ["https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400", "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400"]
    },
    "art-supplies": {
      prefix: "",
      items: ["Acrylic Paint Set", "Watercolor Set", "Sketch Pencils", "Canvas Board", "Paint Brushes", "Drawing Kit"],
      descriptions: ["Premium quality art supplies", "Perfect for artists", "Vibrant colors", "Unleash your creativity"],
      priceRange: [199, 2999],
      images: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400", "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400"]
    },
    "craft-kits": {
      prefix: "",
      items: ["DIY Craft Kit", "Jewelry Making Kit", "Embroidery Kit", "Origami Kit", "Scrapbook Kit", "Knitting Kit"],
      descriptions: ["Complete craft kit", "Fun creative activity", "All materials included", "Perfect for beginners"],
      priceRange: [299, 1999],
      images: ["https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400", "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400"]
    },
    "educational-toys": {
      prefix: "",
      items: ["STEM Kit", "Science Experiment Kit", "Learning Tablet", "Math Game", "Alphabet Puzzle", "Geography Globe"],
      descriptions: ["Learn through play", "Develops critical thinking", "Educational and fun", "Perfect for young learners"],
      priceRange: [299, 3999],
      images: ["https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400", "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400"]
    },
    "fun-toys": {
      prefix: "",
      items: ["Remote Control Car", "Drone", "Board Game", "Playing Cards", "Yo-Yo", "Frisbee", "Bubble Maker"],
      descriptions: ["Hours of fun", "Great for outdoor play", "Perfect entertainment", "Quality toy for kids"],
      priceRange: [149, 4999],
      images: ["https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400", "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400"]
    },
    "skincare": {
      prefix: "",
      items: ["Face Wash", "Moisturizer", "Sunscreen", "Face Serum", "Night Cream", "Face Mask", "Toner"],
      descriptions: ["Nourish your skin", "Dermatologically tested", "Natural ingredients", "Suitable for all skin types"],
      priceRange: [199, 2999],
      images: ["https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400", "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400"]
    },
    "haircare": {
      prefix: "",
      items: ["Shampoo", "Conditioner", "Hair Oil", "Hair Serum", "Hair Mask", "Anti-Dandruff Treatment"],
      descriptions: ["Healthy and shiny hair", "Nourishing formula", "Suitable for all hair types", "Salon-quality results"],
      priceRange: [149, 1999],
      images: ["https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400", "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400"]
    },
    "health-supplements": {
      prefix: "",
      items: ["Multivitamin", "Protein Powder", "Omega-3", "Vitamin D", "Calcium Supplement", "Immunity Booster"],
      descriptions: ["Support your health", "Premium quality ingredients", "Doctor recommended", "Daily health supplement"],
      priceRange: [299, 3999],
      images: ["https://images.unsplash.com/photo-1550572017-edd951b55104?w=400", "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400"]
    },
    "personal-care": {
      prefix: "",
      items: ["Body Lotion", "Hand Sanitizer", "Body Wash", "Deodorant", "Soap", "Lip Balm", "Toothpaste"],
      descriptions: ["Daily personal care", "Gentle and effective", "Fresh and clean feeling", "Essential hygiene product"],
      priceRange: [99, 999],
      images: ["https://images.unsplash.com/photo-1556228841-e705befa0f80?w=400", "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400"]
    }
  };

  const template = productTemplates[categorySlug];
  if (!template) {
    return [];
  }

  const products: Product[] = [];
  for (let i = 0; i < count; i++) {
    const itemIndex = i % template.items.length;
    const descIndex = i % template.descriptions.length;
    const imageIndex = i % template.images.length;
    const price = Math.floor(Math.random() * (template.priceRange[1] - template.priceRange[0])) + template.priceRange[0];
    
    products.push({
      id: `${categorySlug}-${i + 1}`,
      name: `${template.prefix} ${template.items[itemIndex]} ${i > template.items.length ? `(${Math.floor(i / template.items.length) + 1})` : ''}`.trim(),
      description: template.descriptions[descIndex],
      price: `₹${price.toLocaleString('en-IN')}`,
      image: template.images[imageIndex],
      categorySlug
    });
  }

  return products;
};

// Generate products for all categories
export const allProducts: { [key: string]: Product[] } = {
  "men-ethnic-footwear": generateProducts("men-ethnic-footwear", 25),
  "men-shoes": generateProducts("men-shoes", 30),
  "men-watches": generateProducts("men-watches", 28),
  "men-apparel": generateProducts("men-apparel", 30),
  "men-accessories": generateProducts("men-accessories", 25),
  "women-ethnic-footwear": generateProducts("women-ethnic-footwear", 25),
  "women-shoes": generateProducts("women-shoes", 30),
  "women-watches": generateProducts("women-watches", 26),
  "women-apparel": generateProducts("women-apparel", 30),
  "women-accessories": generateProducts("women-accessories", 28),
  "boys-clothing": generateProducts("boys-clothing", 25),
  "girls-clothing": generateProducts("girls-clothing", 25),
  "toys": generateProducts("toys", 30),
  "kids-accessories": generateProducts("kids-accessories", 22),
  "mobile-accessories": generateProducts("mobile-accessories", 25),
  "headphones-speakers": generateProducts("headphones-speakers", 24),
  "smart-watches": generateProducts("smart-watches", 20),
  "other-gadgets": generateProducts("other-gadgets", 25),
  "wall-decor": generateProducts("wall-decor", 25),
  "lighting": generateProducts("lighting", 25),
  "furnishing": generateProducts("furnishing", 25),
  "decorative-items": generateProducts("decorative-items", 25),
  "kitchen-appliances": generateProducts("kitchen-appliances", 25),
  "cleaning-appliances": generateProducts("cleaning-appliances", 20),
  "personal-care-appliances": generateProducts("personal-care-appliances", 22),
  "art-supplies": generateProducts("art-supplies", 24),
  "craft-kits": generateProducts("craft-kits", 20),
  "educational-toys": generateProducts("educational-toys", 24),
  "fun-toys": generateProducts("fun-toys", 25),
  "skincare": generateProducts("skincare", 28),
  "haircare": generateProducts("haircare", 24),
  "health-supplements": generateProducts("health-supplements", 22),
  "personal-care": generateProducts("personal-care", 25)
};

