import React, { type FC } from "react";
import SimpleContainer from "@components/template/container/SimpleContainer";
import Home from "@components/ui/Home";

const HomePage: FC = () => {
  return (
    <SimpleContainer title="Home">
      <Home />
    </SimpleContainer>
  );
};
export default HomePage;
