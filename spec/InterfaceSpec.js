'use strict';

describe("Interface", function() {

  var user;

  beforeEach( function() {
    user = new Interface();
  });

  it("can set user coordinates", function() {
    user.getUserCoordinates(3, 5);
    expect(user.userCoordinates).toEqual([3,5]);
  }); //testing setter method!?

  it("can create an events listing", function() {
    user.createEventsListing();
    expect(user.eventsListing).toBeDefined();
  });

});
