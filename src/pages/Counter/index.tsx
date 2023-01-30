import { decrementAction, incrementAction, resetAction } from "@redux/action";
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
  const handleReset = () => {
    dispatch(resetAction());
  };

  return (
    <div className="flex flex-col items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
        Counter page
      </h1>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Current value: {count}
      </h5>
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          onClick={handleDecrement}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Decrement
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Reset
        </button>
        <button
          onClick={handleIncrement}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Increment
        </button>
      </div>
    </div>
  );
};
export default CounterPage;
