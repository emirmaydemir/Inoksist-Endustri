import React from "react";
import Image from "next/image";

const FlagButton = ({ language, toggleLanguage, className }) => {
  return (
    <button onClick={toggleLanguage} className={className}>
      {language === "tr" ? (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg"
          alt="Turkish"
          width={24} // Görselin genişliği
          height={16} // Görselin yüksekliği
          className="flag-icon"
        />
      ) : (
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="English"
          width={24}
          height={16}
          className="flag-icon"
        />
      )}
    </button>
  );
};

export default FlagButton;
