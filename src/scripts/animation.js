import $ from "jquery";

$(window).on("mousewheel", function (event) {
  if (event.originalEvent.wheelDelta >= 0) {
    $(".animatedarrowtwo").removeClass("point-down").addClass("point-up");
    $(".animatedarrowone").removeClass("point-up").addClass("point-down");
  } else {
    $(".animatedarrowtwo").removeClass("point-up").addClass("point-down");
    $(".animatedarrowone").removeClass("point-down").addClass("point-up");
  }
});

$(".animations").on("transitionend", function () {
  $(".animatedarrowone").removeClass("point-down").removeClass("point-up");
  $(".animatedarrowtwo").removeClass("point-down").removeClass("point-up");
});

$("#topbutton").on("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
