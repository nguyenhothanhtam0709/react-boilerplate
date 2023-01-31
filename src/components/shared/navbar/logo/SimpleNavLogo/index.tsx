import React from "react";
import type { FC } from "react";

type Props = {
  url: string;
  alt?: string;
};

const SimpleNavLogo: FC<Props> = ({ url, alt = "Your Company" }) => {
  return (
    <div className="flex-shrink-0">
      <img className="h-8 w-8" src={url} alt={alt} />
    </div>
  );
};
export default SimpleNavLogo;
