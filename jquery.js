$(document).ready(function() {

  var app = new Interface( 20, 20 );

  $('#submitcoordinates').click(function() {
    app.getUserCoordinates($("#xcoordinate").val(), $("#ycoordinate").val());
    hideLocationForm();
    hideAppInfo();
    showResults();
    return false;
  });

  function hideLocationForm() {
    $( '#enter-coordinates' ).hide(function() {
      $( '#enter-coordinates' ).remove();
    });
  }

  function hideAppInfo() {
    $( '#app-info' ).hide();
  }

  function showResults() {
    updateUserStatus();
    printEventList();
    addResetButton();
    addResultsDisplay();
  }

  function updateUserStatus() {
    $('#user-status').text(`Your coordinates are: ${app.userCoordinates}`)
    $('#user-status').append("<br>Your closest events are:</br>");
  }

  function printEventList() {
    for (var i = 0; i < 5; i++ ) {
      $('#content').append(`<p>${app.closestEventsList()[i]}</p>`);
    }
  }

  function addResetButton() {
    $('#content').append("<button class='button'>Reset</button>");
    $('#content').on("click", "button", function(){
      location.reload();
    });
  }

  function addResultsDisplay() {
    $('#content').css({
      "background-color" : "GhostWhite",
      "width": "90%",
      "border-radius": "25px",
      "display": "block",
      "margin-left": "auto",
      "margin-right": "auto",
      "padding-top": "5px",
      "padding-bottom": "10px"
    });
  }

  $("#dialog").dialog({
    autoOpen: false,
    modal: true
  });

  $("#app-info").click(function(e) {
    e.preventDefault();
    var targetUrl = $(this).attr("href");

    $("#dialog").dialog({
      title: "What's Evee?",
      buttons : {
        "OK" : function() {
           $(this).dialog("close");
        }
      }
    });

    $("#dialog").dialog("open");
  });

});
