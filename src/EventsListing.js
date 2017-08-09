'use strict';

var EventsListing = function(area_width,area_height) {
  this.area = new World(area_width, area_height);
  this.distanceCalculator = new DistanceCalculator();
  this.events = [];
};

EventsListing.prototype.addNewEvent = function(newEvent) {
  this.events.push(newEvent);
};

EventsListing.prototype.findEventsDistanceFrom = function(coordinates) {
  var events = this.events;
  for(var i = 0; i < events.length; i++) {
    events[i].distance = this.distanceCalculator.calculateDistance(coordinates, events[i].eventCoordinates);
  };
};

EventsListing.prototype.generateEvents = function() {
  var eventCount = 1;
  for ( var j = 0; j < this.area.height; j++ ) {
    for ( var k = 0; k < this.area.width; k++ ) {
      var randomBinary = this.getRandomBinary();
      if (randomBinary === 1 ) {
        this.generateNewEvent(eventCount, k, j)
        eventCount++;
      };
    };
  };
  return this.grid;
};

EventsListing.prototype.generateNewEvent = function(eventID, x_coordinate, y_coordinate) {
  var newEvent = new Event(eventID, x_coordinate, y_coordinate);
  this.area.grid[x_coordinate][y_coordinate] = newEvent;
  this.addNewEvent(newEvent);
};

EventsListing.prototype.getRandomBinary = function() {
  return Math.round(Math.random());
};
