$(document).ready(function() {
    $(".nav-item").click(function () {
        $("nav-item").removeClass("active");
        $(this).addClass("active");
    });
    $("#toggler").click(function(event) {
        var left =$('.sidebar').css("left");

        $('.sidebar').css($('.sidebar').css("left")=="0px"?{ 'left': '-17rem' }:{ 'left': '0' });      
    });
});
