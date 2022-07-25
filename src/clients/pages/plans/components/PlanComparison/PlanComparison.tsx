import React from 'react';
import styles from './PlanComparison.module.scss';
import PlanComparisonCard from '../PlanComparisonCard';

interface IPlanComparison {
  comparisonList: any[],
  onRemoveClick: (itemID: number) => void
}

const PlanComparison = (props: IPlanComparison) => {
  const { comparisonList, onRemoveClick } = props;

  return (
    <div className={styles.planComparison}>
      <div className={styles.planComparison__rowNames}>
        <div className={styles.planComparison__imgWrap}>-</div>
        <div>Plan Name</div>
        <div>Free Domain</div>
        <div>Domain Extension</div>
        <div>Analytics</div>
        <div>Bandwidth</div>
        <div>Build</div>
        <div>Concurrent Build</div>
        <div>Database Benefit</div>
        <div>Page Data</div>
        <div>Base Price</div>
        <div className={styles.planComparison__cta}>Checkout</div>
      </div>
      {comparisonList.length > 0 && comparisonList.map((item: any) =>
        <div key={item.name}>
          <PlanComparisonCard plan={item} onRemoveClick={onRemoveClick} />
        </div>)}
    </div>
  );
}

export default PlanComparison;