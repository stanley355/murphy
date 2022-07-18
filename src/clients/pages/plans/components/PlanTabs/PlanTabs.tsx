import React, { useState, useReducer } from 'react';
import classNames from 'classnames';
import styles from './PlanTabs.module.scss';

import PlanComparison from '../PlanComparison';
import { planComparisonReducer } from '../../modules/planComparisonReducer';
import { planComparisonState } from '../../modules/planComparisonStore';
import PlanList from '../PlanList';


interface IPlanTabs {
  planList: [any]
}

const PlanTabs = (props: IPlanTabs) => {
  const { planList } = props;
  const [activeTab, setActiveTab] = useState("list");

  const [state, dispatch] = useReducer(planComparisonReducer, planComparisonState);
  const { comparisonList } = state;

  const addComparisonItem = (item: any) => {
    dispatch({ type: 'ADD_ITEM', payload: { item } });
    // setActiveTab("comparisons");
  }

  const setShowingTab = (tab: string) => {
    switch (tab) {
      case "list":
        return <PlanList list={planList} onCompareClick={addComparisonItem} />
      case "comparisons":
        return <PlanComparison comparisonList={planList} />
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