$(document).ready(function() {
  var app = new Interface;

  $('#submitcoordinates').click(function() {
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val())
    $( '#enter-coordinates' ).hide(function() {
    $( '#enter-coordinates' ).remove();
    $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
    for (var i = 0; i < 5; i++ ) {
      $('#content').append(`<p>${app.returnList()[i]}</p>`);
    };
    $('#content').append("<button>Reset</button>");
  });
 })

$('#content').on("click", "button", function(){
    location.reload()
});

});
