export const finishForm = () => {
  const loginElem = document.querySelector('.login-form');

  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');

  loginElem.append(inputElem);

  const inputElem1 = document.querySelector("input[type='text']");
  inputElem1.setAttribute('type', 'password');
};
