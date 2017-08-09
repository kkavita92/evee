'use strict';

describe("Event", function() {

  var event;
  var eventID = 1;

  beforeEach( function() {
    event = new Event(eventID); // Remove hardcoded eventID
  });

  it("has a numeric eventID", function() {
    expect(event.eventID).toEqual(1)
  });

  it("stores more than zero tickets", function() {
    expect(event.tickets.length).toBeGreaterThan(0);
  });

  it("stores number of tickets equal to event capacity", function() {
    expect(event.tickets.length).toEqual(event.eventCapacity);
  });

});
