'use strict';

var Event = function(eventID) {
  this.eventID = eventID;
  this.DEFAULT_MAXIMUM_PRICE = 100;
  this.eventPrice = this.setTicketPrice(this.DEFAULT_MAXIMUM_PRICE);
  this.eventCapacity = this.setEventCapacity()
  this.tickets = [];
  this.generateTickets();
};

Event.prototype.generateTickets = function() {
  var numberOfTickets = this.eventCapacity;

  for( var i = 0; i < numberOfTickets ; i++ ) {
    this.tickets.push(new Ticket(this.eventPrice));
  };  
};

Event.prototype.setTicketPrice = function(maximumPrice) {
  return (Math.random() * (maximumPrice - 1) + 1).toFixed(2);
};

Event.prototype.setEventCapacity = function() {
  return Math.floor((Math.random() * 150) + 1);
};
