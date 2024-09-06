document.addEventListener("DOMContentLoaded", () => {
  /*
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

  const menuBtns = document.querySelectorAll(".nav__btn");
  const drops = document.querySelectorAll(".menu-dropdowm");

  menuBtns.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn
        .closest(".nav__item")
        .querySelector(".menu-dropdown");

      menuBtns.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("nav__btn--active");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("menu-dropdown--active");
        }
      });

      drop.classList.toggle("menu-dropdown--active");
      currentBtn.classList.toggle("nav__btn--active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav__list")) {
      menuBtns.forEach((el) => {
        el.classList.remove("nav__btn--active");
      });

      drops.forEach((el) => {
        el.classList.remove("menu-dropdown--active");
      });
    }
  });
});
