$(".to-slick").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots:true,
	arrows: true,
	infinite: true,
	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
	{
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
    function register() {
        LoginForm.style.transform ="translateX(0px)";
         RegForm.style.transform ="translateX(0px)";
        Indicator.style.transform ="translateX(100px)";
      
    }
     function login(){
        LoginForm.style.transform ="translateX(300px)";
        RegForm.style.transform ="translateX(300px)";
        Indicator.style.transform ="translateX(0px)";
     }



