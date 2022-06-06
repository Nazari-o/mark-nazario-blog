const menuBtn = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile__menu');
const closeBtn = document.querySelector('.closeBtn');
const categoryBtn = document.querySelector('.category-btn');
const categoryList = document.querySelector('.categories__list');
const backBtn = document.querySelector('.backBtn');

const desktopCategory = document.querySelector('.category-drop');
const desktopCatShow = document.querySelector('.category__drop-wrapper');
const categoryOptionDisable = document.querySelector('.categories__options');

menuBtn.addEventListener('click', function() {
  mobileMenu.classList.add('openMenu');
})

closeBtn.addEventListener('click', function() {
  mobileMenu.classList.remove('openMenu');
})

categoryBtn.addEventListener('click', function() {
  categoryList.classList.add('show-categories');
})

backBtn.addEventListener('click', function() {
  categoryList.classList.remove('show-categories');
})


desktopCategory.addEventListener('click', function() {
  desktopCatShow.classList.toggle('desktop__show-categories');
})

function categoryHide() {
  if (desktopCatShow.classList.contains('desktop__show-categories')) {
    categoryOptionDisable.style.opacity = '1';
  } else {
    categoryOptionDisable.style.opacity = '0';
  }
}