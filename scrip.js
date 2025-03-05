$(document).ready(function() {
    $('mobile_btn').on('click', function() {
        $('mobile_menu').toggleClass('active');
        $('mobile_btn').find('i').toggleClass('fa-x');
    });
    const section = $('section');
    const navItens = $('.nav-itens');

    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;
        if (scrollPosition <= 0) {
            header.css('box-shadow','none');
        } else {
            header.css('box-shadow','5px 1px 5px rgba(0,0,0,0.4)');
        }

        section.each(function(index) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionButton = sectionTop + section.outerHeight();
            if (scrollPosition >= sectionTop && scrollPosition < sectionButton) {
                activeSectionIndex = index;
                return false;
            }
        });
        navItens.remove.Class('active');
        $(navItens[activeSectionIndex]).addClass('active');
    });

    /* Animação */

    scrollReavel().scrollReavel('#cta',{
        origin:'left',
        duratin:2000,
        distance:'20%'
    });

    scrollReavel().scrollReavel('.burguer',{
            origin:'left',
            duratin:2000,
            distance:'20%'
    });

    scrollReavel().scrollReavel('#testimonials_burguer',{
        origin:'left',
        duratin:2000,
        distance:'20%'
    });

    scrollReavel().scrollReavel('#feededback',{
        origin:'right',
        duratin:1000,
        distance:'20%'
});
});