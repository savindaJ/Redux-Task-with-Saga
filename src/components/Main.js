import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../features/dataSlice";
import Counter from "./Counter";

export default function Main() {
  const dispatch = useDispatch();
  const { items, loading, error, sampleData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Counter />
    </div>
  );
}
