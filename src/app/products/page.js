import Link from "next/link";
import styles from "../page.module.css"

const productApi = async () => {
    let products = await fetch("http://localhost:3000/api/products")
    products = await products.json();
    return products
}

const Products = async () => {
    const products = await productApi()
  return (
    <div className={styles.main}>
        <h1>Products List</h1>
        {
            products.products.map((item)=> (
                <Link key={item.name} href={`/products/${item.name}`}>Name: {item.name}</Link>
            ))
        }
    </div>
  )
}

export default Products