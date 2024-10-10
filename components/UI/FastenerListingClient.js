"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Router'ı import et
import { Col } from "reactstrap";
import ProductItem from "@/components/UI/ProductItem";
import "@/styles/select.css";

const FastenerListingClient = ({ fastenerData, categoriesContent, headerContent, product, category }) => {
  const router = useRouter(); // Router'ı kullan
  const [selectedCategory, setSelectedCategory] = useState(product);

  useEffect(() => {
    if (product) {
      setSelectedCategory(product);
    }
  }, [product]);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;

    // Türkçe karakterleri ve boşlukları düzenleyin
    const formattedCategory = newCategory
      .normalize("NFD") // Türkçe karakterleri ayır
      .replace(/[\u0300-\u036f]/g, "") // Noktalı harfleri kaldır
      .replace(/ı/g, "i") // 'ı' yerine 'i'
      .replace(/ğ/g, "g") // 'ğ' yerine 'g'
      .replace(/ş/g, "s") // 'ş' yerine 's'
      .replace(/ç/g, "c") // 'ç' yerine 'c'
      .replace(/ö/g, "o") // 'ö' yerine 'o'
      .replace(/ü/g, "u") // 'ü' yerine 'u'
      .replace(/\./g, "-") // Noktaları tire ile değiştir
      .replace(/ /g, "-") // Boşlukları tire ile değiştir
      .toLowerCase(); // Küçük harfe çevir

    // Eğer tüm kategorileri temsil eden boş değer seçilmişse
    if (newCategory === "") {
      // Boş değer için yönlendirme
      router.push(`/${category}/urunler`);
    } else {
      // URL'yi güncelle
      router.push(`/${category}/${formattedCategory}`);
    }

    setSelectedCategory(formattedCategory);
  };

  const filteredProducts = selectedCategory && selectedCategory !== "urunler" ? fastenerData.filter((item) => item.category === selectedCategory) : fastenerData; // Eğer selectedCategory boşsa, tüm ürünleri göster

  return (
    <>
      <Col lg="12">
        <div className="d-flex align-items-center gap-3 mb-5">
          <select onChange={handleCategoryChange} className="custom-select" aria-label="Kategoriler" value={selectedCategory || ""}>
            <option value="">{headerContent.all}</option>
            {categoriesContent.map((category, index) => (
              <option value={category.guid} key={index}>
                {category.description}
              </option>
            ))}
          </select>
        </div>
      </Col>

      {filteredProducts.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </>
  );
};

export default FastenerListingClient;
