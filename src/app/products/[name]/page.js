import style from "../../page.module.css";

const productData = async (name) => {
  let product = await fetch(`http://localhost:3000/api/products/${name}`);
  product = await product.json();
  return product.product;
};

const Product = async ({ params }) => {
  let product = await productData(params.name);
  return (
    <div className={style.main}>
      <h1>Product Details</h1>
      {product && (
        <div>
          <h2>Name: {product.name}</h2>
          <p>Price: {product.price}</p>
          <p>Brand: {product.brand}</p>
          <p>Stock: {product.stock}</p>
          <p>Category: {product.category}</p>
        </div>
      )}
    </div>
  );
};

export default Product;
