'use strict';

describe("Ticket", function() {

  var ticket;

  beforeEach(function() {
    ticket = new Ticket();
  });

  it("has a price greater than 0", function() {
    expect(ticket.price).toBeGreaterThan(0);
    console.log(ticket.price);
  });

  it("has a price lesser than 100", function() {
    expect(ticket.price).toBeLessThan(100);
    console.log(ticket.price);
  });


});
