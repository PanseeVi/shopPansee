//   slide
let slide_list = document.querySelector(".slider .slider--list");
let slide_items = document.querySelectorAll(".slider--list .slider--item");
let slide_dots = document.querySelectorAll(".dots li");
let btn_back = document.getElementById("back");
let btn_next = document.getElementById("next");

let active_slide = 0;
let length_slide = slide_items.length - 1;

btn_next.onclick = () => {
  if (active_slide + 1 > length_slide) {
    active_slide = 0;
  } else {
    active_slide += 1;
  }
  reload_slide();
};

btn_back.onclick = () => {
  if (active_slide - 1 < 0) {
    active_slide = length_slide;
  } else {
    active_slide -= 1;
  }
  reload_slide();
};

slide_dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active_slide = key;
    reload_slide();
  });
});

let auto_slider = setInterval(() => {
  btn_next.click();
}, 5000);

let reload_slide = () => {
  let check_left_slide = slide_items[active_slide].offsetLeft;
  slide_list.style.left = -check_left_slide + "px";

  let last_dot_atv = document.querySelector(".dots li.atv");
  last_dot_atv.classList.remove("atv");
  slide_dots[active_slide].classList.add("atv");
  clearInterval(auto_slider);
  auto_slider = setInterval(() => {
    btn_next.click();
  }, 5000);
};
