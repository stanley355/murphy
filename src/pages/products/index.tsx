import React from 'react';

import { GetServerSideProps } from 'next';
import ProductDisplay from '../../clients/pages/products/components/ProductDisplay';
import { fetchAllProducts } from '../../lib/api-fetcher/morphclouds/products';

const Products = (props: any) => {
  const { products } = props;
  return (
    <div className='container'>
      <div>
        <h1>Web Services</h1>
        <ProductDisplay productList={products} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const allProducts = await fetchAllProducts();

  return {
    props: {
      products: allProducts
    }
  }
}

export default Products;