$(document).ready(function() {
    $('.accordian-tabs-ul').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();

    $('.accordian-tabs-ul').on('click', 'li > a', function() {

      if (!$(this).hasClass('active')) {

        $('.accordian-tabs-ul .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();

        $('.accordian-tabs-ul').find('.active').removeClass('active');
        $(this).addClass('active');

      }

   });
});



$('.navShowA').click(function(e) {
  e.preventDefault();
  $('.navHide').slideToggle();
  $('.nav-header').toggleClass('navActive');
  $('.navActive').css( "display", "block", "float", "right")
});
