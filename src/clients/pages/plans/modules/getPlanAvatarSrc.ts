export const getPlanAvatarSrc = (planName: string) => {
  const planNameArr = planName.split(' ');
  const name = planNameArr[0].toLowerCase();

  return `/static/images/partners/${name}.webp`;
}
