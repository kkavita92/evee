$(document).ready(function() {
  var app = new Interface;

  $('#submitcoordinates').click(function() {
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val())
    $( '#enter-coordinates' ).hide(function() {
    $( '#enter-coordinates' ).remove();
    $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
    $('#content').append(`<p>${app.getClosestEvents()[0].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[1].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[2].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[3].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[4].eventID}</p>`);
    $('#content').append("<button>Reset</button>");
  });
 })

$('#content').on("click", "button", function(){
    location.reload()
});


});
