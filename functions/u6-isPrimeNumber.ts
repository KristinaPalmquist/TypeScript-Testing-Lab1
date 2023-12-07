export const isPrimeNumber = (number: number): boolean => {
  if (number === undefined || number === 0 || number === 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
