
// ---------------------- MENU ---------------------- //
const navId = document.getElementById("nav_menu"),
    ToggleBtnId = document.getElementById("toggle_btn"),
    CloseBtnId = document.getElementById("close_btn");

// ------------------- SHOW MENU -------------------- //
ToggleBtnId.addEventListener("click", () => {
    navId.classList.add("show");
});

// ------------------- HIDE MENU ------------------- //
CloseBtnId.addEventListener("click", () => {
    navId.classList.remove("show");
});

// -------------------- REVIEWS --------------------//
// const controls = document.querySelectorAll('.control');
// let currentCard = 0;
// const cards = document.querySelectorAll('.card');
// const maxCards = cards.length;

// controls.forEach(control => {
//     control.addEventListener('click', () => {
//         const isLeft = control.classList.contains('arrow-left');
//         const isRight = control.classList.contains('arrow-right');
//         if (isLeft) {
//             currentCard -= 1;
//             if (currentCard < 0) {
//                 currentCard = maxCards - 1;
//             }
//         } else {
//             currentCard += 1;
//             if (currentCard >= maxCards) {
//                 currentCard = 0;
//             }
//         }

//         cards.forEach(card => {
//             card.classList.remove('current-card');
//             cards[currentCard].scrollIntoView();
//             //{behavior: "smooth"}

//             cards[currentCard].classList.add('current-card');
//         })
//     })
// });

//----------------------------- CARROSSEL GLIDE ------------------------------//
const responsiveCarousel = document.querySelector(".glider");

const carouselGlider = new Glider(responsiveCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    arrows: {
        prev: document.querySelector(".js-prev"),
        next: document.querySelector(".js-next"),
    },
    scrollLock: true,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: document.querySelector(".js-dots"),
            }
        }
    ]
});

//-----------------------------  ------------------------------//

// ==== Animate on Scroll Initialize  ==== //
// AOS.init();

// ==== GSAP Animations ==== //
// ==== LOGO  ==== //
// gsap.from(".logo", {
//   opacity: 0,
//   y: -10,
//   delay: 1,
//   duration: 0.5,
// });
// // ==== NAV-MENU ==== //
// gsap.from(".nav_menu_list .nav_menu_item", {
//   opacity: 0,
//   y: -10,
//   delay: 1.4,
//   duration: 0.5,
//   stagger: 0.3,
// });
// // ==== TOGGLE BTN ==== //
// gsap.from(".toggle_btn", {
//   opacity: 0,
//   y: -10,
//   delay: 1.4,
//   duration: 0.5,
// });
// // ==== MAIN HEADING  ==== //
// gsap.from(".main-heading", {
//   opacity: 0,
//   y: 20,
//   delay: 2.4,
//   duration: 1,
// });
// // ==== INFO TEXT ==== //
// gsap.from(".info-text", {
//   opacity: 0,
//   y: 20,
//   delay: 2.8,
//   duration: 1,
// });
// // ==== CTA BUTTONS ==== //
// gsap.from(".btn_wrapper", {
//   opacity: 0,
//   y: 20,
//   delay: 2.8,
//   duration: 1,
// });
// // ==== TEAM IMAGE ==== //
// gsap.from(".team_img_wrapper img", {
//   opacity: 0,
//   y: 20,
//   delay: 3,
//   duration: 1,
// });
