export const slugify = (name: string) => {
  const nameArr = name.split(' ');
  if (nameArr.length > 1) {
    return name.toLowerCase().replace(/\s/g, '-');
  } else {
    return name.toLowerCase();
  }
};
