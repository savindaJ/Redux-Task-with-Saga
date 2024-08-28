import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../features/dataSlice";

export default function Test() {
  const dispatch = useDispatch();
  const { sampleData } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {sampleData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}
