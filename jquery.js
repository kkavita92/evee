$(document).ready(function() {
  var app = new Interface( 20, 20 );

  $('#submitcoordinates').click(function() {
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val());
    $( '#enter-coordinates' ).hide(function() {
      $( '#enter-coordinates' ).remove();
    });
    updateUserStatus();
    printEventSearch();
    addResetButton();
    addResultsDisplay();
  });

  $('#content').on("click", "button", function(){
    location.reload();
  });

  function updateUserStatus() {
    $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
    $('#user-status').append("<br>Your closest events are:</br>");
  }

  function printEventSearch() {
    console.log(app.closestEventsList());
    $('#content').append(`<p>${app.closestEventsList()[0]}</p>`);
    $('#content').append(`<p>${app.closestEventsList()[1]}</p>`);
    $('#content').append(`<p>${app.closestEventsList()[2]}</p>`);
    $('#content').append(`<p>${app.closestEventsList()[3]}</p>`);
    $('#content').append(`<p>${app.closestEventsList()[4]}</p>`);
    // for (var i = 0; i < 5; i++ ) {
    //   $('#content').append(`<p>${app.closestEventsList()[i]}</p>`);
    // }
  }

  function addResetButton() {
    $('#content').append("<button class='button'>Reset</button>");
  }

  function addResultsDisplay() {
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
  }

});
