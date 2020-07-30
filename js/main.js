$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      pagination:false,
      itemsDesktop : [1199,6],
      itemsDesktopSmall : [979,3]
 
  });
 
});

$(document).ready(function() {
 
  $("#owl-demo1").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 3,

      pagination:true,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

 
  });
 
});



mybutton = document.getElementById("myBtn2");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




  
  var preloader = document.getElementById("loader");
  function loadfunction(){
    preloader.style.display = "none";}







$(document).ready(function(){

$('.about_col1').waypoint(function(direction){

    $('.about_col1').addClass(' animated fadeInLeft')
    
    
   },{
    offset:'50%'
  })

$('.sec3_col1').waypoint(function(direction){

    $('.sec3_col1').addClass(' animated slideInDown')
    $('.sec3_col2').addClass(' animated slideInDown')
    $('.sec3_col3').addClass(' animated slideInDown')


    
    
   },{
    offset:'50%'
  })





$('.pic1').waypoint(function(direction){

    $('.pic1').addClass(' animated slideInDown')
    },{
    offset:'50%'
  })


});