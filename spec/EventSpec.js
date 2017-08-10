'use strict';

describe("Event", function() {

  var event;
  var eventID = 1;

  beforeEach( function() {
    event = new Event(eventID);
  });

  it("has a numeric eventID", function() {
    expect(event.eventID).toEqual(1)
  });

  it("can set event capacity to greater than zero", function() {
    expect(event.setEventCapacity()).toBeGreaterThan(0);
  });

  it("stores more than zero tickets", function() {
    expect(event.tickets.length).toBeGreaterThan(0);
  });

  it("stores number of tickets equal to event capacity", function() {
    expect(event.tickets.length).toEqual(event.eventCapacity);
  });

  it("returns the lowest priced ticket", function() {
    expect(event.getCheapestTicket().price).toBeGreaterThan(0);
    expect(event.getCheapestTicket().price).toBeLessThan(100);
  });

});
