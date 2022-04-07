//var webinarModal2 = document.getElementById("webinarModal2");
var span = document.getElementsByClassName("close")[0];


// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == webinarModal2) {
        webinarModal2.style.display = "none";
    }
}*/

span.onclick = function() {
    webinarModal2.style.display = "none";
}

