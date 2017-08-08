'use strict';

var Event = function(eventID) {
  this.eventID = eventID;
  this.eventCapacity = this.setEventCapacity()
  this.tickets = [];
  this.generateTickets();
};

Event.prototype.generateTickets = function() {
  var numberOfTickets = this.eventCapacity;

  for( var i = 0; i < numberOfTickets ; i++ ) {
    this.tickets.push(new Ticket());
  };
};

Event.prototype.setEventCapacity = function() {
  return Math.floor((Math.random() * 150) + 1);
};
