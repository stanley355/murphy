interface IPlanBandwidth {
  bandwidth: number;
  bandwidth_unit: string;
  bandwidth_timeunit: string;
  bandwidth_desc: string;
}

export const setPlanBandwidthDisplay = (plan: IPlanBandwidth) => {
  if (plan.bandwidth) {
    let bandwidth = `${plan.bandwidth}`;
    if (plan.bandwidth_unit) bandwidth += ` ${plan.bandwidth_unit}`;
    if (plan.bandwidth_timeunit) bandwidth += `/${plan.bandwidth_timeunit}`;
    return bandwidth;
  } else if (plan.bandwidth_desc) {
    return plan.bandwidth_desc;
  } else {
    return 'Not Available';
  }
};
