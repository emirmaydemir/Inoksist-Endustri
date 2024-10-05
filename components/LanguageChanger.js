"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image"; // Unutmayın, Image bileşenini eklemeyi unutmayın.
import i18nConfig from "@/i18nConfig";

export default function LanguageChanger({ className }) {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${date.toUTCString()};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }
    router.refresh();
  };

  return (
    <div className={className}>
      {/* Türk Bayrağı */}
      {currentLocale === "tr" && (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
          alt="Turkish Flag"
          width={30}
          height={20}
          onClick={() => handleChange("en")}
          className="flag-icon"
        />
      )}

      {/* İngiliz Bayrağı */}
      {currentLocale === "en" && (
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="English Flag"
          width={30}
          height={20}
          onClick={() => handleChange("tr")}
          className="flag-icon"
        />
      )}
    </div>
  );
}
