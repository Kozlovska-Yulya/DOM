export const finishList = () => {
  const listElem = document.querySelector('.list');

  const finishListElem1 = document.createElement('li');
  finishListElem1.textContent = '8';
  listElem.append(finishListElem1);

  const finishListElem2 = document.createElement('li');
  finishListElem2.textContent = '1';
  listElem.prepend(finishListElem2);

  const listItemElem = document.querySelector('.special');
  const finishListElem3 = document.createElement('li');
  finishListElem3.textContent = '4';
  listItemElem.before(finishListElem3);

  const finishListElem4 = document.createElement('li');
  finishListElem4.textContent = '6';
  listItemElem.after(finishListElem4);
};
