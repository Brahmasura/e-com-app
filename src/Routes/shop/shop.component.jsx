
import { Routes, Route } from "react-router-dom";

import "./shop.styles.scss";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";


/* here we want to use the context hence we will be using the 
useContext hook and the ProductContext functionality */
const Shop = () => {
 
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>} />
      <Route path=":category" element={<Category/>} />
    </Routes>
  );
};

export default Shop;
