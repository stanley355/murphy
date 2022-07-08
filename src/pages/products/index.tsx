import React from 'react';
import { GetServerSideProps } from 'next';

import styles from '../../../styles/pages/products.module.scss';
import ProductMeta from '../../clients/pages/products/components/ProductMeta';
import ProductDisplay from '../../clients/pages/products/components/ProductDisplay';
import { fetchAllProducts } from '../../lib/api-fetcher/morphclouds/products';

const Products = (props: any) => {
  const { query, products } = props;

  return (
    <div className='container'>
      <ProductMeta />
      <div className={styles.products}>
        <h1 className={styles.products__title}>Web Services</h1>
        <ProductDisplay query={query} productList={products} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const allProducts = await fetchAllProducts();

  return {
    props: {
      query: query,
      products: allProducts
    }
  }
}

export default Products;