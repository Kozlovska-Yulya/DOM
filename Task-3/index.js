export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};

export const getItemsArray = () => {
  const itemsArray = document.querySelectorAll('.tool');
  const elementsArray = Array.from(itemsArray);
  console.dir(elementsArray);
  return elementsArray;
};
