document.write("<script type='text/javascript'  src='assets/js/jsSwitcher/jquery.cookie.js'></script>");

/*-----------------------------------------------------------------------------------
 /* Styles Switcher
 -----------------------------------------------------------------------------------*/

window.console = window.console || (function() {
    var c = {};
    c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function() {
    };
    return c;
})();


jQuery(document).ready(function($) {

    // layout Type				
    if ($.cookie('bg_type') != null) {
        
        if ($.cookie('bg_type') == 'bg_color'){
            $('#s1').attr('checked', true);
			$("#cb_slideshow" ).css("display", "none");
		}else{
            $('#s2').attr('checked', true);
			$("#cb_slideshow" ).css("display", "block" );
		}
    }

    // type profile				
    if ($.cookie('profile_type') != null) {

        if ($.cookie('profile_type') == 'pic_prof_2') {
            $('#r2').attr('checked', true);

            $("#pic_prof_2").css('display', 'block');
            $("#pic_prof_1").css('display', 'none');

        } else {
            $('#r1').attr('checked', true);

            $("#pic_prof_1").css('display', 'block');
            $("#pic_prof_2").css('display', 'none');
        }
    }


    // Layout Colors
    if ($.cookie('layout_color') != null) {
        $("#colors-style").attr("href", $.cookie('layout_color'));
    }


    // Layout bgColors
    if ($.cookie('layout_bgColors') != null) {
        $('body').css('backgroundColor', $.cookie('layout_bgColors')).css('backgroundImage', 'none');
    }


    // Layout bgImage

    if ($.cookie('layout_bgColors') == null) {
        if ($.cookie('layout_bgImage') != null) {
            $('body').css('backgroundImage', $.cookie('layout_bgImage'));
        }
    }


    // Custumize Color

    $(".gray").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/gray.css");
        $.cookie('layout_color', 'assets/css/colors/gray.css');
        return false;
    });

    $(".green").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/green.css");
        $.cookie('layout_color', 'assets/css/colors/green.css');
        return false;
    });

    $(".blue").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/blue.css");
        $.cookie('layout_color', 'assets/css/colors/blue.css');
        return false;
    });

    $(".red").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/red.css");
        $.cookie('layout_color', 'assets/css/colors/red.css');
        return false;
    });

    $(".yellow").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/yellow.css");
        $.cookie('layout_color', 'assets/css/colors/yellow.css');
        return false;
    });

    $(".DarkBlue").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/DarkBlue.css");
        $.cookie('layout_color', 'assets/css/colors/DarkBlue.css');
        return false;
    });

    $(".orange").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/orange.css");
        $.cookie('layout_color', 'assets/css/colors/orange.css');
        return false;
    });

    $(".rose").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/rose.css");
        $.cookie('layout_color', 'assets/css/colors/rose.css');
        return false;
    });

    $(".lightseagreen").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/lightseagreen.css");
        $.cookie('layout_color', 'assets/css/colors/lightseagreen.css');
        return false;
    });

    $(".darkolivegreen").click(function() {
        $("#colors-style").attr("href", "assets/css/colors/darkolivegreen.css");
        $.cookie('layout_color', 'assets/css/colors/darkolivegreen.css');
        return false;
    });

    // Custumizz Style

    //radio style profile	


    //radio layout	
    $("#r1").on('change', function() {
        $("#pic_prof_1").css('display', 'block');
        $("#pic_prof_2").css('display', 'none');

        $.cookie('profile_type', 'pic_prof_1');
        return false;
    });

    $("#r2").on('change', function() {
        $("#pic_prof_2").css('display', 'block');
        $("#pic_prof_1").css('display', 'none');

        $.cookie('profile_type', 'pic_prof_2');
        return false;
    });

    // Custumizz Style

    //radio layout	

    $("#s1").on('change', function() {
        $("#cb_slideshow").css("display", "none");
        $.cookie('bg_type', 'bg_color');
        return false;
    });
	
	$("#s2").on('change', function() {
        $("#cb_slideshow").css("display", "block");
        $.cookie('bg_type', 'bg_slider');
        return false;
    });

    // Style 

    $('#custumize-style').animate({
        left: '-270px'
    });

    $('#custumize-style h2 a').click(function(e) {
        e.preventDefault();
        var div = $('#custumize-style');
        console.log(div.css('left'));
        if (div.css('left') === '-270px') {
            $('#custumize-style').animate({
                left: '0px'
            });

            // open switcher and add class open
            $(this).addClass('open');
            $(this).removeClass('closed');

        } else {
            $('#custumize-style').animate({
                left: '-270px'
            });

            // close switcher and add closed
            $(this).addClass('closed');
            $(this).removeClass('open');

        }
    })

    $('.bg li a').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');
        var bg = $(this).css('backgroundImage');
        $('body').css('backgroundImage', bg);

        $.cookie('layout_bgImage', bg);
        $.cookie('layout_bgColors', null);

    })

    $('#bgsolid li a').click(function(e) {
        e.preventDefault();
        $(this).parent().parent().find('a').removeClass('active');
        $(this).addClass('active');
        var bg = $(this).css('backgroundColor');
        $('body').css('backgroundColor', bg).css('backgroundImage', 'none');

        $.cookie('layout_bgColors', bg);

    })

    $('#button-reset a').click(function(e) {
        var bg = '#717171';
        $('body').css('backgroundColor', '#717171').css('backgroundImage', 'none');
        $.cookie('layout_bgColors', bg);

    })

});