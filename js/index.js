//check off specific todo (li)
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});
//click on X to delete
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(function() {
    $(this).remove();
  });
  event.stopPropagation();
});
//Adding a todo list
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var newTodoText = $(this).val();
    //create new li and add ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodoText +"</li>");
    $(this).val("");
  }
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
});