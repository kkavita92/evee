$(document).ready(function() {
  var app = new Interface;

  $('#submitcoordinates').click(function() {
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val())
    $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
    return false;
 })


});
