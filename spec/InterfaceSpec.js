'use strict';

describe("Interface", function() {

  var app;

  beforeEach( function() {
    app = new Interface(20, 20);
    app.getUserCoordinates(3,5);
  });

  it("can set user coordinates", function() {
    expect(app.userCoordinates).toEqual([3,5]);
  });

  it("can create an events listing", function() {
    app.createEventsListing();
    expect(app.eventsListing).toBeDefined();
  });

  it("can sort events list by ascending proximity", function() {
    var sortedEvents = app.sortEventsByDistance();
    expect(sortedEvents[0].distance).not.toBeGreaterThan(sortedEvents[1].distance)
  });

  it("can return five closest events to user", function() {
    expect(app.closestEventsList().length).toEqual(5);
  });

});
