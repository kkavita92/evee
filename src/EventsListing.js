'use strict';

var EventsListing = function( worldWidth,worldHeight ) {
  this.world = new World( worldWidth, worldHeight );
  this.distanceCalculator = new DistanceCalculator();
  this.events = [];
};

EventsListing.prototype.addNewEvent = function( newEvent ) {
  this.events.push( newEvent );
};

EventsListing.prototype.findEventsDistanceFrom = function( coordinates ) {
  var events = this.events;
  for( var i = 0; i < events.length; i++ ) {
    events[i].distance = this.distanceCalculator.calculateDistance( coordinates, events[i].eventCoordinates );
  }
};

EventsListing.prototype.generateEvents = function() {
  var eventCount = 1;
  for ( var yCoordinate = 0; yCoordinate < this.world.height; yCoordinate++ ) {
    for ( var xCoordinate = 0; xCoordinate < this.world.width; xCoordinate++ ) {
      var randomBinary = this.getRandomBinary();
      if ( randomBinary === 1 ) {
        this.generateNewEvent( eventCount, xCoordinate, yCoordinate );
        eventCount++;
      }
    }
  }
  return this.world.grid;
};

EventsListing.prototype.generateNewEvent = function( eventID, xCoordinate, yCoordinate ) {
  var newEvent = new Event( eventID, xCoordinate, yCoordinate );
  this.world.grid[yCoordinate][xCoordinate] = newEvent;
  this.addNewEvent( newEvent );
};

EventsListing.prototype.getRandomBinary = function() {
  return Math.round( Math.random() );
};
