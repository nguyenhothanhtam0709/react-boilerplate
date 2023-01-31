import React from "react";
import type { FC, PropsWithChildren } from "react";
import Header from "@components/shared/header/Header";
import Main from "@components/shared/main/Main";

type Props = {
  /**
   * The title in the page's header
   */
  title: string;
};

const SimpleContainer: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  return (
    <>
      <Header title={title} />
      <Main>{children}</Main>
    </>
  );
};
export default SimpleContainer;
