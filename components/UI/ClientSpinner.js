"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingSpinner from "./LoadingSpinner"; // Spinner bileşeni

const ClientSpinner = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // URL değiştiğinde loading durumunu ayarlayın
    if (pathname) {
      handleStart();
      const timeout = setTimeout(handleComplete, 500); // Örnek bir bekleme süresi

      return () => clearTimeout(timeout); // Temizleme
    }
  }, [pathname]);

  return loading ? <LoadingSpinner /> : null;
};

export default ClientSpinner;
