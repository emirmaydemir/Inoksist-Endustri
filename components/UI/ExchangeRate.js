"use client";
import { useEffect, useState } from "react";
import axios from "axios";

const ExchangeRate = () => {
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);
  const [error, setError] = useState(null);
  const [showDollar, setShowDollar] = useState(true); // Hangi döviz kurunun gösterileceğini kontrol etmek için
  const apiKey = "fc5cf62e63bce2fd755abdb5"; // Kendi API anahtarınızı buraya ekleyin
  const baseCurrency = "USD"; // Temel para birimi
  const baseCurrency2 = "EUR";

  const fetchExchangeRate = async () => {
    console.log("API çağrısı yapılıyor...");
    try {
      const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`);
      const response2 = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency2}`);

      // API yanıtı kontrolü
      if (response.data && response.data.conversion_rates) {
        const tlRateUSD = response.data.conversion_rates.TRY; // TL (Türk Lirası) döviz kuru
        const tlRateEUR = response2.data.conversion_rates.TRY; // Euro döviz kuru
        setUsdRate(tlRateUSD);
        setEurRate(tlRateEUR);
      } else {
        throw new Error("Beklenmeyen yanıt yapısı"); // Yanıt yapısı beklenmeyen bir durumda hata fırlat
      }
    } catch (err) {
      console.error("API çağrısı sırasında bir hata oluştu:", err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchExchangeRate(); // Sayfa her yenilendiğinde çağrılır
  }, []); // Boş bağımlılık dizisi ile sadece ilk renderda çalışır

  const handleToggleCurrency = () => {
    setShowDollar(!showDollar); // Tıklama ile döviz türünü değiştir
  };

  return (
    <div className="exchange-rate-container" onClick={handleToggleCurrency}>
      {error ? (
        <span style={{ fontSize: "0.8rem", marginTop: "0.1rem" }}>1$ = </span>
      ) : (
        <>
          {showDollar && usdRate !== null && <span style={{ fontSize: "0.8rem", marginTop: "0.1rem" }}>1$ = {usdRate.toFixed(2)} TL</span>}
          {!showDollar && eurRate !== null && <span style={{ fontSize: "0.8rem", marginTop: "0.1rem" }}>1€ = {eurRate.toFixed(2)} TL</span>}
        </>
      )}
    </div>
  );
};

export default ExchangeRate;
