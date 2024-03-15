import { createContext, useEffect, useState } from "react";

// even this shop data was needed only once in the beginning to set the data from it to firestore
// import SHOP_DATA from "../shop-data.js";

import { getCategoriesAndDocuments } from "../utils/firebase/Firebase.utility.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  //  we have used the useEffect once to set the data to firestore now we won't need it because we don't want it to fire again
  //  useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  //  },[]);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);
  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
