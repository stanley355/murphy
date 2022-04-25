export const capitalizeFirstLetter = (txt: any) => {
  if (txt.length > 0) {
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }
  return "";
};
