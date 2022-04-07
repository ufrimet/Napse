var contactModal = document.getElementById("contactModal");
var webinarModal = document.getElementById("myModal");

var btn = document.getElementById("mainButton");

var btnImg = document.getElementById("imgFixed");

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal
btn.onclick = function() {
  contactModal.style.display = "block";
}

btnImg.onclick = function() {
  webinarModal.style.display = "block";
}

span.onclick = function() {
  webinarModal.style.display = "none";
}

var spanContacto = document.getElementsByClassName("close-contacto")[0];
spanContacto.onclick = function() {
  contactModal.style.display = "none";
}


span2.onclick = function() {
  contactModal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("myModal");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target == webinarModal) {
    webinarModal.style.display = "none";
  }
}