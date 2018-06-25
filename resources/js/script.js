$("ul").on("click", "li", function() {
  $(this).toggleClass('completed');
})

$('ul').on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
})

$("input").keypress(function(event) {
  if(event.which === 13){
    $("ul").append("<li><span class=\"x\"><i class=\"fa fa-trash\"></i></span> " + $(this).val() + "</li>");
}
})
$(".icon-plus").click(function() {
  $("input[type='text']").fadeToggle();
})
