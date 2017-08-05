'use strict';

var Ticket = function() {
  this.price = this.allocateRandomPrice(100);
};

Ticket.prototype.allocateRandomPrice = function(maxPrice) {
  return (Math.random() * (maxPrice - 1) + 1).toFixed(2);
};
