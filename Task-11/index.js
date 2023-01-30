const manageClasses = () => {
  const classElem = document.querySelector('.one');
  classElem.classList.add('selected');

  const classElem1 = document.querySelector('.two');
  classElem1.classList.remove('selected');

  const classElem2 = document.querySelector('.three ');
  classElem2.classList.toggle('three_done');

  const classElem3 = document.querySelector('.four ');
  if (classElem3.classList.contains('some-class')) {
    classElem3.classList.add('another-class');
  }
};
