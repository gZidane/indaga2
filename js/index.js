$('document').ready(function()
{
    // $('#pagepiling').pagepiling({
    //     direction: 'vertical',
    //     afterRender: function()
    //     {
    //
    //     },
    // });

    $('.btnArriba, .btnAbajoMovil img').click(function(event)
    {
        event.stopPropagation();
        $.fn.pagepiling.moveTo(1);
    });
    $('.btnAbajo, .btnArribaMovil img').click(function(event)
    {
        event.stopPropagation();
        $.fn.pagepiling.moveTo(2);

    });

    $('.btnArribaMovil').click(function()
    {
        $.fn.pagepiling.moveTo(1);
    });
    $('.btnAbajoMovil').click(function()
    {
        $.fn.pagepiling.moveTo(2);

    });

    if($(window).width() >= 575)
    {
        $('.botonesCont button').css({ height: $('.botonesCont').width() + 'px' });
        $('.cabeceraAbajo a img').css({ width: ($(window).width() * 0.023) + 'px', height: ($(window).width() * 0.023) + 'px' });
        $('.contenidoArriba img').css({ top: ($(window).height() / 2) - ($('.contenidoArriba img').height() / 2) + 'px' });
        $('.contenidoArriba2 img').css({ top: ($(window).height() / 2) - ($('.contenidoArriba img').height() / 2) + 'px' });
    }


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

$('.cerrarCorreoEnviado, .correoEnviadoCont').click(function(event)
{
    event.stopPropagation();

    $('.correoEnviadoCont').fadeOut(300);
});

$('.correoEnviadoInner').click(function(event)
{
    event.stopPropagation();
});

$('#formContacto').on('submit', function(event)
{
    setTimeout(function()
    {
        console.log($('input[type="checkbox"]'));

        $('#formContacto input[type="checkbox"], #formContacto label').on('click', function(event)
        {
            event.stopPropagation();

            $('.correoEnviadoCont').fadeIn(300, function()
            {
                $('.correoEnviadoCont').css({ display: 'flex' });
            });
        });

    }, 1000);


});
