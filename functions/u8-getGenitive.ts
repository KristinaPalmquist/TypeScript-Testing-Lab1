export const getGenitive = (name: string): string => {
  if (name === undefined) {
    return "";
  } else if (name.endsWith("s")) {
    return name;
  } else {
    return name + "s";
  }
};
