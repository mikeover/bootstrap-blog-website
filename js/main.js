$(document).ready(function() {
    var clickEvent = false;
    $("#my-carousel").carousel({
	interval: 4000
    }).on("click", ".list-group li", function() {
	console.log("CLICKED");
	clickEvent = true;
	$(".list-group li").removeClass("active");
	$(this).addClass("active");
    }).on("slid.bs.carousel", function(e) {
	console.log("SLID");
	if (!clickEvent) {
	    var count = $(".list-group").children().legnth - 1;
	    var current = $(".list-group li.active");
	    current.removeClass("active").next().addClass("active");
	    var id = parseInt(current.data("slide.to"));
	    if (count == id) {
		$(".list-group li").first().addClass("active");
	    }
	}
	clickEvent = false;
    });
});

$(window).load(function() {
    var boxHeight = $("#my-carousel .carousel-inner").innerHeight();
    var itemLength = $("#my-carousel .item").length;
    var triggerHeight = Math.round(boxHeight/itemLength+1);
    $("#my-carousel .list-group-item").outerHeight(triggerHeight);
});