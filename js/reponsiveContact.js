$(window).resize(function() {
    var width = $(window).width();
    if (width < 739){

        document.querySelector("#contactIntro").classList.remove("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6");
        document.querySelector("#contactIntro").classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12");

        document.querySelector("#contactCall1").classList.remove("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6");
        document.querySelector("#contactCall1").classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12");

        document.querySelector("#contactCall2").classList.remove("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6");
        document.querySelector("#contactCall2").classList.add("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12");
    } else {

        document.querySelector("#contactIntro").classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12");
        document.querySelector("#contactIntro").classList.add("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6");
        
        document.querySelector("#contactCall1").classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12");
        document.querySelector("#contactCall1").classList.add("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6");
                
        document.querySelector("#contactCall2").classList.remove("col-xs-12", "col-sm-12", "col-md-12", "col-lg-12", "col-xl-12");
        document.querySelector("#contactCall2").classList.add("col-xs-6", "col-sm-6", "col-md-6", "col-lg-6", "col-xl-6");
    }
})