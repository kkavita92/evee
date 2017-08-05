'use strict';

describe("Event", function() {

  var event;
  var eventID = 1;

  beforeEach(function() {
    event = new Event(eventID); // Remove hardcoded eventID
  });

  it("has a numeric eventID", function () {
    expect(event.eventID).toEqual(1)
  });

  it("has more than zero tickets", function () {
    expect(event.numberOfTickets).toBeGreaterThan(0);
  });

});
