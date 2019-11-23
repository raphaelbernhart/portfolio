
// Nav-Color Toggle
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 458) {
        $('#nav-home, #nav-aboutme, #nav-showroom, #nav-contact').addClass('text-dark');
	} else {
        $('#nav-home, #nav-aboutme, #nav-showroom, #nav-contact').removeClass('text-dark');
	}
});

$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 3026) {
        $('#nav-home, #nav-aboutme, #nav-showroom, #nav-contact').removeClass('text-dark');
	} else {
	}
});

// Infocards Text
$(document).ready(function() {
    $("#choice-web").hover(function() {
        $("#choices-web-text").toggleClass("d-none");
        $("#choices-web-icon").toggleClass("d-none");
        $("#choices-web-title").toggleClass("text-center");
    })
})

$(document).ready(function() {
    $("#choice-video").hover(function() {
        $("#choices-video-text").toggleClass("d-none");
        $("#choices-video-icon").toggleClass("d-none");
        $("#choices-video-title").toggleClass("text-center");
    })
})

$(document).ready(function() {
    $("#choice-graphic").hover(function() {
        $("#choices-graphic-text").toggleClass("d-none");
        $("#choices-graphic-icon").toggleClass("d-none");
        $("#choices-graphic-title").toggleClass("text-center");
    })
})



// Infocard Projekt Toggle
$(document).ready(function() {
    $("#choice-web").click(function() {
        $("#showroom-web").removeClass("d-none");
        $("#showroom-video").addClass("d-none");
        $("#showroom-graphic").addClass("d-none");
    })
})

$(document).ready(function() {
    $("#choice-video").click(function() {
        $("#showroom-video").removeClass("d-none");
        $("#showroom-web").addClass("d-none");
        $("#showroom-graphic").addClass("d-none");
    })
})

$(document).ready(function() {
    $("#choice-graphic").click(function() {
        $("#showroom-graphic").removeClass("d-none");
        $("#showroom-web").addClass("d-none");
        $("#showroom-video").addClass("d-none");
    })
})



// Showroom Show-More Button
$("showroom-web-showMore").click(function() {
    $("").show("fast");
  });


  
// NAV-Line-Home
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 590) {
        $('#nav-line-home').removeClass('active');
        $('#nav-line-aboutme').addClass('active');
	} else {
        $('#nav-line-home').addClass('active');
        $('#nav-line-aboutme').removeClass('active');
	}
});

//NAV-LINE-ABOUTME
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 1345) {
        $('#nav-line-aboutme').removeClass('active');
        $('#nav-line-showroom').addClass('active');
	} else {
        $('#nav-line-showroom').removeClass('active');
	}
});

//NAV-LINE-KONTAKT
$(window).scroll(function() {
	var $height = $(window).scrollTop();
  if($height > 3100) {
        $('#nav-line-showroom').removeClass('active');
        $('#nav-line-contact').addClass('active');
	} else {
        $('#nav-line-contact').removeClass('active');
	}
});