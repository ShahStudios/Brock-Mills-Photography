/*----------------------------------------------------*/
/* Start: Preloader
------------------------------------------------------ */
$(window).on("load", function() {
    $("#preloader")
      .delay(1200).fadeOut("slow");
    $("#preloader")
      .delay(1200)
      .fadeOut("slow");
  });
/*----------------------------------------------------*/
/* End: Preloader
------------------------------------------------------ */

 /*----------------------------------------------------*/
/* Start: Smooth Scrolling
------------------------------------------------------ */
// Smooth Scrolling
$(function () {

  $("a.smooth-scroll").click(function (event) {

      event.preventDefault();

      // get section id like #about, #servcies, #work, #team and etc.
      var section_id = $(this).attr("href");

      $("html, body").animate({
          scrollTop: $(section_id).offset().top - 64
      }, 1250, "easeInOutExpo");

  });

});
 /*----------------------------------------------------*/
/* End: Smooth Scrolling
------------------------------------------------------ */

 /*----------------------------------------------------*/
/* Start: Nav Scrolling
------------------------------------------------------ */
(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery
 /*----------------------------------------------------*/
/* End: Nav Scrolling
------------------------------------------------------ */

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

  $("#services-tabs").responsiveTabs({
      animation: 'slide'
  });

});
/* =========================================
             Portfolio
============================================ */
$(window).on('load', function () {

  // Initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function () {

      // get filter value
      var filterValue = $(this).attr('data-filter');

      // filter portfolio
      $("#isotope-container").isotope({
          filter: filterValue
      });

      // active button
      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
  });
});
/* =========================================
             Magnifier
============================================ */
$(function () {

  $("#portfolio-wrapper").magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      gallery: {
          enabled: true
      }
  });

});
/* =========================================
              Stats
============================================ */
$(function () {

  $(".counter").counterUp({
      delay: 10,
      time: 2000
  });

});
/* =========================================
                Animation
============================================ */
// animate on scroll
$(function () {
  new WOW().init();
});
// home animation on page load
$(window).on('load', function () {

  $("#home-heading-1").addClass("animated fadeInDown");
  $("#home-heading-2").addClass("animated fadeInLeft");
  $("#home-text").addClass("animated zoomIn");
  $("#home-btn").addClass("animated zoomIn");
  $("#arrow-down i").addClass("animated fadeInDown infinite");
});