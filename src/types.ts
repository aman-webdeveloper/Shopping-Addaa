export interface Product {
  id: number | string;
  title: string;
  description: string;
  price: string;
  category: string;
  subcategory: string;
  image: string;
  categorySlug?: string;
}