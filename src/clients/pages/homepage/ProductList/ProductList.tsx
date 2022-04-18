import React from 'react';
import Link from 'next/link';
import { FaLink, FaSearch } from 'react-icons/fa';

import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.productList}>
      <div className='container'>
        <div className={styles.productList__cardContainer}>
          <Link href="/shortenurl">
            <a title='Shorten URL' className={styles.productList__card}>
              <FaLink />
              Shorten URL
            </a>
          </Link>
          <Link href="/morphsearch">
            <a title='Search API' className={styles.productList__card}>
              <FaSearch />
              Morph Search
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
