import React from 'react';
import styles from './WebHostsDropdown.module.scss';
import { DropdownInterface } from '../../../../../common/interfaces/DropdownInterface';

const WebHostsDropdown = (props: DropdownInterface) => {
  const { fieldName, onChange } = props;

  const options = [
    {
      value: 7,
      label: "Amazon Web Services",
    },
    {
      value: 6,
      label: "Digital Ocean",
    },
    {
      value: 8,
      label: "Google Cloud Platform",
    },
    {
      value: 5,
      label: "Heroku",
    },
  ]

  return (
    <div className={styles.webHostsDropdown}>
      <label aria-label={fieldName} htmlFor={fieldName} >Web Hosts</label>

      <select name={fieldName} id={fieldName} onChange={onChange}>
        {options.map((option: any) =>
          <option value={option.value} key={option.label}>{option.label}</option>
        )}
      </select>
    </div>
  )

}

export default WebHostsDropdown;