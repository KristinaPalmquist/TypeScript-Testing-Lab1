export const roundPrice = (amount: number, currency?: string): string => {
  currency = currency || "SEK";
  if (amount >= 0) {
    return `${amount.toFixed(2)} ${currency}`;
  } else {
    return `Rounded price could not be calculated.`;
  }
};

export const roundPricePattern = (
  amount: number,
  pricePattern: string
): string => {

  if (amount >= 0) {
    return pricePattern.replace("%PRICE%", amount.toFixed(2));
  } else {
    return `Rounded price could not be calculated.`;
  }
};
