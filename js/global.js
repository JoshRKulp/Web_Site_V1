$(document).ready(function() {
	$("#nav-show").on("click",function(){
		$("body").toggleClass("nav-open");
		console.log("navshow");
		console.log($("#P1").getPlayer().getPlayerState());
		$("#P1").getPlayer().pauseVideo();
		$("#P1").getPlayer().unloadModule();
	})

    // Optimalisation: Store the references outside the event handler:
    var $window = $(window);

    function checkWidth() {
        var windowsize = $window.width();
        console.log(windowsize);
        jQuery("#wrapper_mbYTP_P1").css("display", "none");
        $("#P1").getPlayer().pauseVideo();

        if (windowsize < 400) {
            console.log("less than 400");
            jQuery("#nav-wrap").css("position", "fixed");
            jQuery("#wrapper_mbYTP_P1").css("display", "none");
            $("#P1").getPlayer().pauseVideo();
            jQuery("#gridVideo").css("color", "black");
                     };
        if (windowsize > 400) {
            console.log("less than 400");
            jQuery("#nav-wrap").css("position", "");
           };
        }

        function checkWidthOnLoad() {
        var windowsize = $window.width();
        console.log(windowsize);

        if (windowsize < 400) {
            console.log("less than 400");
            jQuery("#nav-wrap").css("position", "fixed");
            jQuery("#wrapper_mbYTP_P1").css("display", "none");
            jQuery("#gridVideo").css("color", "black");
            $("#P1").getPlayer().pauseVideo();
                     };
        }
    // Execute on load
    checkWidthOnLoad();
    // Bind event listener
    $(window).resize(checkWidth);
});

$(".container").fitVids();