$(window).resize(function() {
    var width = $(window).width();
    if (width < 739){
        var divElement = document.querySelector("#tableProduct");
        divElement.classList.remove("col-xs-8", "col-sm-8", "col-md-8", "col-lg-8");
        divElement.classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");

        document.querySelector("#total").classList.remove("col-xs-4", "col-sm-4", "col-md-4", "col-lg-4");
        document.querySelector("#total").classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
    } 
    else {
        var divElement = document.querySelector("#tableProduct");
        divElement.classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
        divElement.classList.add("col-xs-8", "col-sm-8", "col-md-8", "col-lg-8");

        document.querySelector("#total").classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12");
        document.querySelector("#total").classList.add("col-xs-4", "col-sm-4", "col-md-4", "col-lg-4");

    }
});