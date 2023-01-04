import { FunctionComponent } from "react";
import Product from "../interfaces/Product";

interface ProductsProps {}

const Products: FunctionComponent<ProductsProps> = () => {
  let products: Product[] = [
    { id: 1, name: "iPhone", price: 4200 },
    { id: 2, name: "Samsung", price: 3000 },
    { id: 3, name: "Xiaomi", price: 1500 },
  ];
  return (
    <>
      <h2>Our Products</h2>
      {products.length ? (
        products.map((product: Product) => (
          <div key={product.id}>
            {product.name}, {product.price}
          </div>
        ))
      ) : (
        <p>Theres no products</p>
      )}
    </>
  );
};

export default Products;
