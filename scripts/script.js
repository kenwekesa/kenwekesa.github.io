$(function () {
    $(document).scroll(function () {
      var $nav = $(".header");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  function IconClick() {
      var icon = document.getElementsByClassName("icon");
      var navlinks = document.getElementById("navlinks");
      var mobile_menu_icon = document.getElementById("mobile_menu_icon");

      
      navlinks.classList.toggle('active')
      if(mobile_menu_icon.classList.contains('fa-bars'))
      {
        mobile_menu_icon.className = 'fa fa-times'
      }
      else if(mobile_menu_icon.classList.contains('fa-times'))
      {
        mobile_menu_icon.className='fa fa-bars'
      }
     
  }