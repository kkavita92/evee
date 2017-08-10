'use strict';

var Interface = function() {
  this.userCoordinates = null;
  this.eventsListing = null;
  this.createEventsListing(5, 5);
};

Interface.prototype.createEventsListing = function(area_width, area_height) {
  this.eventsListing = new EventsListing(area_width, area_height);
  this.eventsListing.generateEvents();
};

Interface.prototype.getUserCoordinates = function(x_coordinate, y_coordinate) {
  this.userCoordinates = [x_coordinate, y_coordinate];
};

Interface.prototype.getClosestEvents = function() {
  var eventsSortedByDistance = this.sortEventsByDistance();
  return eventsSortedByDistance.slice(0, 5);
}

Interface.prototype.sortEventsByDistance = function() {
  this.eventsListing.findEventsDistanceFrom(this.userCoordinates);
  this.eventsListing.events.sort((a,b)=> a.distance-b.distance);
  return this.eventsListing.events;
};

Interface.prototype.returnList = function() {
  var events = this.getClosestEvents();
  var formattedEvents = [];
  for (var i = 0; i < events.length; i++ ) {
    var id = (events[i].eventID);
    var ticket = (events[i].getCheapestTicket().price);
    var distance = (events[i].distance);
    formattedEvents.push(`Event ${id} - $${ticket}, Distance ${distance}`);
  };

  return formattedEvents;
};
