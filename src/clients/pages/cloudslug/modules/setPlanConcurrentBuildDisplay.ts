interface IPlanConcurrentBuild {
  concurrent_build: number;
  concurrent_build_unit: string;
  concurrent_build_timeunit: string;
  concurrent_build_desc: string;
}

export const setPlanConcurrentBuildDisplay = (plan: IPlanConcurrentBuild) => {
  if (plan.concurrent_build) {
    let concurrent_build = `${plan.concurrent_build}`;
    if (plan.concurrent_build_unit) concurrent_build += ` ${plan.concurrent_build_unit}`;
    if (plan.concurrent_build_timeunit) concurrent_build += `/${plan.concurrent_build_timeunit}`;
    return concurrent_build;
  } else if (plan.concurrent_build_desc) {
    return plan.concurrent_build_desc;
  } else {
    return 'Not Available';
  }
};
