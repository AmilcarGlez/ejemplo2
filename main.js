$(document).ready(function(){
    $("#menu a").click(function(e){
        e.preventDefault(); // evitar que se vaya al enlance

         // console.log($("#services").offset().top);
        $("html, body").animate({
            scrollTop: $($(this).attr('href')).offset().top
        });
        return false;
    });
});