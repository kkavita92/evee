'use strict';

var Interface = function() {
  this.userCoordinates = null;
  this.eventsListing = null;
  this.createEventsListing(20, 20);
};

Interface.prototype.createEventsListing = function( areaWidth, areaHeight ) {
  this.eventsListing = new EventsListing(areaWidth, areaHeight);
  this.eventsListing.generateEvents();
};

Interface.prototype.getUserCoordinates = function( xCoordinate, yCoordinate ) {
  this.userCoordinates = [xCoordinate, yCoordinate];
};

Interface.prototype.getClosestEvents = function() {
  var eventsSortedByDistance = this.sortEventsByDistance();
  return eventsSortedByDistance.slice(0, 5);
};

Interface.prototype.sortEventsByDistance = function() {
  this.eventsListing.findEventsDistanceFrom(this.userCoordinates);
  this.eventsListing.events.sort((a,b)=> a.distance-b.distance);
  return this.eventsListing.events;
};

Interface.prototype.closestEventsList = function() {
  var events = this.getClosestEvents();
  var formattedEvents = [];
  for ( var i = 0; i < events.length; i++ ) {
    var formattedEvent = this.formatEvent(events[i]);
    formattedEvents.push(formattedEvent);
  }

  return formattedEvents;
};

Interface.prototype.formatEvent = function( unformattedEvent ) {
  var eventID = unformattedEvent.eventID;
  var cheapestTicketPrice = unformattedEvent.getCheapestTicket().price;
  var distance = unformattedEvent.distance;
  return `Event ${eventID} - $${cheapestTicketPrice}, Distance ${distance}`;
};
