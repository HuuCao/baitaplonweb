$(window).resize(function() {
    var width = $(window).width();
    if (width < 739){
        document.querySelector("#home-slick").style.width = "100%"
        document.querySelector("#home-slick").style.height = "200px"
        document.querySelector("#home-slick").style.marginRight = "0"
    } else {
        document.querySelector("#home-slick").style.width = "850px"
        document.querySelector("#home-slick").style.height = "500px"
        document.querySelector("#home-slick").style.marginRight = "20px"

    }
})