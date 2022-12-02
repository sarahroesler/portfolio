
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
