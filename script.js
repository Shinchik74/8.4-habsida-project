const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    direction: 'horizontal',
    grabCursor: true,

    //  mousewheel: true,
    //  watchOverflow: true,
    // resistanceRatio: 0,
    // watchOverflow: true,
freeMode: true,
freeModeSticky: true,
    centeredSlidesBounds: true,
    slidesOffsetAfter: 10,
    slidesPerSetBefore: 20,
    slidesPerGroupAuto: true,
    // slideTiClickedSlide: true,
    // loop: true,

    // touchRatio: 1.2,
    // longSwipesRatio: 0.2,
    // speed: 500,
    // resistanceRatio: 0,
   
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//  const btn = document.querySelectorAll(".logo-button");
//  buttons.forEach(btn => {
//  btn.style.width = "240px";
//  btn.style.height = "72px";
//  });
// buttons.forEach(btn => {
//     btn.classList.add("logo-button");
// });

const showBtn = document.querySelector("#showBtn");
const hideBtn = document.querySelector("#hideBtn");
const buttons = document.querySelectorAll(".button2");

showBtn.addEventListener("click", () => {
    buttons.forEach((m) => m.classList.remove("hidden"));
    showBtn.classList.add("hidden");
    hideBtn.classList.remove("hidden");
});

hideBtn.addEventListener("click", () => {
    buttons.forEach((m) => m.classList.add("hidden"));
    hideBtn.classList.add("hidden");
    showBtn.classList.remove("hidden");
});

const showBtn2 = document.querySelector("#showBtn");
const hideBtn2 = document.querySelector("#hideBtn");
const buttons2 = document.querySelectorAll(".button3");

showBtn2.addEventListener("click", () => {
    buttons2.forEach((m) => m.classList.remove("hidden2"));
    showBtn2.classList.add("hidden2");
    hideBtn2.classList.remove("hidden2");
});

hideBtn2.addEventListener("click", () => {
    buttons2.forEach((m) => m.classList.add("hidden2"));
    hideBtn2.classList.add("hidden2");
    showBtn2.classList.remove("hidden2");
});
