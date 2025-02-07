/*const loginButton = document.getElementById("loginBtn")
const loginModal = document.getElementById("loginSection")
const row = document.querySelector(".row")

loginModal.style.display = "none"

loginButton.onclick = showLogin

function showLogin(){
    loginModal.style.display = "block"
}

document.getElementById("closeBtn").addEventListener('click',hideLogin)

function hideLogin(){

    loginModal.style.display = "none";
}*/

$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        // items:3,
        // loop:true,
       
    })
})



$('#skills').owlCarousel({
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
            items:2,
            // nav:true
        },
        1000:{
            items:3,
            // nav:true,

        },
        1100:{
            items:3,
            // nav:true,


        }
    }
})



$('#photoshop').owlCarousel({
    loop:true,

    autoplay:true,
    autoplayTimeout:2500,
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
        },
        875:{
            items:2,
            // nav:true
        },
        1000:{
            items:3,
            // nav:true,

        },
        1100:{
            items:3,
            // nav:true,


        }
    }
})


$('#illustrator').owlCarousel({
    loop:true,

    autoplay:true,
    autoplayTimeout:2500,
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
        },
        875:{
            items:2,
            // nav:true
        },
        1000:{
            items:3,
            // nav:true,

        },
        1100:{
            items:3,
            // nav:true,


        }
    }
})


let valueDisplays = document.querySelectorAll(".num")
let interval = 10000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue){
            clearInterval(counter);
        }
    },duration);
});


function scrollToTop(){
    window.scrollTo(0,0)
}


var typed = new Typed(".auto-type",{
    strings : ["User Researcher","WireFramer","Visual Designer","Interaction Designer","User Tester","Continuous Improvementing"],
    typeSpeed : 100,
    loop : 100
})

// let w = document.getElementsByClassName("word");
// let CW = 0;
// let wArr = [];

// w[CW].style.opacity = 1;

// let letters = (word) => {
//     let content = word.innerHtml;
//     word.innerHtml = "";
//     let 1s  = [];
//     for( let i = 0; i < content.length; i++){
//         let letter = document.createElement
//     }
// }