import React, { useEffect, useState } from "react";
import productAPI from "../api/productAPI";
import { useLocation } from "react-router-dom";

function ContentSearch({ searchText }) {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const [search, setSearch] = useState(searchText);

  search === "" && setSearch(location.state.textSearch);
  useEffect(() => {
    // Update the search state when the searchText prop changes
    setSearch(searchText);
  }, [searchText]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const productList = await productAPI.filterProduct({
          name: search,
        });
        console.log(search);
        setProducts(productList.products);
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, [search]);

  return (
    <div className="flex w-full justify-center items-center flex-wrap gap-4 p-2">
      {products.length > 0 ? (
        products.map((product, index) => (
          <div
            key={index}
            className=" border-none rounded-lg py-2 shadow-xl hover:shadow-2xl bg-white mb-4 w-1/4 max-w-xs"
          >
            <img
              className="h-[15.125rem] pb-2 px-6"
              src={product.image}
              alt="PET SHOP"
            />
            <h4 className="text-center pb-1 opacity-60">{product.category}</h4>
            <p className="text-center pb-1 font-bold">{product.productName}</p>
            <p className="text-center">
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(product.price)}
            </p>
          </div>
        ))
      ) : (
        <p className="text-4xl">No products found.</p>
      )}
    </div>
  );
}

export default ContentSearch;
