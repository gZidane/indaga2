$('document').ready(function()
{
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        afterRender: function()
        {
            $('.btnArriba').click(function()
            {
                $.fn.pagepiling.moveTo(1);
            });
            $('.btnAbajo').click(function()
            {
                $.fn.pagepiling.moveTo(2);

            });

            $('.botonesCont button').css({ height: $('.botonesCont').width() + 'px' });
            $('.cabeceraAbajo a img').css({ width: ($(window).width() * 0.023) + 'px', height: ($(window).width() * 0.023) + 'px' });
            $('.contenidoArriba img').css({ top: ($(window).height() / 2) - ($('.contenidoArriba img').height() / 2) + 'px' });
            $('.contenidoArriba2 img').css({ top: ($(window).height() / 2) - ($('.contenidoArriba img').height() / 2) + 'px' });


            // setTimeout(function()
            // {
            //     $('.seccion1Der .textoInicio').each(function(k)
            //     {
            //         let el = $(this);
            //
            //         setTimeout(function()
            //         {
            //             el.addClass('fadeUp');
            //         }, 600 * k);
            //     });
            // }, 500);
        },
    });






});

$(window).resize(function()
{
    if( $(window).width() >= 576 )
    {
        $('.botonesCont button').css({ height: $('.botonesCont').width() + 'px' });
        $('.cabeceraAbajo a img').css({ width: ($(window).width() * 0.023) + 'px', height: ($(window).width() * 0.023) + 'px' });
        $('.contenidoArriba img').css({ top: ($(window).height() / 2) - ($('.contenidoArriba img').height() / 2) + 'px' });
        $('.contenidoArriba2 img').css({ top: ($(window).height() / 2) - ($('.contenidoArriba img').height() / 2) + 'px' });
    }
});
