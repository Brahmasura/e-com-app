
import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

/* here we want to use the context hence we will be using the 
useContext hook and the ProductContext functionality */
const Shop = () => {
    const {products} = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
       <ProductCard key={product.id} product={product}/>
      ))}
    </div>
  );
};

export default Shop;
