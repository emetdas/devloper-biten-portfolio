// navigation-start
let menu_icon = document.querySelector('.menu_icon');
let menu_icon_box = document.querySelector('.menu_icon_box');
let nav_menu = document.querySelector('.nav_menu');
let nav_link = document.querySelectorAll('.nav_link');

menu_icon.addEventListener('click', () => {
  menu_icon_box.classList.toggle('active');
  nav_menu.classList.toggle('active');
});
nav_link.forEach((e) => {
  e.addEventListener('click', () => {
    menu_icon_box.classList.remove('active');
    nav_menu.classList.remove('active');
  });
});

// navigation-end
// skill-prigress-start
let progress = document.querySelectorAll('.progress-inner');
progress.forEach((e) => {
  let { progress } = e.dataset;
  e.style.width = `${progress}`;
  // const update = () => {
  //   let { per } = e.dataset;
  //   per = 10;
  //   let target = +progress;
  //   let count = +per;
  //   let inc = target / speed;
  //   if (count < target) {
  //     per += Math.floor(count + inc);
  //     setTimeout(update, 1);
  //   } else {
  //     per = target;
  //   }
  // };
});
// skill-prigress-end
// Project-filter-start
// Project-filter-end
