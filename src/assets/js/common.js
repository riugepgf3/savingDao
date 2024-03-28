$(".m_nav").click(function () {
  $(".ws-wap-menu").toggleClass("on");
});
$(".ws-wap-menu ul li").click(function () {
  if ($(this).hasClass("on")) {
    $(this).removeClass("on");
  } else {
    $(this).addClass("on").siblings().removeClass("on");
  }
});
