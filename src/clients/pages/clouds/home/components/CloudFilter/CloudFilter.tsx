import React, { useState, useRef } from 'react';
import { FaGitter } from 'react-icons/fa';
import Router from 'next/router';
import { FilterItems } from '../../constant/FilterItems';
import { setCloudFilterQuery } from '../../utils/setCloudFilterQuery';
import useResponsive from '../../../../../../utils/useResponsive';
import styles from './CloudFilter.module.scss';

const CloudFilter = () => {
  const { isDesktop } = useResponsive();
  const filterRef = useRef<HTMLDivElement>(null); //Ref to scroll to Filter Element after clicking (mobile)
  const [showFilterMenu, setShowFilterMenu] = useState(false);

  const filterRedirect = (e: any) => {
    e.preventDefault();
    const { always_free, free_tier, frontend_support, backend_support, database_support } = e.target;
    const query = {
      always_free: always_free.checked,
      free_tier: free_tier.checked,
      frontend_support: frontend_support.checked,
      backend_support: backend_support.checked,
      database_support: database_support.checked
    }

    const filterQuery = setCloudFilterQuery(query);
    Router.push(`/clouds/${filterQuery}`);
    
  }

  const FilterMenu = () => {
    return (
      <form className={styles.cloud__filter__menu} onSubmit={filterRedirect}>
        {
          FilterItems.map((item) =>
            <div className={styles.cloud__filter__menu__input} key={item.title}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>)
        }
        <button className={styles.cloud__filter__menu__ctaBtn} type="submit" >Filter</button>
        {!isDesktop &&
          <button
            className={styles.cloud__filter__menu__backBtn}
            onClick={() => setShowFilterMenu(false)}>
            Back
          </button>}
      </form>
    );
  }

  return (
    <div className={styles.cloud__filter}>
      <div className={styles.cloud__filter__title} ref={filterRef}>Filter By: </div>
      {isDesktop ?
        <FilterMenu /> :
        <>
          <button
            className={styles.cloud__filter__popupBtn}
            onClick={() => {
              filterRef.current?.scrollIntoView();
              setShowFilterMenu(true);
            }}>
            Filter < FaGitter />
          </button>
          {showFilterMenu && <FilterMenu />}
        </>
      }
    </div >
  )
}

export default CloudFilter;
