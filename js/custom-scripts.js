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