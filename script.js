const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: 17,
    direction: 'horizontal',

    slidesOffsetAfter: 10,
    breakpoints: {
        768: {
            enabled: false,
        }
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


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

const showBtn2 = document.querySelector("#showBtn2");
const hideBtn2 = document.querySelector("#hideBtn2");
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


