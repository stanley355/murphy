import React from 'react';
import { NumberInputInterface } from '../../../../../common/interfaces/NumberInputInterface';

import styles from './PriceInput.module.scss';

const PriceInput = (props: NumberInputInterface) => {
  const { title, fieldName, onChange, step, placeholder } = props;

  return (
    <div className={styles.priceInput}>
      <label htmlFor={fieldName}>{title}</label>
      <input
        type="number"
        name={fieldName}
        id={fieldName}
        step={step}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default PriceInput;