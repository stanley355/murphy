import React from 'react';
import { FaGripLines } from 'react-icons/fa';
import Link from 'next/link';

import styles from './CloudCalculatorCopy.module.scss';

const CloudCalculatorCopy = () => {
  return (
    <div className={styles.cloudcalculator__copy}>
      <div className={styles.cloudcalculator__copy__or}> <FaGripLines /> <FaGripLines /> OR <FaGripLines /> <FaGripLines /></div>
      <div>Tell us your needs and pick the best recommendation from us.</div>
      <Link href="/calculator">
        <a title='Web Hosting Calculator'
          className={styles.cloudcalculator__copy__cta}
        >Give me recommendation  </a>
      </Link>
    </div>
  )
}

export default CloudCalculatorCopy;
