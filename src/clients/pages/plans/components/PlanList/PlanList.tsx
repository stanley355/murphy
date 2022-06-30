import React from 'react';

import styles from './PlanList.module.scss';
import PlanAccordion from '../PlanAccordion';
import { getPlanAvatarSrc } from '../../modules/getPlanAvatarSrc';
import { setPlanPriceDisplay } from '../../../../common/modules/setPriceDisplay';

interface IPlanList {
  list: [any]
}

const PlanList = (props: IPlanList) => {
  const { list } = props;

  return (
    <div className={styles.planList}>
      {list.map((item: any) =>
        <div className={styles.planList__card}>
          <div className={styles.planList__card__head}>
            <div className={styles.planList__card__head__imgContainer}>
              <img
                src={getPlanAvatarSrc(item.name)}
                alt={item.name}
                width={60}
                height={60}
              />
            </div>
            <div className={styles.planList__card__head__details}>
              <div className={styles.planList__card__head__title}>{item.name}</div>
              <div className={styles.planList__card__head__price}>{setPlanPriceDisplay(item)}</div>
            </div>
          </div>
          <PlanAccordion title="See Description" body={item.description} />
          <PlanAccordion title="See Description" body={item.description} />
        </div>
      )}
    </div>
  )
}

export default PlanList;