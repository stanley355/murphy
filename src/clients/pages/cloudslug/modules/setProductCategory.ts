export const setProductCategory = (category: string) => {
  switch (category) {
    case 'ANLT':
      return 'Analytics';
    case 'STOR':
      return 'Storage';
    case 'DTBS':
      return 'Databases';
    case 'CMPT':
      return 'Computing';
    case 'CTNR':
      return 'Container';
    default:
      return '';
  }
};
