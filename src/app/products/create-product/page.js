"use client";
import { useState } from "react";
import style from "../../page.module.css";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("");
  const [stock, setStock] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await fetch("http://localhost:3000/api/products", {
      method: "Post",
      body: JSON.stringify({ name, price, brand, stock, category }),
    });
    res = await res.json();

    alert(res.message);
    if (res.success === true) {
      setName("");
      setPrice("");
      setBrand("");
      setStock("");
      setCategory("");
    }
  };
  return (
    <div className={style.main}>
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit} className={style.div}>
        <input
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={price}
          type="number"
          placeholder="price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          value={stock}
          type="number"
          placeholder="stock"
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          value={brand}
          type="text"
          placeholder="brand"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          value={category}
          type="text"
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
