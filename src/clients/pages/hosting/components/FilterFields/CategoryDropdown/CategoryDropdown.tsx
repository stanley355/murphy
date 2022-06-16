import React from 'react';
import Select from 'react-select';
import styles from './CategoryDropdown.module.scss';
import { DropdownInterface } from '../../../../../common/interfaces/DropdownInterface';

const CategoryDropdown = (props: DropdownInterface) => {
  const { fieldName, onChange } = props;

  const options = [
    { value: "", label: "Any Category" },
    { value: "ANLT", label: "Analytic" },
    { value: "DTBS", label: "Databases" },
    { value: "CMPT", label: "Compute" },
    { value: "CTNR", label: "Container" },
    { value: "STOR", label: "Storage" },
  ]

  return (
    <div className={styles.categoryDropdown}>
      <label aria-label={fieldName} htmlFor={fieldName} >Category</label>
      <Select
        id={fieldName}
        aria-labelledby={fieldName}
        options={options}
        onChange={onChange}
        placeholder='Choose product category'
      />
    </div>
  )

}

export default CategoryDropdown;