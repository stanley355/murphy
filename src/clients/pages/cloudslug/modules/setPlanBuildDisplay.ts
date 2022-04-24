interface IPlanBuild {
  build: number;
  build_unit: string;
  build_timeunit: string;
  build_desc: string;
}

export const setPlanBuildDisplay = (plan: IPlanBuild) => {
  if (plan.build) {
    let build = `${plan.build}`;
    if (plan.build_unit) build += ` ${plan.build_unit}`;
    if (plan.build_timeunit) build += `/${plan.build_timeunit}`;
    return build;
  } else if (plan.build_desc) {
    return plan.build_desc;
  } else {
    return 'Not Available';
  }
};
