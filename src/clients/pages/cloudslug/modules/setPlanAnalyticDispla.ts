interface IPlanAnalytic {
  analytic: boolean;
  analytic_price: number;
  analytic_unit: string;
  analytic_timeunit: string;
  analytic_desc: string;
}

export const setPlanAnalyticDisplay = (plan: IPlanAnalytic) => {
  if (plan.analytic) {
    if (plan.analytic_price !== null) {
      let analytic = `$${plan.analytic_price}`;
      if (plan.analytic_unit) analytic += `/${plan.analytic_unit}`;
      if (plan.analytic_timeunit) analytic += `/${plan.analytic_timeunit}`;
      return analytic;
    } else {
      return plan.analytic_desc;
    }
  } else {
    return 'Not Available';
  }
};
