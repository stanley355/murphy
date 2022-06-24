import React, { useState } from 'react';
import styles from './ProductTabs.module.scss';
import { filterProductList } from '../../modules/filterProductList';
import ProductList from '../ProductList';
import ProductFilter from '../ProductFilter';
interface ProductTabsInterface {
  productList: [any] | any[]
}

const ProductTabs = (props: ProductTabsInterface) => {
  const { productList } = props;
  const [activeTab, setActiveTab] = useState("list");
  const [filteredProducts, setFilteredProducts] = useState(productList);

  const filterHandler = (filterValues: any) => {
    const newProductList = filterProductList(filterValues, productList);
    setFilteredProducts(newProductList);
    setActiveTab("list");
  }

  const ProductTabsHead = () => {
    return (
      <div className={styles.productTabs__head}>
        <button
          className={activeTab === "list" ? styles["btnActive"] : ""}
          onClick={() => setActiveTab("list")}
        >
          Product List
        </button>
        <button
          className={activeTab === "filter" ? styles["btnActive"] : ""}
          onClick={() => setActiveTab("filter")}
        >
          Filters
        </button>
      </div>
    );
  }

  const setShowingTab = (tab: string) => {
    switch (tab) {
      case "list":
        return <ProductList list={filteredProducts} />
      case "filter":
        return <ProductFilter onSubmit={filterHandler} />
      default:
        return <ProductList list={productList} />
    }
  }


  return (
    <div className={styles.productTabs}>
      <ProductTabsHead />
      {setShowingTab(activeTab)}
    </div>
  );
}

export default ProductTabs;