export const mapDividendFrequencyToNumMonths = (dividendFrequency: number) => {
  if (dividendFrequency == 12) {
    return 1;
  }
  if (dividendFrequency == 4) {
    return 4;
  }
  return 12;
};
