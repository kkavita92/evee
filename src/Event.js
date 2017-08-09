'use strict';

var Event = function(eventID, x_coordinate, y_coordinate) {
  this.eventID = eventID;
  this.eventCoordinates = [x_coordinate, y_coordinate];
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

Event.prototype.getCheapestTicket = function() {
  var ticketsSortedByPrice = this.tickets.sort((a, b) => a.price - b.price);
  return ticketsSortedByPrice[0];
};
