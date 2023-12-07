export const validateZip = (zip: string): boolean => {
  if (zip === undefined) {
    return false;
  } else if (zip.length !== 5) {
    return false;
  } else if (isNaN(Number(zip))) {
    return false;
  } else if (zip.length === 5 && !isNaN(Number(zip))) {
    return true;
  } else {
    return false;
  }
};
