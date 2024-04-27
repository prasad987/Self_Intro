$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Ethical_Hacker", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Ethical_Hacker", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

// Button onmouse function

var a = 0;

function mouseOver() {

    const name = document.forms['submit-to-google-sheet']['Name'].value;
    const email = document.forms['submit-to-google-sheet']['email'].value;
    const sub = document.forms['submit-to-google-sheet']['sub'].value;
    const msg = document.forms['submit-to-google-sheet']['msg'].value;
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



    if ((name == "" || !email.match(emailCheck) || sub == "" || msg == "") && a == 0) {
        buttonMoveLeft();
        a = 1;
        return false;
    }

    if ((name == "" || !email.match(emailCheck) || sub == "" || msg == "") && a == 1) {
        buttonMoveRight();
        a = 2;
        return false;
    }

    if ((name == "" || !email.match(emailCheck) || sub == "" || msg == "") && a == 2) {
        buttonMoveLeft();
        a = 1;
        return false;
    } else {

        // document.getElementById('submit-btn').click();  
        document.getElementById('submit-btn').style.cursor = 'pointer';
        return false;
    };

};




function buttonMoveLeft() {

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(238%)';

};


function buttonMoveRight() {

    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';

};


function resetBtn() {
    const button = document.getElementById('submit-btn');
    button.style.transform = 'translateX(0%)';
};

//Button function

const scriptURL = 'https://script.google.com/macros/s/AKfycbzb42LF0Ky_qQCSTXyjrhYdAtAEShcbG8zf8PgmK5_GcX04Z_zA4m63cuU67pv-kNNhDg/exec'
const form = document.forms['submit-to-google-sheet']
const sendmsg = document.getElementById("sendmsg")
const btnText = document.getElementById('btnText');
const loadingSpinner = document.getElementById('loadingSpinner');


form.addEventListener('submit', e => {
    e.preventDefault();

    loadingSpinner.style.display = 'inline-block';

    btnText.style.display = 'none';


    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            sendmsg.innerHTML = "Message Sent Successfully"
            setTimeout(function() {
                sendmsg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.sendmsg))
        .finally(() => {
            loadingSpinner.style.display = 'none';

            btnText.style.display = 'inline-block';
        });
});