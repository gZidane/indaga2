$('document').ready(function()
{
    $('#pagepiling').pagepiling({
        direction: 'vertical',
        afterRender: function()
        {

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
