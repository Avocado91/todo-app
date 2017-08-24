
//check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

//delete todos with fadeOut
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  })
  event.stopPropagation();
});

//add todos through input
$('input[type="text"]').keypress(function(event) {
  //capture input in NewTodo
  if (event.which === 13) {
    var newTodo = $(this).val();
    $(this).val('');
    $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + newTodo + '</li>')
  }

});
