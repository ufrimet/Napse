contador = 0;
$( ".cards-events .card-event" ).each(function() {
  if ($(this).css('display') == 'block'){
    contador += 1;
  }
});
if (contador == 1){
    $( ".cards-events .card-event" ).css("flex-basis", "50%");
}