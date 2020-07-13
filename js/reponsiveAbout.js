$(window).resize(function() {
    var width = $(window).width();
    if (width < 739){
        document.querySelector("#context").classList.remove("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6");
        document.querySelector("#context").classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
    } else {
        document.querySelector("#context").classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
        document.querySelector("#context").classList.add("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6");
    }
});
