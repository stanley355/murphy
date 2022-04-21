import React from 'react';
import { FaRegTimesCircle } from 'react-icons/fa';

import { PricingFilter, ProductFilter } from '../../../constant/FilterItems';
import { filterRedirect } from '../../../module/filterRedirect';
import styles from './CloudFilterMobile.module.scss';

interface ICloudFilterMobile {
  onCloseClick: () => void
}

const CloudFilterMobile = (props: ICloudFilterMobile) => {
  const { onCloseClick } = props;

  return (
    <div className={styles.cloudfilter__mobile}>
      <button
        onClick={onCloseClick}
        className={styles.cloudfilter__mobile__closeBtn}>
        <FaRegTimesCircle />
      </button>
      <div className={styles.cloudfilter__mobile__title}>Filter By: </div>
      <form
        onSubmit={(e) => {
          filterRedirect(e);
          onCloseClick();
        }}
        className={styles.cloudfilter__mobile__form}>
        <div className={styles.cloudfilter__mobile__segment}>
          <div className={styles.cloudfilter__mobile__segment__title}>Pricing</div>
          {PricingFilter.map((item) =>
            <div className={styles.cloudfilter__mobile__input} key={item.title}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>
          )}
        </div>

        <div className={styles.cloudfilter__mobile__segment}>
          <div className={styles.cloudfilter__mobile__segment__title}>Product Categories</div>
          {ProductFilter.map((item) =>
            <div className={styles.cloudfilter__mobile__input} key={item.title}>
              <input type="checkbox" name={item.param} id={item.param} />
              <label htmlFor={item.param}>{item.title}</label>
            </div>
          )}
        </div>

        <button type="submit" className={styles.cloudfilter__mobile__cta}>Sort it out</button>
      </form>
    </div >
  )
}

export default CloudFilterMobile;
