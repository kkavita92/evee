'use strict';

var World = function(width, height) {
  this.width = width;
  this.height = height;
  this.grid = null
  this.eventsList = new EventsList();
};

World.prototype.createWorld = function() {
  var newWorld = new Array();
  for (var i = 0; i < this.height; i++ ) {
    newWorld[i] = new Array(this.width);
  }
  this.grid = newWorld;
};

World.prototype.populateWorld = function() {
  var eventCount = 1;
  for ( var j = 0; j < this.height; j++ ) {
    for ( var k = 0; k < this.width; k++ ) {
      var randomBinary = this.populationRandomiser();
      if (randomBinary === 1 ) {
        var newEvent = new Event(eventCount, k, j);
        this.grid[j][k] = newEvent;
        this.eventsList.addNewEvent(newEvent);
        eventCount++;
      };
    };
  };
  return this.grid;
};

World.prototype.populationRandomiser = function() {
  var random = Math.round(Math.random());
  return random;
};
