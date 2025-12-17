$(document).ready(function(){
  $('.project-card').hide().each(function(index){
    $(this).delay(200 * index).fadeIn(600);
  });
});
