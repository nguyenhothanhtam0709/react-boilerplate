import SimpleContainer from "@components/template/container/SimpleContainer";
import Counter from "@components/ui/Counter";
import React, { type FC } from "react";

const CounterPage: FC = () => {
  return (
    <SimpleContainer title="Counter">
      <div>
        <Counter />
      </div>
    </SimpleContainer>
  );
};
export default CounterPage;
