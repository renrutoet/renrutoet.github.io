import React from "react";

type CardProps = {
  title: string;
  img: string;
  caption: string;
};

export const PortfolioCard = ({
  title,
  img,
  caption,
}: CardProps): JSX.Element => {
  return (
    <div className="flex flex-col basis-1/3 p-6 border-cyan-600 border-2">
      <div className="py-6 text-center">{title || "Portfolio Card"}</div>
      <div className="relative group overflow-hidden">
        <img src={img || "https://picsum.photos/1800"} />
        <div className="absolute py-6 text-white bg-black w-full h-full -top-20 translate-y-full group-hover:translate-y-0 group-hover:top-0 transition-all truncate hover:text-clip hover:whitespace-normal p-3">
          {caption || "Caption"}
        </div>
      </div>
    </div>
  );
};
