import React from "react";
import { useSelector } from "react-redux";

function App() {
  const { products, isLoading } = useSelector((state) => state.cart);

  return (
    <div>
      <h1>Products - {products.length} </h1>
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
