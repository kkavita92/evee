$(document).ready(function() {
  var app = new Interface;

  $('#submitcoordinates').click(function() {
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val())
    $( '#enter-coordinates' ).hide(function() {
      $( '#enter-coordinates' ).remove();
      $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
      $('#user-status').append("<br>Your closest events are:</br>")
      for (var i = 0; i < 5; i++ ) {
        $('#content').append(`<p>${app.returnList()[i]}</p>`);
      };
      $('#content').append("<button class='button'>Reset</button>");
      $('#content').css({
        "background-color" : "FloralWhite",
        "width": "90%",
        "border-radius": "25px",
        "display": "block",
        "margin-left": "auto",
        "margin-right": "auto",
        "padding-top": "5px",
        "padding-bottom": "10px"    
      });
    });
  })

  $('#content').on("click", "button", function(){
    location.reload()
  });

});
