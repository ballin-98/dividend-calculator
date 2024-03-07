export const getMonths = () => {
  return [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
};

export const getQuarters = () => {
  return ["March", "June", "September", "December"];
};

export const getYears = (currentYear: number, years: number) => {
  const yearsArr: string[] = [];
  for (let i = 0; i < years; i++) {
    yearsArr.push(currentYear.toString());
    currentYear += 1;
  }
  return yearsArr;
};
