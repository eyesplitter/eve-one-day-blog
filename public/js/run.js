$(function(){
  $(".message-body").mCustomScrollbar({
    theme: "space",
    mouseWheel:{ preventDefault: "true" },
    scrollInertia: 0
  });
  $('.dropdown-toggle').dropdown();
});
