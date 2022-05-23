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
