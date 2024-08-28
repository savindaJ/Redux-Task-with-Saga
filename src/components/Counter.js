import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/dataSlice";

export default function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.data);
  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
