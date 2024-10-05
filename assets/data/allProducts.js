// data.js
import fastenerData from "./tr/fastenerData";
import hardwareData from "./tr/hardwareData";
import chemicalData from "./tr/chemicalData";
import waterData from "./tr/waterData";

// Tüm ürünleri birleştir
const allProducts = [
  ...fastenerData.fastenerData,
  ...hardwareData.hardwareData,
  ...chemicalData.chemicalData,
  ...waterData.waterData,
];

export default allProducts;
