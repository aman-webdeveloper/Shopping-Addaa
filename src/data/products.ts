import { Product } from "../types";

// ===================== MEN =====================
import { menEthnicFootwear } from "./product-ts-structure/Men/men-ethnic-footwear";
import { menShoes } from "./product-ts-structure/Men/men-shoes";
// import { menWatches } from "./product-ts-structure/Men/men-watches";
// import { menApparel } from "./product-ts-structure/Men/men-apparel";
// import { menAccessories } from "./product-ts-structure/Men/men-accessories";

// // ===================== WOMEN =====================
// import { womenEthnicFootwear } from "./product-ts-structure/Women/women-ethnic-footwear";
// import { womenShoes } from "./product-ts-structure/Women/women-shoes";
// import { womenWatches } from "./product-ts-structure/Women/women-watches";
// import { womenApparel } from "./product-ts-structure/Women/women-apparel";
// import { womenAccessories } from "./product-ts-structure/Women/women-accessories";

// // ===================== KIDS =====================
// import { boysClothing } from "./product-ts-structure/Kids/boys-clothing";
// import { girlsClothing } from "./product-ts-structure/Kids/girls-clothing";
// import { kidsAccessories } from "./product-ts-structure/Kids/kids-accessories";

// // ===================== HOME DECOR =====================
// import { wallDecor } from "./product-ts-structure/Home-Decor/wall-decor";
// import { lighting } from "./product-ts-structure/Home-Decor/lighting";
// import { furnishing } from "./product-ts-structure/Home-Decor/furnishing";
// import { decorativeItems } from "./product-ts-structure/Home-Decor/decorative-items";

// // ===================== HOME APPLIANCES =====================
// import { kitchenAppliances } from "./product-ts-structure/Home-Appliances/kitchen-appliances";
// import { cleaningAppliances } from "./product-ts-structure/Home-Appliances/cleaning-appliances";
// import { personalCareAppliances } from "./product-ts-structure/Home-Appliances/personal-care-appliances";

// // ===================== HEALTHCARE & SKINCARE =====================
// import { skincare } from "./product-ts-structure/Healthcare-and-Skincare/skincare";
// import { haircare } from "./product-ts-structure/Healthcare-and-Skincare/haircare";
// import { healthSupplements } from "./product-ts-structure/Healthcare-and-Skincare/health-supplements";
// import { personalCare } from "./product-ts-structure/Healthcare-and-Skincare/personal-care";

// // ===================== ELECTRONICS =====================
// import { mobileAccessories } from "./product-ts-structure/Electronics-and-Accessories/mobile-accessories";
// import { headphonesSpeakers } from "./product-ts-structure/Electronics-and-Accessories/headphones-speakers";
// import { smartWatches } from "./product-ts-structure/Electronics-and-Accessories/smart-watches";
// import { otherGadgets } from "./product-ts-structure/Electronics-and-Accessories/other-gadgets";

// // ===================== ARTS, CRAFTS & TOYS =====================
// import { artSupplies } from "./product-ts-structure/Arts-Crafts-and-Toys/art-supplies";
// import { craftKits } from "./product-ts-structure/Arts-Crafts-and-Toys/craft-kits";
// import { educationalToys } from "./product-ts-structure/Arts-Crafts-and-Toys/educational-toys";
// import { funToys } from "./product-ts-structure/Arts-Crafts-and-Toys/fun-toys";
// import { toys } from "./product-ts-structure/Arts-Crafts-and-Toys/toys";

// ===================== FINAL EXPORT =====================
export const allProducts: { [key: string]: Product[] } = {
  // MEN
  "men-ethnic-footwear": menEthnicFootwear,
  "men-shoes": menShoes,
  // "men-watches": menWatches,
  // "men-apparel": menApparel,
  // "men-accessories": menAccessories,

  // // WOMEN
  // "women-ethnic-footwear": womenEthnicFootwear,
  // "women-shoes": womenShoes,
  // "women-watches": womenWatches,
  // "women-apparel": womenApparel,
  // "women-accessories": womenAccessories,

  // // KIDS
  // "boys-clothing": boysClothing,
  // "girls-clothing": girlsClothing,
  // "kids-accessories": kidsAccessories,

  // // HOME DECOR
  // "wall-decor": wallDecor,
  // "lighting": lighting,
  // "furnishing": furnishing,
  // "decorative-items": decorativeItems,

  // // HOME APPLIANCES
  // "kitchen-appliances": kitchenAppliances,
  // "cleaning-appliances": cleaningAppliances,
  // "personal-care-appliances": personalCareAppliances,

  // // HEALTHCARE & SKINCARE
  // "skincare": skincare,
  // "haircare": haircare,
  // "health-supplements": healthSupplements,
  // "personal-care": personalCare,

  // // ELECTRONICS
  // "mobile-accessories": mobileAccessories,
  // "headphones-speakers": headphonesSpeakers,
  // "smart-watches": smartWatches,
  // "other-gadgets": otherGadgets,

  // // ARTS, CRAFTS & TOYS
  // "art-supplies": artSupplies,
  // "craft-kits": craftKits,
  // "educational-toys": educationalToys,
  // "fun-toys": funToys,
  // "toys": toys,
};
