$(".js-tabs-link").aniTabs({
  animation:"slide", 
  slideDirection:"right" // or right
});

$(".nav-bar__navigation-item--has-submenu").hover(
  function(){
    $('.nav-bar__submenu').addClass('nav-bar__submenu--visible')
    
  },
  function(){
    $('.nav-bar__submenu').removeClass('nav-bar__submenu--visible')

  }
  )

$('.taxanomy__items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  // autoplay:true,
  prevArrow:'<button type = "button" class = "slick-prev">  </ button>',
  nextArrow:'<button type = "button" class = "slick-next">  </ button>',
  responsive: [
	    {
	      breakpoint: 850,
	      settings: {
	        slidesToShow: 2,
          centerMode: false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	      }
	    }
    ]
});



