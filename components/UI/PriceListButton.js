"use client"; // Bu direktif component'in client-side çalışmasını sağlar.

import React from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/navigation"; // next/navigation'dan useRouter import ediyoruz

export default function PriceListButton({ buttonText }) {
  const router = useRouter(); // useRouter hook'unu çağırıyoruz

  const handleContactClick = () => {
    router.push("/iletisim"); // useRouter ile yönlendirme yapıyoruz
  };

  return (
    <Button
      color="primary"
      className="contact-button"
      onClick={handleContactClick}
    >
      {buttonText}
    </Button>
  );
}
