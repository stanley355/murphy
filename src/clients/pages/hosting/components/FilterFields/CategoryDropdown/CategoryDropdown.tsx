import React from 'react';
import styles from './CategoryDropdown.module.scss';
import { DropdownInterface } from '../../../../../common/interfaces/DropdownInterface';

const CategoryDropdown = (props: DropdownInterface) => {
  const { fieldName, onChange } = props;

  const options = [
    { value: null, label: "Any Category" },
    { value: "ANLT", label: "Analytic" },
    { value: "DTBS", label: "Databases" },
    { value: "CMPT", label: "Compute" },
    { value: "CTNR", label: "Container" },
    { value: "STOR", label: "Storage" },
  ]

  return (
    <div className={styles.categoryDropdown}>
      <label aria-label={fieldName} htmlFor={fieldName} >Category</label>

      <select name={fieldName} id={fieldName} onChange={onChange}>
        {options.map((option: any) =>
          <option value={option.value} key={option.label}>{option.label}</option>
        )}
      </select>
    </div>
  )

}

export default CategoryDropdown;