import React from 'react';
import { Formik } from 'formik';
import WebHostsDropdown from '../FilterFields/WebHostsDropdown';
import CategoryDropdown from '../FilterFields/CategoryDropdown';
import FilterCheckbox from '../FilterFields/FilterCheckbox';
import PriceInput from '../FilterFields/PriceInput';
import styles from './ProductFilter.module.scss';

interface ProductFilterInterface {
  onSubmit: (values: any) => void
}

const ProductFilter = (props: ProductFilterInterface) => {
  const { onSubmit } = props;

  const formInitialValues = {
    web_host_id: null,
    category: '',
    free_tier: false,
    free_trial: false,
    max_price: null,
  }

  return (
    <div className={styles.productFilter}>
      <div className={styles.productFilter__title}>Filter By:</div>
      <Formik
        initialValues={formInitialValues}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, handleSubmit, }) =>
          <form onSubmit={handleSubmit}>
            <WebHostsDropdown
              fieldName='web_host_id'
              onChange={(e) => setFieldValue('web_host_id', e.target.value)}
            />

            <CategoryDropdown
              fieldName='category'
              onChange={(e) => setFieldValue('category', e.target.value)}
            />

            <PriceInput
              title='Max Price per Month'
              fieldName='max_price'
              step='0.01'
              placeholder='Min price start from $0.00'
              onChange={(e) => setFieldValue('max_price', e.target.value)}
            />

            <FilterCheckbox
              title="Free Tier"
              fieldName='free_tier'
              onChange={(e) => setFieldValue('free_tier', e.target.checked)}
            />
            <FilterCheckbox
              title="Free Trial"
              fieldName='free_trial'
              onChange={(e) => setFieldValue('free_trial', e.target.checked)}
            />

            <button
              className={styles.productFilter__cta}
              type="submit">
              Filter
            </button>
          </form>
        }
      </Formik>
    </div>
  )
}


export default ProductFilter;