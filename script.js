"use strict";

// Navigation
const header_container = document.querySelector(".header__container");
const logo = document.querySelector(".logo__box a");
const link_box = document.querySelector(".links");
const links = document.querySelectorAll(".link");

function opacity(e) {
  if (e.target.classList.contains("link")) {
    links.forEach((item, ind) => {
      if (item !== e.target) {
        item.style.opacity = this;
      }
    });
  }
}

link_box.addEventListener("mouseover", opacity.bind(0.5));
link_box.addEventListener("mouseout", opacity.bind(1));

// Slider
const slider_img = document.querySelectorAll(".slider__img img");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

let curSlide = 0;
const maxSlide = slider_img.length;

slider_img.forEach((item, ind) => {
  item.style.transform = `translateX(${ind * 100}%)`;
});

function moveSlide(slideNum) {
  slider_img.forEach(function (item, ind) {
    item.style.transform = `translateX(${(ind - slideNum) * 100}%)`;
  });
}

rightBtn.addEventListener("click", function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  console.log(curSlide);
  moveSlide(curSlide);
});

leftBtn.addEventListener("click", function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  console.log(curSlide);
  moveSlide(curSlide);
});
