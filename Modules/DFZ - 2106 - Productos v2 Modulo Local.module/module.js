contador = 0;
$( ".folders-container .folder" ).each(function() {
  contador += 1;
});
if (window.matchMedia("(min-width: 1024px)").matches) {
  if (contador == 1){
    $( ".folders-container .folder" ).css("width", "600px");
    $( ".folders-container .folder .side-text" ).css("width", "90%");
    $( ".folders-container" ).css("padding", "0px 0 20px 0");
  }
}