
$(document).ready(() => {
    $('.accordian-tabs-ul').children('li').first().children('a').addClass('active')
        .next().addClass('is-open').show();

    $('.accordian-tabs-ul').on('click', 'li > a', () => {

      if (!$(this).hasClass('active')) {

        $('.accordian-tabs-ul .is-open').removeClass('is-open').hide();
        $(this).next().toggleClass('is-open').toggle();

        $('.accordian-tabs-ul').find('.active').removeClass('active');
        $(this).addClass('active');

      }

   });
});
