export const setPlanHostURL = (planName: string) => {
    const planNameArr = planName.split(' ');
    const planHostName = planNameArr[0].toLowerCase();
    return `/clouds/${planHostName}`;
}
