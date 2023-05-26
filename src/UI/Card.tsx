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
    <div className="flex flex-col basis-1/2 p-6 border-rose-600 border-2">
      <div className="py-6 text-center">{title || "Portfolio Card"}</div>
      <div className="relative group">
        <img src={img || "https://picsum.photos/1800"} />
        <div className="py-6 bg-slate-500">{caption || "Caption"}</div>
        <div className="absolute bg-black w-full h-full top-0 invisible group-hover:visible z-10">
          Testing
        </div>
      </div>
    </div>
  );
};
