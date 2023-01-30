import { decrementAction, incrementAction } from "@redux/action";
import type { RootState } from "@redux/reducer";
import { useAppDispatch } from "@redux/store";
import React, { type FC } from "react";
import { useSelector } from "react-redux";

const CounterPage: FC = () => {
  const count = useSelector<RootState, number>((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleDecrement = () => {
    dispatch(decrementAction(1));
  };
  const handleIncrement = () => {
    dispatch(incrementAction(1));
  };

  return (
    <div>
      <h1>Counter page</h1>
      <h3>Current value: {count}</h3>
      <div>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
};
export default CounterPage;
