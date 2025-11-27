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
$('.burger').click(
  function(){
    $(this).toggleClass('burger--open')
    $('.nav-bar__inner').toggleClass('nav-bar__inner--open')
    $('.toggle').toggleClass('toggle--open')
  }
)
$('.toggle').click(
  function(){
    $(this).toggleClass('toggle--open')
    $('.nav-bar__inner').toggleClass('nav-bar__inner--open')
    $('.burger').toggleClass('burger--open')
  }
)
$(document).scroll(
  function(){
    if($(this).scrollTop() > 0){
      $('.burger').css({
        'position':'fixed',
        'background': "#fff",
        'border': '1px solid rgb(8 30 110 / 13%)'
        
      })
      $('.top__scroll-vidget').css({
        'display':'flex'
      })
      
    }else{
      $('.burger').css({
        'border': '1px solid rgb(8 30 110 / 0%)',
        'position':'inherit',
        'background': "#FAFAFA"
        
      })
      $('.top__scroll-vidget').css({
        'display':'none'
      })

    }
   
  }

)
$('.top__scroll-vidget').click(
  function(){
    $('html, body').animate({scrollTop: 0}, 500)
  }
)


$('.taxanomy__items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  autoplay:true,
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
          arrows: false
	      }
	    }
    ]
});



