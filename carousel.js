const ITEM_WIDTH = 175;
let ITEMS_TO_SHOW = "";
const bullets = document.querySelectorAll(".bullet");
const thumbnails = document.querySelector(".carousel__thumbnails");
const carousel_img = document.querySelector(".carousel__img");
const carousel_title = document.querySelector(".carousel__title_info");

window.innerWidth < 720 ? (ITEMS_TO_SHOW = 2) : (ITEMS_TO_SHOW = 4);

const toggleActive = (index) => {
  bullets.forEach((bullet, bulletIndex) => {
    bullet.classList.toggle("active", bulletIndex === index);
  });
};

const carouselScroll = (index) => {
  thumbnails.scrollTo({
    left: index * ITEMS_TO_SHOW * ITEM_WIDTH,
    behavior: "smooth",
  });
};

const onBulletClick = (index) => {
  carouselScroll(index);
  toggleActive(index);
};

bullets.forEach((item, index) => {
  item.addEventListener("click", onBulletClick.bind(null, index));
});

thumbnails.childNodes.forEach((item) => {
  item.addEventListener("click", (event) => {
    const imageSrc = event.target.getAttribute("src");
    carousel_img.src = imageSrc;
    const dataText = event.target.getAttribute("data-text");
    carousel_title.textContent = dataText;
    carousel_img.classList.add("animation");
    setTimeout(() => {
      carousel_img.classList.remove("animation");
    }, 400);
  });
});
