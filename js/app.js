
//button//
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
})

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        btnScrollToTop.style.display = "block";
    } else {
        btnScrollToTop.style.display = "none";
    }
}

//navbar collapse//

$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

//navbar scroll//

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});

//date//

const date = document.getElementById("date");
const currentDate = new Date();
const month = currentDate.getMonth() + 1;
const monthName = currentDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
const day = currentDate.getDate();
const fullDate = monthName + '  ' + day;

date.innerHTML = fullDate;


// messing around with openAI to create animated elements. Keeping here just for fun.

// var ball = document.createElement('div');
// ball.style.width = '50px';
// ball.style.height = '50px';
// ball.style.borderRadius = '25px';
// ball.style.backgroundColor = '#eb8565';
// ball.style.position = 'absolute';
// ball.style.zIndex = '1';
// ball.style.top = '0px';
// ball.style.left = '0px';
// document.body.appendChild(ball);
// var x = 0;
// var y = 0;
// var xDirection = 1;
// var yDirection = 1;
// var xSpeed = 1;
// var ySpeed = 1;
// function moveBall() {
//     x += xDirection * xSpeed;
//     y += yDirection * ySpeed;
//     ball.style.left = x + 'px';
//     ball.style.top = y + 'px';
//     if (x + 50 >= window.innerWidth) {
//         xDirection = -1;
//     } else if (x <= 0) {
//         xDirection = 1;
//     }
//     if (y + 50 >= window.innerHeight) {
//         yDirection = -1;
//     } else if (y <= 0) {
//         yDirection = 1;
//     }
// }
// setInterval(moveBall, 10);