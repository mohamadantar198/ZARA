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

// slikkkkk2


$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:true
});

$('.other').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:true
});







// log inn


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

          // product imggg
  /*

  var ProductImg = document.getElementById("ProductImg");
  var SmallImg = document.getElementsByClassName("small-img");

        SmallImg[0].onclick = function()
        {
               ProductImg.src =SmallImg[0].src;
        }
        SmallImg[1].onclick = function()
        {
               ProductImg.src = SmallImg[1].src;
        }
        SmallImg[2].onclick = function()
        {
              ProductImg.src = SmallImg[2].src;
        }
       SmallImg[3].onclick = function()
        {
               ProductImg.src = SmallImg[3].src;
        }

*/

// filtar items 

$(document).ready(function(){
  $('.list').click(function(){
    var value = $(this).attr('data-filter');
	console.log(value);
    if (value == "All"){
	  $('.itemBox').hide('500');
      $('.itemBox').show('1000');
    }
    else{
     $(".itemBox:not('."+value+"')").hide('1000');
     $("."+value).show('1000');
    }
  })
  $('.list').click(function(){
    $(this).addClass('btn-success').siblings().removeClass('btn-success');
  })
})

// quntity upps and dowons 
$(document).ready(function(){
let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    // let $input = $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() >= 1 && $input.val() <= 9){
            $input.val(function(i, oldval){
                return ++oldval;
            });
        }
    });

       // click on qty down button
       $qty_down.click(function(e){
        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        if($input.val() > 1 && $input.val() <= 10){
            $input.val(function(i, oldval){
                return --oldval;
            });
        }
    });


});