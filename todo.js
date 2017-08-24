//check off specific todos by clicking
$('li').click(function() {
  $(this).toggleClass('completed');
});

//delete todos with fadeOut
$('span').click(function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
  event.stopPropagation();
});
