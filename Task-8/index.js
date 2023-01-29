const createButton = (buttonText) => {
  const bodyElem = document.querySelector('body');

  const btnElem = document.createElement('button');
  btnElem.textContent = buttonText;

  bodyElem.append(btnElem);
};
createButton('Send Email');
