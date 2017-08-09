'use strict';

describe("Ticket", function() {

  var ticket;

  beforeEach(function() {
    ticket = new Ticket();
  });

  it("has a price greater than 0", function() {
    expect(ticket.price).toBeGreaterThan(0);
  });

  it("has a price lower than default maximum price", function() {
    expect(ticket.price).toBeLessThan(ticket.DEFAULT_MAXIMUM_PRICE);
  });

});
