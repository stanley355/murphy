import React, { useState, useRef } from 'react';
import { FaGitter } from 'react-icons/fa';

import { FilterItems } from './FilterMenu';
import styles from './CloudFilter.module.scss';

const CloudFilter = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const FilterMenu = () => {
    return (
      <div className={styles.cloud__filter__mobile} >
        {
          FilterItems.map((item) =>
            <div className={styles.cloud__filter__mobile__input}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>)
        }
        <button className={styles.cloud__filter__mobile__ctaBtn}  >Filter</button>
        <button className={styles.cloud__filter__mobile__backBtn}>Back</button>
      </div>
    );
  }

  return (
    <div className={styles.cloud__filter}>
      <div className={styles.cloud__filter__title} ref={filterRef}>Filter By: </div>
      <button
        className={styles.cloud__filter__popupBtn}
        onClick={() => {
          filterRef.current?.scrollIntoView();
          setShowFilterMenu(true);
        }}>
        Filter < FaGitter />
      </button>
      {showFilterMenu && <FilterMenu />}
    </div >
  )
}

export default CloudFilter;
