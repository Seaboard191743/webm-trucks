export const createElement = ({ tagN, classN, attributes = {} }) => {
  const element = document.createElement(tagN);
  classN.length ? element.classList.add(...classN) : null;
  Object.keys(attributes).forEach((key) =>
    element.setAttribute(key, attributes[key])
  );
  return element;
};
