$(".filtros-etiquetas ul li a").click(function(){
  $(".filtros-etiquetas ul li a").css("font-weight", "400");
  $(this).css("font-weight", "700");
  $(this).css("letter-spacing", "1.7px");
  var value = $(this).text().toLowerCase();
  $(".posteos").filter(function() {
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  });
});