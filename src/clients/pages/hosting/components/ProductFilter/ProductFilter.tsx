import React from 'react';
import { Formik } from 'formik';
import CategoryDropdown from '../FilterFields/CategoryDropdown';
import styles from './ProductFilter.module.scss';

const ProductFilter = () => {

  return (
    <div className={styles.productFilter}>
      <Formik
        initialValues={{ category: '' }}
        onSubmit={(values: any) => {
          console.log(values);
        }}
      >
        {({ setFieldValue, handleChange, handleSubmit, }) =>
          <form onSubmit={handleSubmit}>
            <CategoryDropdown
              fieldName='category'
              onChange={(category) => setFieldValue('category', category.value)}
            />

            <button type="submit">Submit</button>
          </form>
        }
      </Formik>
    </div >
  )
}


export default ProductFilter;