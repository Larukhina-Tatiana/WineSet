// Аккардеон заголовки
$(".glasses__btn-filter, .filter-title").on("click", function () {
  $(this).toggleClass("filter-title--active");
  $(this).next().slideToggle("200");
});
$(".filter-style").styler();
