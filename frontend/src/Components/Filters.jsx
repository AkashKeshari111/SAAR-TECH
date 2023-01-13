import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getProduct } from "../Redux/AppReducer/action";
import styles from ".././Pages/product/Style/Mens.module.css";
import { Select } from "@chakra-ui/react";

const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || "");

  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);

  const handleBrandFilter = (e) => {
    const brands = e.target.value;

    let newBrand = [];

    newBrand.push(brands);

    setBrand(newBrand);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    const params = {};
    category && (params.category = category);
    brand && (params.brand = brand);
    sortBy && (params.sortBy = sortBy);
    setSearchParams(params);
  }, [category, brand, setSearchParams, sortBy]);

  return (
    <div>
      <div className={styles.allfilters}>
        <div className={styles.allselect}>
          <img
            style={{ width: "22px", border: "0.5px solid grey" }}
            src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
            alt="homeIcon"
          />
          <select style={{ border: "0.5px solid grey" }}>
            <option value="Other Consumer Electronics">All Products</option>
          </select>
        </div>









        <div className={styles.allbrand}>
          <h2 style={{ marginRight: "10px", width: "80px" }}>Sort By: </h2>

          <div className={styles.allbrandsort}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Select
                placeholder="Sort By Price"
                width={"140%"}
                name="sortBy"
                onClick={handleSortBy}
              >
                <option value="asc">Min</option>
                <option value="desc">Max</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
