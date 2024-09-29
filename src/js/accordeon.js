// Аккардеон заголовки
$(".filter-title").on("click", function () {
  $(this).toggleClass("filter-title--active");
  $(this).next().slideToggle("200");
});
$(".filter-style").styler();
