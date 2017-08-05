'use strict';

var Event = function(eventID) {
  this.eventID = eventID
  this.eventPrice = this.setTicketPrice(100)
  this.tickets = [];
  this.generateTickets();
};

Event.prototype.generateTickets = function () {
  for(var i = 0; i < 100; i++) {
    this.tickets.push(new Ticket(this.eventPrice));
  };
};

Event.prototype.setTicketPrice = function(maximumPrice) {
  return (Math.random() * (maximumPrice - 1) + 1).toFixed(2);
};
