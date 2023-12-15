import React, { useEffect, useState } from "react";

const TechCard = ({ technology }) => {
  const { icon, name } = technology;

  const [resolvedImage, setResolvedImage] = useState();

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
    <div className="bg-gradient-to-br from-neon via-leveled-400 to-leveled-600 p-[1px] s:p-[2px]  rounded-full">
      <div className=" bg-leveled-300 flex flex-col justify-center p-2 s:p-3 items-center  rounded-full shadow-iconInner shadow-leveled-900">
        <img
          src={resolvedImage}
          alt={name}
          loading="lazy"
          className="block max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default TechCard;
