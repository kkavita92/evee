'use strict';

var Interface = function() {
  this.userCoordinates = null;
  this.world = null;
  this.distanceCalculator = new DistanceCalculator();
  this.initialiseWorld(5, 5);
};

Interface.prototype.initialiseWorld = function(world_width, world_height) {
  this.world = new World(world_width, world_height);
  this.world.createWorld();
  this.world.populateWorld();
};

Interface.prototype.getUserCoordinates = function(x_coordinate, y_coordinate) {
  this.userCoordinates = [x_coordinate, y_coordinate];
};

Interface.prototype.getClosestEvents = function() {
  var events = this.world.eventsList.returnEventsList();
  for (var i = 0; i < events.length; i++) {
    events[i].distance = this.distanceCalculator.calculateDistance(this.userCoordinates, events[i].eventCoordinates);
  };

  events.sort((a,b)=> a.distance-b.distance);
  return events;
};

Interface.prototype.returnList = function() {
  var events = this.getClosestEvents();
  for (var i = 0; i < events.length; i++ ) {
    var id = (events[i].eventID);
    var ticket = (events[i].getCheapestTicket().price);
    var distance = (events[i].distance);
    console.log(`Event ${id} - $${ticket}, Distance ${distance}`);
  };
};
