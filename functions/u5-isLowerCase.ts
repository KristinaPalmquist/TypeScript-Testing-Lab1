export const isLowerCase = (text: string): boolean => {
  if (text === "") {
    return false;
  }
  for (let i = 0; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      return false;
    } else if (typeof text[i] === "number") {
      return false;
    }
  }

  if (text === text.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};
