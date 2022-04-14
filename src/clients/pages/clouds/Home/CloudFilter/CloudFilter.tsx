import React, { useState, useRef } from 'react';
import { FaGitter } from 'react-icons/fa';
import { FilterItems } from './FilterMenu';

import useResponsive from '../../../../../utils/useResponsive';
import styles from './CloudFilter.module.scss';

const CloudFilter = () => {
  const { isDesktop } = useResponsive();
  const filterRef = useRef<HTMLDivElement>(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const MobileMenu = () => {
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
        <button className={styles.cloud__filter__mobile__backBtn} onClick={() => setShowMobileMenu(false)}>Back</button>
      </div>
    );
  }

  const DesktopMenu = () => {
    return (
      <div className={styles.cloud__filter__desktop} >
        {
          FilterItems.map((item) =>
            <div className={styles.cloud__filter__desktop__input} key={item.title}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>)
        }
        <button className={styles.cloud__filter__desktop__ctaBtn}  >Filter</button>
      </div>
    );
  }

  return (
    <div className={styles.cloud__filter}>
      <div className={styles.cloud__filter__title} ref={filterRef}>Filter By: </div>
      {isDesktop ?
        <DesktopMenu /> :
        <>
          <button
            className={styles.cloud__filter__popupBtn}
            onClick={() => {
              filterRef.current?.scrollIntoView();
              setShowMobileMenu(true);
            }}>
            Filter < FaGitter />
          </button>
          {showMobileMenu && <MobileMenu />}
        </>
      }
    </div >
  )
}

export default CloudFilter;
