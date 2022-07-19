export const calcExperience = (currentExp: number, nextExp: number) => {
  const percentValue = Math.floor((currentExp / nextExp) * 100);
  return percentValue >= 100 ? 100 : percentValue;
};
