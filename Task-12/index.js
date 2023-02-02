const squaredNumbers = () => {
  const elems = document.querySelectorAll('.number');
  Array.from(elems).forEach((el) => {
    const elementDataset = el.dataset;
    elementDataset.squaredNumber = elementDataset.number ** 2;
  });
};
