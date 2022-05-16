export const capitalizeFirstLetter = (txt: any) => {
  if (txt.length > 0) {
    if (txt.match(/-/g)) {
      const txtArr = txt.split('-');
      const newTxtArr = txtArr.map((txt: string)=> txt.charAt(0).toUpperCase() + txt.slice(1));
      return newTxtArr.join(' ');
    }
    return txt.charAt(0).toUpperCase() + txt.slice(1);
  }
  return "";
};
