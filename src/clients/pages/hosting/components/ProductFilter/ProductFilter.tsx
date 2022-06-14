import React from 'react';
import { useFormik } from 'formik';

import styles from './ProductFilter.module.scss';

const ProductFilter = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className={styles.productFilter}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default ProductFilter;