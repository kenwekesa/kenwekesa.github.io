$(function () {
    $(document).scroll(function () {
      var $nav = $(".header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  function IconClick() {
      var icon = document.getElementsByClassName("icon");
      icon[0].style.color = "red";
      alert(icon)
  }