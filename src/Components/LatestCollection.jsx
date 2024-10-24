import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import Titel from "./Titel";
import { products } from "../assets/frontend_assets/assets";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10 w-11/12 mx-auto">
      <div className="text-center py-8 text-3xl">
        <Titel text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm  md:text-base text-gray-600">
          Explore our latest collection of stylish and comfortable clothing for
          men and women.
        </p>
      </div>
      {/* Reandring Products */}
      <div className="grid grid-cols -2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((Item, index) => (
          <ProductItem
            key={index}
            id={Item._id}
            image={Item.image}
            name={Item.name}
            price={Item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
