import React from 'react';
import Image from 'next/image';
import Router from 'next/router';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { getPlanAvatarSrc } from '../../modules/getPlanAvatarSrc';
import { setPlanAnalyticDisplay } from '../../../../common/modules/setPlanAnalyticDisplay';
import { setPlanBuildDisplay } from '../../../../common/modules/setPlanBuildDisplay';
import { setPlanBandwidthDisplay } from '../../../../common/modules/setPlanBandwidthDisplay';
import { setPlanConcurrentBuildDisplay } from '../../../../common/modules/setPlanConcurrentBuildDisplay';


interface IPlanComparisonCard {
  plan:any
  onRemoveClick: (id: number) => void
}


const PlanComparisonCard = (props: IPlanComparisonCard) => {
  const { plan, onRemoveClick } = props;

  return (
    <div className="">
      <div className="">
        <Image
          src={getPlanAvatarSrc(plan.name)}
          width={50}
          height={50}
        />
      </div>
      <div className="">{plan.name}</div>
      <div>{plan.free_domain ? <FaCheck /> : <FaTimes />}</div>
      <div>{plan.domain_extension ?? 'custom'}</div>
      <div>{setPlanAnalyticDisplay(plan)}</div>
      <div>{setPlanBandwidthDisplay(plan)}</div>
      <div>{setPlanBuildDisplay(plan)}</div>
      <div>{setPlanConcurrentBuildDisplay(plan)}</div>
      <div>{plan.database_benefit ? <FaCheck /> : <FaTimes />}</div>
      <div>{plan.page_data}</div>
      <div className="">
        <button onClick={() => Router.push(plan.plan_url)}>Purchase</button>
        <button onClick={() => onRemoveClick(plan.id)}>Remove</button>
      </div>
    </div>
  );
}

export default PlanComparisonCard;