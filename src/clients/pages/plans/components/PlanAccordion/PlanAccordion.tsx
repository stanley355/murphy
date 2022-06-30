import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './PlanAccordion.module.scss';

interface IPlanAccordion {
  title: string,
  body: any
}

const PlanAccordion = (props: IPlanAccordion) => {
  const { title, body } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.planAccordion}>
      <button onClick={() => setOpen(!open)}>
        <span>{title} </span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {open && <div className={styles.planAccordion__body}> {body} </div>}
    </div>
  )
}

export default PlanAccordion;