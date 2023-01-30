import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: CounterState, payload: PayloadAction<number>) => {
      return {
        ...state,
        value: state.value + payload.payload,
      };
    },
    decrement: (state: CounterState, payload: PayloadAction<number>) => {
      return {
        ...state,
        value: state.value - payload.payload,
      };
    },
    reset: (state: CounterState, payload: PayloadAction) => {
      return initialState;
    },
  },
});

export const {
  increment: incrementAction,
  decrement: decrementAction,
  reset: resetAction,
} = counterSlice.actions;

export default counterSlice.reducer;
