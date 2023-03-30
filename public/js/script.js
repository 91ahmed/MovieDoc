// Get movies by ajax
var movieApiURL = $('.api-movies-content').attr('data-movie');
$.get(movieApiURL, function(data) {
    $('.api-movies-content').html(data);
});

// Get tv shows by ajax
var tvApiURL = $('.api-tv-content').attr('data-tv');
$.get(tvApiURL, function(data) {
    $('.api-tv-content').html(data);
});

// Get movies years
$(function(){
    var dt = new Date();
    var current_year = dt.getFullYear();

    for(var year = current_year; year >= 1930; year--){
        $('.movie-year').append("<option value='"+year+"'>"+year+"</option>")
    }
});

function getYearFromDate (date) {
    var date = date;
    var arr1 = date.split('-');

    return arr1[0];
}
$(function(){
    $('.mvyear2').each(function(){
        var year = $(this).attr('data-year');
        year = getYearFromDate(year);
        $(this).prepend(year);
    });
});

// Get Cast and Crew
$(function(){
    var url = '/crew/'+$('.crew-content').attr('data-id')+'/'+$('.crew-content').attr('data-type');

    $.get(url, function(data) {
		$('.crew-content').html(data);
	});
});

// Get movie trailer
$('#movie_trailer_form').on('submit', function(e){
    e.preventDefault();

    var formAction = $(this).attr('action');
    var formMethod = $(this).attr('method');

    $.ajax({
        url: formAction,
        method: formMethod,
        contentType: "application/json; charset=utf-8",
        cache: false,
        processData: false,
        beforeSend: function ()
        {
            $('.trailer-modal').html('Wait Loading...');
        },
        success: function (result)
        {
            $('.trailer-modal').html(result);
        }
    });

    return false;
});

// Close trailer
$('#close-trailer').on('click', function(){
    $('.trailer-modal').html('');
});

// Get pages
$(function(){
    for(var page=1; page <= 200; page++){
        $('.movie-page').append("<option value='"+page+"'>"+page+"</option>")
    }
});

$(document).ready(function(){
    $('.ajax-movies').on('keyup change submit', function(e){
        e.preventDefault();
        
        var formAction = $(this).attr('action');
            //formAction = window.location.host+'/'+formAction;
        var formData   = $(this).serialize(); //new FormData($(this)[0]);
        var formMethod = $(this).attr('method');

        $.ajax({
            url: formAction,
            method: formMethod,
            data: formData,
            contentType: "application/json; charset=utf-8",
            cache: false,
            processData: false,
            beforeSend: function ()
            {
                $('.loader').fadeIn(100);
            },
            success: function (result)
            {
                $('.loader').fadeOut(100);
                $('.api-movies-content').html(result);
            }
        });

        return false;
    });
});

$(document).ready(function(){
    $('.ajax-tv').on('keyup change submit', function(e){
        e.preventDefault();
        
        var formAction = $(this).attr('action');
        //formAction = window.location.host+'/'+formAction;
        var formData   = $(this).serialize(); //new FormData($(this)[0]);
        var formMethod = $(this).attr('method');

        $.ajax({
            url: formAction,
            method: formMethod,
            data: formData,
            contentType: "application/json; charset=utf-8",
            cache: false,
            processData: false,
            beforeSend: function ()
            {
                $('.loader').fadeIn(100);
            },
            success: function (result)
            {
                $('.loader').fadeOut(100);
                $('.api-tv-content').html(result);
            }
        });

        return false;
    });
});


// Toggle menu
$(function(){
    $('.toggle-filters-mobile').on('click', function(){
        $('.menu-overlay').fadeIn(100);
    });
    $('.menu-overlay').on('click', function(){
        $(this).fadeOut(100);
        $('.filters').removeClass('active');
    });
    $('.toggle-filters-close').on('click', function(){
        $('.menu-overlay').fadeOut();
    });
});

// Retro Notify
$(function(){

    if (sessionStorage.getItem("note") === null)
    {
        new RetroNotify({
            contentHeader: 'Note',
            contentText: 'The data displayed on this site comes from different API sources, the website does not have compelte control over it, you may find inappropriate movies posters.',
            closeDelay: 100000,
            style: 'black',
            animate: 'slideTopRight'
        });
    }

    $('.retro-notify-close').on('click', function (){
        sessionStorage.setItem("note", "1");
    });
});