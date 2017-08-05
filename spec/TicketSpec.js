'use strict';

describe("Ticket", function() {

  var ticket;
  var eventPrice = 100.00;

  beforeEach(function() {
    ticket = new Ticket(eventPrice);
  });

  it("has a price", function() {
    expect(ticket.price).toEqual(eventPrice);
  });



});
