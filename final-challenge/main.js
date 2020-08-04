const menuButton = document.querySelector('.nav-toggle');
const navigation = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('nav--visible');
});
