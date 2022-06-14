import React, { useState } from 'react';
import styles from './ProductTabs.module.scss';

import ProductList from '../ProductList';
import ProductFilter from '../ProductFilter';
interface ProductTabsInterface {
  productList: [any]
}

const ProductTabs = (props: ProductTabsInterface) => {
  const { productList } = props;
  const [activeTab, setActiveTab] = useState("list");

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

  const setTabContent = (tab: string) => {
    switch (tab) {
      case "list":
        return <ProductList list={productList} />
      case "filter":
        return <ProductFilter />
      default:
        return <ProductList list={productList} />
    }
  }


  return (
    <div className={styles.productTabs}>
      <ProductTabsHead />
      {setTabContent(activeTab)}
    </div>
  );
}

export default ProductTabs;