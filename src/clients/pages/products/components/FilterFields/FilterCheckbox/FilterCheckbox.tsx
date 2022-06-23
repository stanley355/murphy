import React from 'react';
import { CheckboxesInterface } from '../../../../../common/interfaces/CheckboxesInterface';

import styles from './FilterCheckbox.module.scss';

const FilterCheckbox = (props: CheckboxesInterface) => {
  const { title, fieldName, onChange } = props;
  return (
    <div className={styles.filterCheckbox}>
      <label htmlFor={fieldName}>{title}</label>
      <input 
        type="checkbox" 
        name={fieldName} 
        id={fieldName} 
        onChange={onChange}
      />
    </div>
  )
}

export default FilterCheckbox;