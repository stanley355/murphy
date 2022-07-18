import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './PlanTabs.module.scss';

import PlanComparison from '../PlanComparison';
import PlanList from '../PlanList';

interface IPlanTabs {
  planList: [any]
}

const PlanTabs = (props: IPlanTabs) => {
  const { planList } = props;
  const [activeTab, setActiveTab] = useState("list");
  const [comparisonList, setComparisonList] = useState<Array<any>>([]);
  

  const addComparisonItem = (item: any) => {
    const newList = [...comparisonList];
    newList.push(item);
    setComparisonList(newList)
    setActiveTab("comparisons");
  }

  const removeComparisonItem = (itemID: number) => {
    const newList = [...comparisonList].filter((item: any) => item.id !== itemID);
    setComparisonList(newList)
    setActiveTab("comparisons");
  }

  const setShowingTab = (tab: string) => {
    switch (tab) {
      case "list":
        return <PlanList list={planList} onCompareClick={addComparisonItem} />
      case "comparisons":
        return <PlanComparison comparisonList={comparisonList} onRemoveClick={removeComparisonItem} />
      default:
        return <PlanList list={planList} onCompareClick={addComparisonItem} />
    }
  }

  return (
    <div className={styles.planTabs}>
      <div className={styles.planTabs__head}>
        <button
          type="button"
          onClick={() => setActiveTab("list")}
          className={classNames(activeTab === "list" ? "" : styles["btnInactive"])}
        >
          Plans
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("comparisons")}
          className={classNames(activeTab === "comparisons" ? "" : styles["btnInactive"])}
        >
          Comparisons
        </button>
      </div>
      <div className={styles.planTabs__body}>
        {setShowingTab(activeTab)}
      </div>
    </div>
  );
}

export default PlanTabs;