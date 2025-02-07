$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // items:3,
        // loop:true,
       
    })
})

$('#review').owlCarousel({
    loop:true,
    // margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            // nav:true,
            center: true,
            

            
        },
        600:{
            items:1,
            // nav:true
            center: true,
        },
        875:{
            items:1,
            // nav:true
        },
        1000:{
            items:1,
            // nav:true,

        },
        1100:{
            items:1,
            // nav:true,


        }
    }
})

function scrollToTop(){
    window.scrollTo(0,0)
}