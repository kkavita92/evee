'use strict';

var EventsList = function() {
  this.events = [];
};

EventsList.prototype.addNewEvent = function(newEvent) {
  this.events.push(newEvent);
};

EventsList.prototype.returnEventsList = function() {
  return this.events;
};
