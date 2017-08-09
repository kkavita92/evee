'use strict';

var EventsListing = function(area_width,area_height) {
  this.area = new World(area_width, area_height)
  this.events = [];
};

EventsListing.prototype.generateEvents = function() {
  var eventCount = 1;
  for ( var j = 0; j < this.area.height; j++ ) {
    for ( var k = 0; k < this.area.width; k++ ) {
      var randomBinary = this.populationRandomiser();
      if (randomBinary === 1 ) {
        var newEvent = new Event(eventCount, k, j);
        this.area.grid[j][k] = newEvent;
        this.addNewEvent(newEvent);
        eventCount++;
      };
    };
  };
  return this.grid;
};

EventsListing.prototype.populationRandomiser = function() {
  var random = Math.round(Math.random());
  return random;
};

EventsListing.prototype.addNewEvent = function(newEvent) {
  this.events.push(newEvent);
};
