import React, { useEffect, useState } from "react";
import { styles } from '../utils'

const TechCard = ({ technology }) => {
  const { icon, name } = technology;

  const [resolvedImage, setResolvedImage] = useState(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await icon();
        const iconUrl = iconModule.default;
        setResolvedImage(iconUrl);
      } catch (error) {
        console.error("Icon load error: ", error);
      }
    };

    loadIcon();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-neon via-leveled-400 to-leveled-600 p-[1px] s:p-[2px] md:p-1 rounded-full">
        <div className=" bg-leveled-300 flex flex-col justify-center p-3 md:p-5 items-center  rounded-full shadow-iconInner shadow-leveled-900">
          <img src={resolvedImage} alt={name} loading="lazy" />
        </div>
      </div>
      <p
        className={`${styles.portfolioSmallerText} text-white text-center`}
        children={name}
      />
    </>
  );
};

export default TechCard;
