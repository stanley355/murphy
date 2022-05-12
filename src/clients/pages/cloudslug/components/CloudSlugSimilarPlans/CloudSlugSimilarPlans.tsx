import React from 'react';
import Link from 'next/link';
import { FaBuffer } from 'react-icons/fa';
import { setPlanHostURL } from '../../modules/setPlanHostURL';
import { setPlanPriceDisplay } from '../../modules/setPlanPriceDisplay';
import styles from './CloudSlugSimilarPlans.module.scss';

interface ICloudSlugSimilarPlans {
  hostID: Number;
  planList: [any];
}

const CloudSlugSimilarPlans = (props: ICloudSlugSimilarPlans) => {
  const { hostID, planList } = props;

  const filteredPlan =
    planList &&
    planList
      .filter((plan: any, i: number) => plan.hosts_id !== hostID)
      .filter((plan: any, i: number) => i < 6);

  return (
    <div className={styles.cloudslug__similarplans}>
      <div className="container">
        <div className={styles.cloudslug__similarplans__title}>Similar Plans: </div>
        <div className={styles.cloudslug__similarplans__cardList}>
          {filteredPlan.length > 0 &&
            filteredPlan.map((plan: any) => (
              <div className={styles.cloudslug__similarplans__card} key={plan.name}>
                <div className={styles.cloudslug__similarplans__card__head}>
                  <div>
                    <Link href={setPlanHostURL(plan.name)}>
                      <a title={plan.name}>{plan.name}</a>
                    </Link>
                    <div>Price: {setPlanPriceDisplay(plan)} </div>
                  </div>
                  <Link href={setPlanHostURL(plan.name)}>
                    <a className={styles.cloudslug__similarplans__card__cta} title={plan.name}>
                      <FaBuffer /> Specs
                    </a>
                  </Link>
                </div>
                <div>{plan.description}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CloudSlugSimilarPlans;
