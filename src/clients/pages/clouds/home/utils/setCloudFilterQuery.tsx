interface ICloudFilterQuery {
  always_free?: Boolean,
  free_tier?: Boolean,
  frontend_support?: Boolean,
  backend_support?: Boolean,
  database_support?:Boolean
}

export const setCloudFilterQuery = (query: ICloudFilterQuery) => {
  if (query !== {}) {
    let filterQuery = '?';

    if (query.always_free) {
      filterQuery += `&always_free=${query.always_free}`
    }
    if (query.free_tier) {
      filterQuery += `&free_tier=${query.free_tier}`
    }
    if (query.frontend_support) {
      filterQuery += `&frontend_support=${query.frontend_support}`
    }

    if (query.backend_support) {
      filterQuery += `&backend_support=${query.backend_support}`
    }

    if (query.database_support) {
      filterQuery += `&database_support=${query.database_support}`
    }

    return filterQuery;
  }

  return "";
}
