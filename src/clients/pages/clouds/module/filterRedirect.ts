import Router from 'next/router';
import { setCloudFilterQuery } from './setCloudFilterQuery';

export const filterRedirect = (e: any) => {
  e.preventDefault();
  const { always_free, free_tier, frontend_support, backend_support, database_support } = e.target;
  const query = {
    always_free: always_free.checked,
    free_tier: free_tier.checked,
    frontend_support: frontend_support.checked,
    backend_support: backend_support.checked,
    database_support: database_support.checked,
  };

  const filterQuery = setCloudFilterQuery(query);
  Router.push(`/clouds/${filterQuery}#cloud-list`);
};
