$(document).ready(function () {
    //Set up options
    var speed = 500; //slide fade speed
    var autoswitch = true; //auto slider option
    var autoswitch_speed = 4000; //auto slider speed

    //add initial active class
    $(".slide").first().addClass("active");

    //hide all slides
    $(".slide").hide();

    //show first slide
    $(".active").show();

    //next slide event listener
    $("#next").on("click", nextSlide);

    //previous slide event listener
    $("#previous").on("click", prevSlide);

    //Auto slideshow functionality
    if (autoswitch === true) {
        setInterval(nextSlide, autoswitch_speed)
    }

    //Function for switching to the next slide
    function nextSlide() {
        $(".active").removeClass("active").addClass("previouslyActive");
        if ($(".previouslyActive").is(":last-child")) {
            $(".slide").first().addClass("active");
        } else {
            $(".previouslyActive").next().addClass("active");
        }
        $(".previouslyActive").removeClass("previouslyActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }

    //Function for moving to the previous slide
    function prevSlide() {
        $(".active").removeClass("active").addClass("previouslyActive");
        if ($(".previouslyActive").is(":first-child")) {
            $(".slide").last().addClass("active");
        } else {
            $(".previouslyActive").prev().addClass("active");
        }
        $(".previouslyActive").removeClass("previouslyActive");
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }

});
