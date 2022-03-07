$(".hamburger__link").click((e) => {
  e.preventDefault();
  $("nav").toggleClass("open");
  $("body").toggleClass("open");
});
