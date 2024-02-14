$(document).ready(function() {
    $("#js-mainNavButton").on("click touchup", function() {
      $("#js-mobileNav").addClass("active");
    });
  
    $("#js-mobileNav--button").on("click touchup", function() {
      $("#js-mobileNav").addClass("hiding");
      setTimeout(function() {
        $("#js-mobileNav")
          .removeClass("active hiding")
          .removeAttr("class");
      }, 305);
    });
});
