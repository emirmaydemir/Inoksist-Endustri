"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import xml2js from "xml2js"; // XML parse için bir kütüphane

const ExchangeRate = () => {
  const [usdRate, setUsdRate] = useState(null);
  const [error, setError] = useState(null);

  const fetchExchangeRate = async () => {
    console.log("API çağrısı yapılıyor...");
    try {
      const response = await axios.get("https://www.tcmb.gov.tr/kurlar/today.xml");
      const result = await xml2js.parseStringPromise(response.data);
      const rates = result.Tarih_Date.Currency;

      // Sadece USD dövizini bul
      const usd = rates.find((rate) => rate.$.Kod === "USD");
      const tlRate = usd ? usd.Alici[0] : null; // Alış kuru

      setUsdRate(tlRate);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchExchangeRate(); // Sayfa her yenilendiğinde çağrılır
  }, []); // Boş bağımlılık dizisi ile sadece ilk renderda çalışır

  return (
    <div className="exchange-rate-container">
      {" "}
      {/* Kutu için div ekledik */}
      {error ? <span style={{ fontSize: "0.9rem", marginTop: "0.1rem" }}>1$ = 34,45</span> : <span style={{ fontSize: "0.9rem", marginTop: "0.1rem" }}>1$ = {usdRate} TL</span>}
    </div>
  );
};

export default ExchangeRate;
