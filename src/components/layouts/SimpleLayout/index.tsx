import React from "react";
import type { FC, PropsWithChildren } from "react";
import SimpleNavBar from "@components/template/navbar/SimpleNavBar";

const SimpleLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-full">
      <SimpleNavBar />
      {children}
    </div>
  );
};
export default SimpleLayout;
