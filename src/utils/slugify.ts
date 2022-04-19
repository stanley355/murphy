export const slugify = (name: string) => {
  const nameArr = name.split(' ');
  if (nameArr.length > 1) {
    return name.replace(/\s/g, '-');
  } else {
    return name;
  }
};
