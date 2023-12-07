export const makeHeading = (heading: string, level: number): string => {
  if (level === 1) {
    let headingString = `<h1>${heading}</h1>`;
    return headingString;
  } else if (level === 2) {
    let headingString = `<h2>${heading}</h2>`;
    return headingString;
  } else if (level === 3) {
    let headingString = `<h3>${heading}</h3>`;
    return headingString;
  } else if (level === 4) {
    let headingString = `<h4>${heading}</h4>`;
    return headingString;
  } else if (level === 5) {
    let headingString = `<h5>${heading}</h5>`;
    return headingString;
  } else if (level === 6) {
    let headingString = `<h6>${heading}</h6>`;
    return headingString;
  } else {
    return "";
  }
};
