'use strict';

describe("Ticket", function() {

  var ticket;

  beforeEach(function() {
    ticket = new Ticket();
  });

  it("has a price greater than 0", function() {
    expect(ticket.price).toBeGreaterThan(0);
  });

  it("has a price lesser than 100", function() {
    expect(ticket.price).toBeLessThan(100); //change to default max price
  });

});
