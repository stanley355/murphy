import React from 'react';

import { PricingFilter, ProductFilter } from '../../../constant/FilterItems';
import { filterRedirect } from '../../../module/filterRedirect';

import styles from './CloudFilterDesktop.module.scss';

const CloudFilterDesktop = () => {
  return (
    <div className={styles.cloudfilter__desktop}>
      <div className={styles.cloudfilter__desktop__title}>Filter By: </div>
      <form
        onSubmit={filterRedirect}
        className={styles.cloudfilter__desktop__form}>
        <div className={styles.cloudfilter__desktop__segment}>
          <div className={styles.cloudfilter__desktop__segment__title}>Pricing</div>
          {PricingFilter.map((item) =>
            <div className={styles.cloudfilter__desktop__input} key={item.title}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>
          )}
        </div>

        <div className={styles.cloudfilter__desktop__segment}>
          <div className={styles.cloudfilter__desktop__segment__title}>Product Categories</div>
          {ProductFilter.map((item) =>
            <div className={styles.cloudfilter__desktop__input} key={item.title}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>
          )}
        </div>

        <button type="submit" className={styles.cloudfilter__desktop__cta}>Sort it out</button>
      </form>
    </div >
  )
}

export default CloudFilterDesktop;
