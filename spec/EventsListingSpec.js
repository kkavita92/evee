'use strict';

describe("EventsListing", function() {

  var eventsListing;

  beforeEach( function() {
    eventsListing = new EventsListing();
  });

  it("initialises with empty aray of events", function() {
    expect(eventsListing.events).toEqual([]);
  });

  it("can add new event to events array", function() {
    eventsListing.addNewEvent('event');
    expect(eventsListing.events[0]).toEqual('event'); 
  });

  describe("getting random binary", function () {

    it("returns either 1 or 0", function() {
      expect(eventsListing.getRandomBinary()).toMatch(/[01]/);
    });

  });

});
