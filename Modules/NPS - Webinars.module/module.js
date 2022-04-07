$(document).ready(function(){  
  $(function () {
      $(".video-hidden").slice(0, 4).show();

      if ($('.video-hidden').length < 5){
        $("#loady").hide();
      }

      $("#loady").on('click', function (e) {
          e.preventDefault();
          $(".video-hidden:hidden").slice(0, 4).slideDown();
          if ($(".video-hidden:hidden").length == 0) {
              $("#load").fadeOut('slow');
          }
          $('html,body').animate({
              scrollTop: $(this).offset().top
          }, 1500);

          if ($('.video-' + $('.video-hidden').length).is(':visible')) {
            $("#loady").hide();
          }
      })
  })
  
  let id = ''

  // When the user clicks on the button, open the modal
  $(".thmbImgOk, .charlaOk").on('click', function (e) {
    id = this.id.split('-')[1]
    $("#videoModal-"+id).css('display', 'flex')
  })

  $(".close2").on('click', function (e) {
    let html = $("#videoModal-"+id+" .video-container").html()
    $("#videoModal-"+id).css('display', 'none')
    $("#videoModal-"+id+" .video-container").html('')
    $("#videoModal-"+id+" .video-container").html(html)
  })
  
})

var webinarModal = document.getElementById("webinarModal3");

var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal

span2.onclick = function() {
    webinarModal.style.display = "none";
}

var close1 = document.getElementsByClassName("close1")[0]

close1.onclick = function() {
  webinarModal.style.display = "none"
}

var span2 = document.getElementsByClassName("close")[3]

$(".thmbImg").on('click', function (e) {
  $("#webinarModal3").show();
})
