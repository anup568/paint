//twitter-slider
$('.banner-slider').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    autoplay:true,
    smartSpeed:800,
    navText: [ 
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>' ]
});

//Clients-slider
$('.work-slider').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    autoplay:true,
    smartSpeed:800,
    margin:40,
    merge:true,
    navText: [ 
    '<i class="fa-solid fa-angle-left"></i>',
    '<i class="fa-solid fa-angle-right"></i>' ],
    responsive: {
      0: {
        items: 1,
        margin:10,
      },
      400: {
        items: 2,
        margin:10,
      },
      1000: {
        items: 3,
      }
    }
});

//Clients-slider
$('.customer-slider').owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    items:1,
    autoplay:true,
    smartSpeed:800,
});

//Top_button
var btn = $('#top_button');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

//Hidden-menu
jQuery('.mob_open_menu').click( function(){
    jQuery('.hidden-menu').toggleClass('open_menu');
  });
  jQuery('.menu_open_close').click( function(){
    jQuery('.hidden-menu').removeClass('open_menu');
});

//Sticky-menu
window.onscroll = function() {myFunction()};
	var navbar = document.getElementById("sticky");
	var sticky = navbar.offsetTop;
	function myFunction() {
	  if (window.pageYOffset >= sticky) {
	    navbar.classList.add("sticky")
	  } else {
	    navbar.classList.remove("sticky");
	  }
	}