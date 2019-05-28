//Accordions
  //Flips chevron icon down when accordion is clicked on and active
  $('.SA-panel-collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    });

  //Adds the active class when an accordion is clicked on
  $('.SA-panel-heading a').click(function() {
    $('.SA-panel-heading').removeClass('active');
    if(!$(this).closest('.panel').find('.SA-panel-collapse').hasClass('in'))
        $(this).parents('.SA-panel-heading').addClass('active');
  });

//Carousel Slides 
jQuery(document).ready(function($) {
  //set here the speed to change the slides in the carousel or pause them
 $('#myCarousel').carousel({
         pause: true,
         interval: false
 });
  
//Loads the html to each slider. Write in the "div id="slide-content-x" what you want to show in each slide
 $('#carousel-text').html($('#slide-content-0').html());

 //Handles the carousel thumbnails
$('[id^=carousel-selector-]').click( function(){
     var id = this.id.substr(this.id.lastIndexOf("-") + 1);
     console.log('Change: ',id);
     var idNum = parseInt(id);
     $('#myCarousel').carousel(idNum);
     
 });

 
 // When the carousel slides, auto update the text
 $('#myCarousel').on('slid.bs.carousel', function (e) {
         var id = $('.item.active').data('slide-number');

          //update active thumbnail!!
         $('.SA-slider-thumb').removeClass('active');
         $('#carousel-selector-'+id).addClass('active');
         
         $('#carousel-text').html($('#slide-content-'+id).html());
         
         
        
                   
 });

});



$('.SA-slider-thumb').click(function(){
$('.SA-slider-thumb').removeClass('active');
$(this).addClass('active');
});




