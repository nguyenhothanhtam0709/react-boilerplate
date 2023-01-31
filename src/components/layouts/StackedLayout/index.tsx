import React, { type FC, type PropsWithChildren } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Main from "./Main";

const StackedLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-full">
      <NavBar />
      <Header />
      <Main>{children}</Main>
    </div>
  );
};
export default StackedLayout;
