import React, { useState } from 'react';
import styles from './ProductTabs.module.scss';
import { filterProductList } from '../../modules/filterProductList';
import ProductList from '../ProductList';
import ProductFilter from '../ProductFilter';

interface ProductTabsInterface {
  productList: [any] | any[],
  onFilterSubmit: (e:any)=> void
}

const ProductTabs = (props: ProductTabsInterface) => {
  const { productList, onFilterSubmit } = props;
  const [activeTab, setActiveTab] = useState("list");

  const ProductTabsHead = () => {
    return (
      <div className={styles.productTabs__head}>
        <button
          className={activeTab === "list" ? "" : styles["btnInactive"]}
          onClick={() => setActiveTab("list")}
        >
          Product List
        </button>
        <button
          className={activeTab === "filter" ? "" : styles["btnInactive"]}
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
        return <ProductList list={productList} />
      case "filter":
        return <ProductFilter onSubmit={onFilterSubmit} />
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