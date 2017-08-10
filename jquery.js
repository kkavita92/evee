$(document).ready(function() {
  var app = new Interface;

  $('#submitcoordinates').click(function() {
    // e.preventDefault();
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val())
    $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
    $('#content').append(`<p>${app.getClosestEvents()[0].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[1].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[2].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[3].eventID}</p>`);
    $('#content').append(`<p>${app.getClosestEvents()[4].eventID}</p>`);
 })


});
