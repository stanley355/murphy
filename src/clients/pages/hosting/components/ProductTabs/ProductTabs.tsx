import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './ProductTabs.module.scss';

const ProductTabs = () => {
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


  return (
    <div className={styles.productTabs}>
      <ProductTabsHead />
    </div>
  );
}

export default ProductTabs;