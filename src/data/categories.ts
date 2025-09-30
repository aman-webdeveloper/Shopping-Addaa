export interface Subcategory {
  id: string;
  name: string;
  slug: string;
}

export interface Category {
  id: number;
  title: string;
  subcategories: Subcategory[];
}

export const categoriesData: Category[] = [
  {
    id: 1,
    title: "Men",
    subcategories: [
      { id: "men-ethnic-footwear", name: "Ethnic Men Footwear", slug: "men-ethnic-footwear" },
      { id: "men-shoes", name: "Men Shoes (Casual, Sports, Formal, etc.)", slug: "men-shoes" },
      { id: "men-watches", name: "Men Watches", slug: "men-watches" },
      { id: "men-apparel", name: "Men Apparel (Ethnic, Casual, Sportswear, etc.)", slug: "men-apparel" },
      { id: "men-accessories", name: "Men Accessories (Belts, Sunglasses, Bags, etc.)", slug: "men-accessories" }
    ]
  },
  {
    id: 2,
    title: "Women",
    subcategories: [
      { id: "women-ethnic-footwear", name: "Ethnic Women Footwear", slug: "women-ethnic-footwear" },
      { id: "women-shoes", name: "Women Shoes (Heels, Flats, Sports, Casual, etc.)", slug: "women-shoes" },
      { id: "women-watches", name: "Women Watches", slug: "women-watches" },
      { id: "women-apparel", name: "Women Apparel (Ethnic, Casual, Sportswear, etc.)", slug: "women-apparel" },
      { id: "women-accessories", name: "Women Accessories (Bags, Jewelry, Sunglasses, etc.)", slug: "women-accessories" }
    ]
  },
  {
    id: 3,
    title: "Kids",
    subcategories: [
      { id: "boys-clothing", name: "Boys Clothing", slug: "boys-clothing" },
      { id: "girls-clothing", name: "Girls Clothing", slug: "girls-clothing" },
      { id: "toys", name: "Toys (Educational, Fun, Soft Toys, etc.)", slug: "toys" },
      { id: "kids-accessories", name: "Kids Accessories (Bags, Watches, Shoes, etc.)", slug: "kids-accessories" }
    ]
  },
  {
    id: 4,
    title: "Electronics and Accessories",
    subcategories: [
      { id: "mobile-accessories", name: "Mobile Accessories", slug: "mobile-accessories" },
      { id: "headphones-speakers", name: "Headphones / Speakers", slug: "headphones-speakers" },
      { id: "smart-watches", name: "Smart Watches", slug: "smart-watches" },
      { id: "other-gadgets", name: "Other Gadgets", slug: "other-gadgets" }
    ]
  },
  {
    id: 5,
    title: "Home Decor",
    subcategories: [
      { id: "wall-decor", name: "Wall Decor", slug: "wall-decor" },
      { id: "lighting", name: "Lighting", slug: "lighting" },
      { id: "furnishing", name: "Furnishing", slug: "furnishing" },
      { id: "decorative-items", name: "Decorative Items", slug: "decorative-items" }
    ]
  },
  {
    id: 6,
    title: "Home Appliances",
    subcategories: [
      { id: "kitchen-appliances", name: "Kitchen Appliances", slug: "kitchen-appliances" },
      { id: "cleaning-appliances", name: "Cleaning Appliances", slug: "cleaning-appliances" },
      { id: "personal-care-appliances", name: "Personal Care Appliances", slug: "personal-care-appliances" }
    ]
  },
  {
    id: 7,
    title: "Arts, Crafts, and Toys",
    subcategories: [
      { id: "art-supplies", name: "Art Supplies", slug: "art-supplies" },
      { id: "craft-kits", name: "Craft Kits", slug: "craft-kits" },
      { id: "educational-toys", name: "Educational Toys", slug: "educational-toys" },
      { id: "fun-toys", name: "Fun Toys", slug: "fun-toys" }
    ]
  },
  {
    id: 8,
    title: "Healthcare and Skincare",
    subcategories: [
      { id: "skincare", name: "Men & Women Skincare", slug: "skincare" },
      { id: "haircare", name: "Haircare", slug: "haircare" },
      { id: "health-supplements", name: "Health Supplements", slug: "health-supplements" },
      { id: "personal-care", name: "Personal Care", slug: "personal-care" }
    ]
  }
];