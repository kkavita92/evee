'use strict';

var Ticket = function() {
  this.DEFAULT_MAXIMUM_PRICE = 100;
  this.price = this.allocateRandomPrice(this.DEFAULT_MAXIMUM_PRICE);
};

Ticket.prototype.allocateRandomPrice = function(maxPrice) {
  return (Math.random() * (maxPrice - 1) + 1).toFixed(2);
};
