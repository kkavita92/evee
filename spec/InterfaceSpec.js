'use strict';

describe("Interface", function() {

  var app;

  beforeEach( function() {
    app = new Interface(20, 20);
  });

  it("can set user coordinates", function() {
    app.getUserCoordinates(3, 5);
    expect(app.userCoordinates).toEqual([3,5]);
  });

  it("can create an events listing", function() {
    app.createEventsListing();
    expect(app.eventsListing).toBeDefined();
  });

});
